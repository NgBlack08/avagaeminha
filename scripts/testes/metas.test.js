/*
 * Meta diária e meta semanal.
 *
 * A meta do dia é a grandeza primária: é ela que o aluno configura, ela
 * que o Plano de Estudo reparte entre as disciplinas e ela que a barra de
 * hoje mede. A semanal deriva dela.
 *
 * Até a 7.196 era o contrário — a semanal era uma constante de 100 e a
 * diária saía de 100÷7. Configurar 30 questões por dia deixava a barra
 * semanal parada em 100: o aluno batia a semana na terça e continuava
 * vendo 100 como alvo. Duas metas que se contradizem na mesma tela
 * ensinam a ignorar as duas.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp } = require("./harness.js");

const app = () => criarApp();

test("a meta semanal é sete dias da meta diária configurada", () => {
  const a = app();
  a.chamar("definirMetaDiaria", 30);

  assert.equal(a.json("calcularMetaSemanal()").meta, 210);
});

test("mudar a meta diária move a semanal junto", () => {
  const a = app();

  a.chamar("definirMetaDiaria", 10);
  const antes = a.json("calcularMetaSemanal()").meta;
  a.chamar("definirMetaDiaria", 20);
  const depois = a.json("calcularMetaSemanal()").meta;

  assert.equal(antes, 70);
  assert.equal(depois, 140, "a semanal ficou presa no valor anterior");
});

test("sem meta configurada, as duas saem do padrão e continuam coerentes", () => {
  const a = app();
  const diaria = a.chamar("metaDiariaConfigurada");

  assert.equal(a.json("calcularMetaSemanal()").meta, diaria * 7);
});

test("voltar ao padrão devolve a coerência entre as duas", () => {
  const a = app();
  a.chamar("definirMetaDiaria", 50);
  a.chamar("definirMetaDiaria", null);

  const diaria = a.chamar("metaDiariaConfigurada");
  assert.equal(diaria, a.get("META_DIARIA_PADRAO"));
  assert.equal(a.json("calcularMetaSemanal()").meta, diaria * 7);
});

test("a meta semanal expõe a diária que a originou, para a tela explicar a conta", () => {
  const a = app();
  a.chamar("definirMetaDiaria", 12);

  const semana = a.json("calcularMetaSemanal()");
  assert.equal(semana.diaria, 12);
  assert.equal(semana.meta, 84);
});

test("o teto da meta diária também limita a semanal", () => {
  const a = app();
  a.chamar("definirMetaDiaria", 9999);

  const teto = a.get("META_DIARIA_MAX");
  assert.equal(a.chamar("metaDiariaConfigurada"), teto);
  assert.equal(a.json("calcularMetaSemanal()").meta, teto * 7);
});

test("a barra semanal não estoura 100% mesmo passando da meta", () => {
  const a = app();
  a.chamar("definirMetaDiaria", 1);
  a.logar("u1");

  /* 7 respostas cobrem a meta da semana (1/dia × 7); registramos 20. */
  const ids = a.json("QUESTOES.slice(0,20).map(q => q.id)");
  const gabs = a.json("QUESTOES.slice(0,20).map(q => q.gabarito)");
  for (let i = 0; i < ids.length; i++) a.chamar("registrarResposta", ids[i], gabs[i], 1000, 2);

  const semana = a.json("calcularMetaSemanal()");
  assert.ok(semana.respondidas > semana.meta, "cenário não configurado");
  assert.equal(semana.pct, 100);
});
