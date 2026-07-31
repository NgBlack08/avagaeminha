/* =====================================================================
   QUESTLAB — Motor Inteligente
   Perfil do estudante (Módulo 8), simulador adaptativo com repetição
   espaçada (Módulo 7), detector de pegadinhas (Módulo 5) e camada
   estatística (Módulos 2, 12, 13 — versão local/heurística).
   ===================================================================== */

const STORAGE_KEY = "questlab-v1";

/* ---------------- Detalhes das questões sob demanda ----------------
   "comentario" e "cognitivo" respondem por 71% do banco (333 KB de 468 KB
   gzip) e só aparecem DEPOIS que o usuário responde. Carregá-los no boot
   custava caro mesmo com cache quente, porque cache evita o download, não
   o parse dos 2,25 MB de JS.

   Ficam então em js/gerado/detalhes-<disciplina>.js, gerados por
   scripts/dividir-dados.js e trazidos por injeção de <script> — e não por
   fetch(), que o navegador bloqueia em file://, cenário que o README ainda
   documenta como forma de abrir o app. */

const QUESTOES_POR_ID = new Map(QUESTOES.map(q => [q.id, q]));
const detalhesCarregados = new Set();
const detalhesEmVoo = new Map();

/* Chamada pelos próprios arquivos de detalhe assim que carregam. */
function registrarDetalhes(mapa) {
  for (const id in mapa) {
    const q = QUESTOES_POR_ID.get(id);
    if (q) Object.assign(q, mapa[id]);
  }
}

function slugDisciplina(texto) {
  return String(texto)
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/* Aceita uma disciplina ou uma lista. Resolve imediatamente se já estiver
   tudo em memória, então é barato chamar antes de qualquer render. */
function carregarDetalhes(disciplinas) {
  const pendentes = [...new Set([].concat(disciplinas).map(slugDisciplina))]
    .filter(s => DETALHES_CHUNKS[s] && !detalhesCarregados.has(s));
  if (!pendentes.length) return Promise.resolve();

  return Promise.all(pendentes.map(s => {
    if (detalhesEmVoo.has(s)) return detalhesEmVoo.get(s);
    const p = new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.src = "js/gerado/" + DETALHES_CHUNKS[s];
      el.onload = () => { detalhesCarregados.add(s); detalhesEmVoo.delete(s); resolve(); };
      el.onerror = () => { detalhesEmVoo.delete(s); reject(new Error("Falha ao carregar os detalhes de " + s)); };
      document.head.appendChild(el);
    });
    detalhesEmVoo.set(s, p);
    return p;
  })).then(() => undefined);
}

/* Usado pela busca textual, que varre a resolução de todas as questões. */
function carregarTodosDetalhes() {
  return carregarDetalhes(Object.keys(DETALHES_CHUNKS));
}

/* ---------------- Persistência ----------------
   Login obrigatório: o app só é exibido após autenticação (Supabase),
   e todo o progresso é salvo e sincronizado na nuvem (MODO "cloud").
   "offline"/localStorage existe apenas como estado inicial transitório
   (antes do login) e rede de segurança defensiva — não é acessível
   pela interface. */
let MODO = "offline";
let CURRENT_USER = null;

function loadLocalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* estado corrompido: recomeça */ }
  return { respostas: {}, srs: {}, sessoes: [], config: { tema: "dark", concursoFoco: null, cargoFoco: "Escrivão", isAdmin: false, plano: "gratuito", onboardingVisitas: {}, metaTaxa: 0.75, dataProva: null } };
}
function saveLocalState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(APP_STATE)); }
const APP_STATE = loadLocalState();

/* Salva a config (tema/foco) no destino certo conforme o modo atual. */
function saveState() {
  if (MODO === "cloud" && CURRENT_USER) {
    supa.from("profiles").update({
      tema: APP_STATE.config.tema,
      concurso_foco: APP_STATE.config.concursoFoco,
      cargo_foco: APP_STATE.config.cargoFoco,
      updated_at: new Date().toISOString(),
    }).eq("id", CURRENT_USER.id).then(({ error }) => { if (error) console.error("Erro ao salvar perfil:", error); });
  } else {
    saveLocalState();
  }
}

/* Busca todo o estado do usuário logado no Supabase e popula o APP_STATE. */
async function carregarEstadoNuvem(user) {
  CURRENT_USER = user;
  MODO = "cloud";
  const [{ data: perfil }, { data: respostasRows }, { data: srsRows }, { data: sessoesRows }, { data: assinaturaAtiva }, { data: feedbackRows }] = await Promise.all([
    supa.from("profiles").select("*").eq("id", user.id).single(),
    supa.from("respostas").select("*").eq("user_id", user.id).order("created_at", { ascending: true }),
    supa.from("srs").select("*").eq("user_id", user.id),
    supa.from("sessoes").select("*").eq("user_id", user.id).order("created_at", { ascending: true }),
    supa.from("assinaturas").select("plano_tipo").eq("user_id", user.id).eq("status", "autorizada").maybeSingle(),
    /* Só o par questão/motivo: no máximo uma linha por questão sinalizada,
       o que na prática é uma dúzia. Entra no mesmo Promise.all para não
       custar mais um tempo de ida e volta no boot. */
    supa.from("feedback_questao").select("questao_id, motivo, comentario").eq("user_id", user.id),
  ]);
  const respostas = {};
  for (const r of (respostasRows || [])) {
    if (!respostas[r.qid]) respostas[r.qid] = [];
    respostas[r.qid].push({ qid: r.qid, resposta: r.resposta, correta: r.correta, branco: r.branco, tempoMs: r.tempo_ms, confianca: r.confianca, data: new Date(r.created_at).getTime() });
  }
  const srs = {};
  for (const s of (srsRows || [])) srs[s.qid] = { nivel: s.nivel, proxima: new Date(s.proxima).getTime() };
  const sessoes = (sessoesRows || []).map(s => ({ data: new Date(s.created_at).getTime(), n: s.n, acertos: s.acertos, erros: s.erros, brancos: s.brancos, liquida: s.liquida, tempoTotal: s.tempo_total }));
  FEEDBACK_ENVIADO.clear();
  for (const f of (feedbackRows || [])) FEEDBACK_ENVIADO.set(f.questao_id, { motivo: f.motivo, comentario: f.comentario });
  APP_STATE.respostas = respostas;
  APP_STATE.srs = srs;
  APP_STATE.sessoes = sessoes;
  APP_STATE.config = {
    tema: perfil?.tema || "dark",
    concursoFoco: perfil?.concurso_foco || null,
    cargoFoco: perfil?.cargo_foco || "Escrivão",
    nickname: perfil?.nickname || null,
    isAdmin: perfil?.is_admin || false,
    plano: (perfil?.plano === "completo" || assinaturaAtiva) ? "completo" : "gratuito",
    assinaturaTipo: assinaturaAtiva?.plano_tipo || null,
    onboardingVisitas: perfil?.onboarding_visitas || {},
    metaTaxa: perfil?.meta_taxa ?? 0.75,
    dataProva: perfil?.data_prova || null,
  };
}

