/*
 * Repetição espaçada.
 *
 * Regressão de duas regras que já estiveram erradas ao mesmo tempo e
 * corrompiam aprendizado e medição juntos:
 *
 *  - errar gravava `proxima = agora`. A questão voltava na hora e, com a
 *    explicação ainda fresca, era "acertada" — reconhecimento, não
 *    evocação. O acerto falso promovia o nível, o item saía da fila e o
 *    buraco reaparecia no dia da prova.
 *  - acertar antes do vencimento promovia. Bastava insistir no mesmo item
 *    para ver a taxa de acerto subir sem ter aprendido nada.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp } = require("./harness.js");

const DIA = 864e5;
const srsDe = (app, qid) => app.json(`APP_STATE.srs[${JSON.stringify(qid)}]`);

function app1() {
  const app = criarApp();
  const qid = app.json("QUESTOES[0]").id;
  return { app, qid };
}

test("errar não devolve a questão à fila no mesmo instante", () => {
  const { app, qid } = app1();
  app.chamar("atualizarSRS", qid, false, false);

  const s = srsDe(app, qid);
  assert.equal(s.nivel, 0, "errar zera o nível");
  const lag = app.get("SRS_LAG_ERRO_DIAS");
  assert.ok(s.proxima > Date.now() + lag * DIA * 0.9,
    "a revisão precisa esperar; reestudar na hora é reconhecimento, não retenção");
});

test("acertar item ainda não vencido não promove o nível", () => {
  const { app, qid } = app1();
  /* Item já revisado hoje, com vencimento daqui a 3 dias. */
  app.rodar(`APP_STATE.srs[${JSON.stringify(qid)}] = { nivel: 2, proxima: Date.now() + 3 * ${DIA} };`);
  const antes = srsDe(app, qid);

  app.chamar("atualizarSRS", qid, true, false);

  const depois = srsDe(app, qid);
  assert.equal(depois.nivel, antes.nivel, "nível intacto");
  assert.equal(depois.proxima, antes.proxima, "vencimento não é empurrado para frente");
});

test("acertar item vencido promove e agenda o próximo intervalo", () => {
  const { app, qid } = app1();
  app.rodar(`APP_STATE.srs[${JSON.stringify(qid)}] = { nivel: 0, proxima: Date.now() - ${DIA} };`);

  app.chamar("atualizarSRS", qid, true, false);

  const s = srsDe(app, qid);
  assert.equal(s.nivel, 1);
  const intervalos = app.json("SRS_INTERVALOS");
  assert.ok(s.proxima > Date.now() + intervalos[0] * DIA * 0.9);
});

test("item novo acertado é promovido (nunca venceu, logo está vencido)", () => {
  const { app, qid } = app1();
  app.chamar("atualizarSRS", qid, true, false);
  assert.equal(srsDe(app, qid).nivel, 1);
});

test("branco não avança nem zera: revisa amanhã", () => {
  const { app, qid } = app1();
  app.rodar(`APP_STATE.srs[${JSON.stringify(qid)}] = { nivel: 3, proxima: Date.now() - ${DIA} };`);

  app.chamar("atualizarSRS", qid, false, true);

  const s = srsDe(app, qid);
  assert.equal(s.nivel, 3, "deixar em branco não é erro nem acerto");
  assert.ok(s.proxima > Date.now(), "mas volta logo");
  assert.ok(s.proxima < Date.now() + 2 * DIA);
});

test("o nível não passa do último intervalo definido", () => {
  const { app, qid } = app1();
  const maximo = app.json("SRS_INTERVALOS").length;
  for (let i = 0; i < maximo + 5; i++) {
    /* Vence o item antes de cada acerto: sem isso a promoção seria
       corretamente recusada e o teste nunca chegaria ao teto. */
    app.rodar(`(function () {
      const s = APP_STATE.srs[${JSON.stringify(qid)}];
      if (s) s.proxima = Date.now() - ${DIA};
    })()`);
    app.chamar("atualizarSRS", qid, true, false);
  }
  assert.equal(srsDe(app, qid).nivel, maximo);
});

test("errar depois de subir muito zera o nível de volta", () => {
  const { app, qid } = app1();
  app.rodar(`APP_STATE.srs[${JSON.stringify(qid)}] = { nivel: 5, proxima: Date.now() - ${DIA} };`);
  app.chamar("atualizarSRS", qid, false, false);
  assert.equal(srsDe(app, qid).nivel, 0);
});

test("questoesDevidas só traz o que já venceu", () => {
  const app = criarApp();
  const [a, b] = [app.json("QUESTOES[0]").id, app.json("QUESTOES[1]").id];
  app.rodar(`APP_STATE.config.plano = "completo";`);
  app.rodar(`APP_STATE.srs[${JSON.stringify(a)}] = { nivel: 1, proxima: Date.now() - ${DIA} };`);
  app.rodar(`APP_STATE.srs[${JSON.stringify(b)}] = { nivel: 1, proxima: Date.now() + 5 * ${DIA} };`);

  const ids = app.json("questoesDevidas().map(q => q.id)");
  assert.ok(ids.includes(a), "vencida entra");
  assert.ok(!ids.includes(b), "a vencer fica de fora");
});
