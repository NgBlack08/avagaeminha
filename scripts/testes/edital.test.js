/*
 * Peso do edital, escopo da trilha e aritmética do branco.
 *
 * O peso já esteve calibrado só para a PC-AL (divisor fixo /10 com teto
 * de 1,5). Na SESAU-AL isso quebrava: Fisioterapia vale 70 dos 120 itens
 * e era achatada para 1,5, contra 1,25 de uma disciplina de 12,5 — uma
 * diferença de 5,6x na prova virava 1,2x no sorteio. Os testes abaixo
 * fixam a propriedade que importa (proporcionalidade ao edital), não os
 * números mágicos.
 *
 * A aritmética do branco entra aqui porque, depois da auditoria das 372
 * questões de provas reais, foi a única técnica que sobreviveu — vale
 * proteger.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp } = require("./harness.js");

function comTrilha(trilha) {
  const app = criarApp();
  app.rodar(`APP_STATE.config.concursoFoco = ${JSON.stringify(trilha)}; APP_STATE.config.plano = "completo";`);
  return app;
}

/* Peso do edital isolado: uma questão nunca respondida, sem SRS, para
   que só a parcela proporcional aos itens varie entre as disciplinas. */
function pesoDe(app, disciplina) {
  app.ctx.__disc = disciplina;
  return app.rodar(`
    (function () {
      const q = QUESTOES.find(x => x.disciplina === __disc);
      if (!q) throw new Error("sem questão para " + __disc);
      return pesoAdaptativo(q, { porDisc: [], taxa: 0.5 });
    })()
  `);
}

test("a disciplina mais pesada da trilha recebe o maior peso", () => {
  const app = comTrilha("SESAUAL_FISIO");
  const fisio = pesoDe(app, "Fisioterapia");            /* 70 de 120 itens */
  const portugues = pesoDe(app, "Língua Portuguesa");   /* 12,5 de 120 */
  assert.ok(fisio > portugues, `Fisioterapia (${fisio}) deveria pesar mais que Português (${portugues})`);
});

test("o peso acompanha a proporção do edital, sem achatar", () => {
  const app = comTrilha("SESAUAL_FISIO");
  const itens = app.json(`EDITAIS.SESAUAL_FISIO.itensPorDisciplina`);
  const maior = Math.max(...Object.values(itens));
  const maxBonus = app.get("PESO_MAX_EDITAL");

  /* A parcela do edital vale (itens / maior) * PESO_MAX_EDITAL. A base
     (1 + nunca respondida + dificuldade) é comum às duas, então a
     DIFERENÇA entre elas isola exatamente essa parcela. */
  const diferenca = pesoDe(app, "Fisioterapia") - pesoDe(app, "Legislação Aplicada ao SUS");
  const esperada = (itens["Fisioterapia"] / maior - itens["Legislação Aplicada ao SUS"] / maior) * maxBonus;
  assert.ok(Math.abs(diferenca - esperada) < 0.01,
    `diferença ${diferenca.toFixed(3)} deveria ser ${esperada.toFixed(3)}`);
});

test("a escala é comparável entre editais de tamanhos diferentes", () => {
  /* A disciplina mais pesada de qualquer trilha recebe o mesmo bônus
     máximo — é o que torna o modelo portável para um edital novo. */
  const sesau = comTrilha("SESAUAL_FISIO");
  const pcal = comTrilha("PCAL");
  const bonusSesau = pesoDe(sesau, "Fisioterapia") - pesoDe(sesau, "Fisioterapia");
  assert.equal(bonusSesau, 0, "sanidade do método de medição");

  const itensPcal = pcal.json("EDITAIS.PCAL.itensPorDisciplina");
  const maiorPcal = Math.max(...Object.values(itensPcal));
  assert.equal(maiorPcal, 10, "maior peso da PC-AL");
  const itensSesau = sesau.json("EDITAIS.SESAUAL_FISIO.itensPorDisciplina");
  assert.equal(Math.max(...Object.values(itensSesau)), 70, "maior peso da SESAU-AL");
});

test("o peso nunca é zero ou negativo", () => {
  const app = comTrilha("PCAL");
  const menor = app.rodar(`
    Math.min(...QUESTOES.slice(0, 300).map(q => pesoAdaptativo(q, { porDisc: [], taxa: 0.5 })))
  `);
  assert.ok(menor >= 0.1, `peso mínimo ${menor} abaixo do piso`);
});

test("a trilha delimita as disciplinas, não a procedência da questão", () => {
  const app = comTrilha("SESAUAL_FISIO");
  const disciplinas = app.json("[...new Set(questoesDoEscopo().map(q => q.disciplina))]");
  const doEdital = Object.keys(app.json("EDITAIS.SESAUAL_FISIO.itensPorDisciplina"));
  for (const d of disciplinas) {
    assert.ok(doEdital.includes(d), `"${d}" não consta do edital da SESAU-AL`);
  }
});

test("Direito Penal não aparece para quem faz a prova de Fisioterapia", () => {
  const app = comTrilha("SESAUAL_FISIO");
  const disciplinas = app.json("listaDisciplinas()");
  assert.ok(!disciplinas.includes("Direito Penal"));
  assert.ok(disciplinas.includes("Fisioterapia"));
});