/* Define a meta de taxa de acerto do Radar de Aprovação (0.10–1.00) e
   sincroniza na nuvem — mesmo padrão de marcarVisitaOnboarding(). */
function definirMetaTaxa(valor) {
  const meta = Math.min(1, Math.max(0.1, valor));
  APP_STATE.config.metaTaxa = meta;
  if (MODO === "cloud" && CURRENT_USER) {
    supa.from("profiles").update({
      meta_taxa: meta,
      updated_at: new Date().toISOString(),
    }).eq("id", CURRENT_USER.id).then(({ error }) => { if (error) console.error("Erro ao salvar meta de aprovação:", error); });
  } else {
    saveLocalState();
  }
}

/* ---------------- Feedback sobre a explicação ----------------
   O validador mede o que dá para medir em texto: resolução que ecoa o
   enunciado sem citar fonte. O que ele não alcança é "li tudo e continuo
   sem entender" — quatro heurísticas foram testadas para isso e todas
   marcaram resolução boa demais para valer a pena. Quem sabe é o leitor,
   então a fila de reescrita vem dele.

   Motivos fechados, e não campo livre, porque uma fila só serve se for
   contável: cinco alunos travados na mesma questão é sinal; cinco textos
   soltos são leitura. O comentário livre continua existindo, opcional,
   para o que a lista não cobre. */
const FEEDBACK_MOTIVOS = [
  { slug: "nao_explica",            rotulo: "A resolução não explica por que essa é a resposta" },
  { slug: "gabarito_suspeito",      rotulo: "Acho que o gabarito está errado" },
  { slug: "fonte_incorreta",        rotulo: "O fundamento ou a jurisprudência não confere" },
  { slug: "estrategia_nao_encaixa", rotulo: "A estratégia mostrada não se aplica a esta questão" },
];

/* IDs que o usuário já sinalizou, carregados no boot junto do resto do
   estado. Existe para o botão nascer marcado ao reabrir a questão — sem
   isso o aluno reclama duas vezes achando que a primeira não pegou. */
const FEEDBACK_ENVIADO = new Map();

function feedbackDaQuestao(qid) { return FEEDBACK_ENVIADO.get(qid) || null; }

async function enviarFeedback(qid, disciplina, motivo, comentario) {
  if (MODO !== "cloud" || !CURRENT_USER) throw new Error("é preciso estar logado para enviar feedback");
  const { error } = await supa.rpc("registrar_feedback", {
    p_questao_id: qid,
    p_disciplina: disciplina || null,
    p_motivo: motivo,
    p_comentario: comentario || null,
  });
  if (error) throw error;
  FEEDBACK_ENVIADO.set(qid, { motivo, comentario: comentario || null });
}

async function removerFeedback(qid) {
  if (MODO !== "cloud" || !CURRENT_USER) return;
  const { error } = await supa.rpc("remover_feedback", { p_questao_id: qid });
  if (error) throw error;
  FEEDBACK_ENVIADO.delete(qid);
}

/* Define (ou limpa, com valor null) a data-alvo da prova, usada pelo
   Plano de Estudo Dirigido para calcular dias restantes e ritmo diário. */
function definirDataProva(valorISO) {
  APP_STATE.config.dataProva = valorISO || null;
  if (MODO === "cloud" && CURRENT_USER) {
    supa.from("profiles").update({
      data_prova: valorISO || null,
      updated_at: new Date().toISOString(),
    }).eq("id", CURRENT_USER.id).then(({ error }) => { if (error) console.error("Erro ao salvar data da prova:", error); });
  } else {
    saveLocalState();
  }
}

/* Marca uma "visita" de onboarding (ex.: Raio-X, Perfil) e sincroniza na
   nuvem — mesma lógica de saveState(), mas escopada a esse campo para
   não reenviar tema/foco a cada clique. */
function marcarVisitaOnboarding(chave) {
  if (!APP_STATE.config.onboardingVisitas) APP_STATE.config.onboardingVisitas = {};
  if (APP_STATE.config.onboardingVisitas[chave]) return;
  APP_STATE.config.onboardingVisitas[chave] = true;
  if (MODO === "cloud" && CURRENT_USER) {
    supa.from("profiles").update({
      onboarding_visitas: APP_STATE.config.onboardingVisitas,
      updated_at: new Date().toISOString(),
    }).eq("id", CURRENT_USER.id).then(({ error }) => { if (error) console.error("Erro ao salvar visita de onboarding:", error); });
  } else {
    saveLocalState();
  }
}

/* Volta o app para modo local (após logout), recarregando o localStorage. */
function voltarModoLocal() {
  MODO = "offline";
  CURRENT_USER = null;
  const local = loadLocalState();
  APP_STATE.respostas = local.respostas;
  APP_STATE.srs = local.srs;
  APP_STATE.sessoes = local.sessoes;
  APP_STATE.config = local.config;
}

/* ---------------- Registro de respostas ---------------- */
/* resposta: "C" | "E" | "B" (branco). confianca: 1-3 (opcional) */
function registrarResposta(qid, resposta, tempoMs, confianca) {
  const q = QUESTOES.find(x => x.id === qid);
  if (!q) return null;
  const correta = resposta === q.gabarito;
  const registro = { qid, resposta, correta, branco: resposta === "B", tempoMs, confianca: confianca || null, data: Date.now() };
  if (!APP_STATE.respostas[qid]) APP_STATE.respostas[qid] = [];
  APP_STATE.respostas[qid].push(registro);
  atualizarSRS(qid, resposta === "B" ? false : correta, resposta === "B");
  if (MODO === "cloud" && CURRENT_USER) persistirRespostaNuvem(registro);
  else saveLocalState();
  return { correta, gabarito: q.gabarito };
}

