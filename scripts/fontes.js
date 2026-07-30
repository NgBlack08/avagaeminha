/*
 * fontes.js — leitura dos arquivos-fonte do banco de questões.
 *
 * Módulo comum a dividir-dados.js e validar.js: ambos precisam exatamente
 * do mesmo carregamento, e duplicá-lo garantiria divergência com o tempo.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RAIZ = path.resolve(__dirname, "..");
const DIR_JS = path.join(RAIZ, "js");
const ARQ_MANIFESTO = path.join(__dirname, "lotes.json");

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
  "EDITAL_PCAL2026",
  "DISCIPLINAS_JURIDICAS",
];

/* A ordem de carga só tem uma restrição real: data.js precisa vir primeiro,
   porque é ele que declara QUESTOES/PREDICOES; todos os outros apenas dão
   push. Não há dependência entre lotes (verificado: nenhum arquivo
   referencia identificador declarado em outro), então lotes novos podem
   entrar no fim — este módulo os registra sozinho. */
function sincronizarManifesto({ gravar = true, log = () => {} } = {}) {
  const salvo = JSON.parse(fs.readFileSync(ARQ_MANIFESTO, "utf8"));

  const noDisco = fs.readdirSync(DIR_JS).filter(f => /^data.*\.js$/.test(f));
  const conhecidos = salvo.arquivos.filter(f => noDisco.includes(f));
  const novos = noDisco.filter(f => !salvo.arquivos.includes(f)).sort();
  const sumiram = salvo.arquivos.filter(f => !noDisco.includes(f));

  if (sumiram.length) log(`  aviso: removidos do manifesto (não existem mais em js/): ${sumiram.join(", ")}`);
  if (novos.length) log(`  registrados automaticamente: ${novos.join(", ")}`);

  const arquivos = [
    ...conhecidos.filter(f => f === "data.js"),
    ...conhecidos.filter(f => f !== "data.js"),
    ...novos,
  ];

  if (arquivos[0] !== "data.js") {
    throw new Error("js/data.js não encontrado — é ele que declara QUESTOES.");
  }

  if (gravar && (novos.length || sumiram.length)) {
    fs.writeFileSync(ARQ_MANIFESTO, JSON.stringify({ ...salvo, arquivos }, null, 2) + "\n");
  }

  return arquivos;
}

/* Avalia os fontes e devolve as globais públicas.
   Concatenados num único script porque as globais são declaradas com
   `const`, que não vira propriedade do contexto do vm — só continua
   visível dentro do mesmo escopo de script. */
function carregarDados(manifesto) {
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
  return dados;
}

function slug(texto) {
  return String(texto)
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

module.exports = { RAIZ, DIR_JS, GLOBAIS_PUBLICAS, sincronizarManifesto, carregarDados, slug };
