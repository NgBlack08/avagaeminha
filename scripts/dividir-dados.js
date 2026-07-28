#!/usr/bin/env node
/*
 * dividir-dados.js — separa o banco de questões em "leve" e "pesado".
 *
 * Problema: os 55 arquivos de js/data*.js somam 2,25 MB de JS que o
 * navegador parseia em TODA visita — inclusive com tudo em cache, porque
 * cache evita o download, não o parse. Eram ~535 ms até domInteractive
 * num desktop; num celular mediano, alguns segundos de tela vazia.
 *
 * Medindo o peso por campo (gzip), o quadro é:
 *
 *   cognitivo    186 KB (39%)  \  só aparecem DEPOIS que o usuário
 *   comentario   176 KB (37%)  /  responde a questão
 *   enunciado     67 KB (14%)     necessário para exibir
 *   metadados     42 KB  (9%)     filtros, estatísticas, SRS
 *
 * Ou seja: 77% do payload não é necessário para abrir o app. Este script
 * gera, a partir dos arquivos-fonte (que continuam sendo a única coisa
 * editada à mão):
 *
 *   js/gerado/dados-base.js       → globais + questões sem comentario/cognitivo
 *   js/gerado/detalhes-<disc>.js  → comentario/cognitivo, por disciplina
 *
 * O index.html passa a carregar só o dados-base.js. Os detalhes entram sob
 * demanda (ver carregarDetalhes() em js/engine.js).
 *
 * Rodado automaticamente por scripts/versionar.js.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const RAIZ = path.resolve(__dirname, "..");
const DIR_JS = path.join(RAIZ, "js");
const DIR_SAIDA = path.join(DIR_JS, "gerado");

/* Globais que o código da aplicação lê. Os demais identificadores dos
   arquivos-fonte (QUESTOES_PCAL_LOTE*, TXT_BLOCO*, TA_*) são temporários
   que já foram despejados dentro de QUESTOES — reemiti-los duplicaria o
   banco inteiro. */
const GLOBAIS_PUBLICAS = [
  "CONCURSOS",
  "CARGOS",
  "DNA_BANCA",
  "PALAVRAS_PERIGOSAS",
  "QUESTOES",
  "FREQUENCIA_TEMAS",
  "TIMELINE_DISCIPLINAS",
  "PREDICOES",
  "ESTRATEGIA_CATEGORIAS",
  "ESTRATEGIAS",
  "REGRA_CORRECAO",
  "FORA_EDITAL_PCAL2026",
];

/* Campos adiáveis: só são exibidos depois que o usuário responde. */
const CAMPOS_PESADOS = ["comentario", "cognitivo"];