function persistirRespostaNuvem(registro) {
  supa.from("respostas").insert({
    user_id: CURRENT_USER.id, qid: registro.qid, resposta: registro.resposta,
    correta: registro.correta, branco: registro.branco, tempo_ms: registro.tempoMs, confianca: registro.confianca,
  }).then(({ error }) => { if (error) console.error("Erro ao salvar resposta:", error); });
  const s = APP_STATE.srs[registro.qid];
  if (s) {
    supa.from("srs").upsert({
      user_id: CURRENT_USER.id, qid: registro.qid, nivel: s.nivel,
      proxima: new Date(s.proxima).toISOString(), updated_at: new Date().toISOString(),
    }).then(({ error }) => { if (error) console.error("Erro ao salvar SRS:", error); });
  }
}

/* Registra o resumo de um simulado concluído (Módulo 7 + 8). */
function registrarSessao(sessao) {
  APP_STATE.sessoes.push(sessao);
  if (MODO === "cloud" && CURRENT_USER) {
    supa.from("sessoes").insert({
      user_id: CURRENT_USER.id, n: sessao.n, acertos: sessao.acertos, erros: sessao.erros,
      brancos: sessao.brancos, liquida: sessao.liquida, tempo_total: sessao.tempoTotal,
    }).then(({ error }) => { if (error) console.error("Erro ao salvar sessão:", error); });
  } else {
    saveLocalState();
  }
}

/* ---------------- Repetição espaçada (SM-2 simplificado) ----------------
   Intervalos base em dias: erro→0 (revisar já), depois 1, 3, 7, 15, 30, 60 */
const SRS_INTERVALOS = [1, 3, 7, 15, 30, 60];
function atualizarSRS(qid, acertou, branco) {
  const s = APP_STATE.srs[qid] || { nivel: 0, proxima: 0 };
  if (branco) { /* branco não avança nem zera: revisa amanhã */
    s.proxima = Date.now() + 1 * 864e5;
  } else if (acertou) {
    s.nivel = Math.min(s.nivel + 1, SRS_INTERVALOS.length);
    s.proxima = Date.now() + SRS_INTERVALOS[Math.min(s.nivel - 1, SRS_INTERVALOS.length - 1)] * 864e5;
  } else {
    s.nivel = 0;
    s.proxima = Date.now(); /* devida imediatamente */
  }
  APP_STATE.srs[qid] = s;
}
function questaoLiberada(q) {
  return APP_STATE.config.plano === "completo" || FREE_QUESTION_IDS.has(q.id);
}

/* ---------------- Escopo da trilha ----------------
   A trilha escolhida (APP_STATE.config.concursoFoco) delimita QUAIS
   disciplinas existem para aquele candidato. Antes ela era só um peso: uma
   linha em pesoAdaptativo somava +1 às questões do concurso-foco, e todo o
   resto — Plano de Estudo, Radar, Raio-X, Perfil — calculava sobre o banco
   inteiro. Com uma carreira só isso não aparecia; com duas, um fisioterapeuta
   veria Direito Penal como disciplina a dominar.

   O critério é a DISCIPLINA constar do edital, não `q.concurso` bater. Ver
   EDITAIS em js/data.js para o porquê.

   Sem trilha escolhida (concursoFoco null), o escopo é o banco inteiro —
   é o estado de quem já usa o app e não escolheu nada. */
function editalDoFoco() {
  const foco = APP_STATE.config.concursoFoco;
  return (foco && EDITAIS[foco]) || null;
}
function disciplinasDoFoco() {
  const ed = editalDoFoco();
  return ed ? new Set(Object.keys(ed.itensPorDisciplina)) : null;
}
function noEscopo(q) {
  const discs = disciplinasDoFoco();
  return !discs || discs.has(q.disciplina);
}
/* Cargos da trilha; sem trilha, todos os conhecidos (união dos editais). */
function cargosDoFoco() {
  const ed = editalDoFoco();
  if (ed) return ed.cargos;
  return [...new Set(Object.values(EDITAIS).flatMap(e => e.cargos))];
}
/* Base de tudo que é análise: liberado pelo plano E dentro da trilha. */
function questoesDoEscopo() {
  return QUESTOES.filter(q => questaoLiberada(q) && noEscopo(q));
}

function questoesDevidas() {
  const agora = Date.now();
  return QUESTOES.filter(q => {
    if (!questaoLiberada(q) || !noEscopo(q)) return false;
    const s = APP_STATE.srs[q.id];
    return s && s.proxima <= agora;
  });
}

/* ---------------- Estatísticas do estudante ---------------- */
function statsQuestao(qid) {
  const hist = APP_STATE.respostas[qid] || [];
  const respondidas = hist.filter(h => !h.branco);
  const acertos = respondidas.filter(h => h.correta).length;
  return { tentativas: hist.length, respondidas: respondidas.length, acertos,
    taxa: respondidas.length ? acertos / respondidas.length : null,
    ultima: hist.length ? hist[hist.length - 1] : null };
}

function statsPorDisciplina() {
  const map = {};
  for (const q of questoesDoEscopo()) {
    if (!map[q.disciplina]) map[q.disciplina] = { disciplina: q.disciplina, total: 0, respondidas: 0, acertos: 0, erros: 0, brancos: 0, tempoTotal: 0, nRespostas: 0 };
    const d = map[q.disciplina];
    d.total++;
    const hist = APP_STATE.respostas[q.id] || [];
    for (const h of hist) {
      d.nRespostas++;
      d.tempoTotal += h.tempoMs || 0;
      if (h.branco) d.brancos++;
      else if (h.correta) d.acertos++;
      else d.erros++;
    }
    if (hist.length) d.respondidas++;
  }
  return Object.values(map).map(d => ({
    ...d,
    taxa: (d.acertos + d.erros) ? d.acertos / (d.acertos + d.erros) : null,
    liquida: d.acertos - d.erros,
    tempoMedio: d.nRespostas ? d.tempoTotal / d.nRespostas : null,
  }));
}

