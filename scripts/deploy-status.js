#!/usr/bin/env node
/*
 * deploy-status.js — acompanha o build do GitHub Pages e confere o que ficou no ar.
 *
 * POR QUE ESTE ARQUIVO EXISTE.
 *
 * O acompanhamento de deploy vinha sendo remontado à mão a cada push, como
 * um laço de `curl` jogado no shell. Duas vezes isso deu errado, das duas
 * maneiras possíveis:
 *
 *   1. RUIDOSO. Resposta com corpo vazio (acontece, é transitório) fazia o
 *      JSON.parse estourar e despejar um stack trace de Node no meio do
 *      relatório. Três vezes seguidas, num acompanhamento só.
 *
 *   2. SILENCIOSO, que é pior. A API do GitHub sem autenticação dá 60
 *      chamadas por hora por IP. Ao estourar a cota ela responde 403 com
 *      um JSON de erro — que o parse aceita numa boa. `workflow_runs` vem
 *      undefined, o `|| []` transforma em lista vazia, e o laço reporta
 *      "ainda não apareceu" quarenta vezes seguidas sem nunca dizer que
 *      bateu no teto. O deploy podia estar quebrado que ninguém saberia.
 *
 * E houve o erro de leitura que motivou tudo: um deploy falhou com 503 e a
 * conclusão foi "está tudo bem, é só propagação", porque o site respondia —
 * servindo o commit ANTERIOR. Site no ar não prova build novo. Por isso
 * aqui são duas perguntas separadas, e as duas precisam passar:
 *
 *   a) o run do Actions para ESTE commit terminou com success?
 *   b) o version.json que o Pages serve é o mesmo do repositório?
 *
 * Uso:
 *   node scripts/deploy-status.js              # acompanha o HEAD até concluir
 *   node scripts/deploy-status.js --agora      # só o estado atual, sem esperar
 *   node scripts/deploy-status.js <sha>        # acompanha outro commit
 *
 * Saída: 0 se o build passou E a versão no ar bate. Diferente de 0 em
 * qualquer outro caso, inclusive cota esgotada — para não passar por sucesso.
 */

const https = require("https");
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");

/* Intervalo de 20s: o build do Pages leva de 1 a 3 minutos, então isso dá
   de 3 a 9 chamadas por acompanhamento. Com teto de 24 o pior caso são 8
   minutos e 24 chamadas — dentro do orçamento de 60/h mesmo com dois
   pushes na mesma hora. O laço antigo pedia até 40 sozinho. */
const INTERVALO_MS = 20_000;
const MAX_TENTATIVAS = 24;
/* Duas chamadas guardadas para a conferência final: sem essa reserva o
   acompanhamento consome a cota e morre justamente na hora de conferir. */
const RESERVA_COTA = 2;

const cor = (c, t) => (process.stdout.isTTY ? `\x1b[${c}m${t}\x1b[0m` : t);
const ok = t => cor(32, t);
const ruim = t => cor(31, t);
const fraco = t => cor(90, t);

function sh(cmd, args) {
  return execFileSync(cmd, args, { cwd: RAIZ, encoding: "utf8" }).trim();
}

/* GET que devolve o corpo E o contexto para julgar a resposta. Nada aqui
   faz parse: quem chama decide o que é aceitável, porque corpo vazio com
   200 e corpo cheio com 403 são problemas diferentes. */
function pegar(url, { aceitaTexto = false } = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        "User-Agent": "questlab-deploy-status",
        "Accept": aceitaTexto ? "*/*" : "application/vnd.github+json",
      },
      timeout: 25_000,
    }, res => {
      let corpo = "";
      res.setEncoding("utf8");
      res.on("data", c => (corpo += c));
      res.on("end", () => resolve({
        status: res.statusCode,
        corpo,
        cota: {
          restante: Number(res.headers["x-ratelimit-remaining"]),
          limite: Number(res.headers["x-ratelimit-limit"]),
          reset: Number(res.headers["x-ratelimit-reset"]),
        },
      }));
    });
    req.on("timeout", () => req.destroy(new Error("sem resposta em 25s")));
    req.on("error", reject);
  });
}

class CotaEsgotada extends Error {}

