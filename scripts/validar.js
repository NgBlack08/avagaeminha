#!/usr/bin/env node
/*
 * validar.js — trava de qualidade do banco de questões.
 *
 * Auditando o banco em 28/07/2026, a integridade estava impecável: 999
 * questões, zero IDs repetidos, zero enunciados duplicados, zero campos
 * faltando. Mas isso era mantido inteiramente à mão — nada impedia um lote
 * novo de entrar com gabarito inválido ou "cognitivo" incompleto, e o erro
 * só apareceria em produção, na frente do aluno.
 *
 * Este script separa duas coisas:
 *
 *   ERROS   quebram o build. São defeitos objetivos: campo faltando,
 *           gabarito fora de {C,E}, ID repetido, padrão inexistente.
 *
 *   AVISOS  não quebram nada. São sinais estatísticos sobre o quanto o
 *           banco imita a banca de verdade — o tipo de coisa que se
 *           degrada em silêncio, lote a lote, e que ninguém percebe
 *           olhando uma questão por vez.
 *
 * Uso:
 *   node scripts/validar.js          # relatório completo
 *   node scripts/validar.js --quieto # só erros (usado pelo versionar.js)
 */

const { sincronizarManifesto, carregarDados } = require("./fontes.js");

/* ---------- contrato de uma questão ---------- */

const CAMPOS_OBRIGATORIOS = [
  "id", "concurso", "cargo", "disciplina", "assunto", "dificuldade",
  "gabarito", "enunciado", "pegadinha", "tempoIdealSeg", "probReaparecer",
];
const CAMPOS_COMENTARIO = ["resolucao", "fundamento", "macete", "erroComum", "comoBancaPensa"];
const CAMPOS_COGNITIVO = [
  "motivo", "mede", "pegadinhaDesc", "ondeErra", "palavraCritica", "tecnica", "regraMental",
];

/* Limiares dos avisos. Não são leis da natureza — são o ponto em que um
   desequilíbrio deixa de ser ruído e passa a ensinar o reflexo errado. */
const LIMIAR_PADRAO_ENVIESADO = 0.90; /* padrão que quase sempre cai no mesmo gabarito */
const LIMIAR_CE_GLOBAL = 0.05;        /* desvio tolerado em torno de 50/50 */
const LIMIAR_VIES_TAMANHO = 0.12;     /* diferença de comprimento entre C e E */
const MIN_ITENS_PARA_AVALIAR = 15;    /* abaixo disso, a amostra não diz nada */