function statsGerais() {
  const porDisc = statsPorDisciplina();
  let acertos = 0, erros = 0, brancos = 0, tempoTotal = 0, n = 0;
  for (const d of porDisc) { acertos += d.acertos; erros += d.erros; brancos += d.brancos; tempoTotal += d.tempoTotal; n += d.nRespostas; }
  /* Contagens restritas à trilha: sem isso, quem já respondeu questões fora
     dela (por ter trocado de foco) teria cobertura acima de 100% — o
     numerador contando o histórico inteiro e o denominador só o escopo. */
  const idsDoEscopo = new Set(questoesDoEscopo().map(q => q.id));
  const respondidasUnicas = Object.keys(APP_STATE.respostas).filter(id => idsDoEscopo.has(id)).length;
  const taxa = (acertos + erros) ? acertos / (acertos + erros) : null;
  /* Índice de confiança calibrada: acerto médio quando confiança alta */
  let confAltaAcertos = 0, confAltaTotal = 0;
  for (const qid in APP_STATE.respostas) {
    if (!idsDoEscopo.has(qid)) continue;
    for (const h of APP_STATE.respostas[qid]) {
      if (h.confianca === 3 && !h.branco) { confAltaTotal++; if (h.correta) confAltaAcertos++; }
    }
  }
  return {
    porDisc, acertos, erros, brancos, nRespostas: n,
    respondidasUnicas, totalBanco: idsDoEscopo.size,
    taxa, liquida: acertos - erros,
    tempoMedioSeg: n ? (tempoTotal / n / 1000) : null,
    calibracao: confAltaTotal ? confAltaAcertos / confAltaTotal : null,
  };
}

/* Evolução temporal (por sessão de respostas agrupadas por dia) */
function evolucaoDiaria() {
  const porDia = {};
  for (const qid in APP_STATE.respostas) for (const h of APP_STATE.respostas[qid]) {
    const dia = new Date(h.data).toISOString().slice(0, 10);
    if (!porDia[dia]) porDia[dia] = { dia, acertos: 0, erros: 0 };
    if (!h.branco) (h.correta ? porDia[dia].acertos++ : porDia[dia].erros++);
  }
  return Object.values(porDia).sort((a, b) => a.dia.localeCompare(b.dia))
    .map(d => ({ ...d, taxa: (d.acertos + d.erros) ? d.acertos / (d.acertos + d.erros) : 0 }));
}

/* Estatística por padrão de pegadinha: onde o usuário mais cai */
function statsPorPegadinha() {
  const map = {};
  for (const q of questoesDoEscopo()) {
    const hist = (APP_STATE.respostas[q.id] || []).filter(h => !h.branco);
    if (!hist.length) continue;
    if (!map[q.pegadinha]) map[q.pegadinha] = { slug: q.pegadinha, acertos: 0, erros: 0 };
    for (const h of hist) (h.correta ? map[q.pegadinha].acertos++ : map[q.pegadinha].erros++);
  }
  return Object.values(map).map(p => {
    const dna = DNA_BANCA.find(d => d.slug === p.slug);
    return { ...p, nome: dna ? dna.nome : p.slug, taxa: p.acertos / (p.acertos + p.erros) };
  }).sort((a, b) => a.taxa - b.taxa);
}

/* ---------------- Radar de Aprovação (Módulo 12) ----------------
   Heurística transparente: combina taxa de acerto, cobertura do banco
   e regularidade. NÃO é garantia — é um termômetro de estudo. */
function radarAprovacao() {
  const g = statsGerais();
  const porDisc = g.porDisc.filter(d => d.acertos + d.erros > 0);
  const dominadas = porDisc.filter(d => d.taxa >= 0.8 && (d.acertos + d.erros) >= 4);
  const atencao = porDisc.filter(d => d.taxa >= 0.6 && d.taxa < 0.8);
  const risco = porDisc.filter(d => d.taxa < 0.6);
  const naoIniciadas = g.porDisc.filter(d => d.acertos + d.erros === 0);
  const cobertura = g.respondidasUnicas / g.totalBanco;
  const taxa = g.taxa ?? 0;
  /* nota 0-100: 60% desempenho + 25% cobertura + 15% calibração */
  const calib = g.calibracao ?? taxa;
  const score = Math.round(100 * (0.60 * taxa + 0.25 * cobertura + 0.15 * calib));
  /* referência: nota de corte típica CEBRASPE ≈ acima de 50% líquido;
     aprovados em carreiras policiais costumam ter 70%+ de acerto bruto —
     mas o usuário pode ajustar essa meta (APP_STATE.config.metaTaxa). */
  const metaTaxa = APP_STATE.config.metaTaxa ?? 0.75;
  const horasEstimadas = Math.max(0, Math.round((metaTaxa - taxa) * 400));
  return { dominadas, atencao, risco, naoIniciadas, score, taxa, cobertura, calibracao: g.calibracao,
    liquida: g.liquida, horasEstimadas, metaTaxa };
}

/* ---------------- Plano de Estudo Dirigido ----------------
   Cruza três coisas que já existiam isoladas no app: dias até a prova
   (config.dataProva), o quanto cada disciplina "pesa" na banca segundo
   a Predição de Cobrança (PREDICOES, por tema) e o desempenho real do
   usuário por disciplina (statsPorDisciplina). O resultado é uma lista
   priorizada do que estudar hoje, com uma cota sugerida de questões —
   não é mágica: é a meta semanal de sempre, só redistribuída pelo que
   mais pesa e pelo que está mais fraco. */
const PLANO_STATUS = {
  naoIniciada: { fator: 1.00, nome: "Não iniciada" },
  risco:       { fator: 1.35, nome: "Maior risco" },
  atencao:     { fator: 0.85, nome: "Precisa melhorar" },
  dominada:    { fator: 0.25, nome: "Domina" },
};
/* Disciplina fora do edital (treino complementar) pesa pouco, mas não zero. */
const PLANO_ITENS_PADRAO = 2;

/* Fases do plano em função dos dias até a prova. A estratégia muda: longe
   da prova, ampliar cobertura; perto, parar de ver conteúdo novo e revisar
   erros e questões vencidas na repetição espaçada. */
const PLANO_FASES = {
  base:    { id: "base",    nome: "Base",       desc: "Ampliar a cobertura do edital, sem descuidar do que já errou." },
  reforco: { id: "reforco", nome: "Reforço",   desc: "Reforçar os pontos fracos sem parar de cobrir o que falta." },
  reta:    { id: "reta",    nome: "Reta final", desc: "Só revisão: erros e questões vencidas. Nada de conteúdo novo." },
};
function faseDoPlano(diasRestantes) {
  if (diasRestantes === null) return PLANO_FASES.base;
  if (diasRestantes <= 7) return PLANO_FASES.reta;
  if (diasRestantes <= 30) return PLANO_FASES.reforco;
  return PLANO_FASES.base;
}

