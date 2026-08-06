/*
 * Carga do estado local.
 *
 * Regressão de um defeito real: o try/catch original só cobria JSON
 * inválido. Um JSON VÁLIDO porém malformado (`null`, `[]`,
 * `{"config":null}`) passava direto, virava APP_STATE, e a primeira
 * leitura de APP_STATE.config.tema estourava antes de qualquer tela
 * aparecer — tela branca, sem caminho de recuperação.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp } = require("./harness.js");

const CHAVE = "questlab-v1";

function comEstado(bruto) {
  return criarApp({ storage: { [CHAVE]: bruto } });
}

test("storage vazio começa no estado padrão", () => {
  const app = criarApp();
  assert.equal(app.get("APP_STATE.config.tema"), "dark");
  assert.equal(app.get("APP_STATE.config.plano"), "gratuito");
  assert.deepEqual(app.json("APP_STATE.respostas"), {});
  assert.deepEqual(app.json("APP_STATE.sessoes"), []);
});

/* Cada um destes derrubava o boot antes da correção. */
for (const [rotulo, bruto] of [
  ["JSON inválido", "{isto não é json"],
  ["texto puro", "sessão expirada"],
  ["null literal", "null"],
  ["número", "42"],
  ["array no lugar de objeto", "[]"],
  ["campos nulos", '{"respostas":null,"srs":null,"sessoes":null,"config":null}'],
  ["sessoes com tipo errado", '{"sessoes":{"a":1}}'],
  ["objeto vazio", "{}"],
]) {
  test(`estado ilegível não derruba o boot: ${rotulo}`, () => {
    const app = comEstado(bruto);
    assert.equal(typeof app.get("APP_STATE.config"), "object");
    assert.equal(app.get("APP_STATE.config.tema"), "dark");
    assert.equal(typeof app.get("APP_STATE.respostas"), "object");
    assert.equal(app.get("Array.isArray(APP_STATE.sessoes)"), true);
  });
}

test("corrupção parcial preserva o que estava íntegro", () => {
  /* O ponto da correção: quem perdeu só a config não pode perder junto
     o histórico inteiro de respostas. */
  const app = comEstado(JSON.stringify({
    respostas: { "DP-001": [{ qid: "DP-001", correta: true, data: 1 }] },
    sessoes: [{ data: 1, n: 10, acertos: 8 }],
    config: null,
  }));
  assert.equal(app.get("Object.keys(APP_STATE.respostas).length"), 1);
  assert.equal(app.get("APP_STATE.sessoes.length"), 1);
  assert.equal(app.get("APP_STATE.config.tema"), "dark", "config volta ao padrão");
});

test("campos ausentes na config são completados sem apagar os presentes", () => {
  const app = comEstado(JSON.stringify({ config: { tema: "light", metaTaxa: 0.9 } }));
  assert.equal(app.get("APP_STATE.config.tema"), "light");
  assert.equal(app.get("APP_STATE.config.metaTaxa"), 0.9);
  assert.equal(app.get("APP_STATE.config.plano"), "gratuito", "campo novo ganha padrão");
  assert.equal(app.get("APP_STATE.config.cargoFoco"), "Escrivão");
});

test("saveLocalState não propaga erro de quota", () => {
  const app = criarApp();
  app.rodar(`localStorage.setItem = () => { const e = new Error("cheio"); e.name = "QuotaExceededError"; throw e; };`);
  /* Antes, a exceção subia e abortava o fluxo no meio de
     registrarResposta() — a resposta ficava sem gravar E sem aviso. */
  assert.equal(app.chamar("saveLocalState"), false);
});

test("saveLocalState confirma a gravação quando dá certo", () => {
  const app = criarApp();
  assert.equal(app.chamar("saveLocalState"), true);
  assert.ok(app.localStorage.getItem(CHAVE));
});