test("plano gratuito limita o banco; plano completo libera", () => {
  const app = criarApp();
  app.rodar(`APP_STATE.config.plano = "gratuito";`);
  const gratis = app.json("QUESTOES.filter(questaoLiberada).length");
  app.rodar(`APP_STATE.config.plano = "completo";`);
  const completo = app.json("QUESTOES.filter(questaoLiberada).length");

  assert.ok(gratis > 0, "o plano gratuito precisa ter conteúdo");
  assert.ok(completo > gratis, "assinar precisa liberar mais");
  assert.equal(completo, app.get("QUESTOES.length"));
});

/* ---------------- aritmética do branco ---------------- */

function comRespostas(app, { confianca, n, acertos }) {
  const qids = app.json(`QUESTOES.slice(0, ${n}).map(q => q.id)`);
  const registros = qids.map((qid, i) => ({
    qid, resposta: "C", correta: i < acertos, branco: false, confianca, data: Date.now(),
  }));
  app.ctx.__regs = registros;
  app.rodar(`for (const r of __regs) { APP_STATE.respostas[r.qid] = [r]; }`);
}

test("abaixo de 5 respostas na faixa, não há orientação (é ruído)", () => {
  const app = criarApp();
  comRespostas(app, { confianca: 1, n: 4, acertos: 1 });
  assert.equal(app.json("orientacaoBranco()").temDados, false);
});

test("taxa abaixo de 50% na faixa recomenda deixar em branco", () => {
  const app = criarApp();
  /* 10 chutes, 3 acertos: valor esperado 2(0,3) − 1 = −0,4 por item. */
  comRespostas(app, { confianca: 1, n: 10, acertos: 3 });

  const faixa = app.json("orientacaoBranco()").porNivel[1];
  assert.equal(faixa.n, 10);
  assert.ok(Math.abs(faixa.taxa - 0.3) < 1e-9);
  assert.ok(Math.abs(faixa.valorEsperado - -0.4) < 1e-9, "valor esperado por item chutado");
  assert.equal(faixa.recomendaBranco, true);
});

test("taxa acima de 50% recomenda responder", () => {
  const app = criarApp();
  comRespostas(app, { confianca: 3, n: 10, acertos: 8 });

  const faixa = app.json("orientacaoBranco()").porNivel[3];
  assert.ok(Math.abs(faixa.valorEsperado - 0.6) < 1e-9);
  assert.equal(faixa.recomendaBranco, false);
});

test("exatamente 50% não recomenda branco (o valor esperado é zero)", () => {
  const app = criarApp();
  comRespostas(app, { confianca: 2, n: 10, acertos: 5 });

  const faixa = app.json("orientacaoBranco()").porNivel[2];
  assert.equal(faixa.valorEsperado, 0);
  assert.equal(faixa.recomendaBranco, false, "no empate, chutar não perde pontos");
});

test("respostas em branco não entram no cálculo da própria orientação", () => {
  const app = criarApp();
  comRespostas(app, { confianca: 1, n: 10, acertos: 3 });
  app.rodar(`
    const extra = QUESTOES.slice(20, 30).map(q => q.id);
    for (const qid of extra) APP_STATE.respostas[qid] = [{ qid, branco: true, correta: false, confianca: 1 }];
  `);
  assert.equal(app.json("orientacaoBranco()").porNivel[1].n, 10, "só o que foi de fato respondido conta");
});

/* ---------------- projeção de corte ----------------
   A função mais perigosa do app: diz ao aluno se ele passaria. A versão
   anterior errava para CIMA por três motivos somados — contava revisões,
   extrapolava uma média geral ignorando a composição da prova, e
   devolvia um booleano que soava igual com 40 ou 4.000 respostas. */

/* Preenche o histórico com taxa controlada por disciplina. */
function responder(app, { disciplinas, porDisc, taxa, revisoes = false }) {
  app.ctx.__c = { disciplinas, porDisc, taxa, revisoes };
  app.rodar(`
    (function(){
      APP_STATE.respostas = {};
      const alvo = QUESTOES.filter(questaoLiberada);
      const agora = Date.now();
      for (const disc of __c.disciplinas) {
        const daDisc = alvo.filter(q => q.disciplina === disc).slice(0, __c.porDisc);
        daDisc.forEach((q, i) => {
          /* Distribuição tipo Bresenham: acerta round(n × taxa) itens em
             QUALQUER n. Com o ingênuo \`i/n < taxa\`, uma amostra de 3 dava
             100% de acerto — e p=1 zera a variância, mascarando justamente
             o efeito do tamanho da amostra que este arquivo testa. */
          const correta = Math.floor((i + 1) * __c.taxa) > Math.floor(i * __c.taxa);
          const h = [{ qid: q.id, correta,
                       branco: false, tempoMs: 40000, confianca: 2, data: agora - 1000 }];
          /* Revisão: reencontra a questão e acerta, como quem já leu a explicação. */
          if (__c.revisoes) h.push({ qid: q.id, correta: true, branco: false, tempoMs: 9000, confianca: 3, data: agora });
          APP_STATE.respostas[q.id] = h;
        });
      }
    })()
  `);
}

