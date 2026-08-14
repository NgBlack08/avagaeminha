/*
 * Radar de Aprovação — coerência entre o número exibido e a faixa.
 *
 * Defeito que estes testes travam, encontrado ao rodar o Radar com o
 * histórico REAL de uma conta (699 questões, 1.058 respostas):
 *
 *   - a tela EXIBIA a taxa bruta e CLASSIFICAVA pela suavizada. Crimes
 *     Cibernéticos aparecia escrito "56%" dentro da faixa rotulada
 *     "60–79%", porque a suavização levava 56% a 64% com n=9;
 *
 *   - o corte comparava o decimal cru contra 0,8 enquanto a tela
 *     arredondava para exibir. Direito Constitucional, em 0,7996,
 *     mostrava "80%" e caía em "Precisa melhorar (60–79%)".
 *
 * A regra que fica: a faixa é decidida sobre o MESMO inteiro que o aluno
 * lê. Enquanto isso valer, a legenda não tem como contradizer o número.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp } = require("./harness.js");

/* Monta um histórico com acertos/erros nas disciplinas indicadas.
   `mistura` = { "Direito Penal": [acertos, erros], ... } */
function comHistorico(mistura) {
  const app = criarApp();
  const porDisc = {};
  for (const q of app.json("QUESTOES.map(q => ({ id: q.id, d: q.disciplina }))")) {
    (porDisc[q.d] ||= []).push(q.id);
  }
  const respostas = {};
  for (const [disc, [acertos, erros]] of Object.entries(mistura)) {
    const ids = porDisc[disc] || [];
    let i = 0;
    const push = correta => {
      const qid = ids[i++];
      if (!qid) throw new Error(`${disc}: questões insuficientes no banco`);
      respostas[qid] = [{ qid, resposta: correta ? "C" : "E", correta, branco: false,
                          tempoMs: 40000, confianca: 2, data: Date.now() }];
    };
    for (let k = 0; k < acertos; k++) push(true);
    for (let k = 0; k < erros; k++) push(false);
  }
  app.ctx.__r = respostas;
  app.rodar("APP_STATE.respostas = __r");
  app.rodar('APP_STATE.config.plano = "completo"');
  return app;
}

/* Faixas exatamente como a legenda do Dashboard as anuncia. */
const LIMITES = { dominadas: [80, 100], atencao: [60, 79], risco: [0, 59] };

function conferirCoerencia(app) {
  const r = app.json("radarAprovacao()");
  const fora = [];
  for (const [faixa, [lo, hi]] of Object.entries(LIMITES)) {
    for (const d of r[faixa]) {
      const exibido = Math.round(d.taxaSuave * 100);
      if (exibido < lo || exibido > hi) {
        fora.push(`${d.disciplina}: exibe ${exibido}% na faixa ${faixa} (${lo}–${hi}%)`);
      }
    }
  }
  return { r, fora };
}

test("o percentual exibido nunca contradiz a faixa em que a disciplina aparece", () => {
  /* Mistura ampla, com várias taxas caindo perto das bordas de 60 e 80. */
  const app = comHistorico({
    "Direito Penal": [45, 7],
    "Processo Penal": [40, 12],
    "Direito Constitucional": [36, 9],
    "Direito Administrativo": [20, 10],
    "Legislação Especial": [21, 9],
    "Língua Portuguesa": [17, 13],
    "TI e Segurança Cibernética": [12, 18],
    "Raciocínio Lógico-Matemático": [9, 11],
    "Direitos Humanos": [5, 4],
    "Estatística": [4, 5],
  });
  const { fora } = conferirCoerencia(app);
  assert.deepEqual(fora, [], "faixa e número exibido divergiram");
});

test("disciplina que exibe 80% fica em DOMINA, não em melhorar", () => {
  /* Fixture calculado para cair EXATAMENTE na borda do arredondamento,
     que é onde o defeito vivia. Com PESO_PRIOR = 5:

       prior  = 25 acertos / 50 respostas = 0,500
       alvo   = (15 + 5 × 0,5) / (17 + 5) = 17,5 / 22 = 0,79545…

     0,79545 arredonda para 80 na tela e reprova no corte `>= 0,8`. Sem
     esta combinação exata o teste passa mesmo com o código defeituoso —
     foi o que aconteceu na primeira versão dele. */
  const app = comHistorico({
    "Direito Constitucional": [15, 2],   /* n = 17, o da borda */
    "Direito Penal": [10, 23],           /* fecha o geral em 25/50 = 50% */
  });
  const r = app.json("radarAprovacao()");

  const dc = [...r.dominadas, ...r.atencao, ...r.risco]
    .find(d => d.disciplina === "Direito Constitucional");
  assert.ok(dc, "Direito Constitucional foi classificada");
  assert.equal(Math.round(dc.taxaSuave * 100), 80, "fixture na borda: exibe 80%");
  assert.ok(dc.taxaSuave < 0.8, "fixture na borda: decimal abaixo de 0,8");

  assert.ok(r.dominadas.some(d => d.disciplina === "Direito Constitucional"),
    'exibindo 80%, a disciplina tem de aparecer em "Domina (≥80%)" — ' +
    'o defeito a colocava em "Precisa melhorar (60–79%)"');

  const { fora } = conferirCoerencia(app);
  assert.deepEqual(fora, []);
});

test("taxa bruta baixa suavizada para cima fica na faixa do valor exibido", () => {
  /* O caso de Crimes Cibernéticos: bruta 56%, n pequeno, média geral alta.
     A suavização sobe o valor — e a tela precisa mostrar o que classificou. */
  const app = comHistorico({
    "Direito Penal": [90, 10],                        /* média geral alta */
    "Crimes Cibernéticos e Segurança Digital": [5, 4], /* bruta ≈ 56% */
  });
  const { r, fora } = conferirCoerencia(app);
  assert.deepEqual(fora, []);
  const cc = [...r.dominadas, ...r.atencao, ...r.risco]
    .find(d => d.disciplina === "Crimes Cibernéticos e Segurança Digital");
  assert.ok(cc, "disciplina classificada");
  assert.ok(cc.taxaSuave > cc.taxa, "a suavização puxou para a média geral");
});

test("o score reproduz a fórmula 60/25/15 documentada", () => {
  const app = comHistorico({ "Direito Penal": [30, 10], "Processo Penal": [20, 20] });
  const r = app.json("radarAprovacao()");
  const esperado = Math.round(100 * (0.60 * r.taxa + 0.25 * r.cobertura
                                   + 0.15 * (r.calibracao ?? r.taxa)));
  assert.equal(r.score, esperado);
  assert.ok(r.score >= 0 && r.score <= 100);
});

test("as faixas cobrem todas as disciplinas do escopo, sem sobra nem falta", () => {
  const app = comHistorico({ "Direito Penal": [10, 3], "Processo Penal": [2, 1] });
  const r = app.json("radarAprovacao()");
  const soma = r.dominadas.length + r.atencao.length + r.risco.length
             + r.emAferricao.length + r.naoIniciadas.length;
  const discs = new Set(app.json("questoesDoEscopo().map(q => q.disciplina)")).size;
  assert.equal(soma, discs);
  /* E cada faixa respeita o seu próprio critério de amostra. */
  assert.ok(r.emAferricao.every(d => { const n = d.acertos + d.erros; return n > 0 && n < 4; }));
  assert.ok(r.naoIniciadas.every(d => d.acertos + d.erros === 0));
});