function planoEstudoDirigido() {
  const dataProva = APP_STATE.config.dataProva || null;
  let diasRestantes = null;
  if (dataProva) {
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    const alvo = new Date(dataProva + "T00:00:00");
    diasRestantes = Math.ceil((alvo - hoje) / 864e5);
  }
  const fase = faseDoPlano(diasRestantes);
  const agora = Date.now();

  /* Uma passada só, classificando cada questão liberada em "nova" (nunca
     respondida) ou "erro" (última resposta errada — mesma semântica do
     filtro 'só as que errei' do Banco, para o botão bater com a contagem). */
  const porDisc = {};
  for (const q of questoesDoEscopo()) {
    const d = porDisc[q.disciplina] || (porDisc[q.disciplina] =
      { disciplina: q.disciplina, total: 0, novas: 0, erros: 0, acertos: 0, totErros: 0 });
    d.total++;
    const hist = APP_STATE.respostas[q.id] || [];
    if (!hist.length) { d.novas++; continue; }
    for (const h of hist) { if (h.branco) continue; else if (h.correta) d.acertos++; else d.totErros++; }
    const ultima = hist[hist.length - 1];
    if (!ultima.branco && !ultima.correta) d.erros++;
  }

  const naReta = fase.id === "reta";
  const itens = Object.values(porDisc).map(d => {
    const taxa = (d.acertos + d.totErros) ? d.acertos / (d.acertos + d.totErros) : null;
    /* Sem trilha escolhida cai no peso padrão para todas — o plano ainda
       funciona, só não sabe o que vale mais naquela prova. */
    const itens = editalDoFoco()?.itensPorDisciplina || {};
    const peso = itens[d.disciplina] ?? PLANO_ITENS_PADRAO;
    let statusId;
    if (taxa === null) statusId = "naoIniciada";
    else if (taxa < 0.6) statusId = "risco";
    else if (taxa < 0.8) statusId = "atencao";
    else statusId = "dominada";
    /* Na reta final, conteúdo novo é descartado: só entra quem tem erro a
       revisar. Nas demais fases, novas e erros contam. */
    const pendentes = naReta ? d.erros : d.novas + d.erros;
    /* Modo do botão varia por fase, criando um gradiente real:
       - Base (>30d): cobertura primeiro — explora conteúdo novo se houver.
       - Reforço (8-30d): disciplina fraca com erro pendente vira revisão;
         as demais continuam cobrindo.
       - Reta (<=7d): só revisão. */
    const ehFraca = statusId === "risco" || statusId === "atencao";
    let modo;
    if (fase.id === "reta") modo = "revisar";
    else if (fase.id === "reforco" && ehFraca && d.erros > 0) modo = "revisar";
    else if (d.novas > 0) modo = "explorar";
    else modo = "revisar";
    const prioridade = pendentes > 0 ? peso * PLANO_STATUS[statusId].fator : 0;
    return { disciplina: d.disciplina, novas: d.novas, erros: d.erros, pendentes,
      taxa, statusId, statusNome: PLANO_STATUS[statusId].nome, peso, modo, prioridade };
  }).filter(it => it.pendentes > 0).sort((a, b) => b.prioridade - a.prioridade);

  const metaDiaria = Math.max(5, Math.round(META_SEMANAL_QUESTOES / 7));
  const somaPrioridade = itens.reduce((s, it) => s + it.prioridade, 0) || 1;
  const foco = itens.slice(0, 5).map(it => ({
    ...it,
    questoesSugeridas: Math.max(1, Math.round((it.prioridade / somaPrioridade) * metaDiaria)),
  }));

  /* Revisão do dia, agregada: erros acumulados e questões vencidas no SRS. */
  const totalErros = Object.values(porDisc).reduce((s, d) => s + d.erros, 0);
  const devidasSRS = questoesDevidas().length;

  /* Trajetória (item 4): quanto do edital já foi ao menos visto uma vez, e
     em que estado estão as disciplinas. */
  const discs = Object.values(porDisc);
  const totalQuestoes = discs.reduce((s, d) => s + d.total, 0);
  const novasRestantes = discs.reduce((s, d) => s + d.novas, 0);
  const progresso = {
    total: totalQuestoes,
    vistas: totalQuestoes - novasRestantes,
    cobertura: totalQuestoes ? (totalQuestoes - novasRestantes) / totalQuestoes : 0,
    emRisco: itens.filter(it => it.statusId === "risco").length,
    dominadas: discs.filter(d => (d.acertos + d.totErros) && d.acertos / (d.acertos + d.totErros) >= 0.8).length,
  };

  /* Ritmo (item 3): só faz sentido com data marcada, dias pela frente e
     conteúdo novo a cobrir. Compara a meta diária com o ritmo necessário
     para ver tudo de novo antes da prova. */
  let ritmo = null;
  if (diasRestantes !== null && diasRestantes > 0 && novasRestantes > 0) {
    const ritmoNecessario = Math.ceil(novasRestantes / diasRestantes);
    const diasParaCobrir = Math.ceil(novasRestantes / metaDiaria);
    ritmo = {
      novasRestantes, ritmoNecessario, diasParaCobrir,
      noRitmo: diasParaCobrir <= diasRestantes,
    };
  }

  return { dataProva, diasRestantes, fase, metaDiaria, foco,
    totalDisciplinasPendentes: itens.length, totalErros, devidasSRS, progresso, ritmo };
}

/* ---------------- Seleção adaptativa (Módulo 7) ----------------
   Peso da questão = erroTopico*3 + devidaSRS*2.5 + naoVista*2
   + proximidadeDificuldade + prioridadeConcursoFoco */
