/*
 * Julgamento da resposta da API do GitHub no acompanhamento de deploy.
 *
 * Cada caso aqui aconteceu de verdade, ou é a forma que a API assume
 * quando algo dá errado. O laço de curl que este script substituiu tratava
 * todos como a mesma coisa:
 *
 *   corpo vazio      -> estourava JSON.parse e cuspia stack trace de Node
 *   403 sem cota     -> parse ok, workflow_runs undefined, `|| []` engolia,
 *                       e o acompanhamento reportava "ainda não apareceu"
 *                       até o fim do tempo, sem nunca dizer o motivo
 *
 * O segundo é o perigoso: um build quebrado passaria por "ainda rodando".
 * Por isso o teste do 403 é o mais importante do arquivo — e ele não pode
 * ser feito pela rede sem estourar a cota real de propósito.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { julgarRuns, CotaEsgotada } = require("../deploy-status.js");

const COTA_CHEIA = { restante: 59, limite: 60, reset: 0 };
const resposta = (over = {}) => ({ status: 200, corpo: "{}", cota: COTA_CHEIA, ...over });

test("resposta boa devolve a lista de runs", () => {
  const runs = [{ head_sha: "1300f85abc", status: "completed", conclusion: "success" }];
  const r = julgarRuns(resposta({ corpo: JSON.stringify({ workflow_runs: runs }) }));
  assert.equal(r.erro, undefined);
  assert.equal(r.runs.length, 1);
  assert.equal(r.runs[0].conclusion, "success");
});

test("corpo vazio vira erro legível, não exceção", () => {
  const r = julgarRuns(resposta({ corpo: "" }));
  assert.match(r.erro, /corpo vazio/);
});

test("corpo só com espaços conta como vazio", () => {
  const r = julgarRuns(resposta({ corpo: "\n  \n" }));
  assert.match(r.erro, /corpo vazio/);
});

test("HTML no lugar de JSON não derruba o processo", () => {
  const r = julgarRuns(resposta({ corpo: "<html>502 Bad Gateway</html>" }));
  assert.match(r.erro, /ilegível/);
});

test("HTTP diferente de 200 é reportado com o código", () => {
  assert.match(julgarRuns(resposta({ status: 404 })).erro, /HTTP 404/);
  assert.match(julgarRuns(resposta({ status: 503 })).erro, /HTTP 503/);
});

/* O caso que motivou o arquivo. */
test("cota esgotada interrompe em vez de virar 'run não encontrado'", () => {
  const daquiA30min = { restante: 0, limite: 60, reset: (Date.now() + 30 * 60_000) / 1000 };
  assert.throws(
    () => julgarRuns(resposta({ status: 403, cota: daquiA30min })),
    e => e instanceof CotaEsgotada && /cota da API esgotada/.test(e.message) && /~30 min/.test(e.message)
  );
});

test("403 por outro motivo não é confundido com cota esgotada", () => {
  const r = julgarRuns(resposta({ status: 403, cota: COTA_CHEIA }));
  assert.match(r.erro, /HTTP 403/);
});

/* 200 com JSON válido e sem a lista: era isto que o `|| []` transformava
   em lista vazia, apagando a mensagem de erro que a API tinha mandado. */
test("200 sem workflow_runs preserva a mensagem da API", () => {
  const corpo = JSON.stringify({ message: "API rate limit exceeded", documentation_url: "..." });
  const r = julgarRuns(resposta({ corpo }));
  assert.match(r.erro, /sem workflow_runs/);
  assert.match(r.erro, /rate limit exceeded/, "a explicação da API não pode se perder");
});

test("200 sem workflow_runs e sem message ainda assim é erro", () => {
  const r = julgarRuns(resposta({ corpo: JSON.stringify({ total_count: 0 }) }));
  assert.match(r.erro, /sem workflow_runs/);
});