function normalizar(texto) {
  return String(texto)
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

function validar({ quieto = false } = {}) {
  const manifesto = sincronizarManifesto({ gravar: false });
  const { QUESTOES, DNA_BANCA, PREDICOES } = carregarDados(manifesto);

  const erros = [];
  const avisos = [];
  const pct = (a, b) => (100 * a / b).toFixed(1) + "%";

  /* ================= ERROS ================= */

  const slugsValidos = new Set(DNA_BANCA.map(d => d.slug));
  const vistosId = new Map();
  const vistosEnunciado = new Map();

  for (const q of QUESTOES) {
    const onde = q.id || "(questão sem id)";

    for (const c of CAMPOS_OBRIGATORIOS) {
      if (q[c] === undefined || q[c] === null || q[c] === "") erros.push(`${onde}: campo obrigatório ausente — ${c}`);
    }
    for (const c of CAMPOS_COMENTARIO) {
      if (!q.comentario || !q.comentario[c]) erros.push(`${onde}: comentario.${c} ausente`);
    }
    for (const c of CAMPOS_COGNITIVO) {
      if (!q.cognitivo || !q.cognitivo[c]) erros.push(`${onde}: cognitivo.${c} ausente`);
    }

    if (!["C", "E"].includes(q.gabarito)) erros.push(`${onde}: gabarito inválido — "${q.gabarito}" (esperado C ou E)`);
    if (![1, 2, 3].includes(q.dificuldade)) erros.push(`${onde}: dificuldade inválida — "${q.dificuldade}" (esperado 1, 2 ou 3)`);
    if (!Array.isArray(q.cargo) || !q.cargo.length) erros.push(`${onde}: cargo deve ser um array não vazio`);
    if (typeof q.tempoIdealSeg !== "number" || q.tempoIdealSeg <= 0) erros.push(`${onde}: tempoIdealSeg inválido — "${q.tempoIdealSeg}"`);
    if (typeof q.probReaparecer !== "number" || q.probReaparecer < 0 || q.probReaparecer > 1) {
      erros.push(`${onde}: probReaparecer fora de 0..1 — "${q.probReaparecer}"`);
    }
    /* O padrão precisa existir no DNA_BANCA: é ele que alimenta o bloco
       "Padrão da banca detectado" e o Raio-X. Um slug órfão some da tela
       sem erro nenhum. */
    if (!slugsValidos.has(q.pegadinha)) {
      erros.push(`${onde}: pegadinha "${q.pegadinha}" não existe em DNA_BANCA`);
    }

    if (vistosId.has(q.id)) erros.push(`${onde}: ID repetido (já usado)`);
    else vistosId.set(q.id, true);

    const chave = normalizar(q.enunciado);
    if (vistosEnunciado.has(chave)) erros.push(`${onde}: enunciado idêntico ao de ${vistosEnunciado.get(chave)}`);
    else vistosEnunciado.set(chave, q.id);
  }

  /* ================= AVISOS ================= */

  const total = QUESTOES.length;
  const certos = QUESTOES.filter(q => q.gabarito === "C").length;
  const taxaC = certos / total;

  if (Math.abs(taxaC - 0.5) > LIMIAR_CE_GLOBAL) {
    avisos.push(`Equilíbrio C/E global em ${pct(certos, total)} CERTO — a banca fica perto de 50/50.`);
  }

  /* Desequilíbrio por padrão: o ponto crítico da auditoria. Quando um
     padrão quase sempre cai no mesmo gabarito, o rótulo vira paráfrase da
     resposta e o feedback pós-resposta deixa de ensinar algo transferível. */
  const porPadrao = new Map();
  for (const q of QUESTOES) {
    if (!porPadrao.has(q.pegadinha)) porPadrao.set(q.pegadinha, []);
    porPadrao.get(q.pegadinha).push(q.gabarito);
  }
  const enviesados = [];
  for (const [padrao, gabs] of porPadrao) {
    if (gabs.length < MIN_ITENS_PARA_AVALIAR) continue;
    const c = gabs.filter(g => g === "C").length;
    const taxa = c / gabs.length;
    if (taxa >= LIMIAR_PADRAO_ENVIESADO || taxa <= 1 - LIMIAR_PADRAO_ENVIESADO) {
      enviesados.push({ padrao, n: gabs.length, taxa });
    }
  }
  enviesados.sort((a, b) => b.n - a.n);
  for (const e of enviesados) {
    avisos.push(`Padrão "${e.padrao}" cai em ${e.taxa >= 0.5 ? "CERTO" : "ERRADO"} em ${pct(e.taxa >= 0.5 ? e.taxa : 1 - e.taxa, 1)} dos ${e.n} itens — previsível demais.`);
  }

  /* Viés de comprimento: item mais longo tendendo a um gabarito é um tell
     que o candidato aprende sem perceber. */
  const media = a => a.reduce((s, x) => s + x, 0) / (a.length || 1);
  const mediaC = media(QUESTOES.filter(q => q.gabarito === "C").map(q => q.enunciado.length));
  const mediaE = media(QUESTOES.filter(q => q.gabarito === "E").map(q => q.enunciado.length));
  const viesTam = Math.abs(mediaC - mediaE) / Math.max(mediaC, mediaE);
  if (viesTam > LIMIAR_VIES_TAMANHO) {
    avisos.push(`Enunciados CERTO têm ${Math.round(mediaC)} caracteres contra ${Math.round(mediaE)} dos ERRADO (${(viesTam * 100).toFixed(0)}% de diferença) — vira pista de comprimento.`);
  }

  /* Cobertura x peso: disciplina de peso alto e banco raso é onde o aluno
     mais perde ponto. */
  const pesoPorDisc = new Map();
  for (const p of PREDICOES) {
    if (!pesoPorDisc.has(p.disciplina)) pesoPorDisc.set(p.disciplina, []);
    pesoPorDisc.get(p.disciplina).push(p.score);
  }
  const discNoBanco = new Map();
  for (const q of QUESTOES) discNoBanco.set(q.disciplina, (discNoBanco.get(q.disciplina) || 0) + 1);

  const semPredicao = [...discNoBanco.keys()].filter(d => !pesoPorDisc.has(d));
  if (semPredicao.length) {
    avisos.push(`${semPredicao.length} disciplina(s) sem entrada em PREDICOES — o Plano de Estudo as prioriza pelo peso padrão: ${semPredicao.join(", ")}.`);
  }

  const comPeso = [...pesoPorDisc.entries()]
    .filter(([d]) => discNoBanco.has(d))
    .map(([d, scores]) => ({ d, peso: media(scores) }));
  const somaPesos = comPeso.reduce((s, x) => s + x.peso, 0);
  for (const { d, peso } of comPeso.sort((a, b) => b.peso - a.peso)) {
    const ideal = peso / somaPesos;
    const real = discNoBanco.get(d) / total;
    const desvio = (real - ideal) * 100;
    if (desvio < -5) {
      avisos.push(`"${d}" tem peso ${peso.toFixed(0)} mas só ${pct(discNoBanco.get(d), total)} do banco (${discNoBanco.get(d)} itens) — ${Math.abs(desvio).toFixed(1)}pp abaixo do que o peso pediria.`);
    }
  }

  const metricas = {
    questoes: total, taxaC, arquivos: manifesto.length,
    padroesEnviesados: enviesados.length, disciplinas: discNoBanco.size,
  };

  if (!quieto) relatorio({ erros, avisos, metricas });
  return { erros, avisos, metricas };
}

function relatorio({ erros, avisos, metricas }) {
  const pct = n => (100 * n).toFixed(1) + "%";
  console.log(`Banco: ${metricas.questoes} questões em ${metricas.arquivos} arquivos, ${metricas.disciplinas} disciplinas.`);
  console.log(`Equilíbrio C/E: ${pct(metricas.taxaC)} CERTO.`);
  console.log("");

  if (erros.length) {
    console.log(`ERROS (${erros.length}) — o build não passa:`);
    for (const e of erros.slice(0, 30)) console.log(`  x ${e}`);
    if (erros.length > 30) console.log(`  ... e mais ${erros.length - 30}.`);
  } else {
    console.log("Erros: nenhum. Contrato de dados íntegro.");
  }

  console.log("");
  if (avisos.length) {
    console.log(`AVISOS (${avisos.length}) — não bloqueiam, mas medem o quanto o banco imita a banca:`);
    for (const a of avisos) console.log(`  ! ${a}`);
  } else {
    console.log("Avisos: nenhum.");
  }
}

module.exports = { validar };

if (require.main === module) {
  try {
    const { erros } = validar({ quieto: process.argv.includes("--quieto") });
    process.exit(erros.length ? 1 : 0);
  } catch (e) {
    console.error("Erro ao validar:", e.message);
    process.exit(1);
  }
}
