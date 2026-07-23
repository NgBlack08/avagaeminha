/* =====================================================================
   CEBRASPE LAB — Aplicação (SPA)
   Telas: Dashboard, Banco, Simulado, Raio-X da Banca, Predição,
   Estratégias, Detector de Pegadinhas, Perfil.
   ===================================================================== */

const $ = sel => document.querySelector(sel);
const MAIN = () => $("#main");

const VIEWS = [
  { id: "dashboard",  nome: "Dashboard",             ico: "◧" },
  { id: "banco",      nome: "Banco de Questões",     ico: "▤" },
  { id: "simulado",   nome: "Simulado Adaptativo",   ico: "▶" },
  { id: "prova",      nome: "Modo Prova",            ico: "◈" },
  { id: "ranking",    nome: "Ranking & Desafios",    ico: "🏆" },
  { id: "raiox",      nome: "Raio-X da Banca",       ico: "◉" },
  { id: "pegadinhas", nome: "Detector de Pegadinhas",ico: "⚠" },
  { id: "predicao",   nome: "Predição de Cobrança",  ico: "↗" },
  { id: "estrategias",nome: "Estratégias",           ico: "✦" },
  { id: "perfil",     nome: "Meu Perfil",            ico: "◔" },
];

let currentView = "dashboard";
let SIM = null; /* estado do simulado adaptativo em andamento */
let PROVA = null; /* estado do Modo Prova em andamento */

/* ============ Bootstrap ============ */
document.addEventListener("DOMContentLoaded", () => {
  bootstrapAuth();
});

function iniciarApp() {
  const root = document.getElementById("approot");
  if (root) root.classList.remove("no-sidebar");
  document.documentElement.dataset.theme = APP_STATE.config.tema || "dark";
  renderSidebar();
  navigate("dashboard");
}

function renderSidebar() {
  const nav = $("#nav");
  nav.innerHTML =
    '<div class="nav-sep">Treinamento</div>' +
    VIEWS.slice(0, 4).map(navBtn).join("") +
    '<div class="nav-sep">Competição</div>' +
    VIEWS.slice(4, 5).map(navBtn).join("") +
    '<div class="nav-sep">Inteligência</div>' +
    VIEWS.slice(5, 9).map(navBtn).join("") +
    '<div class="nav-sep">Você</div>' +
    VIEWS.slice(9).map(navBtn).join("") +
    (APP_STATE.config.isAdmin
      ? '<div class="nav-sep">Administração</div>' + navBtn({ id: "admin", nome: "Usuários & Convites", ico: "🛡" })
      : "");
  const acct = $("#acct");
  if (acct && CURRENT_USER) {
    acct.innerHTML = `<div style="color:var(--text)">👤 ${escapeHtml(CURRENT_USER.email)}</div><button class="btn ghost small" style="margin-top:6px;width:100%" onclick="sair()">Sair</button>`;
  }
}
function navBtn(v) {
  return `<button class="nav-btn ${v.id === currentView ? "active" : ""}" onclick="navigate('${v.id}')">
    <span class="ico">${v.ico}</span>${v.nome}</button>`;
}

async function navigate(view) {
  /* Proteção: sair de uma prova em andamento encerra e corrige. */
  if (PROVA && !PROVA.finalizada && view !== "prova") {
    const ok = await mostrarConfirm("Você está com uma prova em andamento. Sair agora vai ENCERRAR e corrigir a prova. Deseja sair?", "Encerrar prova em andamento?");
    if (!ok) return;
    pararTimerProva();
    PROVA = null;
  }
  /* Proteção: sair de um duelo em andamento descarta o progresso não enviado. */
  if (typeof DUELO !== "undefined" && DUELO && view !== "ranking") {
    const ok = await mostrarConfirm("Você está no meio de um duelo. Sair agora descarta o duelo (nada será enviado). Deseja sair?", "Abandonar duelo?");
    if (!ok) return;
    if (typeof pararTimerDuelo === "function") pararTimerDuelo();
    DUELO = null;
  }
  currentView = view;
  if (view === "raiox" || view === "perfil") marcarVisitaOnboarding(view);
  renderSidebar();
  closeSidebar();
  const fn = {
    dashboard: renderDashboard, banco: renderBanco, simulado: renderSimulado,
    prova: renderProva, ranking: renderRanking, raiox: renderRaioX, pegadinhas: renderPegadinhas,
    predicao: renderPredicao, estrategias: renderEstrategias, perfil: renderPerfil, admin: renderAdmin,
  }[view];
  fn();
  window.scrollTo(0, 0);
}

/* ================================================================
   MODAIS — substituem alert()/confirm() nativos do navegador por
   componentes do próprio design system (consistentes com o tema
   claro/escuro e a identidade visual da plataforma).
   ================================================================ */