/* Separa os cinco jeitos de uma resposta não servir, que antes viravam
   todos a mesma coisa — ou stack trace, ou silêncio. Função pura de
   propósito: é exatamente o julgamento que precisa de teste, e testá-lo
   pela rede exigiria estourar a cota de verdade para ver o caso 403.
   Coberta por scripts/testes/deploy-status.test.js. */
function julgarRuns(r, agora = Date.now()) {
  if (r.status === 403 && r.cota && r.cota.restante === 0) {
    const min = Math.max(0, Math.round((r.cota.reset * 1000 - agora) / 60_000));
    throw new CotaEsgotada(
      `cota da API esgotada (${r.cota.limite}/h por IP, sem autenticação). ` +
      `Reseta em ~${min} min. Não dá para afirmar nada sobre o deploy até lá.`);
  }
  if (r.status !== 200) return { erro: `HTTP ${r.status}` };
  if (!r.corpo.trim()) return { erro: "corpo vazio (transitório)" };

  let json;
  try { json = JSON.parse(r.corpo); } catch { return { erro: "JSON ilegível" }; }
  /* 200 com JSON válido e sem workflow_runs não é sucesso: é a forma que
     a resposta de erro da API tem. Deixar passar era o bug silencioso. */
  if (!Array.isArray(json.workflow_runs)) {
    return { erro: `resposta sem workflow_runs${json.message ? ` — ${json.message}` : ""}` };
  }
  return { runs: json.workflow_runs };
}

/* Consulta os runs e devolve o do commit pedido, ou null se ainda não
   apareceu (o run demora alguns segundos para ser criado após o push). */
async function runDoCommit(repo, sha) {
  let r;
  try {
    r = await pegar(`https://api.github.com/repos/${repo}/actions/runs?per_page=10`);
  } catch (e) {
    return { erro: `rede: ${e.message}` };
  }

  const julgado = julgarRuns(r);
  if (julgado.erro) return { erro: julgado.erro };

  return { cota: r.cota, run: julgado.runs.find(x => x.head_sha.startsWith(sha)) || null };
}

/* A segunda pergunta, independente da primeira: o que o Pages entrega
   agora é o que este repositório tem? Cache-buster para não conferir uma
   cópia guardada pelo caminho. */
async function versaoNoAr(baseUrl) {
  const local = JSON.parse(fs.readFileSync(path.join(RAIZ, "version.json"), "utf8")).v;
  let r;
  try {
    r = await pegar(`${baseUrl}/version.json?cb=${Date.now()}`, { aceitaTexto: true });
  } catch (e) {
    return { local, erro: `rede: ${e.message}` };
  }
  if (r.status !== 200) return { local, erro: `HTTP ${r.status}` };
  try {
    return { local, servida: JSON.parse(r.corpo).v };
  } catch {
    return { local, erro: `resposta não é JSON: ${JSON.stringify(r.corpo.slice(0, 80))}` };
  }
}

/* origin -> "dono/repo" e a URL do Pages. Derivar em vez de fixar: o
   script serve a qualquer clone, e um repositório renomeado não deixa
   uma constante mentindo aqui dentro. */
function coordenadas() {
  const url = sh("git", ["remote", "get-url", "origin"]);
  const m = /github\.com[:/]([^/]+)\/(.+?)(?:\.git)?$/.exec(url);
  if (!m) throw new Error(`remote "origin" não parece do GitHub: ${url}`);
  const [, dono, repo] = m;
  return { repo: `${dono}/${repo}`, pages: `https://${dono.toLowerCase()}.github.io/${repo}` };
}

