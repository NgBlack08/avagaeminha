/* =====================================================================
   CEBRASPE LAB — Motor Inteligente
   Perfil do estudante (Módulo 8), simulador adaptativo com repetição
   espaçada (Módulo 7), detector de pegadinhas (Módulo 5) e camada
   estatística (Módulos 2, 12, 13 — versão local/heurística).
   ===================================================================== */

const STORAGE_KEY = "cebraspe-lab-v1";

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
  return { respostas: {}, srs: {}, sessoes: [], config: { tema: "dark", concursoFoco: "PCAL", cargoFoco: "Escrivão" } };
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
  const [{ data: perfil }, { data: respostasRows }, { data: srsRows }, { data: sessoesRows }] = await Promise.all([
    supa.from("profiles").select("*").eq("id", user.id).single(),
    supa.from("respostas").select("*").eq("user_id", user.id).order("created_at", { ascending: true }),
    supa.from("srs").select("*").eq("user_id", user.id),
    supa.from("sessoes").select("*").eq("user_id", user.id).order("created_at", { ascending: true }),
  ]);
  const respostas = {};
  for (const r of (respostasRows || [])) {
    if (!respostas[r.qid]) respostas[r.qid] = [];
    respostas[r.qid].push({ qid: r.qid, resposta: r.resposta, correta: r.correta, branco: r.branco, tempoMs: r.tempo_ms, confianca: r.confianca, data: new Date(r.created_at).getTime() });
  }
  const srs = {};
  for (const s of (srsRows || [])) srs[s.qid] = { nivel: s.nivel, proxima: new Date(s.proxima).getTime() };
  const sessoes = (sessoesRows || []).map(s => ({ data: new Date(s.created_at).getTime(), n: s.n, acertos: s.acertos, erros: s.erros, brancos: s.brancos, liquida: s.liquida, tempoTotal: s.tempo_total }));
  APP_STATE.respostas = respostas;
  APP_STATE.srs = srs;
  APP_STATE.sessoes = sessoes;
  APP_STATE.config = {
    tema: perfil?.tema || "dark",
    concursoFoco: perfil?.concurso_foco || "PCAL",
    cargoFoco: perfil?.cargo_foco || "Escrivão",
  };
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
function questoesDevidas() {
  const agora = Date.now();
  return QUESTOES.filter(q => {
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
  for (const q of QUESTOES) {
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
  const respondidasUnicas = Object.keys(APP_STATE.respostas).length;
  const taxa = (acertos + erros) ? acertos / (acertos + erros) : null;
  /* Índice de confiança calibrada: acerto médio quando confiança alta */
  let confAltaAcertos = 0, confAltaTotal = 0;
  for (const qid in APP_STATE.respostas) for (const h of APP_STATE.respostas[qid]) {
    if (h.confianca === 3 && !h.branco) { confAltaTotal++; if (h.correta) confAltaAcertos++; }
  }
  return {
    porDisc, acertos, erros, brancos, nRespostas: n,
    respondidasUnicas, totalBanco: QUESTOES.length,
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
  for (const q of QUESTOES) {
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
  const cobertura = g.respondidasUnicas / g.totalBanco;
  const taxa = g.taxa ?? 0;
  /* nota 0-100: 60% desempenho + 25% cobertura + 15% calibração */
  const calib = g.calibracao ?? taxa;
  const score = Math.round(100 * (0.60 * taxa + 0.25 * cobertura + 0.15 * calib));
  /* referência: nota de corte típica CEBRASPE ≈ acima de 50% líquido;
     aprovados em carreiras policiais costumam ter 70%+ de acerto bruto */
  const metaTaxa = 0.75;
  const horasEstimadas = Math.max(0, Math.round((metaTaxa - taxa) * 400));
  return { dominadas, atencao, risco, score, taxa, cobertura, calibracao: g.calibracao,
    liquida: g.liquida, horasEstimadas, metaTaxa };
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
  if (q.concurso === (APP_STATE.config.concursoFoco || "PCAL")) w += 1;
  if (s.ultima && !s.ultima.correta && !s.ultima.branco) w += 1.5;
  return Math.max(w, 0.1);
}

function montarSimulado(n, filtros) {
  let pool = filtrarQuestoes(filtros || {});
  if (!pool.length) pool = [...QUESTOES];
  const ctx = statsGerais();
  const pesos = pool.map(q => pesoAdaptativo(q, ctx));
  const escolhidas = [];
  const poolCopy = [...pool], pesosCopy = [...pesos];
  while (escolhidas.length < Math.min(n, poolCopy.length + escolhidas.length) && poolCopy.length) {
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

/* ---------------- Filtros combinados (Módulo 1) ---------------- */
function filtrarQuestoes(f) {
  return QUESTOES.filter(q => {
    if (f.concurso && q.concurso !== f.concurso) return false;
    if (f.cargo && !q.cargo.includes(f.cargo)) return false;
    if (f.disciplina && q.disciplina !== f.disciplina) return false;
    if (f.assunto && q.assunto !== f.assunto) return false;
    if (f.dificuldade && q.dificuldade !== +f.dificuldade) return false;
    if (f.pegadinha && q.pegadinha !== f.pegadinha) return false;
    if (f.somenteErradas) {
      const s = statsQuestao(q.id);
      if (!s.ultima || s.ultima.branco || s.ultima.correta) return false;
    }
    if (f.somenteNaoRespondidas) {
      if ((APP_STATE.respostas[q.id] || []).length) return false;
    }
    if (f.ocultarForaEdital && q.foraEdital) return false;
    if (f.busca) {
      const alvo = (q.enunciado + " " + q.assunto + " " + q.subassunto + " " + (q.comentario.resolucao || "")).toLowerCase();
      if (!alvo.includes(f.busca.toLowerCase())) return false;
    }
    return true;
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

/* ---------------- Helpers de catálogo ---------------- */
function listaDisciplinas() { return [...new Set(QUESTOES.map(q => q.disciplina))]; }
function listaAssuntos(disciplina) {
  return [...new Set(QUESTOES.filter(q => !disciplina || q.disciplina === disciplina).map(q => q.assunto))];
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
