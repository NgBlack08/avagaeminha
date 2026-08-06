#!/usr/bin/env node
/*
 * versionar.js — cache-busting automático por hash de conteúdo.
 *
 * Antes, cada release exigia trocar ~66 ocorrências de "?v=7.18" para
 * "?v=7.19" na mão. Dois problemas apareciam:
 *
 *   1. Esquecimento silencioso — o manifest.json ficou preso em 7.17
 *      enquanto o index.html já estava em 7.19.
 *   2. Invalidação total — como todos os arquivos compartilhavam o mesmo
 *      "?v=", corrigir uma linha do CSS obrigava cada usuário a rebaixar
 *      os ~478 KB (gzip) do banco de questões de novo.
 *
 * Agora cada arquivo recebe "?v=<hash do próprio conteúdo>": só muda a URL
 * de quem realmente mudou. A versão da aplicação (APP_VERSION + version.json)
 * continua existindo, mas serve apenas ao check de recarregamento em
 * index.html — não é mais o cache-buster.
 *
 * Uso:
 *   node scripts/versionar.js            # incrementa a versão (7.19 -> 7.20)
 *   node scripts/versionar.js 8.0        # define a versão explicitamente
 *   node scripts/versionar.js --dry      # mostra o que mudaria, sem gravar
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const RAIZ = path.resolve(__dirname, "..");
const ARQ_INDEX = path.join(RAIZ, "index.html");
const ARQ_MANIFEST = path.join(RAIZ, "manifest.json");
const ARQ_VERSAO = path.join(RAIZ, "version.json");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry");
const versaoExplicita = args.find(a => /^\d+\.\d+$/.test(a));

/* ---------- versão da aplicação ---------- */

function proximaVersao(atual) {
  const [maior, menor] = atual.split(".").map(Number);
  return `${maior}.${menor + 1}`;
}

const versaoAtual = JSON.parse(fs.readFileSync(ARQ_VERSAO, "utf8")).v;
const versaoNova = versaoExplicita || proximaVersao(versaoAtual);

/* ---------- validar o banco ---------- */
/* Antes de tudo: um banco com gabarito inválido ou campo faltando não pode
   chegar a js/gerado/, muito menos ao ar. Os avisos estatísticos ficam para
   `node scripts/validar.js`, que mostra o relatório completo. */

const { validar } = require("./validar.js");
const { erros, avisos, metricas } = validar({ quieto: true });

if (erros.length) {
  console.error(`Banco inválido — ${erros.length} erro(s). Nada foi gerado nem publicado:\n`);
  for (const e of erros.slice(0, 15)) console.error(`  x ${e}`);
  if (erros.length > 15) console.error(`  ... e mais ${erros.length - 15}.`);
  console.error("\nRode `node scripts/validar.js` para o relatório completo.");
  process.exit(1);
}
console.log(`Banco validado: ${metricas.questoes} questões, nenhum erro` +
  (avisos.length ? `, ${avisos.length} aviso(s) — veja \`node scripts/validar.js\`.` : "."));

/* ---------- testes do motor ---------- */
/* O validar.js cuida do CONTEÚDO; estes testes cuidam do CÓDIGO que lê
   esse conteúdo — fila de escrita, carga do estado, SRS, peso do edital.
   Rodam aqui, e não só sob demanda, porque suíte que depende de alguém
   lembrar de rodar apodrece: os defeitos que ela cobre (resposta perdida
   por falha de rede, tela branca por estado corrompido) já passaram por
   várias revisões manuais sem serem vistos.

   Custa menos de um segundo. `--sem-testes` existe como saída de
   emergência, não como atalho de rotina. */

if (!args.includes("--sem-testes")) {
  const { execFileSync } = require("child_process");
  const dirTestes = path.join(__dirname, "testes");
  const arquivos = fs.readdirSync(dirTestes)
    .filter(f => f.endsWith(".test.js"))
    .map(f => path.join(dirTestes, f));

  try {
    execFileSync(process.execPath, ["--test", ...arquivos], { cwd: RAIZ, stdio: "pipe" });
    console.log(`Testes do motor: ${arquivos.length} arquivo(s), todos passaram.`);
  } catch (e) {
    const saida = (e.stdout || Buffer.alloc(0)).toString();
    console.error("\nTestes do motor FALHARAM. Nada foi gerado nem publicado.\n");
    console.error(saida.split("\n").filter(l => /^(not ok|✖|\s+at |\s+Assertion|\s+actual|\s+expected)/.test(l)).slice(0, 25).join("\n"));
    console.error("\nRelatório completo: `node --test scripts/testes/*.test.js`");
    process.exit(1);
  }
}

/* ---------- regenerar o banco dividido ---------- */
/* Roda antes de qualquer hash: dados-base.js é referenciado pelo
   index.html, então precisa estar em sua forma final. Editar um lote e
   esquecer de regenerar publicaria o banco antigo. */

const { dividirDados } = require("./dividir-dados.js");
dividirDados({ silencioso: dryRun });
console.log("");

/* ---------- hash por arquivo ---------- */

const cacheHash = new Map();
const naoEncontrados = [];

