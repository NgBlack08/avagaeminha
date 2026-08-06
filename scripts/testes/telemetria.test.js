/*
 * Telemetria de falhas.
 *
 * Ela existe porque o bug do rebaixamento de plano viveu semanas em
 * produção sem ninguém saber, e a correção dele deixou a falha MAIS
 * silenciosa: o app passou a mostrar a cópia local e seguir funcionando.
 *
 * O risco de um mecanismo assim é ele próprio virar o problema — laço de
 * erro, enxurrada de requisição, vazamento de conteúdo de estudo, ou
 * atrapalhar a gravação que de fato importa. É isso que estes testes
 * fixam.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp: criarAppBase } = require("./harness.js");

const criarApp = (o = {}) => criarAppBase({ ...o, relogioAutomatico: true });

/* Captura as chamadas de RPC, que é por onde a telemetria sai. */
function comEspiao(app, { falhar = false } = {}) {
  const rpcs = [];
  app.ctx.supa.rpc = async (nome, args) => {
    rpcs.push({ nome, args });
    if (falhar) throw new TypeError("Failed to fetch");
    return { data: null, error: null };
  };
  return rpcs;
}

const eventos = rpcs => rpcs.filter(r => r.nome === "registrar_evento");

test("não reporta nada enquanto não há usuário autenticado", () => {
  const app = criarApp();
  const rpcs = comEspiao(app);
  app.chamar("registrarEvento", "excecao", "erro qualquer");
  assert.equal(eventos(rpcs).length, 0);
});

test("reporta tipo, detalhe e versão do app", () => {
  const app = criarApp();
  app.logar("u1");
  app.rodar(`globalThis.APP_VERSION = "9.99";`);
  const rpcs = comEspiao(app);

  app.chamar("registrarEvento", "excecao", "boom");

  const e = eventos(rpcs)[0];
  assert.equal(e.args.p_tipo, "excecao");
  assert.equal(e.args.p_detalhe, "boom");
  assert.equal(e.args.p_versao, "9.99");
});

test("o mesmo erro repetido é reportado uma vez só", () => {
  const app = criarApp();
  app.logar("u1");
  const rpcs = comEspiao(app);

  for (let i = 0; i < 25; i++) app.chamar("registrarEvento", "excecao", "o mesmo erro");

  /* Um laço de falha produz o mesmo erro aos milhares; repetir não é
     informação nova, e viraria enxurrada de requisição. */
  assert.equal(eventos(rpcs).length, 1);
});

test("há teto por sessão mesmo com erros diferentes", () => {
  const app = criarApp();
  app.logar("u1");
  const rpcs = comEspiao(app);

  for (let i = 0; i < 50; i++) app.chamar("registrarEvento", "excecao", "erro " + i);

  const teto = app.get("EVENTO_TETO_SESSAO");
  assert.equal(eventos(rpcs).length, teto);
});

test("falha da própria telemetria não propaga nem vira exceção", () => {
  const app = criarApp();
  app.logar("u1");
  const rpcs = comEspiao(app, { falhar: true });

  /* Se isto lançasse, ou deixasse a rejeição solta, o handler global de
     erro chamaria registrarEvento de novo — laço infinito. */
  assert.doesNotThrow(() => app.chamar("registrarEvento", "excecao", "x"));
  assert.equal(eventos(rpcs).length, 1);
});

test("telemetria NÃO entra na fila de escrita", () => {
  const app = criarApp();
  app.logar("u1");
  comEspiao(app);

  app.chamar("registrarEvento", "excecao", "x");

  /* A fila é para o que não pode se perder. Enfileirar telemetria seria
     circular: falha da fila gerando item na fila. */
  assert.equal(app.json("statusFila()").pendentes, 0);
});

test("item descartado por esgotar tentativas é reportado como perda de dado", async () => {
  const app = criarApp();
  app.logar("u1");
  const rpcs = comEspiao(app);
  app.supa.controle.modo = "rede";

  const q = app.json("QUESTOES[0]");
  app.chamar("registrarResposta", q.id, q.gabarito, 4000, 2);
  const teto = app.get("FILA_MAX_TENTATIVAS") * 4;
  for (let i = 0; i < teto && app.json("statusFila()").pendentes > 0; i++) {
    await app.chamar("flushFila");
  }

  const perdas = eventos(rpcs).filter(e => e.args.p_tipo === "escrita_descartada");
  assert.ok(perdas.length > 0, "perda de resposta precisa ser contada");
  assert.match(perdas[0].args.p_detalhe, /resposta/);
});

test("leitura incompleta do estado é reportada", async () => {
  const app = criarApp();
  const rpcs = comEspiao(app);
  app.supa.leitura.falhar.add("profiles");

  await app.chamar("carregarEstadoNuvem", { id: "u1" });

  const e = eventos(rpcs).find(x => x.args.p_tipo === "estado_incompleto");
  assert.ok(e, "sem isto, a correção do rebaixamento só troca um problema invisível por outro");
  assert.match(e.args.p_detalhe, /consultas falharam/);
});

test("leitura íntegra não reporta nada", async () => {
  const app = criarApp();
  const rpcs = comEspiao(app);
  await app.chamar("carregarEstadoNuvem", { id: "u1" });
  assert.equal(eventos(rpcs).length, 0);
});

test("storage recusando gravação é reportado", () => {
  const app = criarApp();
  app.logar("u1");
  const rpcs = comEspiao(app);
  app.rodar(`localStorage.setItem = () => { const e = new Error("cheio"); e.name = "QuotaExceededError"; throw e; };`);

  app.chamar("saveLocalState");

  const e = eventos(rpcs).find(x => x.args.p_tipo === "storage_cheio");
  assert.ok(e);
  assert.match(e.args.p_detalhe, /QuotaExceededError/);
});

test("o detalhe é truncado antes de sair do cliente", () => {
  const app = criarApp();
  app.logar("u1");
  const rpcs = comEspiao(app);

  app.chamar("registrarEvento", "excecao", "x".repeat(5000));

  assert.ok(eventos(rpcs)[0].args.p_detalhe.length <= 300);
});

test("nenhum evento carrega conteúdo de estudo", async () => {
  const app = criarApp();
  app.logar("u1");
  const rpcs = comEspiao(app);
  app.supa.controle.modo = "rede";

  const q = app.json("QUESTOES[0]");
  app.chamar("registrarResposta", q.id, q.gabarito, 4000, 2);
  const teto = app.get("FILA_MAX_TENTATIVAS") * 4;
  for (let i = 0; i < teto && app.json("statusFila()").pendentes > 0; i++) {
    await app.chamar("flushFila");
  }

  const enunciado = q.enunciado.slice(0, 40);
  for (const e of eventos(rpcs)) {
    const texto = JSON.stringify(e.args);
    assert.ok(!texto.includes(enunciado), "enunciado não pode vazar");
    assert.ok(!texto.includes(`"${q.gabarito}"`), "gabarito não pode vazar");
  }
});
