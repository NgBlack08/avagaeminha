/*
 * Memoização do escopo.
 *
 * `questoesDoEscopo()` e `disciplinasDoFoco()` passaram a devolver valores
 * em cache porque `noEscopo()` construía um Set por questão: um render do
 * Raio-X chegava a 51.560 alocações. O ganho é real, mas cache traz um
 * risco que a versão lenta não tinha — devolver resultado velho depois de
 * o aluno trocar de trilha ou de plano.
 *
 * É isso que estes testes fixam: o escopo tem de acompanhar `plano`,
 * `concursoFoco` e o crescimento do banco, nos dois sentidos.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp } = require("./harness.js");

const escopo = app => app.json("questoesDoEscopo().length");
const trilhas = app => app.json("Object.keys(EDITAIS)");

/* Referência independente do cache: refaz o filtro na unha. */
const escopoNaUnha = app => app.json(`(() => {
  const ed = APP_STATE.config.concursoFoco && EDITAIS[APP_STATE.config.concursoFoco];
  const discs = ed ? new Set(Object.keys(ed.itensPorDisciplina)) : null;
  return QUESTOES.filter(q => questaoLiberada(q) && (!discs || discs.has(q.disciplina))).length;
})()`);

test("o escopo em cache é igual ao filtro refeito na unha", () => {
  const app = criarApp();
  for (const plano of ["gratuito", "completo"]) {
    for (const foco of [null, ...trilhas(app)]) {
      app.rodar(`APP_STATE.config.plano = ${JSON.stringify(plano)};
                 APP_STATE.config.concursoFoco = ${JSON.stringify(foco)};`);
      assert.equal(escopo(app), escopoNaUnha(app), `divergiu em ${plano}/${foco}`);
    }
  }
});

test("trocar de trilha invalida o cache, e voltar também", () => {
  const app = criarApp();
  const [a, b] = trilhas(app);
  app.rodar(`APP_STATE.config.plano = "completo";`);

  app.rodar(`APP_STATE.config.concursoFoco = ${JSON.stringify(a)};`);
  const naTrilhaA = escopo(app);
  app.rodar(`APP_STATE.config.concursoFoco = ${JSON.stringify(b)};`);
  const naTrilhaB = escopo(app);

  assert.notEqual(naTrilhaA, naTrilhaB, "as duas trilhas precisam ter escopos distintos");

  /* O caminho de volta é o que um cache mal invalidado erra: ir de A para
     B costuma funcionar por acaso na primeira troca. */
  app.rodar(`APP_STATE.config.concursoFoco = ${JSON.stringify(a)};`);
  assert.equal(escopo(app), naTrilhaA, "voltar para a trilha anterior devolveu escopo velho");
  app.rodar(`APP_STATE.config.concursoFoco = null;`);
  assert.equal(escopo(app), escopoNaUnha(app), "sem trilha o escopo é o banco liberado inteiro");
});

test("mudar de plano invalida o cache", () => {
  const app = criarApp();
  app.rodar(`APP_STATE.config.concursoFoco = null;`);

  app.rodar(`APP_STATE.config.plano = "gratuito";`);
  const gratuito = escopo(app);
  app.rodar(`APP_STATE.config.plano = "completo";`);
  const completo = escopo(app);

  assert.ok(completo > gratuito, "o plano completo precisa liberar mais que a amostra");
  /* Rebaixamento: é o caso do bug de perfil ilegível que já derrubou
     assinante para "gratuito" em produção. O escopo tem de acompanhar. */
  app.rodar(`APP_STATE.config.plano = "gratuito";`);
  assert.equal(escopo(app), gratuito, "rebaixar o plano manteve o escopo do completo");
});

test("lote novo entra no escopo sem reiniciar o app", () => {
  const app = criarApp();
  app.rodar(`APP_STATE.config.plano = "completo"; APP_STATE.config.concursoFoco = null;`);
  const antes = escopo(app);

  app.rodar(`QUESTOES.push({ ...QUESTOES[0], id: "ZZ-999" });`);
  assert.equal(escopo(app), antes + 1, "questão acrescentada depois do primeiro cálculo ficou de fora");
});

test("disciplinasDoFoco acompanha a trilha", () => {
  const app = criarApp();
  const [a] = trilhas(app);
  app.rodar(`APP_STATE.config.concursoFoco = null;`);
  assert.equal(app.json("disciplinasDoFoco()"), null, "sem trilha não há recorte de disciplina");

  app.rodar(`APP_STATE.config.concursoFoco = ${JSON.stringify(a)};`);
  assert.equal(
    app.json("disciplinasDoFoco().size"),
    app.json(`Object.keys(EDITAIS[${JSON.stringify(a)}].itensPorDisciplina).length`));
});

/* ---------------- cache de expressões do detector ---------------- */

test("reTermo reaproveita a expressão sem vazar lastIndex", () => {
  const app = criarApp();
  /* Mesma chamada, mesmo objeto: é o que dispensa 257.800 `new RegExp`. */
  assert.equal(app.json(`reTermo("sempre","i") === reTermo("sempre","i")`), true);

  /* Com flag "g" a expressão guarda posição. Reaproveitar sem zerar faria
     a segunda passagem começar do meio do texto e pular ocorrências. */
  const texto = "sempre e sempre de novo";
  const repetido = app.json(`(() => {
    const t = ${JSON.stringify(texto)};
    const saidas = new Set();
    for (let i = 0; i < 20; i++) saidas.add(t.replace(reTermo("sempre","gi"), "[$1]"));
    return [...saidas];
  })()`);
  assert.equal(repetido.length, 1, "a mesma substituição deu resultados diferentes entre chamadas");
  assert.equal(repetido[0], "[sempre] e [sempre] de novo");

  /* `.test()` repetido com "g" é o uso que mais quebra com cache. */
  const testes = app.json(`(() => {
    const r = [];
    for (let i = 0; i < 5; i++) r.push(reTermo("sempre","gi").test("sempre"));
    return r;
  })()`);
  assert.deepEqual(testes, [true, true, true, true, true], "test() com \"g\" alternou por lastIndex retido");
});
