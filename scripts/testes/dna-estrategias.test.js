/*
 * Integridade do DNA da banca e das estratégias.
 *
 * Estas três estruturas — DNA_BANCA, ESTRATEGIAS e o campo `pegadinha` de
 * cada questão — se referenciam por string, sem nenhum mecanismo que avise
 * quando uma delas anda sozinha. Um `slug` renomeado, um `exemplo` que
 * aponta para questão removida ou um `trecho` que deixou de existir no
 * enunciado citado não quebram nada em tempo de carga: o app simplesmente
 * deixa de destacar o trecho, ou o padrão some da tela, em silêncio.
 *
 * A varredura que originou este arquivo foi feita à mão e não achou
 * defeito. O valor está em não precisar refazê-la: daqui em diante o
 * portão do versionar.js reprova a divergência antes do deploy.
 *
 * Não se testa aqui a COMPOSIÇÃO do banco (quantos itens de cada padrão,
 * para que lado caem). Aquilo é medida móvel, muda a cada lote, e quem
 * reporta é o validador em forma de aviso — não de erro.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp } = require("./harness.js");

const app = criarApp();

test("todo padrão declarado no DNA tem ao menos uma questão no banco", () => {
  const orfas = app.json(`(() => {
    const usados = new Set(QUESTOES.map(q => q.pegadinha));
    return DNA_BANCA.filter(p => !usados.has(p.slug)).map(p => p.slug);
  })()`);
  assert.deepEqual(orfas, [], `padrões sem nenhuma questão: ${orfas.join(", ")}`);
});

test("toda questão aponta para um padrão que existe no DNA", () => {
  const invalidas = app.json(`(() => {
    const slugs = new Set(DNA_BANCA.map(p => p.slug));
    return QUESTOES.filter(q => !slugs.has(q.pegadinha)).map(q => q.id + ":" + q.pegadinha).slice(0, 10);
  })()`);
  assert.deepEqual(invalidas, [], `questões com pegadinha desconhecida: ${invalidas.join(", ")}`);
});

test("todo contraDNA de estratégia aponta para slug existente", () => {
  const quebrados = app.json(`(() => {
    const slugs = new Set(DNA_BANCA.map(p => p.slug));
    const out = [];
    for (const e of ESTRATEGIAS) for (const c of (e.contraDNA || [])) if (!slugs.has(c)) out.push(e.id + " -> " + c);
    return out;
  })()`);
  assert.deepEqual(quebrados, [], `contraDNA inválido: ${quebrados.join(", ")}`);
});

test("todo exemplo de estratégia é uma questão que existe", () => {
  const sumidos = app.json(`(() => {
    const ids = new Set(QUESTOES.map(q => q.id));
    return ESTRATEGIAS.filter(e => e.exemplo && !ids.has(e.exemplo)).map(e => e.id + " -> " + e.exemplo);
  })()`);
  assert.deepEqual(sumidos, [], `exemplo inexistente: ${sumidos.join(", ")}`);
});

/* O `trecho` é destacado dentro do enunciado do exemplo (marcaTrecho, em
   js/engine.js). Se o enunciado for reescrito e o trecho não acompanhar, o
   destaque some sem erro — e a estratégia perde justamente a parte que
   mostra ONDE olhar. */
test("todo trecho de estratégia ocorre no enunciado do seu exemplo", () => {
  const perdidos = app.json(`(() => {
    const porId = new Map(QUESTOES.map(q => [q.id, q]));
    const out = [];
    for (const e of ESTRATEGIAS) {
      if (!e.trecho || !e.exemplo) continue;
      const q = porId.get(e.exemplo);
      if (q && !(q.enunciado || "").includes(e.trecho)) out.push(e.id + " -> " + e.exemplo);
    }
    return out;
  })()`);
  assert.deepEqual(perdidos, [], `trecho ausente do enunciado: ${perdidos.join(", ")}`);
});

/* `escopo: "juridica"` existe porque `literalidade` quer dizer coisas
   diferentes em Direito e em Estatística. Um exemplo fora do escopo que a
   própria estratégia declara é contradição interna. */
test("estratégia de escopo jurídico não exemplifica com disciplina não jurídica", () => {
  const incoerentes = app.json(`(() => {
    const porId = new Map(QUESTOES.map(q => [q.id, q]));
    return ESTRATEGIAS.filter(e => {
      if (e.escopo !== "juridica" || !e.exemplo) return false;
      const q = porId.get(e.exemplo);
      return q && !DISCIPLINAS_JURIDICAS.includes(q.disciplina);
    }).map(e => e.id);
  })()`);
  assert.deepEqual(incoerentes, [], `escopo incoerente: ${incoerentes.join(", ")}`);
});

/* Nenhuma questão pode ficar sem retorno depois de respondida. O risco é
   real: marcar uma estratégia como `escopo: "juridica"` pode deixar um
   padrão descoberto fora do Direito sem que nada acuse. */
test("toda questão recebe ao menos uma estratégia aplicável", () => {
  const semRetorno = app.json(`(() => {
    APP_STATE.config.plano = "completo";
    return QUESTOES.filter(q => q.pegadinha && estrategiasDaQuestao(q).length === 0)
      .map(q => q.id + " (" + q.disciplina + "/" + q.pegadinha + ")").slice(0, 10);
  })()`);
  assert.deepEqual(semRetorno, [], `questões sem estratégia: ${semRetorno.join(", ")}`);
});

/* composicaoPadroes() alimenta o rótulo "Neste banco: N itens · X% caem em
   CERTO/ERRADO" que o Dashboard, o Raio-X e o bloco pós-resposta exibem ao
   lado da estimativa editorial. Se ela devolvesse número fora de faixa, o
   texto sairia absurdo em produção sem nada quebrar. */
test("composicaoPadroes devolve previsibilidade entre 0,5 e 1", () => {
  const fora = app.json(`(() => {
    APP_STATE.config.plano = "completo";
    APP_STATE.config.concursoFoco = "PCAL";
    return composicaoPadroes()
      .filter(c => !(c.previsibilidade >= 0.5 && c.previsibilidade <= 1) || c.total !== c.C + c.E)
      .map(c => c.slug + ":" + c.previsibilidade);
  })()`);
  assert.deepEqual(fora, [], `composição inconsistente: ${fora.join(", ")}`);
});