const espera = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const args = process.argv.slice(2);
  const soAgora = args.includes("--agora");
  const shaArg = args.find(a => !a.startsWith("--"));

  const { repo, pages } = coordenadas();
  const sha = (shaArg || sh("git", ["rev-parse", "HEAD"])).slice(0, 7);

  console.log(`Repositório: ${repo}`);
  console.log(`Commit:      ${sha}`);
  console.log(`Pages:       ${pages}\n`);

  const local = sh("git", ["rev-parse", "HEAD"]).slice(0, 7);
  if (!shaArg && sh("git", ["status", "--porcelain"])) {
    console.log(fraco("aviso: há alterações não commitadas — o que está no ar não reflete o diretório.\n"));
  }
  if (!shaArg) {
    const naFrente = sh("git", ["rev-list", "--count", "@{u}..HEAD"].map(String));
    if (naFrente !== "0") {
      console.log(ruim(`${naFrente} commit(s) sem push — o build de ${local} não existe no GitHub.\n`));
      process.exit(2);
    }
  }

  let run = null;
  let cota = null;

  for (let i = 1; i <= (soAgora ? 1 : MAX_TENTATIVAS); i++) {
    if (cota && Number.isFinite(cota.restante) && cota.restante <= RESERVA_COTA) {
      console.log(ruim(`\nParando: sobraram ${cota.restante} chamadas na cota da hora, e a conferência final precisa delas.`));
      process.exit(3);
    }

    const r = await runDoCommit(repo, sha);
    if (r.cota) cota = r.cota;

    if (r.erro) {
      /* Falha de rede não encerra o acompanhamento: foi exatamente o
         transitório das três primeiras chamadas daquele push. Mas fica
         visível, em vez de virar stack trace ou silêncio. */
      console.log(fraco(`  ${i}/${MAX_TENTATIVAS}  sem leitura (${r.erro}), tentando de novo`));
    } else if (!r.run) {
      console.log(fraco(`  ${i}/${MAX_TENTATIVAS}  run ainda não criado para ${sha}`));
    } else {
      run = r.run;
      const linha = `  ${i}/${MAX_TENTATIVAS}  ${run.name}: ${run.status}${run.conclusion ? "/" + run.conclusion : ""}`;
      console.log(run.status === "completed" ? linha : fraco(linha));
      if (run.status === "completed") break;
    }

    if (soAgora || i === MAX_TENTATIVAS) break;
    await espera(INTERVALO_MS);
  }

  if (cota && Number.isFinite(cota.restante)) {
    console.log(fraco(`\ncota da API: ${cota.restante}/${cota.limite} restantes nesta hora`));
  }

  if (!run) {
    console.log(ruim(`\nNenhum run encontrado para ${sha}${soAgora ? "" : " dentro do tempo de espera"}.`));
    process.exit(4);
  }
  if (run.status !== "completed") {
    console.log(fraco(`\nBuild ainda em ${run.status}. Rode de novo daqui a pouco: node scripts/deploy-status.js`));
    process.exit(5);
  }
  if (run.conclusion !== "success") {
    console.log(ruim(`\nBuild FALHOU (${run.conclusion}).`));
    console.log(`Detalhes: ${run.html_url}`);
    process.exit(1);
  }

  console.log(ok(`\nBuild do Pages: success para ${sha}.`));

  /* A conferência de versão lê o version.json do diretório de trabalho, que
     é o do HEAD. Confrontá-lo com o site enquanto se acompanha OUTRO commit
     compararia duas coisas diferentes e diria "confere" sem base — que é a
     forma exata do erro do 503 que este script existe para não repetir. */
  if (sha !== local) {
    console.log(fraco(`Conferência de versão pulada: ${sha} não é o HEAD (${local}), e o version.json local é o do HEAD.`));
    return;
  }

  /* Build verde não basta — foi a lição do 503. */
  const v = await versaoNoAr(pages);
  if (v.erro) {
    console.log(ruim(`Não consegui ler o version.json no ar: ${v.erro}`));
    process.exit(6);
  }
  if (v.servida !== v.local) {
    console.log(ruim(`Versão divergente: o site serve ${v.servida} e o repositório tem ${v.local}.`));
    console.log(fraco("Build passou mas o conteúdo servido é outro — pode ser cache de borda ainda propagando."));
    process.exit(7);
  }

  console.log(ok(`Versão no ar: ${v.servida}, igual à do repositório.`));
}

/* Só corre como comando; sob require expõe o julgamento para o teste. */
if (require.main === module) {
  main().catch(e => {
    if (e instanceof CotaEsgotada) {
      console.error(ruim(`\n${e.message}`));
      process.exit(3);
    }
    console.error(ruim(`\nErro: ${e.message}`));
    process.exit(1);
  });
}

module.exports = { julgarRuns, CotaEsgotada };