function hashDe(caminhoRelativo) {
  if (cacheHash.has(caminhoRelativo)) return cacheHash.get(caminhoRelativo);
  const absoluto = path.join(RAIZ, caminhoRelativo);
  let hash = null;
  try {
    hash = crypto.createHash("sha1")
      .update(fs.readFileSync(absoluto))
      .digest("hex")
      .slice(0, 8);
  } catch {
    naoEncontrados.push(caminhoRelativo);
  }
  cacheHash.set(caminhoRelativo, hash);
  return hash;
}

/* Só versionamos referências a arquivos locais do próprio repositório.
   URLs externas (CDN, Google Fonts) e data: URIs passam intactas. */
function ehLocal(url) {
  return !/^(https?:)?\/\//.test(url) && !url.startsWith("data:") && !url.startsWith("#");
}

/* As fontes ficam de fora: o nome do arquivo já é a versão (trocar a fonte
   significa outro arquivo), e elas são referenciadas em DOIS lugares — o
   `@font-face` do CSS e o `<link rel=preload>` do index.html. Só o segundo
   passa por aqui; hashear um e não o outro faria o navegador baixar a fonte
   duas vezes e desperdiçar o preload. */
function ehFonte(url) {
  return /^fonts\//.test(url);
}

/* Troca "arquivo.ext" ou "arquivo.ext?v=qualquer" por "arquivo.ext?v=<hash>". */
function versionarUrl(url) {
  const semQuery = url.split("?")[0];
  if (!ehLocal(semQuery) || ehFonte(semQuery)) return url;
  const hash = hashDe(semQuery);
  if (!hash) return url;
  return `${semQuery}?v=${hash}`;
}

/* ---------- manifest.json ---------- */
/* Precisa vir ANTES do index.html: o index referencia "manifest.json?v=",
   e esse hash só está correto se o manifest já estiver na versão final.
   Editado como texto, e não via JSON.parse/stringify, para preservar a
   formatação e os acentos do arquivo escrito à mão. */

const manifestOriginal = fs.readFileSync(ARQ_MANIFEST, "utf8");

const manifest = manifestOriginal.replace(
  /("src":\s*")([^"]+)(")/g,
  (bruto, antes, url, depois) => `${antes}${versionarUrl(url)}${depois}`
);

const manifestMudou = manifest !== manifestOriginal;

if (manifestMudou) {
  if (!dryRun) fs.writeFileSync(ARQ_MANIFEST, manifest);
  /* Em --dry o manifest não chega ao disco; alimentamos o cache com o
     conteúdo já calculado para que o hash usado no index.html seja o
     mesmo nas duas execuções. */
  cacheHash.set(
    "manifest.json",
    crypto.createHash("sha1").update(manifest).digest("hex").slice(0, 8)
  );
}

/* ---------- index.html ---------- */

let index = fs.readFileSync(ARQ_INDEX, "utf8");

index = index.replace(
  /\b(src|href)="([^"]+)"/g,
  (bruto, attr, url) => `${attr}="${versionarUrl(url)}"`
);

index = index.replace(
  /(var APP_VERSION = ")[^"]*(";)/,
  `$1${versaoNova}$2`
);

/* ---------- service worker ---------- */
/* O nome do cache carrega a versão: trocá-lo é o que descarta em bloco os
   arquivos da release anterior. Esquecer esta linha faria o worker novo
   continuar servindo o cache velho — exatamente o risco que levou a versão
   original do sw.js a não guardar nada. */

const ARQ_SW = path.join(RAIZ, "sw.js");
const swOriginal = fs.readFileSync(ARQ_SW, "utf8");
const sw = swOriginal.replace(/(const VERSAO = ")[^"]*(";)/, `$1${versaoNova}$2`);
if (sw === swOriginal && !swOriginal.includes(`const VERSAO = "${versaoNova}"`)) {
  console.error("! sw.js: não encontrei `const VERSAO = \"...\"` para atualizar.\n");
}

/* ---------- gravação ---------- */

/* O manifest já foi gravado acima (precisava existir em sua forma final
   antes de o index.html referenciá-lo por hash), então só entra na lista
   para efeito de relatório. */
const pendentes = [
  [ARQ_INDEX, index],
  [ARQ_SW, sw],
  [ARQ_VERSAO, JSON.stringify({ v: versaoNova }) + "\n"],
].filter(([arquivo, conteudo]) => fs.readFileSync(arquivo, "utf8") !== conteudo);

const mudou = manifestMudou ? [[ARQ_MANIFEST, null], ...pendentes] : pendentes;

if (naoEncontrados.length) {
  console.error("Referências para arquivos inexistentes (mantidas como estavam):");
  for (const f of [...new Set(naoEncontrados)]) console.error(`  ! ${f}`);
  console.error("");
}

console.log(`Versão da aplicação: ${versaoAtual} -> ${versaoNova}`);
console.log(`Assets versionados por hash: ${[...cacheHash.values()].filter(Boolean).length}`);

if (!mudou.length) {
  console.log("Nada a gravar — arquivos já estavam atualizados.");
  process.exit(0);
}

if (dryRun) {
  console.log("\n--dry: nenhum arquivo gravado. Seriam atualizados:");
  for (const [arquivo] of mudou) console.log(`  ~ ${path.relative(RAIZ, arquivo)}`);
  process.exit(0);
}

for (const [arquivo, conteudo] of mudou) {
  if (conteudo !== null) fs.writeFileSync(arquivo, conteudo);
  console.log(`  ~ ${path.relative(RAIZ, arquivo)}`);
}
