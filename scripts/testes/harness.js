/*
 * harness.js — carrega a aplicação num contexto isolado para os testes.
 *
 * O app é feito de scripts clássicos que conversam por variáveis globais
 * (sem módulos, sem bundler — por escolha, ver README). Isso costuma ser
 * tratado como "não testável", mas não é: basta montar um `global` de
 * mentira e avaliar os arquivos dentro dele, exatamente como
 * scripts/fontes.js já faz para validar o banco de questões.
 *
 * Cada chamada de criarApp() devolve um contexto NOVO — estado, storage e
 * fila zerados. Testes que compartilham estado escondem justamente o tipo
 * de defeito que esta suíte existe para pegar.
 *
 * Os relógios são falsos de propósito: `agendarFlush` marca timers, e um
 * teste que dependesse de espera real seria lento e intermitente. Aqui o
 * teste decide quando o tempo passa, chamando `timers.rodar()`.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RAIZ = path.resolve(__dirname, "..", "..");

/* Ordem obrigatória: dados-base declara QUESTOES/EDITAIS, plano-gratis
   declara FREE_QUESTION_IDS, e engine.js consome os dois no topo. */
const ARQUIVOS = [
  "js/gerado/dados-base.js",
  "js/plano-gratis.js",
  "js/engine.js",
];

/* Lidos uma vez só: são ~2 MB de fonte e cada teste monta um contexto. */
const FONTES = ARQUIVOS.map(rel => ({
  nome: rel,
  codigo: fs.readFileSync(path.join(RAIZ, rel), "utf8"),
}));

function criarLocalStorage(inicial = {}) {
  const mapa = new Map(Object.entries(inicial));
  return {
    getItem: k => (mapa.has(String(k)) ? mapa.get(String(k)) : null),
    setItem: (k, v) => { mapa.set(String(k), String(v)); },
    removeItem: k => { mapa.delete(String(k)); },
    clear: () => mapa.clear(),
    get length() { return mapa.size; },
    chaves: () => [...mapa.keys()],
  };
}

/* Relógio controlado pelo teste. `rodar()` dispara uma rodada dos timers
   pendentes; timers agendados por essa rodada ficam para a próxima, o que
   evita laço infinito quando o retry se reagenda sozinho. */
function criarTimers() {
  let seq = 1;
  const pendentes = new Map();
  return {
    setTimeout(fn, ms) { const id = seq++; pendentes.set(id, { fn, ms }); return id; },
    clearTimeout(id) { pendentes.delete(id); },
    get quantidade() { return pendentes.size; },
    esperas() { return [...pendentes.values()].map(t => t.ms); },
    async rodar() {
      const rodada = [...pendentes.values()];
      pendentes.clear();
      for (const t of rodada) await t.fn();
    },
  };
}

/* Dublê do cliente Supabase. `controle.modo` decide o que a próxima
   escrita faz: passar, cair a rede, ou devolver erro do Postgres. */
function criarSupaFake() {
  const chamadas = [];
  const controle = { modo: "ok", erro: null };

  async function resultado() {
    if (controle.modo === "rede") throw new TypeError("Failed to fetch");
    if (controle.modo === "erro") return { error: controle.erro, data: null };
    return { error: null, data: null };
  }

  function tabela(nome) {
    return {
      upsert: async (linha, opts) => { chamadas.push({ tabela: nome, op: "upsert", linha, opts }); return resultado(); },
      insert: async (linha) => { chamadas.push({ tabela: nome, op: "insert", linha }); return resultado(); },
      delete: () => ({ eq: async () => { chamadas.push({ tabela: nome, op: "delete" }); return resultado(); } }),
      update: () => ({ eq: async () => { chamadas.push({ tabela: nome, op: "update" }); return resultado(); } }),
    };
  }

  return {
    cliente: { from: tabela, rpc: async () => ({ error: null, data: null }) },
    chamadas,
    controle,
    escritas(tabelaNome) { return chamadas.filter(c => c.tabela === tabelaNome); },
    limpar() { chamadas.length = 0; },
  };
}

/*
 * Monta um app zerado.
 *   online   — valor de navigator.onLine
 *   storage  — conteúdo inicial do localStorage (para simular estado salvo)
 */
function criarApp({ online = true, storage = {} } = {}) {
  const localStorage = criarLocalStorage(storage);
  const timers = criarTimers();
  const supa = criarSupaFake();
  const eventos = [];

  const janela = {
    dispatchEvent(ev) { eventos.push({ tipo: ev.type, detail: ev.detail }); return true; },
    addEventListener() {},
    removeEventListener() {},
  };

  const contexto = {
    console,
    localStorage,
    navigator: { onLine: online },
    window: janela,
    document: {
      head: { appendChild() {} },
      createElement: () => ({ set src(_) {}, addEventListener() {} }),
    },
    supa: supa.cliente,
    setTimeout: timers.setTimeout,
    clearTimeout: timers.clearTimeout,
    CustomEvent: class CustomEvent {
      constructor(tipo, opts = {}) { this.type = tipo; this.detail = opts.detail; }
    },
    /* Sem crypto de propósito no padrão: força novoId() a exercitar o
       caminho de fallback, que é o que roda em contexto não seguro. */
  };
  contexto.globalThis = contexto;
  vm.createContext(contexto);

  for (const f of FONTES) {
    vm.runInContext(f.codigo, contexto, { filename: f.nome });
  }

  /* `const`/`let` no topo de um script vão para o escopo léxico do realm,
     não viram propriedade do objeto de contexto — por isso `contexto.QUESTOES`
     é undefined e o acesso precisa ser por avaliação. (É o mesmo motivo do
     truque de `__EXPORTS` em scripts/fontes.js.) */
  const avaliar = codigo => vm.runInContext(codigo, contexto);

  return {
    ctx: contexto,
    localStorage,
    timers,
    supa,
    eventos,
    rodar: avaliar,
    get(nome) { return avaliar(nome); },
    chamar(nome, ...args) {
      contexto.__args = args;
      return avaliar(`${nome}(...__args)`);
    },
    /* Traz o valor para o realm do teste. Objetos vindos da VM têm outro
       Object.prototype, e deepStrictEqual reprova por isso — comparar o
       equivalente serializado evita falso negativo. */
    json(expressao) {
      const s = avaliar(`JSON.stringify(${expressao})`);
      return s === undefined ? undefined : JSON.parse(s);
    },
    logar(userId = "user-1") {
      avaliar(`MODO = "cloud"; CURRENT_USER = { id: ${JSON.stringify(userId)} };`);
    },
  };
}

module.exports = { criarApp, criarLocalStorage, criarTimers, criarSupaFake, RAIZ };