function pesoAdaptativo(q, ctx) {
  let w = 1;
  const s = statsQuestao(q.id);
  const discStats = ctx.porDisc.find(d => d.disciplina === q.disciplina);
  if (discStats && discStats.taxa !== null && discStats.taxa < 0.7) w += 3 * (0.7 - discStats.taxa) / 0.7 * 3;
  const srs = APP_STATE.srs[q.id];
  if (srs && srs.proxima <= Date.now()) w += 2.5;
  if (!s.tentativas) w += 2;
  /* dificuldade-alvo: taxa alta → sobe dificuldade */
  const taxaGeral = ctx.taxa ?? 0.5;
  const alvo = taxaGeral >= 0.8 ? 3 : taxaGeral >= 0.6 ? 2 : 1;
  w += 1 - Math.abs(q.dificuldade - alvo) * 0.4;
  /* Peso pelo item que a disciplina vale na prova da trilha: uma disciplina
     de 12,5 itens merece mais sorteio que uma de 7,8. Substituiu o antigo
     "+1 se q.concurso == foco", que virou redundante quando o foco passou a
     escopar o banco — e que estava errado no modelo novo, porque
     `q.concurso` é procedência, não pertinência à trilha. */
  const itensDaTrilha = editalDoFoco()?.itensPorDisciplina;
  if (itensDaTrilha && itensDaTrilha[q.disciplina]) {
    w += Math.min(1.5, itensDaTrilha[q.disciplina] / 10);
  }
  if (s.ultima && !s.ultima.correta && !s.ultima.branco) w += 1.5;
  return Math.max(w, 0.1);
}

/* Fisher–Yates: garante que toda geração de questões saia em ordem
   diferente, nunca repetindo a ordem de inserção do banco. */
function embaralhar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* O filtro é sempre respeitado: se não houver questões suficientes (ou
   nenhuma) dentro do filtro escolhido, o resultado vem menor (ou vazio) —
   nunca se recorre ao banco inteiro para completar a quantidade pedida. */
function montarSimulado(n, filtros) {
  const pool = embaralhar(filtrarQuestoes(filtros || {}));
  const ctx = statsGerais();
  const pesos = pool.map(q => pesoAdaptativo(q, ctx));
  const escolhidas = [];
  const poolCopy = [...pool], pesosCopy = [...pesos];
  while (escolhidas.length < n && poolCopy.length) {
    const total = pesosCopy.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < pesosCopy.length; idx++) { r -= pesosCopy[idx]; if (r <= 0) break; }
    idx = Math.min(idx, poolCopy.length - 1);
    escolhidas.push(poolCopy[idx]);
    poolCopy.splice(idx, 1); pesosCopy.splice(idx, 1);
  }
  return escolhidas;
}

/* ---------------- Filtros combinados (Módulo 1) ----------------
   Cada campo categórico aceita um valor único (compatibilidade com quem
   monta o filtro na mão, como os atalhos "estudar esta disciplina") OU um
   array (o Banco de Questões, que agora marca vários ao mesmo tempo).
   Vazio/null/undefined sempre significa "sem restrição". */
function combina(filtro, valor) {
  if (filtro === null || filtro === undefined || filtro === "") return true;
  if (Array.isArray(filtro)) return !filtro.length || filtro.includes(valor);
  return filtro === valor;
}
/* Para campos onde o dado da questão já é uma lista (q.cargo pode valer
   para vários cargos) — passa se HOUVER interseção com o filtro. */
function combinaAlgum(filtro, valores) {
  if (filtro === null || filtro === undefined || filtro === "") return true;
  const alvo = Array.isArray(filtro) ? filtro : [filtro];
  return !alvo.length || valores.some(v => alvo.includes(v));
}

function filtrarQuestoes(f) {
  return QUESTOES.filter(q => {
    if (!questaoLiberada(q)) return false;
    /* `todoOBanco` é a válvula de escape do Banco de Questões: o escopo da
       trilha esconde ~90% do acervo, e esconder em silêncio é justamente o
       modo de falha que este projeto combate. A tela mostra o escopo ativo
       e um botão para ver tudo. */
    if (!f.todoOBanco && !noEscopo(q)) return false;
    if (!combina(f.concurso, q.concurso)) return false;
    if (!combinaAlgum(f.cargo, q.cargo)) return false;
    if (!combina(f.disciplina, q.disciplina)) return false;
    if (!combina(f.assunto, q.assunto)) return false;
    if (!combina(f.dificuldade, q.dificuldade)) return false;
    if (!combina(f.pegadinha, q.pegadinha)) return false;
    if (f.somenteErradas) {
      const s = statsQuestao(q.id);
      if (!s.ultima || s.ultima.branco || s.ultima.correta) return false;
    }
    if (f.somenteNaoRespondidas) {
      if ((APP_STATE.respostas[q.id] || []).length) return false;
    }
    if (f.ocultarForaEdital && q.foraEdital) return false;
    if (f.busca) {
      /* q.comentario pode ainda não ter chegado (carga sob demanda); quem
         chama a busca dispara carregarTodosDetalhes() antes de renderizar,
         então isto é só uma rede de segurança. */
      const alvo = (q.enunciado + " " + q.assunto + " " + q.subassunto + " " + ((q.comentario && q.comentario.resolucao) || "")).toLowerCase();
      if (!alvo.includes(f.busca.toLowerCase())) return false;
    }
    return true;
  });
}

/* ---------------- Estratégias aplicáveis a uma questão ----------------
   O bloco pós-resposta antes trazia "Engenharia cognitiva", cujos campos
   em grande parte repetiam o que `comentario` já dizia (mede≈fundamento,
   ondeErra≈erroComum, regraMental≈macete, pegadinhaDesc≈comoBancaPensa).

   Em vez de comentar a questão duas vezes, sobe-se um nível: mostra-se a
   técnica geral que neutraliza aquele padrão. O elo já existia no dado —
   `q.pegadinha` guarda o slug do padrão e cada estratégia declara em
   `contraDNA` quais padrões ela combate. Todos os 12 padrões do DNA_BANCA
   têm ao menos uma estratégia, então nenhuma questão fica sem retorno.

   Ordenadas para dar primeiro a que tem exemplo na própria disciplina, o
   que torna a técnica mais reconhecível. */
function estrategiasDaQuestao(q) {
  if (!q || !q.pegadinha) return [];
  const casadas = ESTRATEGIAS.filter(e => {
    if (!(e.contraDNA || []).includes(q.pegadinha)) return false;
    /* Casar só por padrão produzia recomendação sem sentido: `literalidade`
       em Direito quer dizer "confira o artigo", mas em Estatística quer
       dizer "confira a fórmula" — e 189 questões de Português, RLM, TI e
       Estatística acabavam recebendo "leia a letra da lei nova". Por isso
       a estratégia pode declarar `escopo: "juridica"`. */
    if (e.escopo === "juridica" && !DISCIPLINAS_JURIDICAS.includes(q.disciplina)) return false;
    return true;
  });
  return casadas.sort((a, b) => {
    const disc = e => {
      const ex = QUESTOES_POR_ID.get(e.exemplo);
      return ex && ex.disciplina === q.disciplina ? 0 : 1;
    };
    return disc(a) - disc(b);
  });
}

