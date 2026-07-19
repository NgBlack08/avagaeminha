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
  { id: "raiox",      nome: "Raio-X da Banca",       ico: "◉" },
  { id: "pegadinhas", nome: "Detector de Pegadinhas",ico: "⚠" },
  { id: "predicao",   nome: "Predição de Cobrança",  ico: "↗" },
  { id: "estrategias",nome: "Estratégias",           ico: "✦" },
  { id: "perfil",     nome: "Meu Perfil",            ico: "◔" },
];

let currentView = "dashboard";
let SIM = null; /* estado do simulado em andamento */

/* ============ Bootstrap ============ */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.dataset.theme = APP_STATE.config.tema || "dark";
  renderSidebar();
  navigate("dashboard");
});

function renderSidebar() {
  const nav = $("#nav");
  nav.innerHTML =
    '<div class="nav-sep">Treinamento</div>' +
    VIEWS.slice(0, 3).map(navBtn).join("") +
    '<div class="nav-sep">Inteligência</div>' +
    VIEWS.slice(3, 7).map(navBtn).join("") +
    '<div class="nav-sep">Você</div>' +
    VIEWS.slice(7).map(navBtn).join("");
}
function navBtn(v) {
  return `<button class="nav-btn ${v.id === currentView ? "active" : ""}" onclick="navigate('${v.id}')">
    <span class="ico">${v.ico}</span>${v.nome}</button>`;
}

function navigate(view) {
  currentView = view;
  renderSidebar();
  closeSidebar();
  const fn = {
    dashboard: renderDashboard, banco: renderBanco, simulado: renderSimulado,
    raiox: renderRaioX, pegadinhas: renderPegadinhas, predicao: renderPredicao,
    estrategias: renderEstrategias, perfil: renderPerfil,
  }[view];
  fn();
  window.scrollTo(0, 0);
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
   DASHBOARD (Módulos 8 + 12)
   ================================================================ */
function renderDashboard() {
  const g = statsGerais();
  const radar = radarAprovacao();
  const devidas = questoesDevidas().length;
  const foco = CONCURSOS.find(c => c.id === APP_STATE.config.concursoFoco) || CONCURSOS[0];

  const linha = (arr, cls, icone) => arr.length
    ? arr.map(d => `<div class="radar-linha">${icone} ${d.disciplina}<span class="pct">${Math.round(d.taxa * 100)}%</span></div>`).join("")
    : `<div class="radar-linha" style="color:var(--muted)">— ainda sem dados suficientes</div>`;

  MAIN().innerHTML = topbar("Dashboard",
    `Foco: <b>${foco.nome}</b> · Cargo: <b>${APP_STATE.config.cargoFoco}</b>`,
    `<button class="btn small" onclick="navigate('simulado')">▶ Iniciar simulado</button>`) +
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
  const lista = filtrarQuestoes(bancoFiltros);

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
        <option value="20">20</option><option value="40">40 (todas)</option>
      </select></label>
      <label class="f">Concurso<select id="sim-concurso">
        <option value="">Todos (foco em ${APP_STATE.config.concursoFoco})</option>
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
function iniciarSimulado() {
  const n = +$("#sim-n").value;
  const modo = $("#sim-modo").value;
  const filtros = { concurso: $("#sim-concurso").value || null, disciplina: $("#sim-disc").value || null };
  let questoes;
  if (modo === "revisao") {
    questoes = questoesDevidas().slice(0, n);
    if (!questoes.length) { alert("Nenhuma revisão devida no momento. Bom sinal! Use o modo adaptativo."); return; }
  } else if (modo === "erradas") {
    questoes = montarSimulado(n, { ...filtros, somenteErradas: true });
    if (!questoes.length) { alert("Você ainda não tem questões erradas registradas com esses filtros."); return; }
  } else {
    questoes = montarSimulado(n, filtros);
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
  APP_STATE.sessoes.push({ data: Date.now(), n: r.length, acertos, erros, brancos, liquida, tempoTotal });
  saveState();

  /* desempenho por disciplina nesta sessão */
  const porDisc = {};
  for (const resp of r) {
    const q = QUESTOES.find(x => x.id === resp.qid);
    if (!porDisc[q.disciplina]) porDisc[q.disciplina] = { a: 0, e: 0 };
    if (!resp.branco) (resp.correta ? porDisc[q.disciplina].a++ : porDisc[q.disciplina].e++);
  }
  const discData = Object.entries(porDisc).map(([d, v]) => ({
    label: d, value: (v.a + v.e) ? Math.round(100 * v.a / (v.a + v.e)) : 0,
    display: `${v.a}✔ ${v.e}✖`, color: (v.a + v.e) && v.a / (v.a + v.e) >= .7 ? "#22c55e" : "#ef4444",
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
      color: f.taxa >= .7 ? "#22c55e" : f.taxa >= .5 ? "#f59e0b" : "#ef4444",
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
  const discData = g.porDisc.filter(d => d.acertos + d.erros > 0).map(d => ({
    label: d.disciplina, value: Math.round((d.taxa || 0) * 100),
    display: `${Math.round((d.taxa || 0) * 100)}% (${d.acertos}✔/${d.erros}✖)`,
    color: d.taxa >= .8 ? "#22c55e" : d.taxa >= .6 ? "#f59e0b" : "#ef4444",
  })).sort((a, b) => b.value - a.value);

  MAIN().innerHTML = topbar("Meu Perfil",
    "Seu retrato estatístico como candidato",
    `<label class="f" style="min-width:130px">Concurso-foco<select onchange="APP_STATE.config.concursoFoco=this.value;saveState();renderPerfil()">
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
      color: f.taxa >= .7 ? "#22c55e" : f.taxa >= .5 ? "#f59e0b" : "#ef4444",
    })), { max: 100 })}</div>
  </div>` : ""}
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
    <button class="btn ghost small" onclick="if(confirm('Apagar todo o seu histórico de respostas e estatísticas? Esta ação não pode ser desfeita.')){resetarDados();navigate('perfil')}">🗑 Zerar meu histórico</button>
  </div>`;
}