function modal({ titulo, mensagem, botoes }) {
  return new Promise(resolve => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
        ${titulo ? `<div class="modal-titulo" id="modal-titulo">${escapeHtml(titulo)}</div>` : ""}
        <div class="modal-msg">${escapeHtml(mensagem)}</div>
        <div class="modal-actions"></div>
      </div>`;
    const actions = overlay.querySelector(".modal-actions");
    let resolvido = false;
    function fechar(valor) {
      if (resolvido) return;
      resolvido = true;
      document.removeEventListener("keydown", onKey);
      overlay.remove();
      resolve(valor);
    }
    botoes.forEach(b => {
      const btn = document.createElement("button");
      btn.className = "btn small " + (b.cls || "ghost");
      btn.textContent = b.label;
      btn.onclick = () => fechar(b.value);
      actions.appendChild(btn);
    });
    function onKey(e) {
      if (e.key === "Escape") fechar(botoes.find(b => b.cancelavel)?.value ?? botoes[0].value);
    }
    document.addEventListener("keydown", onKey);
    overlay.addEventListener("click", e => {
      if (e.target === overlay) fechar(botoes.find(b => b.cancelavel)?.value ?? botoes[0].value);
    });
    document.body.appendChild(overlay);
    setTimeout(() => actions.querySelector(".btn:last-child")?.focus(), 20);
  });
}
function mostrarAlerta(mensagem, titulo) {
  return modal({ titulo, mensagem, botoes: [{ label: "Entendi", value: true, cls: "" }] });
}
function mostrarConfirm(mensagem, titulo) {
  return modal({ titulo, mensagem, botoes: [
    { label: "Cancelar", value: false, cls: "ghost", cancelavel: true },
    { label: "Confirmar", value: true, cls: "" },
  ] });
}
async function confirmarResetarDados() {
  const ok = await mostrarConfirm("Apagar todo o seu histórico de respostas e estatísticas? Esta ação não pode ser desfeita.", "Zerar histórico");
  if (ok) { resetarDados(); navigate("perfil"); }
}

function toggleTheme() {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  APP_STATE.config.tema = t; saveState();
}
function toggleSidebar() { $("#sidebar").classList.toggle("open"); $("#backdrop").classList.toggle("show"); }
function closeSidebar() { $("#sidebar").classList.remove("open"); $("#backdrop").classList.remove("show"); }

function topbar(titulo, sub, actionsHtml) {
  return `<div class="topbar">
    <div><h2>${titulo}</h2><div class="sub">${sub || ""}</div></div>
    <div class="top-actions">
      ${actionsHtml || ""}
      <button class="btn ghost small" onclick="toggleTheme()" title="Alternar tema">◐ Tema</button>
    </div></div>`;
}

const AVISO_ESTATISTICO = `<div class="aviso">⚠ As probabilidades e índices exibidos são <b>estimativas estatísticas</b> baseadas em frequência histórica, tendências legislativas e perfil da banca — não constituem garantia sobre o conteúdo de provas futuras.</div>`;

/* ================================================================
   ONBOARDING — checklist de primeiros passos (Dashboard)
   Calculado sobre dados já existentes (respostas/sessões) + flags de
   visita salvas apenas neste dispositivo (não sincronizadas: são só
   um lembrete de UI, não precisam de tabela nova no Supabase).
   ================================================================ */
const ONBOARDING_VISITAS_KEY = "cebraspe-lab-onboarding-visitas";
const ONBOARDING_DISMISS_KEY = "cebraspe-lab-onboarding-dismissed";
function onboardingVisitas() {
  try { return JSON.parse(localStorage.getItem(ONBOARDING_VISITAS_KEY) || "{}"); } catch (e) { return {}; }
}
function marcarVisitaOnboarding(chave) {
  const v = onboardingVisitas();
  if (v[chave]) return;
  v[chave] = true;
  localStorage.setItem(ONBOARDING_VISITAS_KEY, JSON.stringify(v));
}
function onboardingPassos() {
  const totalRespondidas = Object.values(APP_STATE.respostas).reduce((a, h) => a + h.length, 0);
  const visitas = onboardingVisitas();
  return [
    { label: "Responda sua primeira questão", done: totalRespondidas >= 1, view: "banco" },
    { label: "Complete um simulado ou o Modo Prova", done: APP_STATE.sessoes.length >= 1, view: "simulado" },
    { label: "Explore o Raio-X da Banca", done: !!visitas.raiox, view: "raiox" },
    { label: "Veja suas estatísticas no Perfil", done: !!visitas.perfil, view: "perfil" },
  ];
}
function onboardingCardHtml() {
  if (localStorage.getItem(ONBOARDING_DISMISS_KEY) === "1") return "";
  const passos = onboardingPassos();
  const feitos = passos.filter(p => p.done).length;
  if (feitos === passos.length) return "";
  return `<div class="card onboarding-card" style="margin-bottom:16px">
    <div class="onboarding-top">
      <div><h3>🚀 Primeiros passos</h3><div class="hint">${feitos}/${passos.length} concluídos — ganhe XP e desbloqueie conquistas ao completar</div></div>
      <button class="btn ghost small" onclick="dispensarOnboarding()" aria-label="Dispensar primeiros passos" title="Dispensar">✕</button>
    </div>
    <div class="onboarding-lista">
      ${passos.map(p => `
        <button class="onboarding-item ${p.done ? "done" : ""}" onclick="navigate('${p.view}')">
          <span class="onboarding-check">${p.done ? "✔" : "○"}</span>${escapeHtml(p.label)}
        </button>`).join("")}
    </div>
  </div>`;
}
function dispensarOnboarding() {
  localStorage.setItem(ONBOARDING_DISMISS_KEY, "1");
  renderDashboard();
}

/* ================================================================
   GAMIFICAÇÃO — camada de engajamento (XP, patente, sequência, metas)
   ================================================================ */
function gamiCardHtml(gam) {
  const { nivel, streak, semana, conquistas } = gam;
  return `<div class="card gami-card" style="margin-bottom:16px">
    <div class="gami-top">
      <div class="gami-patente">
        <div class="gami-badge">🎖️</div>
        <div>
          <div class="gami-nome">${escapeHtml(nivel.nome)}</div>
          <div class="gami-xp">${nivel.xp} XP${nivel.proximoNome ? ` · faltam ${nivel.xpProximo - nivel.xp} XP para ${escapeHtml(nivel.proximoNome)}` : " · patente máxima atingida"}</div>
        </div>
      </div>
      <div class="gami-streak ${streak.atual > 0 ? "on" : ""}">🔥 <b>${streak.atual}</b> dia(s) em sequência <span class="hint">recorde: ${streak.recorde}</span></div>
    </div>
    <div class="gami-bar"><i style="width:${nivel.pct}%"></i></div>
    <div class="gami-bottom">
      <div class="gami-meta">
        <div class="gami-meta-lbl">Meta semanal: ${semana.respondidas}/${semana.meta} questões</div>
        <div class="gami-bar small"><i style="width:${semana.pct}%"></i></div>
      </div>
      <div class="gami-conquistas">
        ${conquistas.map(c => `<span class="gami-badge-mini ${c.desbloqueada ? "" : "locked"}" title="${escapeHtml(c.nome)} — ${escapeHtml(c.desc)}${c.desbloqueada ? "" : " (bloqueada)"}">${c.icone}</span>`).join("")}
      </div>
    </div>
  </div>`;
}

/* ================================================================
   DASHBOARD (Módulos 8 + 12)
   ================================================================ */
function renderDashboard() {
  const g = statsGerais();
  const radar = radarAprovacao();
  const devidas = questoesDevidas().length;
  const focoNome = APP_STATE.config.concursoFoco
    ? (CONCURSOS.find(c => c.id === APP_STATE.config.concursoFoco)?.nome || APP_STATE.config.concursoFoco)
    : "Carreiras Policiais";
  const gam = gamificacao();

  const linha = (arr, cls, icone) => arr.length
    ? arr.map(d => `<div class="radar-linha">${icone} ${d.disciplina}<span class="pct">${Math.round(d.taxa * 100)}%</span></div>`).join("")
    : `<div class="radar-linha" style="color:var(--muted)">— ainda sem dados suficientes</div>`;

  MAIN().innerHTML = topbar("Dashboard",
    `Foco: <b>${focoNome}</b> · Cargo: <b>${APP_STATE.config.cargoFoco}</b>`,
    `<button class="btn small" onclick="navigate('simulado')">▶ Iniciar simulado</button>`) +
  onboardingCardHtml() +
  gamiCardHtml(gam) +
  `<div class="grid cols-4" style="margin-bottom:16px">
    <div class="card stat"><span class="num">${g.respondidasUnicas}/${g.totalBanco}</span><span class="lbl">questões exploradas do banco</span></div>
    <div class="card stat"><span class="num ${g.taxa >= .75 ? "ok" : g.taxa >= .5 ? "warn" : g.taxa === null ? "" : "bad"}">${g.taxa === null ? "—" : Math.round(g.taxa * 100) + "%"}</span><span class="lbl">taxa de acerto</span></div>
    <div class="card stat"><span class="num ${g.liquida > 0 ? "ok" : g.liquida < 0 ? "bad" : ""}">${g.liquida > 0 ? "+" : ""}${g.liquida}</span><span class="lbl">pontuação líquida (C anula E)</span></div>
    <div class="card stat"><span class="num ${devidas ? "warn" : "ok"}">${devidas}</span><span class="lbl">revisões devidas (repetição espaçada)</span></div>
  </div>
  <div class="grid cols-2">
    <div class="card">
      <h3>🎯 Radar de Aprovação <span class="hint">termômetro heurístico do seu preparo</span></h3>
      <div style="display:flex;justify-content:center">${chartGauge(radar.score, { sub: "índice de preparo" })}</div>
      <div style="text-align:center;font-size:13px;color:var(--muted);margin-top:4px">
        ${g.taxa === null ? "Responda questões para calibrar o radar."
          : `Meta de referência: <b>${Math.round(radar.metaTaxa * 100)}% de acertos</b> (perfil típico de aprovados). ` +
            (radar.horasEstimadas > 0 ? `Estimativa de estudo dirigido restante: <b>≈ ${radar.horasEstimadas}h líquidas</b>.` : `Você está no patamar da meta — mantenha o ritmo. ✔`)}
      </div>
      ${AVISO_ESTATISTICO}
    </div>
    <div class="card">
      <h3>📊 Diagnóstico por disciplina</h3>
      <div style="font-size:12px;color:var(--muted);margin-bottom:6px">✔ Domina (≥80%) · ⚠ Precisa melhorar (60–79%) · ✖ Maior risco (&lt;60%)</div>
      ${linha(radar.dominadas, "ok", "✔")}${linha(radar.atencao, "warn", "⚠")}${linha(radar.risco, "bad", "✖")}
    </div>
  </div>
  <div class="grid cols-2" style="margin-top:16px">
    <div class="card">
      <h3>🧬 DNA da banca — padrões de maior incidência</h3>
      ${DNA_BANCA.slice(0, 5).map(d => `
        <div class="dna-item">
          <h4>${d.nome}</h4>
          <div style="display:flex;gap:10px"><div class="dna-bar"><i style="width:${d.incidencia}%"></i></div><span class="dna-pct">${d.incidencia}%</span></div>
        </div>`).join("")}
      <button class="btn ghost small" style="margin-top:12px" onclick="navigate('raiox')">Ver Raio-X completo →</button>
    </div>
    <div class="card">
      <h3>↗ Top predições de cobrança</h3>
      ${PREDICOES.slice().sort((a, b) => b.score - a.score).slice(0, 5).map((p, i) => `
        <div class="pred-item">
          <div class="pred-rank">${i + 1}º</div>
          <div class="pred-body"><h4>${p.tema}</h4><div class="motivos">${p.disciplina}</div></div>
          <div class="pred-score">${p.score}%</div>
        </div>`).join("")}
      <button class="btn ghost small" style="margin-top:12px" onclick="navigate('predicao')">Ranking completo →</button>
    </div>
  </div>`;
}

/* ================================================================
   BANCO DE QUESTÕES (Módulo 1)
   ================================================================ */
let bancoFiltros = {};
function renderBanco() {
  const discs = listaDisciplinas();
  const assuntos = listaAssuntos(bancoFiltros.disciplina);
  const lista = embaralhar(filtrarQuestoes(bancoFiltros));

  MAIN().innerHTML = topbar("Banco Inteligente de Questões",
    `${QUESTOES.length} questões inéditas em estilo CEBRASPE · filtros combinados`,) +
  `<div class="card" style="margin-bottom:18px">
    <div class="filters">
      <label class="f">Concurso<select id="f-concurso" onchange="setFiltroBanco()">
        <option value="">Todos</option>${CONCURSOS.map(c => `<option value="${c.id}" ${bancoFiltros.concurso === c.id ? "selected" : ""}>${c.id}</option>`).join("")}
      </select></label>
      <label class="f">Cargo<select id="f-cargo" onchange="setFiltroBanco()">
        <option value="">Todos</option>${CARGOS.map(c => `<option ${bancoFiltros.cargo === c ? "selected" : ""}>${c}</option>`).join("")}
      </select></label>
      <label class="f">Disciplina<select id="f-disciplina" onchange="setFiltroBanco(true)">
        <option value="">Todas</option>${discs.map(d => `<option ${bancoFiltros.disciplina === d ? "selected" : ""}>${d}</option>`).join("")}
      </select></label>
      <label class="f">Assunto<select id="f-assunto" onchange="setFiltroBanco()">
        <option value="">Todos</option>${assuntos.map(a => `<option ${bancoFiltros.assunto === a ? "selected" : ""}>${a}</option>`).join("")}
      </select></label>
      <label class="f">Dificuldade<select id="f-dificuldade" onchange="setFiltroBanco()">
        <option value="">Todas</option><option value="1" ${bancoFiltros.dificuldade == 1 ? "selected" : ""}>● Fácil</option>
        <option value="2" ${bancoFiltros.dificuldade == 2 ? "selected" : ""}>●● Média</option>
        <option value="3" ${bancoFiltros.dificuldade == 3 ? "selected" : ""}>●●● Difícil</option>
      </select></label>
      <label class="f">Padrão da banca<select id="f-pegadinha" onchange="setFiltroBanco()">
        <option value="">Todos</option>${DNA_BANCA.map(d => `<option value="${d.slug}" ${bancoFiltros.pegadinha === d.slug ? "selected" : ""}>${d.nome}</option>`).join("")}
      </select></label>
      <label class="f">Busca<input type="search" id="f-busca" value="${bancoFiltros.busca || ""}" placeholder="palavra-chave…" onchange="setFiltroBanco()"></label>
      <label class="check"><input type="checkbox" id="f-erradas" ${bancoFiltros.somenteErradas ? "checked" : ""} onchange="setFiltroBanco()"> só as que errei</label>
      <label class="check"><input type="checkbox" id="f-novas" ${bancoFiltros.somenteNaoRespondidas ? "checked" : ""} onchange="setFiltroBanco()"> só não respondidas</label>
      <label class="check"><input type="checkbox" id="f-edital" ${bancoFiltros.ocultarForaEdital ? "checked" : ""} onchange="setFiltroBanco()"> só edital PC-AL 2026</label>
    </div>
  </div>
  <div style="font-size:13px;color:var(--muted);margin-bottom:12px"><b>${lista.length}</b> questão(ões) encontrada(s)</div>
  <div id="q-lista">${lista.map(q => questaoCardHtml(q, { modo: "banco" })).join("") ||
    `<div class="card empty"><div class="big">🔍</div>Nenhuma questão com esses filtros.</div>`}</div>`;
  iniciarTimersVisiveis();
}
function setFiltroBanco(resetAssunto) {
  bancoFiltros = {
    concurso: $("#f-concurso").value || null,
    cargo: $("#f-cargo").value || null,
    disciplina: $("#f-disciplina").value || null,
    assunto: resetAssunto ? null : ($("#f-assunto").value || null),
    dificuldade: $("#f-dificuldade").value || null,
    pegadinha: $("#f-pegadinha").value || null,
    busca: $("#f-busca").value.trim() || null,
    somenteErradas: $("#f-erradas").checked,
    somenteNaoRespondidas: $("#f-novas").checked,
    ocultarForaEdital: $("#f-edital").checked,
  };
  renderBanco();
}

/* ============ Componente de questão ============ */
const qUI = {}; /* estado transitório por questão: {confianca, respondida, inicio} */
function questaoCardHtml(q, opts) {
  const s = statsQuestao(q.id);
  const modo = opts.modo || "banco";
  const diff = "●".repeat(q.dificuldade) + "○".repeat(3 - q.dificuldade);
  qUI[q.id] = { confianca: null, respondida: false, inicio: Date.now(), modo };
  return `<div class="card q-card" id="qc-${q.id}">
    <div class="q-head">
      <span class="tag accent">${q.id}</span>
      <span class="tag">${q.concurso} · ${q.cargo.join("/")}</span>
      <span class="tag">${q.disciplina}</span>
      <span class="tag">${q.assunto}</span>
      <span class="tag diff" title="dificuldade">${diff}</span>
      ${q.foraEdital ? '<span class="tag warn" title="Tema não consta do conteúdo programático de Agente/Escrivão no edital PC-AL 2026 — mantido como treino complementar">fora do edital PC-AL 2026</span>' : ""}
      ${s.tentativas ? `<span class="tag ${s.ultima.branco ? "" : s.ultima.correta ? "ok" : "bad"}">${s.ultima.branco ? "em branco" : s.ultima.correta ? "acertou" : "errou"} na última</span>` : ""}
      <span class="tag" title="tempo ideal de resolução">⏱ ideal: ${q.tempoIdealSeg}s</span>
    </div>
    ${q.textoApoio ? `<div class="q-texto-apoio">${escapeHtml(q.textoApoio)}</div>` : ""}
    <div class="q-enunciado" id="qe-${q.id}">${escapeHtml(q.enunciado)}</div>
    <div class="q-actions" id="qa-${q.id}">
      <button class="btn ok" onclick="responder('${q.id}','C')">CERTO</button>
      <button class="btn bad" onclick="responder('${q.id}','E')">ERRADO</button>
      <button class="btn ghost" onclick="responder('${q.id}','B')">Em branco</button>
      <div class="conf">confiança:
        <button onclick="setConf('${q.id}',1,this)">baixa</button>
        <button onclick="setConf('${q.id}',2,this)">média</button>
        <button onclick="setConf('${q.id}',3,this)">alta</button>
      </div>
      <span class="q-timer" id="qt-${q.id}" data-ideal="${q.tempoIdealSeg}">0:00</span>
    </div>
    <div id="qr-${q.id}"></div>
  </div>`;
}
function setConf(qid, n, btn) {
  qUI[qid].confianca = n;
  btn.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("sel"));
  btn.classList.add("sel");
}
let timerInterval = null;
function iniciarTimersVisiveis() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    document.querySelectorAll(".q-timer").forEach(el => {
      const qid = el.id.slice(3);
      const ui = qUI[qid];
      if (!ui || ui.respondida) return;
      const seg = Math.floor((Date.now() - ui.inicio) / 1000);
      el.textContent = Math.floor(seg / 60) + ":" + String(seg % 60).padStart(2, "0");
      el.classList.toggle("over", seg > +el.dataset.ideal);
    });
  }, 1000);
}

function responder(qid, resposta) {
  const ui = qUI[qid];
  if (!ui || ui.respondida) return;
  ui.respondida = true;
  const tempoMs = Date.now() - ui.inicio;
  const res = registrarResposta(qid, resposta, tempoMs, ui.confianca);
  const q = QUESTOES.find(x => x.id === qid);

  /* Reinicia a contagem das demais questões ainda não respondidas —
     evita que o tempo gasto nesta questão seja somado ao tempo
     registrado nas próximas (relevante na listagem do Banco, onde
     várias questões ficam visíveis e com o timer ativo ao mesmo tempo). */
  const agora = Date.now();
  for (const id in qUI) {
    if (id !== qid && qUI[id] && !qUI[id].respondida) qUI[id].inicio = agora;
  }

  /* revela destaques de palavras perigosas no enunciado */
  $("#qe-" + qid).innerHTML = highlightPerigos(q.enunciado);
  $("#qa-" + qid).style.display = "none";

  const dna = DNA_BANCA.find(d => d.slug === q.pegadinha);
  const tSeg = Math.round(tempoMs / 1000);
  const cls = resposta === "B" ? "neutro" : res.correta ? "ok" : "bad";
  const msg = resposta === "B" ? `⊘ Em branco — gabarito: <b>${res.gabarito === "C" ? "CERTO" : "ERRADO"}</b> (no CEBRASPE, branco não pontua nem desconta)`
    : res.correta ? `✔ Você ACERTOU — gabarito: <b>${res.gabarito === "C" ? "CERTO" : "ERRADO"}</b>`
    : `✖ Você ERROU — gabarito: <b>${res.gabarito === "C" ? "CERTO" : "ERRADO"}</b> (no sistema líquido, este erro anula um acerto)`;

  const c = q.comentario, cog = q.cognitivo;
  $("#qr-" + qid).innerHTML = `
    <div class="resultado ${cls}">${msg} · seu tempo: ${tSeg}s (ideal: ${q.tempoIdealSeg}s)</div>
    <div class="comentario">
      <div class="bloco"><b>Resolução</b>${escapeHtml(c.resolucao)}</div>
      <div class="bloco"><b>Fundamento legal</b>${escapeHtml(c.fundamento)}</div>
      ${c.jurisprudencia ? `<div class="bloco"><b>Jurisprudência</b>${escapeHtml(c.jurisprudencia)}</div>` : ""}
      <div class="bloco"><b>Macete</b>${escapeHtml(c.macete)}</div>
      <div class="bloco"><b>Erro mais comum</b>${escapeHtml(c.erroComum)}</div>
      <div class="bloco"><b>Como a banca pensa</b>${escapeHtml(c.comoBancaPensa)}</div>
      ${dna ? `<div class="bloco"><b>Padrão da banca detectado: ${escapeHtml(dna.nome)} (incidência ${dna.incidencia}%)</b>${escapeHtml(dna.gatilho)}</div>` : ""}
    </div>
    <details class="cog"><summary>🧠 Engenharia cognitiva da questão (mapa da lógica)</summary>
      <div class="cog-grid">
        <div class="item"><b>1 · Por que esta questão existe</b>${escapeHtml(cog.motivo)}</div>
        <div class="item"><b>2 · O que a banca mede</b>${escapeHtml(cog.mede)}</div>
        <div class="item"><b>3 · A pegadinha utilizada</b>${escapeHtml(cog.pegadinhaDesc)}</div>
        <div class="item"><b>4 · Onde o candidato erra</b>${escapeHtml(cog.ondeErra)}</div>
        <div class="item"><b>5 · Palavra que muda tudo</b>${escapeHtml(cog.palavraCritica)}</div>
        <div class="item"><b>6 · Técnica de eliminação</b>${escapeHtml(cog.tecnica)}</div>
        <div class="item"><b>7 · Regra mental rápida</b>${escapeHtml(cog.regraMental)}</div>
        <div class="item"><b>8 · Reaparecimento estimado</b>≈ ${Math.round(q.probReaparecer * 100)}% de probabilidade (estimativa histórica)</div>
      </div>
    </details>`;

  if (ui.modo === "simulado" && SIM) {
    SIM.respostas.push({ qid, resposta, correta: res.correta, branco: resposta === "B", tempoMs });
    $("#qr-" + qid).innerHTML += `<div style="margin-top:14px">
      <button class="btn" onclick="proximaSimulado()">${SIM.idx + 1 >= SIM.questoes.length ? "Ver resultado →" : "Próxima questão →"}</button></div>`;
  }
}

/* ================================================================
   SIMULADO ADAPTATIVO (Módulo 7)
   ================================================================ */
function renderSimulado() {
  if (SIM && !SIM.finalizado) { renderQuestaoSimulado(); return; }
  const devidas = questoesDevidas().length;
  MAIN().innerHTML = topbar("Simulado Adaptativo",
    "Seleção inteligente: prioriza seus pontos fracos, revisões devidas e a dificuldade certa para o seu nível") +
  `<div class="card sim-setup">
    <h3>⚙ Montar simulado</h3>
    <div class="opts">
      <label class="f">Número de questões<select id="sim-n">
        <option value="5">5 (rápido)</option><option value="10" selected>10</option>
        <option value="20">20</option><option value="40">40</option><option value="60">60</option><option value="120">120 (prova completa)</option>
      </select></label>
      <label class="f">Concurso<select id="sim-concurso">
        <option value="">Todos${APP_STATE.config.concursoFoco ? ` (foco em ${APP_STATE.config.concursoFoco})` : ""}</option>
        ${CONCURSOS.map(c => `<option value="${c.id}">${c.id}</option>`).join("")}
      </select></label>
      <label class="f">Disciplina<select id="sim-disc">
        <option value="">Todas (adaptativo)</option>
        ${listaDisciplinas().map(d => `<option>${d}</option>`).join("")}
      </select></label>
      <label class="f">Modo<select id="sim-modo">
        <option value="adaptativo" selected>Adaptativo (recomendado)</option>
        <option value="revisao">Revisão espaçada (${devidas} devidas)</option>
        <option value="erradas">Só questões que errei</option>
      </select></label>
    </div>
    <button class="btn" onclick="iniciarSimulado()">▶ Começar</button>
    <div class="aviso">Correção estilo CEBRASPE: <b>cada erro anula um acerto</b>; em branco não pontua. Use o botão "Em branco" estrategicamente, como faria na prova.</div>
  </div>`;
}
async function iniciarSimulado() {
  const n = +$("#sim-n").value;
  const modo = $("#sim-modo").value;
  const filtros = { concurso: $("#sim-concurso").value || null, disciplina: $("#sim-disc").value || null };
  let questoes;
  if (modo === "revisao") {
    questoes = embaralhar(questoesDevidas()).slice(0, n);
    if (!questoes.length) { await mostrarAlerta("Nenhuma revisão devida no momento. Bom sinal! Use o modo adaptativo."); return; }
  } else if (modo === "erradas") {
    questoes = montarSimulado(n, { ...filtros, somenteErradas: true });
    if (!questoes.length) { await mostrarAlerta("Você ainda não tem questões erradas registradas com esses filtros."); return; }
  } else {
    questoes = montarSimulado(n, filtros);
    if (!questoes.length) { await mostrarAlerta("Nenhuma questão encontrada com esses filtros."); return; }
  }
  SIM = { questoes, idx: 0, respostas: [], inicio: Date.now(), finalizado: false };
  renderQuestaoSimulado();
}
function renderQuestaoSimulado() {
  const q = SIM.questoes[SIM.idx];
  const pct = (SIM.idx / SIM.questoes.length) * 100;
  MAIN().innerHTML = topbar("Simulado Adaptativo",
    `Questão ${SIM.idx + 1} de ${SIM.questoes.length}`,
    `<button class="btn ghost small" onclick="abandonarSimulado()">✕ Encerrar</button>`) +
  `<div class="sim-progress"><i style="width:${pct}%"></i></div>` +
  questaoCardHtml(q, { modo: "simulado" });
  iniciarTimersVisiveis();
}
function proximaSimulado() {
  SIM.idx++;
  if (SIM.idx >= SIM.questoes.length) { finalizarSimulado(); return; }
  renderQuestaoSimulado();
  window.scrollTo(0, 0);
}
function abandonarSimulado() {
  if (SIM && SIM.respostas.length) { finalizarSimulado(); }
  else { SIM = null; renderSimulado(); }
}
function finalizarSimulado() {
  SIM.finalizado = true;
  const r = SIM.respostas;
  const acertos = r.filter(x => x.correta && !x.branco).length;
  const erros = r.filter(x => !x.correta && !x.branco).length;
  const brancos = r.filter(x => x.branco).length;
  const liquida = acertos - erros;
  const tempoTotal = Math.round((Date.now() - SIM.inicio) / 1000);
  const taxa = (acertos + erros) ? acertos / (acertos + erros) : 0;
  registrarSessao({ data: Date.now(), n: r.length, acertos, erros, brancos, liquida, tempoTotal });

  /* desempenho por disciplina nesta sessão */
  const porDisc = {};
  for (const resp of r) {
    const q = QUESTOES.find(x => x.id === resp.qid);
    if (!porDisc[q.disciplina]) porDisc[q.disciplina] = { a: 0, e: 0 };
    if (!resp.branco) (resp.correta ? porDisc[q.disciplina].a++ : porDisc[q.disciplina].e++);
  }
  const discData = Object.entries(porDisc).map(([d, v]) => ({
    label: d, value: (v.a + v.e) ? Math.round(100 * v.a / (v.a + v.e)) : 0,
    display: `${v.a}✔ ${v.e}✖`, color: (v.a + v.e) && v.a / (v.a + v.e) >= .7 ? "#10b981" : "#ef4444",
  }));

  MAIN().innerHTML = topbar("Resultado do Simulado", "Correção estilo CEBRASPE (1 líquida)") +
  `<div class="grid cols-4" style="margin-bottom:16px">
    <div class="card stat"><span class="num ok">${acertos}</span><span class="lbl">acertos</span></div>
    <div class="card stat"><span class="num bad">${erros}</span><span class="lbl">erros</span></div>
    <div class="card stat"><span class="num">${brancos}</span><span class="lbl">em branco</span></div>
    <div class="card stat"><span class="num ${liquida > 0 ? "ok" : "bad"}">${liquida > 0 ? "+" : ""}${liquida}</span><span class="lbl">pontuação líquida</span></div>
  </div>
  <div class="grid cols-2">
    <div class="card">
      <h3>Desempenho da sessão</h3>
      <div style="display:flex;justify-content:center">${chartGauge(taxa * 100, { sub: "% de acerto" })}</div>
      <div style="text-align:center;color:var(--muted);font-size:13px">tempo total: ${Math.floor(tempoTotal / 60)}min ${tempoTotal % 60}s · média ${Math.round(tempoTotal / Math.max(r.length, 1))}s/questão</div>
    </div>
    <div class="card"><h3>Por disciplina</h3><div class="chart-scroll">${discData.length ? chartHBar(discData, { max: 100 }) : "<div class='empty'>—</div>"}</div></div>
  </div>
  <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
    <button class="btn" onclick="SIM=null;renderSimulado()">▶ Novo simulado</button>
    <button class="btn ghost" onclick="SIM=null;navigate('perfil')">Ver meu perfil →</button>
  </div>`;
  SIM = null;
}

/* ================================================================
   MODO PROVA — simulado em condições reais de prova (ENEM Digital)
   Cronômetro global · navegação livre · sem gabarito até o fim ·
   correção em lote · relatório de tempo e gestão do branco.
   ================================================================ */
let provaTimerInterval = null;

function renderProva() {
  if (PROVA && !PROVA.finalizada) { renderProvaRunner(); return; }
  const discs = listaDisciplinas();
  MAIN().innerHTML = topbar("Modo Prova",
    "Simulado em condições reais: cronômetro correndo, navegação livre e correção só no final — como na prova de verdade.") +
  `<div class="card sim-setup">
    <h3>◈ Configurar prova</h3>
    <div class="opts">
      <label class="f">Número de questões<select id="pv-n">
        <option value="10">10 questões</option>
        <option value="20" selected>20 questões</option>
        <option value="30">30 questões</option>
        <option value="50">50 questões</option>
        <option value="120">120 (prova completa)</option>
      </select></label>
      <label class="f">Tempo de prova<select id="pv-tempo">
        <option value="auto" selected>Automático (≈2,5 min/questão)</option>
        <option value="30">30 minutos</option>
        <option value="60">1 hora</option>
        <option value="120">2 horas</option>
        <option value="180">3 horas</option>
        <option value="240">4 horas</option>
      </select></label>
      <label class="f">Disciplina<select id="pv-disc">
        <option value="">Todas (mistura balanceada)</option>
        ${discs.map(d => `<option>${escapeHtml(d)}</option>`).join("")}
      </select></label>
      <label class="check" style="align-self:end"><input type="checkbox" id="pv-edital" checked> só conteúdo do edital PC-AL 2026</label>
    </div>
    <button class="btn" onclick="iniciarProva()">◈ Iniciar prova</button>
    <div class="aviso">
      <b>Regras da prova:</b> o cronômetro não para; você navega livremente e pode marcar questões para revisar;
      <b>não há gabarito nem comentário até você finalizar</b>. Correção estilo CEBRASPE (cada erro anula um acerto;
      em branco não pontua). Ao esgotar o tempo, a prova é entregue automaticamente.
    </div>
  </div>`;
}

function montarProva(n, filtros) {
  /* O filtro é sempre respeitado — se houver menos questões que o
     solicitado dentro do filtro, a prova sai menor, nunca completada
     com questões fora do filtro escolhido. */
  const pool = embaralhar(filtrarQuestoes(filtros || {}));
  return pool.slice(0, Math.min(n, pool.length));
}

async function iniciarProva() {
  const n = +$("#pv-n").value;
  const tempoSel = $("#pv-tempo").value;
  const filtros = {
    disciplina: $("#pv-disc").value || null,
    ocultarForaEdital: $("#pv-edital").checked,
  };
  const questoes = montarProva(n, filtros);
  if (!questoes.length) { await mostrarAlerta("Nenhuma questão encontrada com esses filtros."); return; }
  if (questoes.length < n) {
    const ok = await mostrarConfirm(`Apenas ${questoes.length} questão(ões) encontradas com esses filtros (menos que as ${n} solicitadas). Iniciar a prova mesmo assim com ${questoes.length} questões?`, "Menos questões que o solicitado");
    if (!ok) return;
  }
  const duracaoSeg = tempoSel === "auto" ? Math.round(questoes.length * 150) : +tempoSel * 60;
  PROVA = {
    questoes, respostas: {}, marcadas: {}, tempoPorQ: {},
    idx: 0, inicio: Date.now(), fim: Date.now() + duracaoSeg * 1000,
    duracaoSeg, desde: Date.now(), finalizada: false,
  };
  renderProvaRunner();
  iniciarTimerProva();
}

function iniciarTimerProva() {
  pararTimerProva();
  provaTimerInterval = setInterval(() => {
    const restante = Math.round((PROVA.fim - Date.now()) / 1000);
    const el = $("#pv-timer");
    if (!el) return;
    if (restante <= 0) { atualizarTimerProva(0); finalizarProva(true); return; }
    atualizarTimerProva(restante);
  }, 1000);
}
function pararTimerProva() { if (provaTimerInterval) { clearInterval(provaTimerInterval); provaTimerInterval = null; } }
function atualizarTimerProva(restante) {
  const el = $("#pv-timer"); if (!el) return;
  const h = Math.floor(restante / 3600), m = Math.floor((restante % 3600) / 60), s = restante % 60;
  el.textContent = (h ? h + ":" : "") + String(m).padStart(h ? 2 : 1, "0") + ":" + String(s).padStart(2, "0");
  el.classList.toggle("urgent", restante <= 300); /* últimos 5 min */
}

function provaAcumularTempo() {
  if (!PROVA) return;
  const q = PROVA.questoes[PROVA.idx];
  PROVA.tempoPorQ[q.id] = (PROVA.tempoPorQ[q.id] || 0) + (Date.now() - PROVA.desde);
  PROVA.desde = Date.now();
}

function renderProvaRunner() {
  const q = PROVA.questoes[PROVA.idx];
  const n = PROVA.questoes.length;
  const respondidas = Object.keys(PROVA.respostas).filter(k => PROVA.respostas[k]).length;
  const restanteSeg = Math.max(0, Math.round((PROVA.fim - Date.now()) / 1000));

  /* paleta de navegação (estilo ENEM Digital) */
  const palette = PROVA.questoes.map((qq, i) => {
    const resp = PROVA.respostas[qq.id];
    const cls = ["q-pal"];
    if (i === PROVA.idx) cls.push("cur");
    if (resp) cls.push("done");
    if (PROVA.marcadas[qq.id]) cls.push("mark");
    return `<button class="${cls.join(" ")}" onclick="provaIr(${i})" title="Questão ${i + 1}${resp ? " · respondida" : ""}${PROVA.marcadas[qq.id] ? " · marcada" : ""}">${i + 1}</button>`;
  }).join("");

  const sel = PROVA.respostas[q.id] || null;
  const btn = (val, label, cls) =>
    `<button class="btn ${cls} ${sel === val ? "" : "ghost"}" style="${sel && sel !== val ? "opacity:.55" : ""}" onclick="provaResp('${q.id}','${val}')">${label}</button>`;

  MAIN().innerHTML = `
  <div class="prova-bar">
    <div class="pv-meta">
      <span class="tag accent">Questão ${PROVA.idx + 1} / ${n}</span>
      <span class="tag">${respondidas} respondidas · ${n - respondidas} em aberto</span>
    </div>
    <div class="pv-timerwrap">
      <span class="pv-timerlbl">⏱ tempo restante</span>
      <span class="pv-timer" id="pv-timer">–</span>
    </div>
    <button class="btn small" onclick="finalizarProvaConfirm()">Finalizar prova</button>
  </div>
  <div class="sim-progress" style="margin-top:14px"><i style="width:${(respondidas / n) * 100}%"></i></div>

  <div class="prova-layout">
    <aside class="card q-palette-card">
      <div class="q-palette-legend">
        <span><i class="lg-done"></i>respondida</span>
        <span><i class="lg-mark"></i>marcada</span>
        <span><i class="lg-cur"></i>atual</span>
      </div>
      <div class="q-palette">${palette}</div>
    </aside>

    <div class="card q-card" style="margin:0">
      <div class="q-head">
        <span class="tag accent">${q.id}</span>
        <span class="tag">${escapeHtml(q.disciplina)}</span>
        <span class="tag">${escapeHtml(q.assunto)}</span>
        <span class="tag diff">${"●".repeat(q.dificuldade) + "○".repeat(3 - q.dificuldade)}</span>
        <button class="btn ghost small" style="margin-left:auto" onclick="provaMarcar('${q.id}')">
          ${PROVA.marcadas[q.id] ? "★ Marcada" : "☆ Marcar p/ revisar"}</button>
      </div>
      ${q.textoApoio ? `<div class="q-texto-apoio">${escapeHtml(q.textoApoio)}</div>` : ""}
      <div class="q-enunciado">${escapeHtml(q.enunciado)}</div>
      <div class="q-actions">
        ${btn("C", "CERTO", "ok")}
        ${btn("E", "ERRADO", "bad")}
        ${btn("B", "Em branco", "")}
        ${sel ? '<span class="tag ok" style="margin-left:4px">resposta registrada</span>' : '<span class="tag" style="margin-left:4px">sem resposta</span>'}
      </div>
      <div class="prova-nav">
        <button class="btn ghost small" ${PROVA.idx === 0 ? "disabled" : ""} onclick="provaNav(-1)">← Anterior</button>
        <button class="btn ghost small" ${PROVA.idx >= n - 1 ? "disabled" : ""} onclick="provaNav(1)">Próxima →</button>
      </div>
    </div>
  </div>`;
  atualizarTimerProva(restanteSeg);
}

function provaResp(qid, val) {
  PROVA.respostas[qid] = val;
  renderProvaRunner(); /* re-render para atualizar seleção e paleta */
}
function provaMarcar(qid) {
  PROVA.marcadas[qid] = !PROVA.marcadas[qid];
  renderProvaRunner();
}
function provaIr(i) {
  provaAcumularTempo();
  PROVA.idx = i;
  renderProvaRunner();
  window.scrollTo(0, 0);
}
function provaNav(delta) { provaIr(Math.max(0, Math.min(PROVA.questoes.length - 1, PROVA.idx + delta))); }

async function finalizarProvaConfirm() {
  const n = PROVA.questoes.length;
  const respondidas = Object.keys(PROVA.respostas).filter(k => PROVA.respostas[k] && PROVA.respostas[k] !== "B").length;
  const emAberto = n - Object.keys(PROVA.respostas).filter(k => PROVA.respostas[k]).length;
  const msg = emAberto > 0
    ? `Você ainda tem ${emAberto} questão(ões) sem nenhuma marcação (serão consideradas EM BRANCO). Finalizar mesmo assim?`
    : `Finalizar a prova? Você respondeu ${respondidas} questão(ões). A correção será exibida em seguida.`;
  const ok = await mostrarConfirm(msg, "Finalizar prova");
  if (ok) finalizarProva(false);
}

function finalizarProva(porTempo) {
  provaAcumularTempo();
  pararTimerProva();
  PROVA.finalizada = true;
  const tempoTotal = Math.min(PROVA.duracaoSeg, Math.round((Date.now() - PROVA.inicio) / 1000));

  /* correção em lote — registra cada resposta (alimenta stats/SRS/nuvem) */
  const detalhe = PROVA.questoes.map(q => {
    const resp = PROVA.respostas[q.id] || "B";
    const tempoMs = PROVA.tempoPorQ[q.id] || 0;
    const res = registrarResposta(q.id, resp, tempoMs, null);
    return { q, resp, correta: res.correta, gabarito: res.gabarito, branco: resp === "B", tempoMs };
  });

  const acertos = detalhe.filter(d => !d.branco && d.correta).length;
  const erros = detalhe.filter(d => !d.branco && !d.correta).length;
  const brancos = detalhe.filter(d => d.branco).length;
  const liquida = acertos - erros;
  const taxa = (acertos + erros) ? acertos / (acertos + erros) : 0;
  registrarSessao({ data: Date.now(), n: detalhe.length, acertos, erros, brancos, liquida, tempoTotal });

  renderProvaResultado({ detalhe, acertos, erros, brancos, liquida, taxa, tempoTotal, porTempo });
}

function renderProvaResultado(r) {
  const { detalhe, acertos, erros, brancos, liquida, taxa, tempoTotal, porTempo } = r;
  const n = detalhe.length;

  /* desempenho por disciplina */
  const porDisc = {};
  for (const d of detalhe) {
    if (!porDisc[d.q.disciplina]) porDisc[d.q.disciplina] = { a: 0, e: 0, b: 0 };
    if (d.branco) porDisc[d.q.disciplina].b++;
    else (d.correta ? porDisc[d.q.disciplina].a++ : porDisc[d.q.disciplina].e++);
  }
  const discData = Object.entries(porDisc).map(([disc, v]) => ({
    label: disc, value: (v.a + v.e) ? Math.round(100 * v.a / (v.a + v.e)) : 0,
    display: `${v.a}✔ ${v.e}✖ ${v.b}⊘`,
    color: (v.a + v.e) && v.a / (v.a + v.e) >= .7 ? "#10b981" : (v.a + v.e) === 0 ? "#94a3b8" : "#ef4444",
  })).sort((a, b) => b.value - a.value);

  /* análise de tempo: questões que "comeram" mais tempo que o ideal */
  const tempoIdealTotal = detalhe.reduce((s, d) => s + d.q.tempoIdealSeg, 0);
  const sinks = detalhe.filter(d => d.tempoMs / 1000 > d.q.tempoIdealSeg * 1.5)
    .sort((a, b) => b.tempoMs - a.tempoMs).slice(0, 5);
  const mmss = seg => `${Math.floor(seg / 60)}min ${Math.round(seg % 60)}s`;

  MAIN().innerHTML = topbar("Resultado da Prova",
    `${porTempo ? "⏱ Tempo esgotado — prova entregue automaticamente. " : ""}Correção estilo CEBRASPE (1 líquida)`) +
  `<div class="grid cols-4" style="margin-bottom:16px">
    <div class="card stat"><span class="num ok">${acertos}</span><span class="lbl">acertos</span></div>
    <div class="card stat"><span class="num bad">${erros}</span><span class="lbl">erros (cada um anula 1 acerto)</span></div>
    <div class="card stat"><span class="num">${brancos}</span><span class="lbl">em branco</span></div>
    <div class="card stat"><span class="num ${liquida > 0 ? "ok" : liquida < 0 ? "bad" : ""}">${liquida > 0 ? "+" : ""}${liquida}</span><span class="lbl">pontuação líquida</span></div>
  </div>

  <div class="grid cols-2">
    <div class="card">
      <h3>🎯 Aproveitamento</h3>
      <div style="display:flex;justify-content:center">${chartGauge(taxa * 100, { sub: "% de acerto" })}</div>
      <div style="text-align:center;color:var(--muted);font-size:13px;margin-top:4px">
        Você acertou <b>${acertos}</b> de <b>${acertos + erros}</b> questões respondidas${brancos ? ` (${brancos} em branco)` : ""}.
      </div>
    </div>
    <div class="card"><h3>📊 Desempenho por disciplina</h3><div class="chart-scroll">${discData.length ? chartHBar(discData, { max: 100 }) : "<div class='empty'>—</div>"}</div></div>
  </div>

  <div class="grid cols-2" style="margin-top:16px">
    <div class="card">
      <h3>⏱ Gestão do tempo</h3>
      <div class="radar-linha">Tempo usado<span class="pct">${mmss(tempoTotal)}</span></div>
      <div class="radar-linha">Tempo ideal estimado<span class="pct">${mmss(tempoIdealTotal)}</span></div>
      <div class="radar-linha">Média por questão<span class="pct">${Math.round(tempoTotal / Math.max(n, 1))}s</span></div>
      ${sinks.length ? `<div style="margin-top:10px;font-size:12.5px;color:var(--muted)">Questões que mais consumiram tempo:</div>
        ${sinks.map(d => `<div class="radar-linha" style="font-size:13px">${d.q.id} · ${escapeHtml(d.q.disciplina)}
          <span class="pct ${d.branco ? "" : d.correta ? "" : ""}" style="color:${d.correta && !d.branco ? "var(--ok)" : d.branco ? "var(--muted)" : "var(--bad)"}">${Math.round(d.tempoMs / 1000)}s ${d.branco ? "⊘" : d.correta ? "✔" : "✖"}</span></div>`).join("")}`
        : `<div style="margin-top:10px;font-size:13px;color:var(--ok)">✔ Bom controle: nenhuma questão passou muito do tempo ideal.</div>`}
    </div>
    <div class="card">
      <h3>🎲 Gestão do branco (1 líquida)</h3>
      <p style="font-size:13.5px;color:var(--muted);margin-bottom:10px">No CEBRASPE, cada erro anula um acerto. Deixar em branco quando não se tem convicção protege a nota.</p>
      <div class="radar-linha">Se tivesse chutado tudo (0 branco)<span class="pct">líquida seria pior a cada erro</span></div>
      <div class="radar-linha">Sua líquida atual<span class="pct ${liquida >= 0 ? "" : ""}" style="color:${liquida > 0 ? "var(--ok)" : liquida < 0 ? "var(--bad)" : "var(--muted)"}">${liquida > 0 ? "+" : ""}${liquida}</span></div>
      <div class="radar-linha">Custo dos ${erros} erro(s)<span class="pct" style="color:var(--bad)">−${erros}</span></div>
      <div class="aviso" style="margin-top:12px">
        ${erros > brancos && erros > 0
          ? `Você errou mais (${erros}) do que deixou em branco (${brancos}). Sem esses erros, sua líquida seria <b>+${acertos}</b>. Considere deixar em branco quando não conseguir reduzir o 50/50 com os padrões da banca.`
          : erros === 0
          ? `Excelente controle de risco: <b>zero erros</b>. ${brancos ? "Avalie se alguns brancos eram recuperáveis com as técnicas do Detector de Pegadinhas." : "Aproveitamento máximo."}`
          : `Boa gestão: você deixou em branco (${brancos}) mais do que errou (${erros}), protegendo a líquida.`}
      </div>
    </div>
  </div>

  <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
    <button class="btn" onclick="PROVA=null;renderProva()">◈ Nova prova</button>
    <button class="btn ghost" onclick="document.getElementById('pv-review').scrollIntoView({behavior:'smooth'})">Revisar questões ↓</button>
    <button class="btn ghost" onclick="PROVA=null;navigate('perfil')">Ver meu perfil →</button>
  </div>

  <h3 id="pv-review" style="margin:26px 0 12px;font-size:17px;font-weight:700">📖 Gabarito comentado (${n} questões)</h3>
  ${detalhe.map((d, i) => provaRevisaoHtml(d, i)).join("")}`;

  PROVA = null; /* prova concluída; estado liberado (relatório já renderizado) */
  window.scrollTo(0, 0);
}

function provaRevisaoHtml(d, i) {
  const q = d.q, c = q.comentario, cog = q.cognitivo;
  const dna = DNA_BANCA.find(x => x.slug === q.pegadinha);
  const gabTxt = d.gabarito === "C" ? "CERTO" : "ERRADO";
  const suaTxt = d.branco ? "Em branco" : (d.resp === "C" ? "CERTO" : "ERRADO");
  const cls = d.branco ? "neutro" : d.correta ? "ok" : "bad";
  const icone = d.branco ? "⊘" : d.correta ? "✔" : "✖";
  return `<div class="card q-card">
    <div class="q-head">
      <span class="tag ${cls === "ok" ? "ok" : cls === "bad" ? "bad" : ""}">${i + 1} · ${icone}</span>
      <span class="tag accent">${q.id}</span>
      <span class="tag">${escapeHtml(q.disciplina)}</span>
      <span class="tag">${escapeHtml(q.assunto)}</span>
      <span class="tag" title="seu tempo nesta questão">⏱ ${Math.round(d.tempoMs / 1000)}s</span>
    </div>
    ${q.textoApoio ? `<div class="q-texto-apoio">${escapeHtml(q.textoApoio)}</div>` : ""}
    <div class="q-enunciado">${highlightPerigos(q.enunciado)}</div>
    <div class="resultado ${cls}">
      Sua resposta: <b>${suaTxt}</b> · Gabarito: <b>${gabTxt}</b>${d.branco ? " (em branco não pontua nem desconta)" : d.correta ? " — você acertou" : " — este erro anulou um acerto"}
    </div>
    <div class="comentario">
      <div class="bloco"><b>Resolução</b>${escapeHtml(c.resolucao)}</div>
      <div class="bloco"><b>Fundamento legal</b>${escapeHtml(c.fundamento)}</div>
      ${c.jurisprudencia ? `<div class="bloco"><b>Jurisprudência</b>${escapeHtml(c.jurisprudencia)}</div>` : ""}
      <div class="bloco"><b>Macete</b>${escapeHtml(c.macete)}</div>
      <div class="bloco"><b>Como a banca pensa</b>${escapeHtml(c.comoBancaPensa)}</div>
      ${dna ? `<div class="bloco"><b>Padrão detectado: ${escapeHtml(dna.nome)} (incidência ${dna.incidencia}%)</b>${escapeHtml(dna.gatilho)}</div>` : ""}
    </div>
    <details class="cog"><summary>🧠 Engenharia cognitiva</summary>
      <div class="cog-grid">
        <div class="item"><b>Pegadinha</b>${escapeHtml(cog.pegadinhaDesc)}</div>
        <div class="item"><b>Palavra que muda tudo</b>${escapeHtml(cog.palavraCritica)}</div>
        <div class="item"><b>Técnica</b>${escapeHtml(cog.tecnica)}</div>
        <div class="item"><b>Regra mental</b>${escapeHtml(cog.regraMental)}</div>
      </div>
    </details>
  </div>`;
}

/* ================================================================
   RAIO-X DA BANCA (Módulos 2 + 4)
   ================================================================ */
let raioxDisc = "Direito Penal";
function renderRaioX() {
  const freq = FREQUENCIA_TEMAS.find(f => f.disciplina === raioxDisc) || FREQUENCIA_TEMAS[0];
  const freqData = freq.temas.slice().sort((a, b) => b.freq - a.freq).map(t => ({
    label: t.tema, value: t.freq, display: `${t.freq} · ${t.tendencia === "alta" ? "↗" : t.tendencia === "caindo" ? "↘" : "→"}`,
  }));

  /* heatmap: disciplina × padrão (proporção de questões do banco com cada padrão) */
  const discs = listaDisciplinas();
  const padroes = DNA_BANCA.map(d => d.slug);
  const matrix = discs.map(disc => padroes.map(p => {
    const qs = QUESTOES.filter(q => q.disciplina === disc);
    if (!qs.length) return null;
    const c = qs.filter(q => q.pegadinha === p).length;
    return c ? c / qs.length : null;
  }));

  MAIN().innerHTML = topbar("Raio-X da Banca",
    "Engenharia reversa do CEBRASPE: padrões, frequências e evolução histórica") +
  `<div class="card" style="margin-bottom:16px">
    <h3>🧬 DNA da CEBRASPE <span class="hint">índice de incidência estimado por padrão</span></h3>
    ${DNA_BANCA.map(d => `
      <div class="dna-item">
        <h4>${d.nome}</h4>
        <div style="display:flex;gap:10px"><div class="dna-bar"><i style="width:${d.incidencia}%"></i></div><span class="dna-pct">${d.incidencia}%</span></div>
        <p>${d.desc}</p>
        <div class="gatilho">⚡ Gatilho mental: ${d.gatilho}</div>
      </div>`).join("")}
    ${AVISO_ESTATISTICO}
  </div>
  <div class="card" style="margin-bottom:16px">
    <h3>📈 Frequência de temas
      <select style="margin-left:auto" onchange="raioxDisc=this.value;renderRaioX()">
        ${FREQUENCIA_TEMAS.map(f => `<option ${f.disciplina === raioxDisc ? "selected" : ""}>${f.disciplina}</option>`).join("")}
      </select></h3>
    <div class="chart-scroll">${chartHBar(freqData)}</div>
    <div style="font-size:12px;color:var(--muted)">peso 0–100 estimado por incidência histórica · ↗ em alta · → estável · ↘ em queda</div>
  </div>
  <div class="grid cols-2">
    <div class="card">
      <h3>⏳ Evolução histórica <span class="hint">itens por disciplina/ano (estimativa)</span></h3>
      <div class="chart-scroll">${chartLines(TIMELINE_DISCIPLINAS.anos, TIMELINE_DISCIPLINAS.series.map(s => ({ nome: s.disciplina, valores: s.valores })))}</div>
      ${chartLegend(TIMELINE_DISCIPLINAS.series)}
      <div style="font-size:12.5px;color:var(--muted);margin-top:10px">Leitura: <b>Legislação Especial</b> é a disciplina em maior expansão no perfil recente da banca para carreiras policiais — reflexo das reformas legislativas (Pacote Anticrime, Lei 14.550/2023, Lei 14.994/2024).</div>
    </div>
    <div class="card">
      <h3>🔥 Heatmap: onde cada padrão aparece <span class="hint">% das questões da disciplina</span></h3>
      <div class="chart-scroll">${chartHeatmap(discs, DNA_BANCA.map(d => d.nome), matrix)}</div>
    </div>
  </div>
  <div class="card" style="margin-top:16px">
    <h3>✍ Perfil de redação da banca</h3>
    <div class="grid cols-4">
      <div class="stat"><span class="num">${perfilRedacao().mediaPalavras}</span><span class="lbl">palavras por item (média do banco)</span></div>
      <div class="stat"><span class="num">${perfilRedacao().pctComPerigosas}%</span><span class="lbl">dos itens contêm palavras-sensíveis</span></div>
      <div class="stat"><span class="num">${perfilRedacao().pctCerto}%</span><span class="lbl">de itens CERTOS (equilíbrio C/E)</span></div>
      <div class="stat"><span class="num">${perfilRedacao().tempoMedioIdeal}s</span><span class="lbl">tempo ideal médio por item</span></div>
    </div>
    <div style="font-size:13px;color:var(--muted);margin-top:12px">
      Características típicas: períodos longos com orações intercaladas; linguagem técnico-normativa; alta densidade de remissões a dispositivos legais;
      preferência por reescrituras e substituições em Português; uso de jurisprudência do STF/STJ combinada ao texto legal nas disciplinas jurídicas.
    </div>
  </div>`;
}
function perfilRedacao() {
  const nPal = QUESTOES.map(q => q.enunciado.split(/\s+/).length);
  const mediaPalavras = Math.round(nPal.reduce((a, b) => a + b, 0) / nPal.length);
  const comPerig = QUESTOES.filter(q => detectarPalavrasPerigosas(q.enunciado).length).length;
  const certos = QUESTOES.filter(q => q.gabarito === "C").length;
  const tmi = Math.round(QUESTOES.reduce((a, q) => a + q.tempoIdealSeg, 0) / QUESTOES.length);
  return {
    mediaPalavras,
    pctComPerigosas: Math.round(100 * comPerig / QUESTOES.length),
    pctCerto: Math.round(100 * certos / QUESTOES.length),
    tempoMedioIdeal: tmi,
  };
}

/* ================================================================
   DETECTOR DE PEGADINHAS (Módulo 5)
   ================================================================ */
function renderPegadinhas() {
  const fraquezas = statsPorPegadinha();
  MAIN().innerHTML = topbar("Detector de Pegadinhas",
    "Glossário de palavras-perigosas + laboratório de análise de enunciados") +
  `<div class="card" style="margin-bottom:16px">
    <h3>🧪 Laboratório: cole um enunciado para análise</h3>
    <textarea id="lab-texto" rows="4" style="width:100%;font:inherit;font-size:14px;background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:10px;padding:12px" placeholder="Cole aqui o enunciado de qualquer questão CEBRASPE…"></textarea>
    <div style="margin-top:10px;display:flex;gap:10px"><button class="btn small" onclick="analisarTexto()">Analisar</button></div>
    <div id="lab-resultado" style="margin-top:12px"></div>
  </div>
  ${fraquezas.length ? `<div class="card" style="margin-bottom:16px">
    <h3>🎯 Seus pontos cegos <span class="hint">padrões em que você mais erra</span></h3>
    <div class="chart-scroll">${chartHBar(fraquezas.map(f => ({
      label: f.nome, value: Math.round(f.taxa * 100), display: Math.round(f.taxa * 100) + "% de acerto",
      color: f.taxa >= .7 ? "#10b981" : f.taxa >= .5 ? "#f59e0b" : "#ef4444",
    })), { max: 100 })}</div>
  </div>` : ""}
  <div class="card">
    <h3>⚠ Palavras perigosas <span class="hint">tendência estatística — nunca regra absoluta</span></h3>
    <div style="font-size:12px;margin-bottom:8px">
      <span class="tag bad">tende a ERRADO</span> <span class="tag ok">tende a CERTO</span> <span class="tag warn">neutra — exige atenção</span>
    </div>
    ${PALAVRAS_PERIGOSAS.map(p => `
      <div class="palavra-item">
        <span class="termo">${p.termo} <span class="tag ${p.vies === "E" ? "bad" : p.vies === "C" ? "ok" : "warn"}">${p.vies === "E" ? "→ E" : p.vies === "C" ? "→ C" : "atenção"}</span></span>
        <p>${p.explica}</p>
      </div>`).join("")}
    ${AVISO_ESTATISTICO}
  </div>`;
}
function analisarTexto() {
  const txt = $("#lab-texto").value.trim();
  const out = $("#lab-resultado");
  if (!txt) { out.innerHTML = ""; return; }
  const encontradas = detectarPalavrasPerigosas(txt);
  out.innerHTML = `
    <div class="q-enunciado" style="background:var(--surface2);border-radius:10px;padding:14px">${highlightPerigos(txt)}</div>
    ${encontradas.length ? `<div class="comentario">${encontradas.map(p => `
      <div class="bloco"><b>“${escapeHtml(p.termo)}” — ${p.vies === "E" ? "tende a item ERRADO" : p.vies === "C" ? "tende a item CERTO" : "sinal de atenção"}</b>${escapeHtml(p.explica)}</div>`).join("")}</div>`
    : `<div class="resultado neutro">Nenhuma palavra-sensível catalogada — julgue pelo conteúdo técnico e pelos padrões do DNA da banca.</div>`}`;
}

/* ================================================================
   PREDIÇÃO (Módulo 9)
   ================================================================ */
function renderPredicao() {
  const rank = PREDICOES.slice().sort((a, b) => b.score - a.score);
  MAIN().innerHTML = topbar("Predição de Cobrança",
    "Ranking de temas por probabilidade estimada para os próximos certames policiais") +
  `<div class="card">
    <h3>🏆 Ranking de temas quentes</h3>
    ${rank.map((p, i) => `
      <div class="pred-item">
        <div class="pred-rank">${i + 1}º</div>
        <div class="pred-body">
          <h4>${p.tema}</h4>
          <div class="motivos"><span class="tag">${p.disciplina}</span></div>
          <div class="motivos">${p.motivos.map(m => "· " + m).join("<br>")}</div>
        </div>
        <div class="pred-score">${p.score}%</div>
      </div>`).join("")}
    ${AVISO_ESTATISTICO}
  </div>
  <div class="card" style="margin-top:16px">
    <h3>📡 Radar de novidades legislativas e jurisprudenciais</h3>
    <div style="font-size:13.5px;display:grid;gap:8px">
      <div class="bloco" style="background:var(--surface2);border-radius:9px;padding:11px 14px">📜 <b>Lei 14.994/2024</b> — feminicídio vira tipo autônomo (CP, art. 121-A, 20–40 anos, hediondo).</div>
      <div class="bloco" style="background:var(--surface2);border-radius:9px;padding:11px 14px">📜 <b>Lei 14.550/2023</b> — medidas protetivas autônomas na Lei Maria da Penha (art. 19, §§ 4º–6º).</div>
      <div class="bloco" style="background:var(--surface2);border-radius:9px;padding:11px 14px">⚖ <b>STF, Tema 506 (RE 635.659)</b> — porte de maconha para consumo: parâmetro de 40g / 6 plantas fêmeas.</div>
      <div class="bloco" style="background:var(--surface2);border-radius:9px;padding:11px 14px">⚖ <b>STF, HC 185.913</b> — retroatividade do ANPP a processos sem trânsito em julgado.</div>
      <div class="bloco" style="background:var(--surface2);border-radius:9px;padding:11px 14px">⚖ <b>STF, Tema 1.199 (ARE 843.989)</b> — aplicação no tempo da reforma da improbidade (Lei 14.230/2021).</div>
      <div class="bloco" style="background:var(--surface2);border-radius:9px;padding:11px 14px">📜 <b>Lei 14.245/2021 (Lei Mariana Ferrer)</b> — proteção da vítima em audiências; conecta-se à vitimização secundária.</div>
    </div>
  </div>`;
}

/* ================================================================
   ESTRATÉGIAS (Módulo 10)
   ================================================================ */
function renderEstrategias() {
  MAIN().innerHTML = topbar("Estratégias CEBRASPE",
    "Biblioteca de técnicas de resolução com exemplos reais do banco") +
  `<div class="card">
    ${ESTRATEGIAS.map(e => `
      <div class="estrategia">
        <h4>✦ ${e.nome}</h4>
        <p>${e.desc}</p>
        <div class="aplicar">Quando aplicar: ${e.aplicar}
          ${e.exemplo ? ` · <a href="#" style="color:var(--accent)" onclick="verExemplo('${e.exemplo}');return false;">ver questão-exemplo (${e.exemplo})</a>` : ""}</div>
      </div>`).join("")}
  </div>`;
}
function verExemplo(qid) {
  bancoFiltros = { busca: null };
  navigate("banco");
  const q = QUESTOES.find(x => x.id === qid);
  if (!q) return;
  bancoFiltros = { disciplina: q.disciplina, assunto: q.assunto };
  renderBanco();
  setTimeout(() => {
    const el = document.getElementById("qc-" + qid);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); el.style.outline = "2px solid var(--accent)"; }
  }, 60);
}

/* ================================================================
   PERFIL DO ESTUDANTE (Módulo 8)
   ================================================================ */
function renderPerfil() {
  const g = statsGerais();
  const evo = evolucaoDiaria();
  const fraq = statsPorPegadinha();
  const gam = gamificacao();
  const discData = g.porDisc.filter(d => d.acertos + d.erros > 0).map(d => ({
    label: d.disciplina, value: Math.round((d.taxa || 0) * 100),
    display: `${Math.round((d.taxa || 0) * 100)}% (${d.acertos}✔/${d.erros}✖)`,
    color: d.taxa >= .8 ? "#10b981" : d.taxa >= .6 ? "#f59e0b" : "#ef4444",
  })).sort((a, b) => b.value - a.value);

  MAIN().innerHTML = topbar("Meu Perfil",
    "Seu retrato estatístico como candidato",
    `<label class="f" style="min-width:130px">Concurso-foco<select onchange="APP_STATE.config.concursoFoco=this.value||null;saveState();renderPerfil()">
      <option value="" ${!APP_STATE.config.concursoFoco ? "selected" : ""}>Todas as carreiras</option>
      ${CONCURSOS.map(c => `<option value="${c.id}" ${APP_STATE.config.concursoFoco === c.id ? "selected" : ""}>${c.id}</option>`).join("")}
    </select></label>
    <label class="f" style="min-width:130px">Cargo-foco<select onchange="APP_STATE.config.cargoFoco=this.value;saveState();renderPerfil()">
      ${CARGOS.map(c => `<option ${APP_STATE.config.cargoFoco === c ? "selected" : ""}>${c}</option>`).join("")}
    </select></label>`) +
  `<div class="grid cols-4" style="margin-bottom:16px">
    <div class="card stat"><span class="num">${g.nRespostas}</span><span class="lbl">respostas registradas</span></div>
    <div class="card stat"><span class="num ${g.taxa >= .75 ? "ok" : g.taxa === null ? "" : g.taxa >= .5 ? "warn" : "bad"}">${g.taxa === null ? "—" : Math.round(g.taxa * 100) + "%"}</span><span class="lbl">taxa de acerto geral</span></div>
    <div class="card stat"><span class="num">${g.tempoMedioSeg ? Math.round(g.tempoMedioSeg) + "s" : "—"}</span><span class="lbl">tempo médio por questão</span></div>
    <div class="card stat"><span class="num ${g.calibracao === null ? "" : g.calibracao >= .85 ? "ok" : "warn"}">${g.calibracao === null ? "—" : Math.round(g.calibracao * 100) + "%"}</span><span class="lbl">índice de confiança calibrada*</span></div>
  </div>
  <div class="grid cols-2">
    <div class="card">
      <h3>📈 Evolução diária</h3>
      ${evo.length >= 2 ? `<div class="chart-scroll">${chartLines(evo.map(e => e.dia.slice(5)), [{ nome: "% acerto", valores: evo.map(e => Math.round(e.taxa * 100)) }])}</div>`
      : `<div class="empty"><div class="big">📅</div>Responda questões em dias diferentes para ver sua curva de evolução.</div>`}
    </div>
    <div class="card">
      <h3>📊 Disciplinas fortes × fracas</h3>
      ${discData.length ? `<div class="chart-scroll">${chartHBar(discData, { max: 100 })}</div>`
      : `<div class="empty"><div class="big">🎯</div>Sem dados ainda — comece pelo simulado adaptativo.</div>`}
    </div>
  </div>
  ${fraq.length ? `<div class="card" style="margin-top:16px">
    <h3>🕳 Vulnerabilidade por padrão da banca <span class="hint">menor barra = ponto cego</span></h3>
    <div class="chart-scroll">${chartHBar(fraq.map(f => ({
      label: f.nome, value: Math.round(f.taxa * 100), display: `${Math.round(f.taxa * 100)}% (${f.acertos}✔/${f.erros}✖)`,
      color: f.taxa >= .7 ? "#10b981" : f.taxa >= .5 ? "#f59e0b" : "#ef4444",
    })), { max: 100 })}</div>
  </div>` : ""}
  <div class="card" style="margin-top:16px">
    <h3>🎖️ Patente e Conquistas</h3>
    <div class="gami-perfil-top">
      <div class="gami-badge lg">🎖️</div>
      <div style="flex:1">
        <div class="gami-nome lg">${escapeHtml(gam.nivel.nome)}</div>
        <div class="gami-xp">${gam.nivel.xp} XP total${gam.nivel.proximoNome ? ` · ${gam.nivel.xpProximo - gam.nivel.xp} XP até ${escapeHtml(gam.nivel.proximoNome)}` : " · patente máxima"}</div>
        <div class="gami-bar"><i style="width:${gam.nivel.pct}%"></i></div>
      </div>
    </div>
    <div style="font-size:12px;color:var(--muted);margin:14px 0 8px">${gam.desbloqueadas}/${gam.totalConquistas} conquistas desbloqueadas</div>
    <div class="conquistas-grid">
      ${gam.conquistas.map(c => `
        <div class="conquista-item ${c.desbloqueada ? "unlocked" : "locked"}">
          <div class="conquista-ico">${c.icone}</div>
          <div><div class="conquista-nome">${escapeHtml(c.nome)}</div><div class="conquista-desc">${escapeHtml(c.desc)}</div></div>
        </div>`).join("")}
    </div>
  </div>
  <div class="card" style="margin-top:16px">
    <h3>🗂 Histórico de simulados</h3>
    ${APP_STATE.sessoes.length ? APP_STATE.sessoes.slice(-8).reverse().map(s => `
      <div class="radar-linha">${new Date(s.data).toLocaleDateString("pt-BR")} · ${s.n} questões
        <span class="tag ok">${s.acertos}✔</span><span class="tag bad">${s.erros}✖</span><span class="tag">${s.brancos}⊘</span>
        <span class="pct ${s.liquida > 0 ? "" : ""}">${s.liquida > 0 ? "+" : ""}${s.liquida} líquida</span></div>`).join("")
    : `<div class="empty">Nenhum simulado concluído ainda.</div>`}
  </div>
  <div style="font-size:12px;color:var(--muted);margin-top:14px">* Confiança calibrada: % de acerto nas questões em que você marcou confiança "alta". Abaixo de 85% indica excesso de confiança — o perfil de candidato que mais perde pontos líquidos no CEBRASPE.</div>
  <div style="margin-top:18px">
    <button class="btn ghost small" onclick="confirmarResetarDados()">🗑 Zerar meu histórico</button>
  </div>`;
}