/* ---------------- Detector de pegadinhas (Módulo 5) ---------------- */
/* \b não funciona com acentos em JS — usamos limites unicode explícitos */
function reTermo(termo, flags) {
  /* no modo unicode ('u'), só se pode escapar metacaracteres reais */
  const esc = termo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp("(?<![\\p{L}\\p{N}_])(" + esc + ")(?![\\p{L}\\p{N}_])", flags + "u");
}
function detectarPalavrasPerigosas(texto) {
  const found = [];
  for (const p of PALAVRAS_PERIGOSAS) {
    if (reTermo(p.termo, "i").test(texto)) found.push(p);
  }
  return found;
}
function highlightPerigos(texto) {
  let html = escapeHtml(texto);
  const encontrados = detectarPalavrasPerigosas(texto);
  for (const p of encontrados) {
    html = html.replace(reTermo(p.termo, "gi"), '<mark class="perigo" data-vies="' + p.vies + '" title="' + escapeHtml(p.explica) + '">$1</mark>');
  }
  return html;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------------- Destaque de trecho (Estratégias) ----------------
   Recorta o enunciado em torno do trecho que materializa uma estratégia.
   Como escapeHtml() mapeia caractere a caractere, escapar cada fatia
   isoladamente e concatenar equivale a escapar o texto inteiro — o que
   permite marcar o trecho sem risco de quebrar entidades HTML.
   Os trechos são definidos em fronteira de palavra (validado na suíte),
   de modo que o lookbehind/lookahead de reTermo() continua correto em
   cada fatia. */
function fatiarTrecho(texto, trecho) {
  if (!trecho) return null;
  const i = texto.indexOf(trecho);
  if (i < 0) return null;
  return { antes: texto.slice(0, i), meio: texto.slice(i, i + trecho.length), depois: texto.slice(i + trecho.length) };
}
function marcaTrecho(htmlInterno, titulo) {
  return '<mark class="trecho-estrategia"' + (titulo ? ' title="' + escapeHtml(titulo) + '"' : "") + ">" + htmlInterno + "</mark>";
}
/* Antes de responder: só o trecho da estratégia (as palavras perigosas
   continuam ocultas — são reveladas junto com o gabarito). */
function marcarTrechoEstrategia(texto, trecho, titulo) {
  const f = fatiarTrecho(texto, trecho);
  if (!f) return escapeHtml(texto);
  return escapeHtml(f.antes) + marcaTrecho(escapeHtml(f.meio), titulo) + escapeHtml(f.depois);
}
/* Depois de responder: palavras perigosas + trecho da estratégia. */
function highlightEnunciado(texto, trecho, titulo) {
  const f = fatiarTrecho(texto, trecho);
  if (!f) return highlightPerigos(texto);
  return highlightPerigos(f.antes) + marcaTrecho(highlightPerigos(f.meio), titulo) + highlightPerigos(f.depois);
}

/* ---------------- Helpers de catálogo ----------------
   Alimentam os seletores de filtro; seguem o escopo da trilha para que o
   dropdown não ofereça disciplina que não cai na prova do candidato.
   `todoOBanco` acompanha o filtro homônimo de filtrarQuestoes. */
function listaDisciplinas({ todoOBanco } = {}) {
  const base = todoOBanco ? QUESTOES.filter(questaoLiberada) : questoesDoEscopo();
  return [...new Set(base.map(q => q.disciplina))];
}
function listaAssuntos(disciplina, { todoOBanco } = {}) {
  const base = todoOBanco ? QUESTOES.filter(questaoLiberada) : questoesDoEscopo();
  return [...new Set(base.filter(q => combina(disciplina, q.disciplina)).map(q => q.assunto))];
}

function resetarDados() {
  APP_STATE.respostas = {}; APP_STATE.srs = {}; APP_STATE.sessoes = [];
  if (MODO === "cloud" && CURRENT_USER) {
    Promise.all([
      supa.from("respostas").delete().eq("user_id", CURRENT_USER.id),
      supa.from("srs").delete().eq("user_id", CURRENT_USER.id),
      supa.from("sessoes").delete().eq("user_id", CURRENT_USER.id),
    ]).then(results => {
      const erro = results.find(r => r.error);
      if (erro) console.error("Erro ao zerar dados na nuvem:", erro.error);
    });
  } else {
    saveLocalState();
  }
}

/* ---------------- Gamificação ----------------
   Camada inteiramente calculada a partir de respostas/sessões já
   persistidas — nenhuma tabela nova no Supabase, nenhum novo estado
   para sincronizar. XP, patente, sequência de dias, meta semanal e
   conquistas são recalculados a cada leitura. */
const PATENTES = [
  { nome: "Recruta",              xp: 0 },
  { nome: "Soldado",               xp: 100 },
  { nome: "Cabo",                  xp: 250 },
  { nome: "3º Sargento",           xp: 450 },
  { nome: "2º Sargento",           xp: 700 },
  { nome: "1º Sargento",           xp: 1000 },
  { nome: "Subtenente",            xp: 1400 },
  { nome: "Aspirante a Oficial",   xp: 1900 },
  { nome: "2º Tenente",            xp: 2500 },
  { nome: "1º Tenente",            xp: 3200 },
  { nome: "Capitão",               xp: 4000 },
  { nome: "Major",                 xp: 5000 },
  { nome: "Tenente-Coronel",       xp: 6200 },
  { nome: "Coronel",               xp: 7600 },
  { nome: "Delegado-Geral",        xp: 9200 },
];

const META_SEMANAL_QUESTOES = 100;

function calcularXP() {
  let xp = 0;
  for (const qid in APP_STATE.respostas) {
    for (const h of APP_STATE.respostas[qid]) {
      if (h.branco) xp += 1;
      else if (h.correta) xp += 10;
      else xp += 3;
    }
  }
  for (const s of APP_STATE.sessoes) xp += 25 + Math.max(0, s.liquida) * 2;
  return xp;
}

function nivelAtual(xp) {
  let idx = 0;
  for (let i = 0; i < PATENTES.length; i++) if (xp >= PATENTES[i].xp) idx = i;
  const atual = PATENTES[idx];
  const prox = PATENTES[idx + 1] || null;
  const pct = prox ? Math.round(((xp - atual.xp) / (prox.xp - atual.xp)) * 100) : 100;
  return { indice: idx, nome: atual.nome, xp, xpAtual: atual.xp,
    xpProximo: prox ? prox.xp : null, proximoNome: prox ? prox.nome : null, pct };
}

/* Sequência de dias com pelo menos uma resposta registrada. */
function calcularStreak() {
  const dias = new Set();
  for (const qid in APP_STATE.respostas) {
    for (const h of APP_STATE.respostas[qid]) dias.add(new Date(h.data).toISOString().slice(0, 10));
  }
  const lista = [...dias].sort();
  if (!lista.length) return { atual: 0, recorde: 0, ultimoDia: null };
  let recorde = 1, corrente = 1;
  for (let i = 1; i < lista.length; i++) {
    const diff = Math.round((new Date(lista[i]) - new Date(lista[i - 1])) / 864e5);
    corrente = diff === 1 ? corrente + 1 : 1;
    recorde = Math.max(recorde, corrente);
  }
  const hoje = new Date().toISOString().slice(0, 10);
  const ontem = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  const ultimoDia = lista[lista.length - 1];
  let atual = 0;
  if (ultimoDia === hoje || ultimoDia === ontem) {
    atual = 1;
    for (let i = lista.length - 1; i > 0; i--) {
      const diff = Math.round((new Date(lista[i]) - new Date(lista[i - 1])) / 864e5);
      if (diff === 1) atual++; else break;
    }
  }
  return { atual, recorde, ultimoDia };
}

/* Progresso na semana corrente (segunda 00h → agora). */
function calcularMetaSemanal() {
  const agora = new Date();
  const diaSemana = (agora.getDay() + 6) % 7; /* 0 = segunda */
  const inicioSemana = new Date(agora);
  inicioSemana.setHours(0, 0, 0, 0);
  inicioSemana.setDate(inicioSemana.getDate() - diaSemana);
  let n = 0;
  for (const qid in APP_STATE.respostas) {
    for (const h of APP_STATE.respostas[qid]) if (h.data >= inicioSemana.getTime()) n++;
  }
  return { respondidas: n, meta: META_SEMANAL_QUESTOES, pct: Math.min(100, Math.round(n / META_SEMANAL_QUESTOES * 100)) };
}

const CONQUISTAS = [
  { id: "primeiro-passo", nome: "Primeiro Passo", icone: "🎯", desc: "Responda sua primeira questão.",
    condicao: c => c.totalRespondidas >= 1 },
  { id: "recruta-dedicado", nome: "Recruta Dedicado", icone: "📘", desc: "Responda 50 questões.",
    condicao: c => c.totalRespondidas >= 50 },
  { id: "maratonista", nome: "Maratonista", icone: "🏃", desc: "Responda 500 questões.",
    condicao: c => c.totalRespondidas >= 500 },
  { id: "veterano", nome: "Veterano de Guerra", icone: "🎖️", desc: "Responda 1.500 questões.",
    condicao: c => c.totalRespondidas >= 1500 },
  { id: "sequencia-7", nome: "Sequência de Ferro", icone: "🔥", desc: "Estude 7 dias seguidos.",
    condicao: c => c.streak.recorde >= 7 },
  { id: "sequencia-30", nome: "Sequência Lendária", icone: "⚡", desc: "Estude 30 dias seguidos.",
    condicao: c => c.streak.recorde >= 30 },
  { id: "batismo-fogo", nome: "Batismo de Fogo", icone: "🚔", desc: "Conclua seu primeiro simulado ou Modo Prova.",
    condicao: c => c.sessoes.length >= 1 },
  { id: "rotina-aprovado", nome: "Rotina de Aprovado", icone: "📋", desc: "Conclua 10 simulados ou provas.",
    condicao: c => c.sessoes.length >= 10 },
  { id: "gestao-branco", nome: "Gestão de Branco", icone: "🧊", desc: "Conclua um simulado com 10+ questões sem deixar nenhuma em branco.",
    condicao: c => c.sessoes.some(s => s.n >= 10 && s.brancos === 0) },
  { id: "nota-mil", nome: "Nota Mil", icone: "💯", desc: "Acerte todas as questões de um simulado com 10 ou mais itens.",
    condicao: c => c.sessoes.some(s => s.n >= 10 && s.erros === 0 && s.brancos === 0) },
  { id: "mira-certeira", nome: "Mira Certeira", icone: "🏆", desc: "Atinja 90% de acerto geral com 50+ questões respondidas.",
    condicao: c => c.taxaGeral !== null && c.taxaGeral >= 0.9 && c.totalRespondidas >= 50 },
  { id: "especialista", nome: "Especialista de Disciplina", icone: "🧠", desc: "Domine uma disciplina com 85%+ de acerto em 20+ questões.",
    condicao: c => c.disciplinasEspecialista >= 1 },
  { id: "coruja", nome: "Coruja da Delegacia", icone: "🦉", desc: "Responda uma questão entre 0h e 5h da manhã.",
    condicao: c => c.temRespostaMadrugada },
];

function calcularConquistas() {
  const g = statsGerais();
  const streak = calcularStreak();
  const totalRespondidas = g.acertos + g.erros + g.brancos;
  let temRespostaMadrugada = false;
  for (const qid in APP_STATE.respostas) {
    for (const h of APP_STATE.respostas[qid]) {
      const hora = new Date(h.data).getHours();
      if (hora >= 0 && hora < 5) temRespostaMadrugada = true;
    }
  }
  const disciplinasEspecialista = statsPorDisciplina()
    .filter(d => d.taxa !== null && d.taxa >= 0.85 && (d.acertos + d.erros) >= 20).length;
  const ctx = { totalRespondidas, taxaGeral: g.taxa, streak, sessoes: APP_STATE.sessoes, disciplinasEspecialista, temRespostaMadrugada };
  return CONQUISTAS.map(a => ({ id: a.id, nome: a.nome, icone: a.icone, desc: a.desc, desbloqueada: !!a.condicao(ctx) }));
}

/* API pública consumida pela interface. */
function gamificacao() {
  const xp = calcularXP();
  const nivel = nivelAtual(xp);
  const streak = calcularStreak();
  const semana = calcularMetaSemanal();
  const conquistas = calcularConquistas();
  return { nivel, streak, semana, conquistas,
    desbloqueadas: conquistas.filter(c => c.desbloqueada).length, totalConquistas: conquistas.length };
}