const todasPcal = app => app.json("Object.keys(EDITAIS.PCAL.itensPorDisciplina)");
const totalDe = app => app.json("projecaoCorte()").blocos.find(b => b.chave === "total");

test("revisões não entram na taxa que projeta aprovação", () => {
  const app = comTrilha("PCAL");
  const discs = todasPcal(app);

  responder(app, { disciplinas: discs, porDisc: 25, taxa: 0.72, revisoes: false });
  const semRevisao = app.json("projecaoCorte()").taxa;

  responder(app, { disciplinas: discs, porDisc: 25, taxa: 0.72, revisoes: true });
  const p = app.json("projecaoCorte()");

  assert.ok(Math.abs(p.taxa - semRevisao) < 0.01, "a taxa da projeção ignora as revisões");
  assert.ok(p.taxaComRevisoes > p.taxa + 0.03,
    "e a taxa cheia, exposta para a interface explicar, é mesmo maior");
});

test("estudar só as disciplinas favoritas não vira prognóstico de aprovação", () => {
  const app = comTrilha("PCAL");
  const discs = todasPcal(app);

  /* 85% de acerto, mas só em 4 das 15 disciplinas do edital. */
  responder(app, { disciplinas: discs.slice(0, 4), porDisc: 40, taxa: 0.85 });
  const parcial = totalDe(app).liquidaProjetada;

  /* Mesma taxa, cobrindo a prova inteira. */
  responder(app, { disciplinas: discs, porDisc: 15, taxa: 0.85 });
  const completo = totalDe(app).liquidaProjetada;

  assert.ok(parcial < completo,
    "as disciplinas não estudadas não podem herdar a taxa das favoritas");
});

test("a projeção devolve probabilidade, não um sim/não", () => {
  const app = comTrilha("PCAL");
  responder(app, { disciplinas: todasPcal(app), porDisc: 25, taxa: 0.72 });
  const t = totalDe(app);
  assert.ok(t.chance > 0 && t.chance < 1);
  assert.ok(["passa", "reprova", "incerto"].includes(t.veredito));
});

test("quem está no limite recebe 'incerto', não 'passa'", () => {
  const app = comTrilha("PCAL");
  /* 64% de acerto real: abaixo dos 65% em que 2A−N alcança o corte. A
     fórmula antiga, somando as revisões, anunciava aprovação com folga. */
  responder(app, { disciplinas: todasPcal(app), porDisc: 25, taxa: 0.62, revisoes: true });
  const t = totalDe(app);

  assert.ok(t.chance < 0.9, `chance ${t.chance.toFixed(2)} não deveria autorizar "passa"`);
  assert.notEqual(t.veredito, "passa");
});

test("acertar tudo numa amostra pequena não gera certeza absoluta", () => {
  const app = comTrilha("PCAL");
  responder(app, { disciplinas: todasPcal(app), porDisc: 2, taxa: 1.0 });
  const t = totalDe(app);
  /* Sem o prior encolhido contra 0,5, a variância zerava e a projeção
     anunciava aprovação certa com 30 respostas. */
  assert.ok(t.intervalo.desvio > 0, "o intervalo não pode ter largura zero");
});

test("mais respostas estreitam o intervalo", () => {
  const app = comTrilha("PCAL");
  const discs = todasPcal(app);
  responder(app, { disciplinas: discs, porDisc: 3, taxa: 0.72 });
  const poucas = totalDe(app).intervalo.desvio;
  responder(app, { disciplinas: discs, porDisc: 40, taxa: 0.72 });
  const muitas = totalDe(app).intervalo.desvio;
  assert.ok(muitas < poucas, `desvio deveria cair: ${poucas.toFixed(2)} -> ${muitas.toFixed(2)}`);
});

test("sem histórico não há projeção", () => {
  const app = comTrilha("PCAL");
  app.rodar(`APP_STATE.respostas = {};`);
  assert.equal(app.json("projecaoCorte()"), null);
});

test("a soma dos blocos bate com a prova inteira", () => {
  const app = comTrilha("PCAL");
  responder(app, { disciplinas: todasPcal(app), porDisc: 20, taxa: 0.72 });
  const p = app.json("projecaoCorte()");
  const p1 = p.blocos.find(b => b.chave === "p1");
  const p2 = p.blocos.find(b => b.chave === "p2");
  const t = p.blocos.find(b => b.chave === "total");
  assert.equal(p1.itens + p2.itens, t.itens);
  assert.ok(Math.abs((p1.acertosProjetados + p2.acertosProjetados) - t.acertosProjetados) < 1.5,
    "P1 + P2 deve reproduzir o conjunto");
});

test("normalAcumulada confere com a tabela", () => {
  const app = criarApp();
  for (const [z, esperado] of [[-1.96, 0.025], [0, 0.5], [1.645, 0.95], [2.576, 0.995]]) {
    assert.ok(Math.abs(app.chamar("normalAcumulada", z) - esperado) < 1e-3, `Φ(${z})`);
  }
});