function slug(texto) {
  return texto
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function hashDe(conteudo) {
  return crypto.createHash("sha1").update(conteudo).digest("hex").slice(0, 8);
}

function dividirDados({ silencioso = false } = {}) {
  const log = silencioso ? () => {} : console.log;

  /* ---------- 1. sincronizar o manifesto com o disco ---------- */

  /* A ordem de carga só tem uma restrição real: data.js precisa vir
     primeiro, porque é ele que declara QUESTOES/PREDICOES; todos os outros
     apenas dão push. Não há nenhuma dependência entre lotes (verificado:
     nenhum arquivo referencia identificador declarado em outro), então
     lotes novos podem simplesmente entrar no fim — o script os registra
     sozinho, em vez de exigir edição manual. */

  const ARQ_MANIFESTO = path.join(__dirname, "lotes.json");
  const manifestoSalvo = JSON.parse(fs.readFileSync(ARQ_MANIFESTO, "utf8"));

  const noDisco = fs.readdirSync(DIR_JS).filter(f => /^data.*\.js$/.test(f));
  const conhecidos = manifestoSalvo.arquivos.filter(f => noDisco.includes(f));
  const novos = noDisco.filter(f => !manifestoSalvo.arquivos.includes(f)).sort();

  const sumiram = manifestoSalvo.arquivos.filter(f => !noDisco.includes(f));
  if (sumiram.length) {
    log(`  aviso: removidos do manifesto (não existem mais em js/): ${sumiram.join(", ")}`);
  }

  const manifesto = [
    ...conhecidos.filter(f => f === "data.js"),
    ...conhecidos.filter(f => f !== "data.js"),
    ...novos,
  ];

  if (manifesto[0] !== "data.js") {
    throw new Error("js/data.js não encontrado — é ele que declara QUESTOES.");
  }
  if (novos.length) log(`  registrados automaticamente: ${novos.join(", ")}`);

  if (novos.length || sumiram.length) {
    const atualizado = { ...manifestoSalvo, arquivos: manifesto };
    if (!silencioso) fs.writeFileSync(ARQ_MANIFESTO, JSON.stringify(atualizado, null, 2) + "\n");
  }

  /* ---------- 2. avaliar os fontes ---------- */

  /* Concatenados num único script porque as globais são declaradas com
     `const`, que não vira propriedade do contexto do vm — só continua
     visível dentro do mesmo escopo de script. */
  const fonte =
    manifesto.map(f => fs.readFileSync(path.join(DIR_JS, f), "utf8")).join("\n;\n") +
    `\n;globalThis.__EXPORTS = { ${GLOBAIS_PUBLICAS.join(", ")} };`;

  const ctx = { console, globalThis: {} };
  vm.createContext(ctx);
  vm.runInContext(fonte, ctx, { filename: "fontes-concatenados.js" });

  const dados = ctx.globalThis.__EXPORTS;
  for (const nome of GLOBAIS_PUBLICAS) {
    if (dados[nome] === undefined) throw new Error(`Global ausente nos fontes: ${nome}`);
  }

  const questoes = dados.QUESTOES;
  log(`Fontes: ${manifesto.length} arquivos, ${questoes.length} questões.`);

  /* ---------- 3. separar leve x pesado ---------- */

  const leves = [];
  const porDisciplina = new Map();
  const semDetalhe = [];

  for (const q of questoes) {
    const leve = {};
    const pesado = {};
    for (const [k, v] of Object.entries(q)) {
      (CAMPOS_PESADOS.includes(k) ? pesado : leve)[k] = v;
    }
    leves.push(leve);

    if (!Object.keys(pesado).length) { semDetalhe.push(q.id); continue; }
    const s = slug(q.disciplina);
    if (!porDisciplina.has(s)) porDisciplina.set(s, {});
    porDisciplina.get(s)[q.id] = pesado;
  }

  if (semDetalhe.length) {
    log(`  aviso: ${semDetalhe.length} questão(ões) sem comentário/cognitivo ` +
        `(${semDetalhe.slice(0, 3).join(", ")}${semDetalhe.length > 3 ? "..." : ""})`);
  }

  /* ---------- 4. gravar os chunks de detalhe ---------- */

  fs.rmSync(DIR_SAIDA, { recursive: true, force: true });
  fs.mkdirSync(DIR_SAIDA, { recursive: true });

  const cabecalho =
    "/* GERADO por scripts/dividir-dados.js — não edite à mão.\n" +
    "   A fonte editável continua sendo js/data*.js. */\n";

  const chunks = {};
  for (const [s, mapa] of [...porDisciplina].sort()) {
    const corpo = `${cabecalho}registrarDetalhes(${JSON.stringify(mapa)});\n`;
    const arquivo = `detalhes-${s}.js`;
    fs.writeFileSync(path.join(DIR_SAIDA, arquivo), corpo);
    chunks[s] = `${arquivo}?v=${hashDe(corpo)}`;
  }

  /* ---------- 5. gravar a base ---------- */

  const partes = [cabecalho];
  for (const nome of GLOBAIS_PUBLICAS) {
    const valor = nome === "QUESTOES" ? leves : dados[nome];
    partes.push(`const ${nome} = ${JSON.stringify(valor)};`);
  }
  /* Mapa disciplina-slug -> arquivo de detalhe já com cache-busting por
     hash. Fica aqui (e não no index.html) porque quem resolve essas URLs
     é o carregador em tempo de execução, não o HTML. */
  partes.push(`const DETALHES_CHUNKS = ${JSON.stringify(chunks)};`);

  const base = partes.join("\n") + "\n";
  fs.writeFileSync(path.join(DIR_SAIDA, "dados-base.js"), base);

  /* ---------- 6. relatório ---------- */

  const zlib = require("zlib");
  const gz = t => zlib.gzipSync(Buffer.from(t), { level: 9 }).length;
  const gzBase = gz(base);
  const gzDetalhes = [...porDisciplina.keys()]
    .reduce((s, k) => s + gz(fs.readFileSync(path.join(DIR_SAIDA, `detalhes-${k}.js`))), 0);
  const kb = n => (n / 1024).toFixed(0) + " KB";

  log(`  js/gerado/dados-base.js        ${kb(gzBase)} (gzip) — carregado no boot`);
  log(`  js/gerado/detalhes-*.js  (${String(Object.keys(chunks).length).padStart(2)})  ${kb(gzDetalhes)} (gzip) — sob demanda`);
  log(`  boot agora carrega ${(100 * gzBase / (gzBase + gzDetalhes)).toFixed(0)}% do que carregava antes`);

  return { chunks, questoes: questoes.length, gzBase, gzDetalhes };
}

module.exports = { dividirDados };

if (require.main === module) {
  try {
    dividirDados();
  } catch (e) {
    console.error("Erro:", e.message);
    process.exit(1);
  }
}
