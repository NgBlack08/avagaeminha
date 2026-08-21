/* =====================================================================
   QUESTLAB — Aplicação (SPA)
   Telas: Dashboard, Banco, Simulado, Raio-X da Banca, Predição,
   Estratégias, Detector de Pegadinhas, Perfil.
   ===================================================================== */

const $ = sel => document.querySelector(sel);
const MAIN = () => $("#main");

const VIEWS = [
  { id: "dashboard",  nome: "Dashboard",             ico: "◧" },
  { id: "planoestudo",nome: "Plano de Estudo",       ico: "📅" },
  { id: "banco",      nome: "Banco de Questões",     ico: "▤" },
  { id: "simulado",   nome: "Simulado Adaptativo",   ico: "▶" },
  { id: "prova",      nome: "Modo Prova",            ico: "◈" },
  { id: "ranking",    nome: "Ranking & Desafios",    ico: "🏆" },
  { id: "raiox",      nome: "Raio-X da Banca",       ico: "◉" },
  { id: "pegadinhas", nome: "Detector de Pegadinhas",ico: "⚠" },
  { id: "predicao",   nome: "Predição de Cobrança",  ico: "↗" },
  { id: "estrategias",nome: "Estratégias",           ico: "✦" },
  { id: "perfil",     nome: "Meu Perfil",            ico: "◔" },
  { id: "planos",     nome: "Planos",                ico: "💳" },
];

let currentView = "dashboard";
let SIM = null; /* estado do simulado adaptativo em andamento */
let PROVA = null; /* estado do Modo Prova em andamento */
let historyInitialized = false; /* controla a integração com o histórico do navegador */

/* ============ Bootstrap ============ */
document.addEventListener("DOMContentLoaded", () => {
  bootstrapAuth();
});

/* ================================================================
   STATUS DE REDE E SINCRONIZAÇÃO

   O app salvava em silêncio: sem conexão ele continuava respondendo
   normalmente, sem nada indicando que as respostas não estavam indo
   para o servidor. Agora a fila de escrita (js/engine.js) avisa por
   evento sempre que muda, e este aviso traduz isso para o aluno —
   "está guardado, vai subir depois" em vez de descoberta tardia.
   ================================================================ */
let netEsconderTimer = null;
let netTinhaPendencia = false;

function barraStatusRede() {
  let el = document.getElementById("net-status");
  if (!el) {
    el = document.createElement("div");
    el.id = "net-status";
    el.className = "net-status";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    document.body.appendChild(el);
  }
  return el;
}

function atualizarStatusRede() {
  const el = barraStatusRede();
  clearTimeout(netEsconderTimer);
  if (MODO !== "cloud") { el.className = "net-status"; return; }

  const { pendentes, respostas, online, tentativas } = statusFila();
  const plural = respostas === 1 ? "resposta" : "respostas";
  /* A partir de três falhas seguidas no mesmo item o problema não é
     lentidão de rede, é alguma coisa que não vai passar sozinha. Continuar
     escrevendo "Enviando…" por mais meia hora seria mentira tranquilizante:
     o aluno precisa saber que o envio está apanhando, e que o progresso
     está guardado localmente enquanto isso. */
  const travando = tentativas >= 3;

  /* Prioridade sobre o estado da fila: se o que está na tela é a cópia
     local, o aluno precisa saber ANTES de tirar conclusão do que vê —
     um plano ou um histórico defasado são mais enganosos que um envio
     pendente. */
  const { desatualizado } = statusSincronizacao();
  if (desatualizado) {
    el.textContent = online
      ? "Não foi possível atualizar seus dados · mostrando a última versão salva"
      : "Sem conexão · mostrando a última versão salva";
    el.className = "net-status visivel off";
    netTinhaPendencia = netTinhaPendencia || pendentes > 0;
    return;
  }

  if (!online) {
    el.textContent = respostas > 0
      ? `Sem conexão · ${respostas} ${plural} guardada${respostas === 1 ? "" : "s"} para enviar depois`
      : "Sem conexão · seu progresso continua sendo salvo";
    el.className = "net-status visivel off";
    netTinhaPendencia = netTinhaPendencia || pendentes > 0;
  } else if (pendentes > 0) {
    if (travando) {
      /* Curto de propósito: a barra é uma pílula de 460px, e um texto de
         três linhas dentro de um border-radius arredondado fica ilegível. */
      el.textContent = respostas > 0
        ? `Envio travado · ${respostas} ${plural} salva${respostas === 1 ? "" : "s"} aqui, tentando de novo`
        : "Sincronização travada · tentando de novo";
      el.className = "net-status visivel off";
    } else {
      el.textContent = respostas > 0 ? `Enviando ${respostas} ${plural}…` : "Sincronizando…";
      el.className = "net-status visivel sync";
    }
    netTinhaPendencia = true;
  } else if (netTinhaPendencia) {
    el.textContent = "Tudo sincronizado";
    el.className = "net-status visivel ok";
    netTinhaPendencia = false;
    netEsconderTimer = setTimeout(() => { el.className = "net-status"; }, 2600);
  } else {
    el.className = "net-status";
  }
}

window.addEventListener("questlab:fila", atualizarStatusRede);
window.addEventListener("questlab:estado", atualizarStatusRede);
window.addEventListener("offline", atualizarStatusRede);
window.addEventListener("online", () => { atualizarStatusRede(); flushFila(); });
/* Voltar para a aba é o momento mais provável de a conexão ter
   voltado sem que o evento "online" tenha disparado (suspensão do
   aparelho, troca de rede). */
document.addEventListener("visibilitychange", () => { if (!document.hidden) flushFila(); });

/* ================================================================
   REDE DE SEGURANÇA PARA EXCEÇÕES NÃO TRATADAS

   Uma exceção em qualquer função de render deixava a tela em branco,
   sem explicação e sem caminho de volta — e, como nada era reportado,
   o defeito só aparecia se o próprio usuário avisasse.
   ================================================================ */
let erroGlobalUltimo = "";

function mostrarErroInesperado(origem, detalhe) {
  const assinatura = origem + ":" + String(detalhe || "");
  if (assinatura === erroGlobalUltimo) return; /* não repete o mesmo erro em loop */
  erroGlobalUltimo = assinatura;
  console.error("[QuestLab]", origem, detalhe);
  /* registrarEvento engole a própria rejeição — se não engolisse, um erro
     de rede aqui viraria unhandledrejection, que chamaria esta função de
     novo, em laço. */
  registrarEvento("excecao", `${origem}: ${String(detalhe || "").slice(0, 200)}`);

  let el = document.getElementById("erro-global");
  if (!el) {
    el = document.createElement("div");
    el.id = "erro-global";
    el.className = "erro-global";
    el.setAttribute("role", "alert");
    document.body.appendChild(el);
  }
  const telaVazia = !MAIN() || MAIN().children.length === 0;
  el.innerHTML = `
    <strong>Algo deu errado nesta tela.</strong>
    <span>Suas respostas estão salvas${telaVazia ? " — recarregue para continuar" : ""}.</span>
    <div class="erro-global-acoes">
      <button class="btn small" onclick="location.reload()">Recarregar</button>
      <button class="btn ghost small" onclick="this.closest('.erro-global').remove()">Fechar</button>
    </div>`;
}

window.addEventListener("error", (e) => {
  /* Falha de carregamento de recurso (script/imagem) borbulha aqui com
     target != window; quem trata isso é quem pediu o recurso — ver o
     onerror de carregarDetalhes() em js/engine.js. */
  if (e.target && e.target !== window) return;
  mostrarErroInesperado("erro", e.message || e.error);
});
window.addEventListener("unhandledrejection", (e) => {
  mostrarErroInesperado("promessa", e.reason?.message || e.reason);
});

/* Botão voltar/avançar do navegador: retorna para a view anterior DENTRO
   do app, em vez de sair do site (só passa a existir histórico depois
   que o app é inicializado — historyInitialized). */
window.addEventListener("popstate", (e) => {
  if (!historyInitialized) return;
  const view = (e.state && e.state.view) || "dashboard";
  navigate(view, { fromPopstate: true });
});

/* `novoAcesso` distingue o ACESSO INICIAL ao site (login, cadastro, troca de
   senha) de um F5 no meio de uma sessão já ativa.

   Acesso inicial sempre abre no Dashboard, já com dados atualizados (o
   estado chega fresco da nuvem porque carregarEstadoNuvem() é sempre
   aguardado ANTES de iniciarApp() em todos os caminhos de entrada). Um F5,
   por outro lado, deve apenas atualizar a página na MESMA vista em que o
   aluno estava — ele não pode ser jogado de volta ao Dashboard e perder o
   lugar no meio de uma lista de questões. Como o hash já carrega a view
   (ver pushState em navigate()), basta ignorá-lo quando o acesso é novo e
   honrá-lo quando é recarga.

   O retorno do OAuth do Google cai no caminho de recarga, mas chega com
   tokens no hash em vez de nome de view — então não passa em viewsValidas e
   vai para o Dashboard sozinho, que é o comportamento desejado. */
function iniciarApp({ novoAcesso = false } = {}) {
  const root = document.getElementById("approot");
  if (root) root.classList.remove("no-sidebar");
  document.documentElement.dataset.theme = APP_STATE.config.tema || "dark";
  renderSidebar();
  iniciarMonitorInatividade();
  atualizarStatusRede(); /* pode haver fila herdada de uma sessão offline anterior */
  const mpStatus = checkMpRedirectStatus();
  const hashView = (location.hash || "").replace(/^#/, "");
  const viewsValidas = VIEWS.map(v => v.id).concat(["admin"]);
  const manterAba = !novoAcesso && viewsValidas.includes(hashView);
  const destino = mpStatus ? "planos" : (manterAba ? hashView : "dashboard");
  navigate(destino);
  if (mpStatus) tratarRetornoMercadoPago();
}

/* Chamado quando o usuário volta do checkout do Mercado Pago (query param
   mp_status, ver checkMpRedirectStatus() em js/auth.js). O status real da
   assinatura só é confirmado depois pelo webhook (mp-webhook), então aqui
   só avisamos e tentamos recarregar o estado — pode levar alguns segundos
   até refletir "autorizada". */
async function tratarRetornoMercadoPago() {
  await mostrarAlerta("Recebemos seu retorno do Mercado Pago. A confirmação da assinatura pode levar alguns instantes — vamos verificar o status agora.", "Assinatura em processamento");
  await carregarEstadoNuvem(CURRENT_USER);
  renderSidebar();
  renderPlanos();
}

function renderSidebar() {
  const nav = $("#nav");
  nav.innerHTML =
    '<div class="nav-sep">Treinamento</div>' +
    VIEWS.slice(0, 5).map(navBtn).join("") +
    '<div class="nav-sep">Competição</div>' +
    VIEWS.slice(5, 6).map(navBtn).join("") +
    '<div class="nav-sep">Inteligência</div>' +
    VIEWS.slice(6, 10).map(navBtn).join("") +
    '<div class="nav-sep">Você</div>' +
    VIEWS.slice(10).map(navBtn).join("") +
    (APP_STATE.config.isAdmin
      ? '<div class="nav-sep">Administração</div>' + navBtn({ id: "admin", nome: "Usuários & Convites", ico: "🛡" })
      : "");
  const acct = $("#acct");
  if (acct && CURRENT_USER) {
    const planoTag = APP_STATE.config.plano !== "completo"
      ? `<div style="margin-top:6px"><span class="tag">Plano Gratuito</span> <button class="link-btn" style="font-size:12px" onclick="navigate('planos')">ver planos</button></div>`
      : "";
    acct.innerHTML = `<div style="color:var(--text)">👤 ${escapeHtml(CURRENT_USER.email)}</div>${planoTag}<button class="btn ghost small" style="margin-top:6px;width:100%" onclick="sair()">Sair</button>`;
  }
}
function navBtn(v) {
  return `<button class="nav-btn ${v.id === currentView ? "active" : ""}" onclick="navigate('${v.id}')">
    <span class="ico">${v.ico}</span>${v.nome}</button>`;
}

async function navigate(view, opts = {}) {
  const fromPopstate = !!opts.fromPopstate;
  /* Proteção: sair de uma prova em andamento encerra e corrige. */
  if (PROVA && !PROVA.finalizada && view !== "prova") {
    const ok = await mostrarConfirm("Você está com uma prova em andamento. Sair agora vai ENCERRAR e corrigir a prova. Deseja sair?", "Encerrar prova em andamento?");
    if (!ok) {
      /* Veio do botão voltar do navegador: desfaz o "voltar", mantendo a prova em foco. */
      if (fromPopstate) history.pushState({ view: "prova" }, "", "#prova");
      return;
    }
    pararTimerProva();
    PROVA = null;
  }
  /* Proteção: sair de um duelo em andamento descarta o progresso não enviado. */
  if (typeof DUELO !== "undefined" && DUELO && view !== "ranking") {
    const ok = await mostrarConfirm("Você está no meio de um duelo. Sair agora descarta o duelo (nada será enviado). Deseja sair?", "Abandonar duelo?");
    if (!ok) {
      if (fromPopstate) history.pushState({ view: "ranking" }, "", "#ranking");
      return;
    }
    if (typeof pararTimerDuelo === "function") pararTimerDuelo();
    DUELO = null;
  }
  /* Entrar no Banco vindo de outra tela conta como visita nova: a lista é
     reembaralhada. Sem isto, `bancoListaCache` só caía quando a CHAVE mudava
     (filtros, plano, trilha, cargo), de modo que sair para o Dashboard e
     voltar reapresentava exatamente a mesma sequência — e o aluno passava a
     decorar a ordem em vez do conteúdo. O cache continua valendo dentro da
     visita, que é o que impede a lista de saltar a cada Anterior/Próxima,
     a cada troca de página e depois de responder. */
  if (view === "banco" && currentView !== "banco") {
    bancoListaCache = null;
    bancoIndice = 0;
    bancoPagina = 0;
  }
  currentView = view;
  if (!fromPopstate) {
    if (!historyInitialized) {
      history.replaceState({ view }, "", "#" + view);
      historyInitialized = true;
    } else if (!history.state || history.state.view !== view) {
      history.pushState({ view }, "", "#" + view);
    }
  }
  if (view === "raiox" || view === "perfil") marcarVisitaOnboarding(view);
  renderSidebar();
  closeSidebar();
  const fn = {
    dashboard: renderDashboard, planoestudo: renderPlanoEstudo, banco: renderBanco, simulado: renderSimulado,
    prova: renderProva, ranking: renderRanking, raiox: renderRaioX, pegadinhas: renderPegadinhas,
    predicao: renderPredicao, estrategias: renderEstrategias, perfil: renderPerfil, admin: renderAdmin,
    planos: renderPlanos,
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
/* ---------------- Feedback sobre a explicação ----------------
   Botão discreto sob o comentário. Discreto de propósito: quem entendeu
   a questão não deve ser interrompido por um pedido de avaliação, e quem
   não entendeu vai procurar onde reclamar. */
function feedbackHtml(q) {
  if (MODO !== "cloud") return ""; /* sem login não há onde gravar */
  const ja = feedbackDaQuestao(q.id);
  /* Três estados, e não dois. O que faltava era o terceiro: sinalizado E
     JÁ REVISADO. Sem ele, quem escreveu o feedback via o mesmo aviso
     antes e depois da correção, e não tinha como saber se o relato tinha
     ido para algum lugar — o que desestimula o próximo relato, que é
     justamente a fonte mais barata de conserto que este banco tem. */
  return `<div class="fb-linha" id="fb-${q.id}">${
    ja && ja.resolvido
      ? `<span class="fb-ok fb-resolvido" title="Sua sinalização foi analisada e a questão foi revisada.">✓ Revisado após a sua sinalização</span>
         <button class="fb-btn" onclick="abrirFeedback('${q.id}')">sinalizar de novo</button>`
      : ja
        ? `<span class="fb-ok">✓ Você sinalizou esta explicação — em análise</span>
           <button class="fb-btn" onclick="desfazerFeedback('${q.id}')">desfazer</button>`
        : `<button class="fb-btn" onclick="abrirFeedback('${q.id}')">Esta explicação não ficou clara?</button>`
  }</div>`;
}

function repintarFeedback(qid) {
  const alvo = $("#fb-" + qid);
  if (alvo) alvo.outerHTML = feedbackHtml(QUESTOES_POR_ID.get(qid));
}

async function desfazerFeedback(qid) {
  try { await removerFeedback(qid); repintarFeedback(qid); }
  catch (e) { mostrarAlerta("Não foi possível desfazer agora: " + (e.message || e), "Erro"); }
}

async function abrirFeedback(qid) {
  const q = QUESTOES_POR_ID.get(qid); /* é Map, não objeto — colchete devolve undefined */
  const escolha = await mostrarPromptFeedback(q);
  if (!escolha) return;
  try {
    await enviarFeedback(qid, q.disciplina, escolha.motivo, escolha.comentario);
    repintarFeedback(qid);
  } catch (e) {
    mostrarAlerta("Não foi possível registrar agora: " + (e.message || e), "Erro");
  }
}

/* Motivo obrigatório, comentário opcional — resolve com {motivo, comentario}
   ou null se cancelado. Mesmo esqueleto de mostrarPromptNumero(). */
function mostrarPromptFeedback(q) {
  return new Promise(resolve => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
        <div class="modal-titulo" id="modal-titulo">O que não ficou claro?</div>
        <div class="modal-msg">Questão ${escapeHtml(q.id)} — ${escapeHtml(q.disciplina)}. Isso entra numa fila de revisão; quanto mais gente aponta a mesma questão, antes ela é reescrita.</div>
        <div class="fb-motivos">
          ${FEEDBACK_MOTIVOS.map((m, i) => `
            <label class="fb-motivo">
              <input type="radio" name="fb-motivo" value="${m.slug}"${i === 0 ? " checked" : ""}>
              <span>${escapeHtml(m.rotulo)}</span>
            </label>`).join("")}
        </div>
        <textarea class="fb-texto" id="fb-comentario" rows="3" maxlength="500"
          placeholder="Quer detalhar? (opcional)"></textarea>
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
    function enviar() {
      const marcado = overlay.querySelector('input[name="fb-motivo"]:checked');
      if (!marcado) return;
      fechar({ motivo: marcado.value, comentario: overlay.querySelector("#fb-comentario").value.trim() });
    }
    [{ label: "Cancelar", cls: "ghost", acao: () => fechar(null) },
     { label: "Enviar", cls: "", acao: enviar }].forEach(b => {
      const btn = document.createElement("button");
      btn.className = "btn small " + b.cls;
      btn.textContent = b.label;
      btn.onclick = b.acao;
      actions.appendChild(btn);
    });
    /* Enter não envia: o campo é textarea e quebrar linha tem de funcionar. */
    function onKey(e) { if (e.key === "Escape") fechar(null); }
    document.addEventListener("keydown", onKey);
    overlay.addEventListener("click", e => { if (e.target === overlay) fechar(null); });
    document.body.appendChild(overlay);
  });
}

/* Modal com campo numérico (ex.: definir uma meta) — retorna o número
   digitado, ou null se cancelado. */
function mostrarPromptNumero({ titulo, mensagem, valorInicial, min = 0, max = 100, sufixo = "" }) {
  return new Promise(resolve => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
        ${titulo ? `<div class="modal-titulo" id="modal-titulo">${escapeHtml(titulo)}</div>` : ""}
        <div class="modal-msg">${escapeHtml(mensagem)}</div>
        <div class="modal-prompt-wrap">
          <input type="number" class="modal-prompt-input" id="modal-prompt-input" min="${min}" max="${max}" value="${valorInicial}">
          ${sufixo ? `<span class="modal-prompt-sufixo">${escapeHtml(sufixo)}</span>` : ""}
        </div>
        <div class="modal-actions"></div>
      </div>`;
    const input = overlay.querySelector("#modal-prompt-input");
    const actions = overlay.querySelector(".modal-actions");
    let resolvido = false;
    function fechar(valor) {
      if (resolvido) return;
      resolvido = true;
      document.removeEventListener("keydown", onKey);
      overlay.remove();
      resolve(valor);
    }
    function confirmar() {
      let v = Number(input.value);
      if (isNaN(v)) return input.focus();
      v = Math.min(max, Math.max(min, v));
      fechar(v);
    }
    [{ label: "Cancelar", value: null, cls: "ghost", cancelavel: true }, { label: "Salvar", value: "confirmar", cls: "" }].forEach(b => {
      const btn = document.createElement("button");
      btn.className = "btn small " + b.cls;
      btn.textContent = b.label;
      btn.onclick = () => b.value === "confirmar" ? confirmar() : fechar(null);
      actions.appendChild(btn);
    });
    function onKey(e) {
      if (e.key === "Escape") fechar(null);
      if (e.key === "Enter") confirmar();
    }
    document.addEventListener("keydown", onKey);
    overlay.addEventListener("click", e => { if (e.target === overlay) fechar(null); });
    document.body.appendChild(overlay);
    setTimeout(() => { input.focus(); input.select(); }, 20);
  });
}
/* Modal com campo de texto livre. Irmão de mostrarPromptNumero, criado
   para o convite poder registrar a quem se destina — sem isso, uma lista
   de códigos aleatórios não diz ao administrador quem é quem. */
function mostrarPromptTexto({ titulo, mensagem, valorInicial = "", placeholder = "", maxlength = 80, opcional = false }) {
  return new Promise(resolve => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
        ${titulo ? `<div class="modal-titulo" id="modal-titulo">${escapeHtml(titulo)}</div>` : ""}
        <div class="modal-msg">${escapeHtml(mensagem)}</div>
        <div class="modal-prompt-wrap">
          <input type="text" class="modal-prompt-input" id="modal-prompt-txt"
                 maxlength="${maxlength}" placeholder="${escapeHtml(placeholder)}" autocomplete="off">
        </div>
        <div class="modal-actions"></div>
      </div>`;
    const input = overlay.querySelector("#modal-prompt-txt");
    input.value = valorInicial;
    const actions = overlay.querySelector(".modal-actions");
    let resolvido = false;
    function fechar(v) {
      if (resolvido) return;
      resolvido = true;
      document.removeEventListener("keydown", onKey);
      overlay.remove();
      resolve(v);
    }
    function confirmar() {
      const v = input.value.trim();
      if (!v && !opcional) return input.focus();
      fechar(v);
    }
    [{ label: "Cancelar", v: null, cls: "ghost" }, { label: "Confirmar", v: "ok", cls: "" }].forEach(b => {
      const btn = document.createElement("button");
      btn.className = "btn small " + b.cls;
      btn.textContent = b.label;
      btn.onclick = () => b.v === "ok" ? confirmar() : fechar(null);
      actions.appendChild(btn);
    });
    function onKey(e) {
      if (e.key === "Escape") fechar(null);
      if (e.key === "Enter") confirmar();
    }
    document.addEventListener("keydown", onKey);
    overlay.addEventListener("click", e => { if (e.target === overlay) fechar(null); });
    document.body.appendChild(overlay);
    setTimeout(() => { input.focus(); input.select(); }, 20);
  });
}

async function editarMetaTaxa() {
  const atual = Math.round((APP_STATE.config.metaTaxa ?? 0.75) * 100);
  const valor = await mostrarPromptNumero({
    titulo: "Meta do Radar de Aprovação",
    mensagem: "Defina a taxa de acerto que você quer atingir como meta de aprovação.",
    valorInicial: atual, min: 10, max: 100, sufixo: "% de acertos",
  });
  if (valor === null) return;
  definirMetaTaxa(valor / 100);
  renderDashboard();
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

/* Bloco "Padrão da banca detectado", mostrado depois do gabarito.

   Antes ele imprimia "(incidência 82%)" cru ao lado do nome do padrão. O
   número é a `incidencia` do DNA_BANCA, que o comentário daquela constante
   descreve como ESTIMATIVA EDITORIAL — "não foi medida, e por isso não deve
   ser exibida como se fosse estatística apurada". O bloco violava essa regra
   justamente onde o aluno passa mais tempo: uma vez por questão respondida.

   Passa a seguir o mesmo modelo que o Dashboard já adotava — a estimativa
   nomeada como estimativa, e ao lado dela a composição MEDIDA deste banco,
   com o alerta quando o padrão for previsível demais aqui dentro. São
   grandezas de origem diferente e agora aparecem rotuladas como tais. */
function padraoDetectadoHtml(dna) {
  if (!dna) return "";
  const c = composicaoPadroes().find(x => x.slug === dna.slug);
  const r = incidenciaRealPadroes().find(x => x.slug === dna.slug);
  const viciado = c && c.total >= 30 && c.previsibilidade >= 0.85;
  /* Duas linhas, duas origens, nomeadas. A de cima é a banca; a de baixo
     somos nós. Elas discordarem é informação — é o alarme de viés de
     autoria funcionando. */
  const real = r
    ? `<div class="dna-origem">Em prova real: <b>${r.n} de ${totalProvaReal()}</b> itens da CEBRASPE que catalogamos usam este padrão (${dec1(r.pct)}%)${r.n === 0 ? " — <b>nunca observado</b> nos cadernos que medimos" : ""}. Frequência não prevê gabarito.</div>`
    : "";
  const medido = c
    ? `<div class="dna-comp">Neste banco: ${c.total} itens deste padrão · ${Math.round(c.previsibilidade * 100)}% caem em <b>${c.ladoDominante === "C" ? "CERTO" : "ERRADO"}</b>${viciado ? ` <span class="dna-alerta" title="Dentro deste banco o padrão é previsível demais. É característica do acervo, não da banca — não use como regra de chute.">⚠ previsível aqui</span>` : ""}</div>`
    : "";
  return `<div class="bloco"><b>Padrão da banca detectado: ${escapeHtml(dna.nome)}</b>${escapeHtml(dna.gatilho)}
    ${real}${medido}</div>`;
}

/* ---------------- Aviso de vigência normativa ----------------

   O campo `vigencia` existia em js/data-ruptura.js desde a entrada do
   relatório, o validador já exigia `vigenciaNota` quando ele não fosse
   "vigente"… e NENHUMA tela o desenhava. Metade do mecanismo, portanto:
   dava para marcar uma questão como apoiada em norma revogada e o aluno
   continuava sem enxergar isso.

   Aparece em dois lugares, com propósitos diferentes:
     • etiqueta no cabeçalho do card — ANTES de responder, porque quem
       estuda um cargo extinto precisa saber disso enquanto lê o item;
     • bloco completo depois do gabarito, junto da resolução, que é onde
       cabe a explicação da mudança.

   Não é o mesmo que `foraEdital`: aquele diz "não cai na sua prova", este
   diz "cai, mas a norma por trás mudou". */
function vigenciaDe(q) {
  if (!q.vigencia || q.vigencia === "vigente") return null;
  return VIGENCIA_STATUS.find(v => v.id === q.vigencia) || null;
}

function vigenciaTagHtml(q) {
  const v = vigenciaDe(q);
  if (!v) return "";
  return `<span class="tag warn vig-tag" title="${escapeHtml(q.vigenciaNota || v.desc)}">${v.ico} ${escapeHtml(v.rotulo)}</span>`;
}

function vigenciaBlocoHtml(q) {
  const v = vigenciaDe(q);
  if (!v) return "";
  return `<div class="bloco vig-bloco"><b>${v.ico} ${escapeHtml(v.rotulo)}</b>${escapeHtml(q.vigenciaNota || v.desc)}</div>`;
}

/* Uma casa decimal com vírgula. O app já escrevia preço e peso assim
   (`R$ 29,90`, `peso 12,7`); as porcentagens do DNA saíam com ponto e
   destoavam no meio da mesma frase. */
function dec1(n) { return n.toFixed(1).replace(".", ","); }

/* Ordena o radar lexical do marcador mais informativo para o menos. Sem
   isso a lista sugere que todos os termos têm o mesmo peso, que é
   justamente o erro que a calibração desfez. */
const ORDEM_FORCA = { forte: 4, moderado: 3, fraco: 2, nulo: 1 };

/* ================================================================
   ONBOARDING — checklist de primeiros passos (Dashboard)
   Calculado sobre dados já existentes (respostas/sessões) + flags de
   visita (Raio-X/Perfil), sincronizadas na nuvem via
   APP_STATE.config.onboardingVisitas (marcarVisitaOnboarding, em
   engine.js) — mesmo progresso aparece em qualquer dispositivo.
   ================================================================ */
const ONBOARDING_DISMISS_KEY = "questlab-onboarding-dismissed";
function onboardingPassos() {
  const totalRespondidas = Object.values(APP_STATE.respostas).reduce((a, h) => a + h.length, 0);
  const visitas = APP_STATE.config.onboardingVisitas || {};
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
  /* A meta do dia é por trilha (ver metaDoDia, em engine.js) enquanto a
     semanal é global — as duas convivem aqui de propósito: a de hoje diz
     o que fazer agora, a da semana mede o hábito. */
  const dia = metaDoDia();
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
        <div class="gami-meta-lbl">Meta de hoje: ${dia.feitas}/${dia.meta} questões ${dia.cumprida
          ? '<span class="tag ok">✓ batida</span>'
          : `<a href="#" onclick="navigate('planoestudo');return false;">faltam ${dia.restantes} →</a>`}</div>
        <div class="gami-bar small ${dia.cumprida ? "ok" : ""}"><i style="width:${dia.pct}%"></i></div>
        <div class="gami-meta-lbl" style="margin-top:8px">Meta semanal: ${semana.respondidas}/${semana.meta} questões</div>
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
/* Card do corte oficial. Só aparece com trilha escolhida e com histórico
   suficiente para a projeção significar alguma coisa — sem isso mostraria
   uma barra vermelha assustadora para quem acabou de criar a conta. */
function corteHtml() {
  const p = projecaoCorte();
  if (!p) return "";
  const g = statsGerais();
  if (g.taxa === null || g.respondidasUnicas < 20) return "";

  const nome = { p1: "Básicos (P1)", p2: "Específicos (P2)", total: "Conjunto" };
  const CLS = { passa: "ok", reprova: "bad", incerto: "warn" };
  /* Nunca 0% nem 100%: o modelo não merece essa confiança, e um "100% de
     passar" a quatro meses da prova convida a parar de estudar. */
  const pctChance = c => Math.min(99, Math.max(1, Math.round(c * 100)));
  /* "A e B e C" não é português; com três blocos a lista aparecia assim. */
  const listar = ns => ns.length > 1
    ? ns.slice(0, -1).join(", ") + " e " + ns[ns.length - 1]
    : (ns[0] || "");
  /* A projeção trabalha em pontos líquidos (acerto − erro), que é como o
     edital define o corte; a barra continua em acertos porque é o que o
     aluno reconhece. Converter de volta mantém as duas coisas coerentes. */
  const acertosDe = (liquida, itens) => (liquida + itens) / 2;

  const linhas = p.blocos.map(b => {
    const cls = CLS[b.veredito];
    const pct = v => Math.max(0, Math.min(100, 100 * acertosDe(v, b.itens) / b.itens));
    const pctProj = pct(b.liquidaProjetada);
    const pctMin = pct(b.intervalo.min);
    const pctMax = pct(b.intervalo.max);
    const pctCorte = 100 * b.acertosExigidos / b.itens;
    return `
      <div class="corte-linha">
        <div class="corte-rot">${nome[b.chave] || b.chave}</div>
        <div class="corte-barra" title="faixa provável: ${Math.round(acertosDe(b.intervalo.min, b.itens))} a ${Math.round(acertosDe(b.intervalo.max, b.itens))} acertos">
          <i class="${cls}" style="width:${pctProj.toFixed(1)}%"></i>
          <span class="corte-faixa" style="left:${pctMin.toFixed(1)}%;width:${(pctMax - pctMin).toFixed(1)}%"></span>
          <span class="corte-marca" style="left:${pctCorte.toFixed(1)}%" title="corte: ${b.acertosExigidos} de ${b.itens} acertos"></span>
        </div>
        <div class="corte-num ${cls}">
          ${Math.round(b.acertosProjetados)}/${b.itens}
          <span class="hint">${pctChance(b.chance)}% de passar · corte ${b.acertosExigidos}</span>
        </div>
      </div>`;
  }).join("");

  /* Veredito em três estados. O booleano anterior afirmava com 40
     respostas o mesmo que afirmaria com 4.000 — e afirmava para cima,
     porque a taxa vinha inflada pelas revisões. */
  const reprova = p.blocos.filter(b => b.veredito === "reprova");
  const incertos = p.blocos.filter(b => b.veredito === "incerto");
  const total = p.blocos.find(b => b.chave === "total") || p.blocos[0];
  const chanceGeral = pctChance(total.chance);
  const veredito = reprova.length
    ? `<b class="bad">No ritmo atual você seria eliminado</b> em ${listar(reprova.map(b => nome[b.chave]))}. Chance de passar no conjunto: <b>${chanceGeral}%</b>.`
    : incertos.length
      ? `<b class="warn">Ainda está no limite</b> em ${listar(incertos.map(b => nome[b.chave]))} — chance de passar no conjunto: <b>${chanceGeral}%</b>. Numa prova de 120 itens a sorte sozinha vale muito; a margem some respondendo mais e acertando mais.`
      : `<b class="ok">Você passa do corte</b> nos três critérios (chance de <b>${chanceGeral}%</b> no conjunto) — mas o corte elimina, não aprova: a classificação depende do número de vagas.`;

  /* Explica por que este número difere do mostrado no resto do app. Sem
     isso, o aluno vê duas taxas diferentes e conclui que uma está errada. */
  const bruta = p.taxaComRevisoes;
  const notaTaxa = (bruta !== null && bruta - p.taxa > 0.02)
    ? `<div style="font-size:12.5px;color:var(--muted);margin-top:8px">
         A projeção usa sua taxa de <b>primeira tentativa</b> (${Math.round(p.taxa * 100)}%), não os
         ${Math.round(bruta * 100)}% que incluem revisões. Rever uma questão já respondida e acertar é
         reconhecimento, não memória — contaria a seu favor aqui e cobraria o preço no dia da prova.
       </div>`
    : "";

  const ob = orientacaoBranco();
  const arriscadas = ob.linhas.filter(l => l.recomendaBranco);
  const dicaBranco = !ob.temDados
    ? `Marque sua confiança ao responder: com histórico suficiente, mostro aqui em que situações vale mais deixar em branco.`
    : arriscadas.length
      ? `Quando você marca <b>${arriscadas.map(l => l.rotulo).join(" ou ")}</b>, acerta ${arriscadas.map(l => Math.round(l.taxa * 100) + "%").join(" e ")} — abaixo dos 50% em que o chute passa a compensar. <b>Nesses casos, deixar em branco rende mais que arriscar.</b>`
      : `Sua taxa fica acima de 50% em todas as faixas de confiança — vale marcar, mesmo em dúvida.`;

  return `
  <div class="card" style="margin-top:16px">
    <h3>🎯 Nota de corte oficial <span class="hint">${escapeHtml(p.trilha)} · ${Math.round(p.taxa * 100)}% em ${p.respostasConsideradas} questões, ponderado pelo peso de cada disciplina</span></h3>
    <div class="corte-wrap">${linhas}</div>
    <div style="font-size:13px;color:var(--muted);margin-top:10px">${veredito}</div>
    ${notaTaxa}
    <div style="font-size:13px;color:var(--muted);margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">
      <b>Erro anula acerto; branco vale zero.</b> ${dicaBranco}
    </div>
    ${AVISO_ESTATISTICO}
  </div>`;
}

/* Card de viés e ritmo. Duas coisas que o percentual de acerto esconde: a
   tendência sistemática para um dos lados no C/E e a velocidade de
   resolução. Ambas já eram medidas — só não eram mostradas. */
function viesRitmoHtml() {
  const v = viesResposta();
  const r = analiseRitmo();
  const tr = taxaRecente();
  if (!v && !r && !tr) return "";

  const pct = x => Math.round(x * 100) + "%";
  const blocos = [];

  if (tr) {
    const subiu = tr.delta > 0.02, caiu = tr.delta < -0.02;
    const cls = subiu ? "ok" : caiu ? "bad" : "";
    const seta = subiu ? "▲" : caiu ? "▼" : "▬";
    blocos.push(`
      <div class="vr-bloco">
        <div class="vr-titulo">Tendência recente</div>
        <div class="vr-num ${cls}">${seta} ${pct(tr.recente)}</div>
        <div class="vr-sub">últimas ${tr.n} respostas · acumulado ${pct(tr.acumulada)}</div>
      </div>`);
  }

  if (v) {
    const rotulo = { "aceita-demais": "Aceita demais", "rejeita-demais": "Rejeita demais", "equilibrado": "Equilibrado" }[v.tendencia];
    const cls = v.tendencia === "equilibrado" ? "ok" : "warn";
    blocos.push(`
      <div class="vr-bloco">
        <div class="vr-titulo">Viés de marcação</div>
        <div class="vr-num ${cls}">${rotulo}</div>
        <div class="vr-sub">marcou CERTO em ${pct(v.propMarcada)} · o gabarito pedia ${pct(v.propEsperada)}</div>
      </div>`);
  }

  if (r) {
    const cls = r.cabeNoTempo === false ? "bad" : "ok";
    blocos.push(`
      <div class="vr-bloco">
        <div class="vr-titulo">Ritmo</div>
        <div class="vr-num ${cls}">${Math.round(r.segMediano)}s <span class="vr-peq">por questão</span></div>
        <div class="vr-sub">${r.razaoMediana > 1 ? Math.round((r.razaoMediana - 1) * 100) + "% acima" : Math.round((1 - r.razaoMediana) * 100) + "% abaixo"} do tempo ideal dos itens</div>
      </div>`);
  }

  /* Leitura em texto: é onde o número vira conduta. */
  const notas = [];
  if (v && v.tendencia !== "equilibrado") {
    const lado = v.tendencia === "aceita-demais" ? "CERTO" : "ERRADO";
    const oposto = v.tendencia === "aceita-demais" ? "aceitar" : "rejeitar";
    notas.push(`Você marca <b>${lado}</b> com mais frequência do que o gabarito das questões que respondeu — ${pct(Math.abs(v.desvio))} de desvio. ${v.fracaoAceitando !== null ? `Dos seus erros, <b>${pct(v.tendencia === "aceita-demais" ? v.fracaoAceitando : 1 - v.fracaoAceitando)}</b> vieram de ${oposto} indevidamente. ` : ""}Na dúvida, esse é o lado para o qual você tende — desconfie dele antes de marcar.`);
  } else if (v) {
    notas.push(`Sua proporção de CERTO acompanha a das questões respondidas: sem viés relevante de marcação.`);
  }
  if (r && r.disponivelMin !== null) {
    notas.push(r.cabeNoTempo
      ? `No seu ritmo, os ${r.itens} itens levariam <b>≈ ${Math.round(r.projetadoMin)} min</b>, dentro dos ${r.disponivelMin} min estimados para a objetiva (reservando ${r.reservaDiscursivaMin} min para a discursiva). Folga de ${Math.round(r.folgaMin)} min.`
      : `No seu ritmo, os ${r.itens} itens levariam <b>≈ ${Math.round(r.projetadoMin)} min</b> — acima dos ${r.disponivelMin} min estimados para a objetiva. <b>Faltariam ${Math.round(-r.folgaMin)} min.</b>`);
  }
  const lentas = r && r.porDisciplina.filter(d => d.razao > 1.3).slice(0, 3);
  if (lentas && lentas.length) {
    notas.push(`Mais lento que o ideal em: ${lentas.map(d => `<b>${escapeHtml(d.disciplina)}</b> (${Math.round(d.razao * 100)}%)`).join(", ")}.`);
  }

  return `
  <div class="card" style="margin-top:16px">
    <h3>🧭 Viés, ritmo e tendência <span class="hint">o que a taxa de acerto não mostra</span></h3>
    <div class="vr-grid">${blocos.join("")}</div>
    ${notas.length ? `<div class="vr-notas">${notas.map(n => `<p>${n}</p>`).join("")}</div>` : ""}
  </div>`;
}

function renderDashboard() {
  const g = statsGerais();
  const radar = radarAprovacao();
  const devidas = questoesDevidas().length;
  const gam = gamificacao();
  const ed = editalDoFoco();

  /* Linha do diagnóstico: barra horizontal colorida por faixa de domínio.
     `idle` = disciplina ainda não respondida (barra neutra, sem peso negativo).

     A PORCENTAGEM EXIBIDA É A SUAVIZADA, e isso é uma correção. A tela
     mostrava a taxa BRUTA e classificava pela SUAVIZADA — dois números
     diferentes —, então a legenda acima ("⚠ Precisa melhorar, 60–79%")
     contradizia o que estava escrito ao lado. No histórico real usado
     para conferir isto, 2 das 15 disciplinas caíam nessa contradição:
     Crimes Cibernéticos aparecia com "56%" dentro da faixa 60–79 (a
     suavização levava 56% a 64% com n=9), e Direito Constitucional
     mostrava "80%" fora da faixa de domínio, porque 0,7996 arredonda para
     80 na exibição mas não alcança o corte.

     Quem decide a faixa é a taxa suavizada; portanto é ela que o aluno
     precisa ver. A bruta continua acessível no title, com o n, que é o
     que explica a diferença entre as duas. */
  const linha = (arr, cls, icone, idle) => arr.length
    ? arr.map(d => {
        const n = (d.acertos || 0) + (d.erros || 0);
        const pct = idle ? null : Math.round((d.taxaSuave ?? d.taxa) * 100);
        const bruta = idle || d.taxa === null ? null : Math.round(d.taxa * 100);
        const dica = idle ? "Ainda sem respostas nesta disciplina"
          : `Taxa bruta: ${bruta}% em ${n} ${n === 1 ? "resposta" : "respostas"}. ` +
            `O valor exibido (${pct}%) é suavizado — com poucas respostas ele é puxado para a sua média geral.`;
        return `<div class="diag-linha" title="${escapeHtml(dica)}">
        <span class="diag-nome">${icone} ${escapeHtml(d.disciplina)}</span>
        <span class="diag-pct">${idle ? "—" : pct + "%"}</span>
        <div class="diag-bar ${cls}"><i style="width:${idle ? 100 : pct}%"></i></div>
      </div>`;
      }).join("")
    : "";

  MAIN().innerHTML = topbar("Dashboard", "") +
  `<div class="card hero-card">
    <div class="hero-card-info">
      <div class="hero-card-lbl">Central de comando</div>
      ${/* A trilha define o que o aluno vê em TODO o app — banco, filtros,
           plano, radar. Por isso o seletor deixou o Perfil e virou o primeiro
           controle do Dashboard, que é onde todo acesso novo começa. */""}
      <label class="trilha-seletor">
        <span class="trilha-seletor-lbl">Trilha de estudo</span>
        <select onchange="trocarTrilha(this.value)">
          <option value="" ${!APP_STATE.config.concursoFoco ? "selected" : ""}>Geral — todas as carreiras</option>
          ${Object.values(EDITAIS).map(e => `<option value="${e.id}" ${APP_STATE.config.concursoFoco === e.id ? "selected" : ""}>${escapeHtml(e.nome)}</option>`).join("")}
        </select>
      </label>
      <div class="hero-card-tags">
        ${ed
          ? `<span class="tag accent">📋 ${escapeHtml(ed.fonte.split("(")[0].trim())}</span>
             <span class="tag ok">${g.totalBanco} questões no seu edital</span>`
          : `<span class="tag warn">Nenhuma trilha escolhida — vendo as ${g.totalBanco} questões de todos os editais</span>`}
        <span class="tag accent">👤 ${escapeHtml(APP_STATE.config.cargoFoco)}</span>
      </div>
    </div>
    <button class="btn hero-card-cta" onclick="navigate('simulado')">▶ Iniciar simulado</button>
  </div>` +
  onboardingCardHtml() +
  gamiCardHtml(gam) +
  `<div class="grid cols-4" style="margin-bottom:16px">
    <div class="card stat"><span class="ico">📚</span><span class="num">${g.respondidasUnicas}/${g.totalBanco}</span><span class="lbl">questões exploradas do banco</span></div>
    <div class="card stat"><span class="ico">🎯</span><span class="num ${g.taxa >= .75 ? "ok" : g.taxa >= .5 ? "warn" : g.taxa === null ? "" : "bad"}">${g.taxa === null ? "—" : Math.round(g.taxa * 100) + "%"}</span><span class="lbl">taxa de acerto</span></div>
    <div class="card stat"><span class="ico">⚖️</span><span class="num ${g.liquida > 0 ? "ok" : g.liquida < 0 ? "bad" : ""}">${g.liquida > 0 ? "+" : ""}${g.liquida}</span><span class="lbl">pontuação líquida (C anula E)</span></div>
    <div class="card stat"><span class="ico">🔁</span><span class="num ${devidas ? "warn" : "ok"}">${devidas}</span><span class="lbl">revisões devidas (repetição espaçada)</span></div>
  </div>
  <div class="grid cols-2">
    <div class="card">
      <h3>🎯 Radar de Aprovação <span class="hint">termômetro heurístico do seu preparo</span>
        <button class="btn ghost small" style="margin-left:auto" onclick="editarMetaTaxa()" title="Definir sua meta de aprovação">✎ Meta</button>
      </h3>
      <div style="display:flex;justify-content:center">${chartGauge(radar.score, { sub: "índice de preparo", meta: radar.metaTaxa * 100 })}</div>
      <div style="text-align:center;font-size:13px;color:var(--muted);margin-top:4px">
        ${g.taxa === null ? `Responda questões para calibrar o radar. Meta atual: <b>${Math.round(radar.metaTaxa * 100)}% de acertos</b>.`
          : `Sua meta: <b>${Math.round(radar.metaTaxa * 100)}% de acertos</b>. ` +
            (radar.horasEstimadas === null
              ? `Responda mais algumas questões para eu estimar o tempo restante pelo seu ritmo real.`
              : radar.horasEstimadas > 0
                ? `Faltam <b>${radar.questoesRestantes}</b> questões do seu escopo — <b>≈ ${radar.horasEstimadas}h</b> no seu ritmo atual.`
                : `Você já percorreu o escopo inteiro da trilha. ✔`)}
      </div>
      ${AVISO_ESTATISTICO}
    </div>
    <div class="card">
      <h3>📊 Diagnóstico por disciplina</h3>
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px">✔ Domina (≥80%) · ⚠ Precisa melhorar (60–79%) · ✖ Maior risco (&lt;60%) · ◐ Aferindo · ○ Não iniciado</div>
      ${linha(radar.dominadas, "ok", "✔")}${linha(radar.atencao, "warn", "⚠")}${linha(radar.risco, "bad", "✖")}${linha(radar.emAferricao, "idle", "◐", true)}${linha(radar.naoIniciadas, "idle", "○", true)}
      ${radar.dominadas.length + radar.atencao.length + radar.risco.length + radar.emAferricao.length + radar.naoIniciadas.length ? "" : `<div style="color:var(--muted);font-size:13px">— ainda sem dados suficientes</div>`}
      <div style="font-size:11.5px;color:var(--muted);margin-top:8px">A porcentagem mostrada é a <b>taxa suavizada</b> — a mesma que define a faixa. Com poucas respostas ela é puxada para a sua média geral até haver evidência bastante; passe o mouse na linha para ver a <b>taxa bruta</b> e o número de respostas. Disciplinas com menos de 4 respostas ficam em <b>◐ aferindo</b>, sem virar risco nem domínio.</div>
    </div>
  </div>
  ${corteHtml()}
  ${viesRitmoHtml()}
  <div class="grid cols-2" style="margin-top:16px">
    <div class="card card-dna">
      <h3>🧬 DNA da banca — padrões de maior incidência</h3>
      ${(() => {
        /* A BARRA É A PROVA REAL. Até a 7.162 ela desenhava a fatia do
           padrão DENTRO DESTE BANCO — a estatística das questões que nós
           mesmos escrevemos, exibida sob o título "DNA da banca". Agora
           desenha a frequência medida nos itens de caderno aplicado da
           CEBRASPE, e a composição do banco desceu para a linha de baixo,
           onde serve ao que sempre serviu: denunciar viés de autoria.
           Ver DNA_BANCA em js/data.js. */
        const comp = new Map(composicaoPadroes().map(c => [c.slug, c]));
        const real = new Map(incidenciaRealPadroes().map(r => [r.slug, r]));
        const nReal = totalProvaReal();
        const escopo = new Set(dnaDoFoco().map(d => d.slug));
        return incidenciaRealPadroes().filter(r => escopo.has(r.slug)).slice(0, 5).map(r => {
          const d = DNA_BANCA.find(x => x.slug === r.slug);
          const c = comp.get(r.slug);
          const viciado = c && c.total >= 30 && c.previsibilidade >= 0.85;
          /* Escala relativa ao líder: com o maior padrão em ~40%, barras
             proporcionais ao absoluto ficariam todas rasteiras. */
          const topo = Math.max(...[...real.values()].map(x => x.pct), 1);
          return `
        <div class="dna-item">
          <h4>${d.nome}</h4>
          <div class="dna-medida">
          <span class="dna-atencao at-${d.atencao}">atenção ${d.atencao}</span>
          <div class="dna-bar" title="Medido em ${r.n} de ${nReal} itens de prova real da CEBRASPE"><i style="width:${Math.round(100 * r.pct / topo)}%"></i></div><span class="dna-pct">${dec1(r.pct)}% da prova real</span>
        </div>
          ${c ? `<div class="dna-comp">Neste banco: ${c.total} itens · ${Math.round(c.previsibilidade * 100)}% caem em <b>${c.ladoDominante === "C" ? "CERTO" : "ERRADO"}</b>${viciado ? ` <span class="dna-alerta" title="Dentro deste banco o padrão é previsível demais. Não conclua que a banca se comporta assim.">⚠ previsível aqui</span>` : ""}</div>` : ""}
        </div>`;
        }).join("");
      })()}
      <div class="dna-nota">A barra é <b>medida em ${totalProvaReal()} itens de prova aplicada</b> da CEBRASPE — enunciado e gabarito da banca. A linha "neste banco" mede o que <b>nós</b> escrevemos, e existe para você notar quando as duas discordam. Frequência não prevê gabarito.</div>
      <button class="btn ghost small" style="margin-top:12px" onclick="navigate('raiox')">Ver Raio-X completo →</button>
    </div>
    <div class="card card-pred">
      <h3>↗ Top predições de cobrança</h3>
      ${ordenarPredicoes(inteligenciaDoFoco().predicoes).slice(0, 5).map((p, i) => `
        <div class="pred-item">
          <div class="pred-rank">${i + 1}º</div>
          <div class="pred-body"><h4>${p.tema}</h4><div class="motivos">${p.disciplina}</div></div>
          ${predScoreHtml(p)}
        </div>`).join("")}
      <button class="btn ghost small" style="margin-top:12px" onclick="navigate('predicao')">Ranking completo →</button>
    </div>
  </div>`;
}

/* ================================================================
   BANCO DE QUESTÕES (Módulo 1)
   ================================================================ */
/* O formato do item entra no estado inicial das três telas com o valor
   FORMATO_PADRAO ("CE"). O pedido foi explícito: o banco abre em CERTO ou
   Errado e só troca por ação do usuário — múltipla escolha nunca é o
   estado de partida. */
let bancoFiltros = { formato: FORMATO_PADRAO };
/* Modo de visualização do Banco: "scroll" (lista, padrão) ou "unica"
   (uma questão por vez, card ampliado). Persistido para lembrar a
   preferência entre sessões. */
let bancoModoVisual = localStorage.getItem("questlab-banco-modo") || "scroll";
let bancoIndice = 0;
let bancoListaCache = null; /* {chave, lista} — evita reembaralhar a cada Anterior/Próxima */

/* Paginação do modo "Lista" — renderizar centenas de cards de uma vez
   (um banco com ~1000 questões) deixava a troca de filtro visivelmente
   lenta. Só o HTML da página atual é montado a cada render.

   No celular cada card ocupa muito mais altura: 10 questões davam mais de
   6.000px de rolagem, então a página cai para 5 em telas estreitas. */
function tamanhoPaginaBanco() {
  return window.innerWidth <= 640 ? 5 : 10;
}
let bancoPagina = 0;

/* null = ainda não houve escolha do usuário; decide pela largura da tela.
   Depois que ele abre ou fecha, a preferência sobrevive aos re-renders
   disparados por cada troca de filtro. */
let bancoFiltrosAbertos = null;
function irPaginaBanco(delta) {
  bancoPagina += delta;
  renderBanco();
  window.scrollTo(0, 0);
}

/* Destaque vindo da aba Estratégias: {qid, trecho, estrategia} — faz o
   card da questão-exemplo realçar o recorte que materializa a técnica. */
let destaqueEstrategia = null;
function destaqueDaQuestao(qid) {
  return destaqueEstrategia && destaqueEstrategia.qid === qid ? destaqueEstrategia : null;
}
function limparDestaqueEstrategia() {
  destaqueEstrategia = null;
  renderBanco();
}

/* A chave inclui plano e trilha, não só os filtros.
   Sem o plano, um assinante que acabava de pagar continuava vendo as ~98
   questões do plano gratuito: `carregarEstadoNuvem` atualizava
   APP_STATE.config.plano no retorno do Mercado Pago, mas a lista já estava
   em cache e só se renovava se ele mexesse em algum filtro. Bug de cliente
   pagante, e silencioso — a tela não dava nenhum sinal de estar velha.

   Trilha e cargo entram pela mesma razão, embora hoje `trocarFoco` já
   limpe o cache: a chave passa a ser autossuficiente, e o cache deixa de
   depender de alguém lembrar de invalidá-lo. */
function chaveCacheBanco() {
  const c = APP_STATE.config;
  return JSON.stringify([bancoFiltros, c.plano, c.concursoFoco, c.cargoFoco]);
}
function listaBancoAtual() {
  const chave = chaveCacheBanco();
  if (!bancoListaCache || bancoListaCache.chave !== chave) {
    bancoListaCache = { chave, lista: embaralhar(filtrarQuestoes(bancoFiltros)) };
  }
  return bancoListaCache.lista;
}

function setBancoModoVisual(modo) {
  if (modo === bancoModoVisual) return;
  bancoModoVisual = modo;
  localStorage.setItem("questlab-banco-modo", modo);
  bancoIndice = 0;
  bancoPagina = 0;
  renderBanco();
}

function irQuestaoBanco(delta) {
  bancoIndice += delta;
  renderBanco();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Setas navegam no modo "Questão única". O modo existe para treinar ritmo,
   e ter de buscar o mouse a cada item quebra exatamente isso.

   Só as setas: responder por teclado seria mais rápido ainda, mas uma tecla
   apertada sem querer grava resposta definitiva no histórico e contamina a
   taxa de acerto — velocidade não compensa esse risco.

   O guarda de foco evita sequestrar as setas de quem está escrevendo na
   busca ou navegando um select de filtro. */
document.addEventListener("keydown", e => {
  if (currentView !== "banco" || bancoModoVisual !== "unica") return;
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  const alvo = e.target;
  if (alvo && (alvo.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(alvo.tagName))) return;
  if (document.querySelector(".modal-overlay")) return;
  e.preventDefault();
  irQuestaoBanco(e.key === "ArrowRight" ? 1 : -1);
});

/* Barra de escopo da trilha. O escopo esconde ~90% do acervo de quem
   escolheu uma carreira, e esconder em silêncio é o modo de falha que este
   projeto combate — então o estado fica visível e a saída é um clique. */
function escopoBarraHtml() {
  const ed = editalDoFoco();
  if (!ed) return ""; /* sem trilha não há o que explicar: já é tudo */
  const noEscopoN = filtrarQuestoes({}).length;
  const totalN = filtrarQuestoes({ todoOBanco: true }).length;
  return bancoFiltros.todoOBanco
    ? `<div class="escopo-barra fora">
        <span>Vendo o <b>banco completo</b> (${totalN} questões) — inclui matéria que não cai em ${escapeHtml(ed.curto)}.</span>
        <button class="btn ghost small" onclick="setEscopoBanco(false)">Voltar à trilha</button>
      </div>`
    : `<div class="escopo-barra">
        <span>Trilha <b>${escapeHtml(ed.curto)}</b> · ${noEscopoN} questões do seu edital${totalN > noEscopoN ? ` (${totalN - noEscopoN} fora)` : ""}</span>
        <button class="btn ghost small" onclick="setEscopoBanco(true)">Ver banco completo</button>
      </div>`;
}
function setEscopoBanco(todo) {
  bancoFiltros = { ...bancoFiltros, todoOBanco: todo || undefined };
  bancoIndice = 0;
  bancoPagina = 0;
  renderBanco();
}

/* Troca a trilha ativa. Nada do histórico é perdido — APP_STATE.respostas é
   indexado por ID de questão, então voltar à trilha anterior restaura os
   números —, mas as estatísticas visivelmente mudam, porque passam a contar
   só o escopo novo. Avisa antes quando há histórico a "sumir". */
async function trocarTrilha(id) {
  const anterior = APP_STATE.config.concursoFoco;
  if (id === (anterior || "")) return;

  const novo = id || null;
  const respondidas = Object.keys(APP_STATE.respostas).length;
  if (respondidas > 0 && novo !== anterior) {
    const nome = novo ? EDITAIS[novo].nome : "Todas (sem trilha)";
    const ok = await mostrarConfirm(
      `Mudar para "${nome}"? Suas estatísticas de desempenho — taxa de acerto, radar, cobertura e plano de estudo — passam a contar apenas as disciplinas dessa trilha. Seu XP, patente e sequência de dias não mudam: eles medem esforço, não conteúdo. Nada é apagado; voltando à trilha anterior, os números reaparecem.`,
      "Trocar de trilha");
    /* Re-render devolve o <select> ao valor antigo — o seletor vive tanto no
       Dashboard quanto no Perfil, então volta para a view em que o usuário
       está, não para uma fixa. */
    if (!ok) { navigate(currentView); return; }
  }

  APP_STATE.config.concursoFoco = novo;
  /* Cargo-foco é do edital: "Escrivão" não existe em SESAU/AL. Ao trocar,
     cai no primeiro cargo válido da trilha nova em vez de virar órfão. */
  const cargos = cargosDoFoco();
  if (!cargos.includes(APP_STATE.config.cargoFoco)) APP_STATE.config.cargoFoco = cargos[0];
  /* Filtros do Banco guardam disciplinas que podem não existir na trilha
     nova — ficariam escondendo tudo em silêncio. */
  bancoFiltros = {};
  bancoListaCache = null;
  bancoIndice = 0;
  bancoPagina = 0;
  /* Simulado e Modo Prova guardam filtros de disciplina que podem não existir
     na trilha nova — ficariam escondendo tudo em silêncio, como os do Banco. */
  simFiltros = { formato: simFiltros.formato || FORMATO_PADRAO };
  pvFiltros = { formato: pvFiltros.formato || FORMATO_PADRAO };
  /* O Raio-X guarda a disciplina escolhida no gráfico de frequência, que
     pode não existir na tabela de inteligência da trilha nova. */
  raioxDisc = inteligenciaDoFoco().frequenciaTemas[0].disciplina;
  saveState();
  navigate(currentView);
}

function renderBanco() {
  const opcoesEscopo = { todoOBanco: bancoFiltros.todoOBanco };
  const discs = listaDisciplinas(opcoesEscopo);
  const assuntos = listaAssuntos(bancoFiltros.disciplina, opcoesEscopo);
  const lista = listaBancoAtual();

  const toggleVisual = `<div class="view-toggle" role="group" aria-label="Modo de visualização">
    <button class="vt-btn ${bancoModoVisual === "scroll" ? "active" : ""}" onclick="setBancoModoVisual('scroll')">📜 Lista</button>
    <button class="vt-btn ${bancoModoVisual === "unica" ? "active" : ""}" onclick="setBancoModoVisual('unica')">📄 Questão única</button>
  </div>`;

  /* Os 7 seletores empilhados empurravam a primeira questão para muito
     abaixo da dobra no celular. Ficam recolhidos lá, abertos no desktop —
     e o resumo informa quantos filtros estão ativos, para que o estado
     não fique escondido junto com os controles.
     `todoOBanco` fica fora da contagem: é chave de escopo, tem barra
     própria, e contá-la faria "ver banco completo" parecer um filtro a
     mais quando na verdade é um filtro a menos. */
  const nAtivos = Object.entries(bancoFiltros)
    .filter(([k, v]) => k !== "todoOBanco" && k !== "formato" && valorFiltroAtivo(v)).length;
  const filtrosAbertos = bancoFiltrosAbertos === null
    ? window.innerWidth > 640
    : bancoFiltrosAbertos;

  MAIN().innerHTML = topbar("Banco Inteligente de Questões",
    `${QUESTOES.length} questões inéditas em estilo CEBRASPE · filtros combinados`, toggleVisual) +
  escopoBarraHtml() +
  `<details class="card filtros-card" style="margin-bottom:18px" ${filtrosAbertos ? "open" : ""}
           ontoggle="bancoFiltrosAbertos = this.open">
    <summary class="filtros-resumo">
      <span>⚙ Filtros</span>
      ${/* No celular os filtros ficam recolhidos. Estar em múltipla escolha
           é a diferença mais visível que o painel pode produzir — some com
           99% do acervo —, então o estado sobe para o resumo em vez de
           ficar escondido junto com o controle. */""}
      ${(bancoFiltros.formato || FORMATO_PADRAO) !== FORMATO_PADRAO
        ? `<span class="tag warn">múltipla escolha</span>` : ""}
      ${nAtivos ? `<span class="tag accent">${nAtivos} ativo${nAtivos > 1 ? "s" : ""}</span>
        <button type="button" class="btn ghost small" style="margin-left:auto"
          onclick="event.preventDefault(); event.stopPropagation(); limparFiltrosBanco()">Limpar</button>` : ""}
    </summary>
    <div class="filters">
      ${formatoToggleHtml(bancoFiltros, opcoesEscopo, "setFormatoBanco")}
      ${/* Concurso e Cargo só aparecem quando têm o que oferecer. Dentro de
           uma trilha, "Concurso" é redundante com o escopo — e listaria
           carreiras que o candidato não presta; "Cargo" fica inútil quando o
           edital tem um só. Filtro que não filtra nada é ruído. */""}
      ${!editalDoFoco() || bancoFiltros.todoOBanco
        ? mselHtml(bancoFiltros, "concurso", "banco:concurso", "Concurso", CONCURSOS.map(c => ({ v: c.id, t: c.id })), "toggleFiltroBancoMulti") : ""}
      ${cargosDoFoco().length > 1
        ? mselHtml(bancoFiltros, "cargo", "banco:cargo", "Cargo", cargosDoFoco().map(c => ({ v: c, t: c })), "toggleFiltroBancoMulti") : ""}
      ${mselHtml(bancoFiltros, "disciplina", "banco:disciplina", "Disciplina", discs.map(d => ({ v: d, t: d })), "toggleFiltroBancoMulti")}
      ${mselHtml(bancoFiltros, "assunto", "banco:assunto", "Assunto", assuntos.map(a => ({ v: a, t: a })), "toggleFiltroBancoMulti")}
      ${mselHtml(bancoFiltros, "dificuldade", "banco:dificuldade", "Dificuldade", [{ v: 1, t: "● Fácil" }, { v: 2, t: "●● Média" }, { v: 3, t: "●●● Difícil" }], "toggleFiltroBancoMulti")}
      ${mselHtml(bancoFiltros, "pegadinha", "banco:pegadinha", "Padrão da banca", dnaDoFoco().map(d => ({ v: d.slug, t: d.nome })), "toggleFiltroBancoMulti")}
      <label class="f">Busca<input type="search" id="f-busca" value="${bancoFiltros.busca || ""}" placeholder="palavra-chave…" onchange="setFiltroBanco()"></label>
      <label class="check"><input type="checkbox" id="f-erradas" ${bancoFiltros.somenteErradas ? "checked" : ""} onchange="setFiltroBanco()"> só as que errei</label>
      <label class="check"><input type="checkbox" id="f-novas" ${bancoFiltros.somenteNaoRespondidas ? "checked" : ""} onchange="setFiltroBanco()"> só não respondidas</label>
    </div>
  </details>
  ${bancoModoVisual === "unica" ? renderBancoUnica(lista) : renderBancoLista(lista)}`;
  iniciarTimersVisiveis();
}

/* Seletor de formato do item — o par CERTO/ERRADO × múltipla escolha.

   Não é um `msel` como os demais filtros por dois motivos. Primeiro,
   porque não é recorte e sim modo: as duas opções são excludentes e uma
   delas está sempre ativa, então caixa de seleção múltipla mentiria sobre
   o que o controle faz. Segundo, porque a contagem precisa aparecer no
   próprio botão: com 41 itens de múltipla escolha contra mais de 2.400 de
   C/E, trocar às cegas levaria a uma tela quase vazia sem explicação.

   `escopo` é o conjunto de filtros da tela, usado só para contar — a
   contagem respeita o escopo da trilha e o "ver banco completo". */
function formatoToggleHtml(estado, escopo, onSet) {
  const atual = estado.formato || FORMATO_PADRAO;
  const contar = id => filtrarQuestoes({ ...escopo, formato: id }).length;
  return `<div class="f formato-f">
    <span class="formato-lbl">Formato da questão</span>
    <div class="formato-toggle" role="group" aria-label="Formato da questão">
      ${FORMATOS_ITEM.map(f => {
        const n = contar(f.id);
        return `<button type="button" class="fmt-btn ${atual === f.id ? "active" : ""}"
          ${n === 0 && atual !== f.id ? "disabled" : ""}
          aria-pressed="${atual === f.id}"
          title="${n} ${n === 1 ? "questão disponível" : "questões disponíveis"} neste formato"
          onclick="${onSet}('${f.id}')">${escapeHtml(f.nome)} <span class="fmt-n">${n}</span></button>`;
      }).join("")}
    </div>
  </div>`;
}

function setFormatoBanco(id) {
  if ((bancoFiltros.formato || FORMATO_PADRAO) === id) return;
  bancoFiltros = { ...bancoFiltros, formato: id };
  bancoListaCache = null;
  bancoIndice = 0;
  bancoPagina = 0;
  renderBanco();
}
function setFormatoSim(id) { simFiltros = { ...simFiltros, formato: id }; renderSimulado(); }
function setFormatoProva(id) { pvFiltros = { ...pvFiltros, formato: id }; renderProva(); }

/* Um valor de filtro conta como "ativo" se for array não-vazio, ou um
   escalar não-vazio (compatibilidade com os atalhos que ainda escrevem
   um valor único direto em bancoFiltros, como "estudar esta disciplina"). */
function valorFiltroAtivo(v) {
  if (Array.isArray(v)) return v.length > 0;
  return v !== null && v !== undefined && v !== false && v !== "";
}

/* Chave do dropdown de filtro aberto no momento, ou null. Compartilhado
   entre as telas que usam mselHtml (Banco, Simulado, Modo Prova) — só uma
   tela é visível por vez, então um único estado basta. null = todos
   fechados (padrão) — mesma ideia de bancoFiltrosAbertos: sem isto, abrir
   um <details> e marcar uma opção nele fecharia o próprio dropdown, já
   que cada tela reconstrói o HTML do zero a cada clique. */
let mselAberto = null;
function onToggleMsel(el, chave) {
  if (el.open) {
    mselAberto = chave;
    /* só um aberto por vez — abrir um fecha os outros, feito direto no
       DOM (sem re-render) para não custar um redesenho inteiro da tela só
       por abrir/fechar, que é a interação mais frequente do painel. */
    document.querySelectorAll(".msel[open]").forEach(d => { if (d !== el) d.removeAttribute("open"); });
  } else if (mselAberto === chave) {
    mselAberto = null;
  }
}

/* Dropdown de marcação múltipla — visualmente do tamanho de um <select>,
   fechado por padrão. Reutilizado pelo Banco de Questões, Simulado
   Adaptativo e Modo Prova.
     estado    — objeto de filtros da tela (bancoFiltros/simFiltros/pvFiltros)
     campo     — chave dentro desse objeto
     chave     — identifica o dropdown para mselAberto; única entre telas,
                 por isso prefixada (ex. "banco:disciplina", "sim:disciplina")
     opcoes    — [{v: valor, t: texto}]
     fnAlternar — nome (string) da função de alternância daquela tela,
                 chamada pelo onchange de cada caixa
   Substituiu uma primeira versão (só no Banco) com todas as opções sempre
   visíveis como chips (até ~270 para Assunto), que pesava o layout a cada
   clique com 6 categorias abertas ao mesmo tempo. */
function mselHtml(estado, campo, chave, titulo, opcoes, fnAlternar) {
  if (!opcoes.length) return "";
  const atual = estado[campo];
  const marcados = Array.isArray(atual) ? atual : (valorFiltroAtivo(atual) ? [atual] : []);
  const aberto = mselAberto === chave;
  return `<details class="f msel" ${aberto ? "open" : ""} ontoggle="onToggleMsel(this, '${chave}')">
    <summary>${escapeHtml(titulo)}${marcados.length ? `<span class="msel-badge">${marcados.length}</span>` : ""}</summary>
    <div class="msel-panel">
      ${opcoes.map(o => `<label class="msel-opt">
        <input type="checkbox" ${marcados.includes(o.v) ? "checked" : ""}
          onchange="${fnAlternar}('${campo}', ${typeof o.v === "number" ? o.v : `'${o.v}'`})">
        <span>${escapeHtml(o.t)}</span>
      </label>`).join("")}
    </div>
  </details>`;
}

/* Liga/desliga um valor num filtro categórico do Banco. Aceita o campo já
   vir como escalar (setado por um atalho de navegação) ou array — sempre
   normaliza para array antes de alternar. */
function toggleFiltroBancoMulti(campo, valor) {
  const atual = bancoFiltros[campo];
  const lista = Array.isArray(atual) ? atual : (valorFiltroAtivo(atual) ? [atual] : []);
  const i = lista.indexOf(valor);
  const novo = i >= 0 ? lista.filter(v => v !== valor) : [...lista, valor];
  bancoFiltros = { ...bancoFiltros, [campo]: novo };

  if (campo === "disciplina") {
    /* Assunto pertence a uma disciplina; ao desmarcar uma, os assuntos que
       só existiam nela viram filtro órfão e escondem tudo em silêncio. */
    const validos = new Set(listaAssuntos(novo, { todoOBanco: bancoFiltros.todoOBanco }));
    if (Array.isArray(bancoFiltros.assunto)) {
      bancoFiltros.assunto = bancoFiltros.assunto.filter(a => validos.has(a));
    } else if (bancoFiltros.assunto && !validos.has(bancoFiltros.assunto)) {
      bancoFiltros.assunto = null;
    }
  }

  bancoIndice = 0;
  bancoPagina = 0;
  renderBanco();
}

function limparFiltrosBanco() {
  /* O formato sobrevive ao "Limpar". Ele não é um filtro de recorte, é o
     modo de prova em que o candidato está treinando — zerá-lo junto
     jogaria quem escolheu múltipla escolha de volta para C/E sem aviso,
     que é o mesmo tipo de mudança silenciosa que o botão deveria evitar. */
  bancoFiltros = { formato: bancoFiltros.formato || FORMATO_PADRAO };
  /* Zera o cache explicitamente: se os filtros JÁ estavam vazios, a chave não
     muda e o clique não teria efeito nenhum — nem visual, nem de ordem. */
  bancoListaCache = null;
  bancoIndice = 0;
  bancoPagina = 0;
  renderBanco();
}

function renderBancoLista(lista) {
  if (!lista.length) {
    return `<div style="font-size:13px;color:var(--muted);margin-bottom:12px"><b>0</b> questão(ões) encontrada(s)</div>
    <div class="card empty"><div class="big">🔍</div>Nenhuma questão com esses filtros.</div>`;
  }
  const porPagina = tamanhoPaginaBanco();
  const totalPaginas = Math.max(1, Math.ceil(lista.length / porPagina));
  if (bancoPagina >= totalPaginas) bancoPagina = totalPaginas - 1;
  if (bancoPagina < 0) bancoPagina = 0;
  const inicio = bancoPagina * porPagina;
  const pagina = lista.slice(inicio, inicio + porPagina);
  const paginacao = totalPaginas > 1 ? `<div class="banco-nav">
    <button class="btn ghost small" onclick="irPaginaBanco(-1)" ${bancoPagina <= 0 ? "disabled" : ""}>← Anterior</button>
    <span class="banco-nav-pos">Página ${bancoPagina + 1} de ${totalPaginas}</span>
    <button class="btn ghost small" onclick="irPaginaBanco(1)" ${bancoPagina >= totalPaginas - 1 ? "disabled" : ""}>Próxima →</button>
  </div>` : "";
  return `<div style="font-size:13px;color:var(--muted);margin-bottom:12px">
    <b>${lista.length}</b> questão(ões) encontrada(s)${totalPaginas > 1 ? ` · exibindo ${inicio + 1}–${Math.min(inicio + porPagina, lista.length)}` : ""}
  </div>
  ${paginacao}
  <div id="q-lista">${pagina.map(q => questaoCardHtml(q, { modo: "banco" })).join("")}</div>
  ${paginacao}`;
}

function renderBancoUnica(lista) {
  if (!lista.length) return `<div class="card empty"><div class="big">🔍</div>Nenhuma questão com esses filtros.</div>`;
  if (bancoIndice > lista.length - 1) bancoIndice = lista.length - 1;
  if (bancoIndice < 0) bancoIndice = 0;
  const q = lista[bancoIndice];
  const pct = lista.length > 1 ? (bancoIndice / (lista.length - 1)) * 100 : 100;
  return `<div class="banco-nav">
    <button class="btn ghost small" onclick="irQuestaoBanco(-1)" ${bancoIndice <= 0 ? "disabled" : ""}>← Anterior</button>
    <span class="banco-nav-pos">
      <span><b>${bancoIndice + 1}</b> de ${lista.length}</span>
      <span class="banco-nav-prog"><i style="width:${pct}%"></i></span>
    </span>
    <button class="btn ghost small" onclick="irQuestaoBanco(1)" ${bancoIndice >= lista.length - 1 ? "disabled" : ""}>Próxima →</button>
  </div>
  <div class="banco-nav-dica">Use <kbd>←</kbd> e <kbd>→</kbd> para navegar entre as questões</div>
  <div id="q-lista">${questaoCardHtml(q, { modo: "banco", ampliada: true })}</div>`;
}

/* Só busca textual e as 3 caixas booleanas — os campos categóricos
   (concurso, cargo, disciplina, assunto, dificuldade, pegadinha) são
   chips de marcação múltipla e vivem em toggleFiltroBancoMulti(), que já
   escreve direto em bancoFiltros. Por isso aqui é merge, não substituição
   — reconstruir bancoFiltros do zero apagaria os arrays já marcados. */
function setFiltroBanco() {
  bancoFiltros = {
    ...bancoFiltros,
    busca: $("#f-busca").value.trim() || null,
    somenteErradas: $("#f-erradas").checked,
    somenteNaoRespondidas: $("#f-novas").checked,
  };
  bancoIndice = 0;
  bancoPagina = 0;

  /* A busca textual varre também a resolução do comentário, que vive nos
     arquivos de detalhe carregados sob demanda. Sem isto, procurar por um
     termo que só aparece na explicação não acharia nada. */
  if (bancoFiltros.busca) {
    carregarTodosDetalhes().then(renderBanco, renderBanco);
    return;
  }
  renderBanco();
}

/* ============ Componente de questão ============ */

/* Etiqueta de abrangência do card. Antes mostrava `q.concurso · q.cargo`, o
   que confundia procedência com pertinência: um item de Ética redigido a
   partir do edital da SESAU aparecia como "SESAU · Especialista em Saúde —
   Fisioterapia" para quem estuda para a PC-AL, embora o conteúdo (Lei
   estadual 6.754/2006) conste dos dois editais. Agora a etiqueta responde à
   pergunta que o candidato de fato faz — em que provas isto cai —, e os
   cargos só são listados quando a questão não vale para todos. */
function etiquetaAbrangencia(q) {
  const trilhas = trilhasDaQuestao(q);
  if (!trilhas.length) return `${escapeHtml(q.disciplina)} · treino complementar`;
  const rotulo = trilhas.map(t => escapeHtml(t.curto)).join(" + ");
  const cobreTodos = trilhas.every(t => t.cargos.every(c => q.cargo.includes(c)));
  return cobreTodos ? `${rotulo} · todos os cargos` : `${rotulo} · ${escapeHtml(q.cargo.join("/"))}`;
}

const qUI = {}; /* estado transitório por questão: {confianca, respondida, inicio} */
function questaoCardHtml(q, opts) {
  const s = statsQuestao(q.id);
  const modo = opts.modo || "banco";
  const diff = "●".repeat(q.dificuldade) + "○".repeat(3 - q.dificuldade);
  qUI[q.id] = { confianca: null, respondida: false, inicio: Date.now(), modo };
  const dest = destaqueDaQuestao(q.id);
  const e = dest && dest.estrategia;
  return `<div class="card q-card ${opts.ampliada ? "ampliada" : ""} ${dest ? "com-destaque" : ""}" id="qc-${q.id}">
    ${dest ? `<div class="estrategia-flag">
      <div class="ef-top">
        <span class="tag accent">✦ ${escapeHtml(e.nome)}</span>
        <button class="btn ghost small" onclick="limparDestaqueEstrategia()" title="Remover o destaque">✕ limpar destaque</button>
      </div>
      <p class="ef-why">${escapeHtml(e.porqueTrecho)}</p>
    </div>` : ""}
    <div class="q-head">
      <span class="tag accent">${q.id}</span>
      <span class="tag" title="Provas em que este item cai, pelo conteúdo programático">${etiquetaAbrangencia(q)}</span>
      <span class="tag">${q.disciplina}</span>
      <span class="tag">${q.assunto}</span>
      <span class="tag diff" title="dificuldade">${diff}</span>
      ${q.foraEdital ? '<span class="tag warn" title="Tema não consta do conteúdo programático de Agente/Escrivão no edital PC-AL 2026 — mantido como treino complementar">fora do edital PC-AL 2026</span>' : ""}
      ${vigenciaTagHtml(q)}
      ${s.tentativas ? `<span class="tag ${s.ultima.branco ? "" : s.ultima.correta ? "ok" : "bad"}">${s.ultima.branco ? "em branco" : s.ultima.correta ? "acertou" : "errou"} na última</span>` : ""}
      <span class="tag" title="tempo ideal de resolução">⏱ ideal: ${q.tempoIdealSeg}s</span>
    </div>
    ${q.textoApoio ? `<div class="q-texto-apoio">${escapeHtml(q.textoApoio)}</div>` : ""}
    <div class="q-enunciado" id="qe-${q.id}">${dest
      ? marcarTrechoEstrategia(q.enunciado, dest.trecho, "Trecho que materializa a estratégia: " + e.nome)
      : escapeHtml(q.enunciado)}</div>
    <div class="conf-bloco" id="qcb-${q.id}">
      <div class="conf">Antes de marcar, qual sua confiança?
        <button onclick="setConf('${q.id}',1,this)">chute</button>
        <button onclick="setConf('${q.id}',2,this)">dúvida</button>
        <button onclick="setConf('${q.id}',3,this)">certeza</button>
      </div>
      <div class="conf-feedback" id="qcf-${q.id}"></div>
    </div>
    ${alternativasHtml(q)}
    <div class="q-actions ${formatoDaQuestao(q) === "ME" ? "so-branco" : ""}" id="qa-${q.id}">
      ${formatoDaQuestao(q) === "CE" ? `<button class="btn ok" onclick="responder('${q.id}','C')">CERTO</button>
      <button class="btn bad" onclick="responder('${q.id}','E')">ERRADO</button>` : ""}
      <button class="btn ghost" onclick="responder('${q.id}','${tokenBranco(q)}')">Em branco</button>
      <span class="q-timer" id="qt-${q.id}" data-ideal="${q.tempoIdealSeg}">0:00</span>
    </div>
    <div id="qr-${q.id}"></div>
  </div>`;
}
/* Alternativas de um item de múltipla escolha, uma por linha e clicáveis
   inteiras — a letra sozinha é alvo pequeno demais no celular, e a banca
   escreve alternativas longas o bastante para quebrarem em várias linhas.
   Em item CERTO/ERRADO devolve string vazia: os dois botões da barra de
   ação já são as opções. */
function alternativasHtml(q) {
  if (formatoDaQuestao(q) !== "ME") return "";
  return `<div class="q-alts" id="qalts-${q.id}">
    ${q.alternativas.map((texto, i) => {
      const letra = String.fromCharCode(65 + i);
      return `<button class="q-alt" id="qalt-${q.id}-${letra}" onclick="responder('${q.id}','${letra}')">
        <span class="qa-letra">${letra}</span><span class="qa-texto">${escapeHtml(texto)}</span>
      </button>`;
    }).join("")}
  </div>`;
}

/* Bloco pós-resposta que substituiu a "Engenharia cognitiva".
   Em vez de reexplicar a questão — o que `comentario` já faz —, entrega a
   técnica que neutraliza o padrão daquele item, casada por `pegadinha`.
   Fica fechado por padrão: o candidato abre quando quiser treinar o
   método, sem empurrar mais texto logo após o gabarito. */
function estrategiasDaQuestaoHtml(q) {
  const lista = estrategiasDaQuestao(q);
  const motivo = q.cognitivo && q.cognitivo.motivo;
  const palavra = q.cognitivo && q.cognitivo.palavraCritica;
  if (!lista.length && !motivo) return "";

  return `<details class="cog"><summary>🎯 Como não cair nessa de novo (${lista.length} ${lista.length === 1 ? "estratégia" : "estratégias"})</summary>
    <div class="estr-q">
      ${motivo ? `<div class="estr-q-motivo"><b>Por que esta questão existe</b>${escapeHtml(motivo)}</div>` : ""}
      ${palavra ? `<div class="estr-q-palavra"><b>Palavra que muda tudo</b><mark>${escapeHtml(palavra)}</mark></div>` : ""}
      ${lista.map(e => `
        <div class="estr-q-item">
          <div class="estr-q-nome">✦ ${escapeHtml(e.nome)}</div>
          <p class="estr-q-desc">${escapeHtml(e.desc)}</p>
          <ol class="estr-passos">${e.passos.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ol>
          <div class="estr-q-risco"><b>⚠ Quando a técnica falha</b> ${escapeHtml(e.armadilha)}</div>
        </div>`).join("")}
      <div class="estr-q-rodape">
        <span class="hint">Reaparecimento estimado: ≈ ${Math.round(q.probReaparecer * 100)}%</span>
        <button class="btn ghost small" onclick="navigate('estrategias')">Ver todas as estratégias →</button>
      </div>
    </div>
  </details>`;
}

/* Veredito da faixa, entregue no instante da decisão. O cálculo já existia
   em orientacaoBranco(), mas só aparecia como resumo no Dashboard — ou
   seja, depois de a questão ter sido marcada, quando não muda mais nada.
   Numa prova em que erro anula acerto, saber que "quando eu chuto acerto
   38%" só vale se a informação chegar ANTES do clique. */
function dicaConfiancaHtml(nivel) {
  const f = orientacaoBranco().porNivel[nivel];
  const rotulo = CONFIANCA_ROTULOS[nivel];
  if (!f) {
    return `<span class="hint">Sem histórico suficiente na faixa "${rotulo}" ainda. Continue marcando: a partir de 5 respostas eu calculo se, para você, arriscar compensa.</span>`;
  }
  const pct = Math.round(f.taxa * 100);
  const ve = f.valorEsperado;
  return f.recomendaBranco
    ? `<span class="conf-aviso bad">⚠ Quando você marca <b>${rotulo}</b>, acerta <b>${pct}%</b> (${f.n} itens). Abaixo de 50%, o erro anula mais do que o acerto rende — <b>em branco vale mais</b> (saldo esperado ${ve.toFixed(2)} por item arriscado).</span>`
    : `<span class="conf-aviso ok">✓ Quando você marca <b>${rotulo}</b>, acerta <b>${pct}%</b> (${f.n} itens) — acima dos 50% em que arriscar compensa (saldo esperado +${ve.toFixed(2)}).</span>`;
}

/* Fecha o laço da calibração: relaciona o que o candidato DECLAROU saber
   com o que de fato aconteceu. É a única forma de a confiança deixar de ser
   um dado que o app coleta e passar a ser uma habilidade que ele treina —
   perceber que "certeza" errada é o padrão mais caro da prova, e que chutar
   numa faixa perdedora custa pontos mesmo quando dá certo. */
function notaCalibracaoHtml(conf, branco, correta) {
  if (!conf) {
    return `<div class="calib-nota hint">Você não marcou a confiança nesta. Marcar leva um clique e é o que me permite dizer, com o seu histórico, quando vale deixar em branco.</div>`;
  }
  const rotulo = CONFIANCA_ROTULOS[conf];
  const f = orientacaoBranco().porNivel[conf];
  if (branco) {
    return conf === 3
      ? `<div class="calib-nota warn">Você deixou em branco algo que marcou como <b>${rotulo}</b>. Se a confiança se confirma no seu histórico, aqui você deixou ponto na mesa.</div>`
      : `<div class="calib-nota ok">Branco declarado como <b>${rotulo}</b> — decisão coerente: zero é melhor que arriscar o que você não domina.</div>`;
  }
  if (!correta && conf === 3) {
    return `<div class="calib-nota bad">Atenção: você errou algo que marcou como <b>certeza</b>. Esse é o padrão mais caro da prova — não é falta de conteúdo, é excesso de confiança, e nenhuma estratégia de branco protege contra ele. Vale reler a resolução com atenção redobrada.</div>`;
  }
  if (f && f.recomendaBranco) {
    return correta
      ? `<div class="calib-nota warn">Deu certo, mas foi aposta desfavorável: na faixa <b>${rotulo}</b> você acerta ${Math.round(f.taxa * 100)}%, e no saldo líquido esse hábito custa pontos. Em prova, o branco renderia mais.</div>`
      : `<div class="calib-nota bad">Erro na faixa <b>${rotulo}</b>, em que você acerta ${Math.round(f.taxa * 100)}%. Em prova este item custaria dois: o erro anula um acerto seu. O branco valeria zero — melhor que negativo.</div>`;
  }
  return "";
}

function setConf(qid, n, btn) {
  qUI[qid].confianca = n;
  btn.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("sel"));
  btn.classList.add("sel");
  const alvo = $("#qcf-" + qid);
  if (alvo) alvo.innerHTML = dicaConfiancaHtml(n);
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

async function responder(qid, resposta) {
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

  /* revela destaques de palavras perigosas no enunciado, preservando o
     recorte da estratégia quando o usuário veio da aba Estratégias */
  const dest = destaqueDaQuestao(qid);
  $("#qe-" + qid).innerHTML = dest
    ? highlightEnunciado(q.enunciado, dest.trecho, "Trecho que materializa a estratégia: " + dest.estrategia.nome)
    : highlightPerigos(q.enunciado);
  $("#qa-" + qid).style.display = "none";
  const blocoConf = $("#qcb-" + qid);
  if (blocoConf) blocoConf.style.display = "none";

  /* Em múltipla escolha as alternativas continuam na tela depois de
     respondidas — some com elas seria esconder o objeto de estudo. Ficam
     travadas, com a correta em verde e a marcada em vermelho quando
     errou, que é como o candidato relê a questão. */
  const branco = respostaEmBranco(q, resposta);
  if (formatoDaQuestao(q) === "ME") {
    for (const letra of letrasDaQuestao(q)) {
      const el = $(`#qalt-${qid}-${letra}`);
      if (!el) continue;
      el.disabled = true;
      if (letra === res.gabarito) el.classList.add("certa");
      else if (letra === resposta) el.classList.add("marcada-errada");
    }
  }

  const dna = DNA_BANCA.find(d => d.slug === q.pegadinha);
  const tSeg = Math.round(tempoMs / 1000);
  const cls = branco ? "neutro" : res.correta ? "ok" : "bad";
  const gabTxt = escapeHtml(rotuloResposta(q, res.gabarito));
  const msg = branco ? `⊘ Em branco — gabarito: <b>${gabTxt}</b> (no CEBRASPE, branco não pontua nem desconta)`
    : res.correta ? `✔ Você ACERTOU — gabarito: <b>${gabTxt}</b>`
    : `✖ Você ERROU — gabarito: <b>${gabTxt}</b> (no sistema líquido, este erro anula um acerto)`;

  /* O acerto/erro aparece na hora; só a explicação espera, porque
     comentario/cognitivo vêm de um arquivo carregado sob demanda. */
  const alvo = $("#qr-" + qid);
  const resultadoHtml = `<div class="resultado ${cls}">${msg} · seu tempo: ${tSeg}s (ideal: ${q.tempoIdealSeg}s)</div>`
    + notaCalibracaoHtml(ui.confianca, branco, res.correta);

  let falhouDetalhe = false;
  if (!q.comentario) {
    alvo.innerHTML = resultadoHtml + `<div class="comentario-carregando">Carregando a explicação…</div>`;
    try { await carregarDetalhes(q.disciplina); }
    catch { falhouDetalhe = true; }
  }

  if (falhouDetalhe) {
    alvo.innerHTML = resultadoHtml +
      `<div class="resultado bad">Não foi possível carregar a explicação desta questão. Verifique sua conexão e recarregue a página.</div>`;
  } else {
    const c = q.comentario;
    alvo.innerHTML = resultadoHtml + `
      <div class="comentario">
        ${vigenciaBlocoHtml(q)}
        <div class="bloco"><b>Resolução</b>${escapeHtml(c.resolucao)}</div>
        <div class="bloco"><b>Fundamento legal</b>${escapeHtml(c.fundamento)}</div>
        ${c.jurisprudencia ? `<div class="bloco"><b>Jurisprudência</b>${escapeHtml(c.jurisprudencia)}</div>` : ""}
        <div class="bloco"><b>Macete</b>${escapeHtml(c.macete)}</div>
        <div class="bloco"><b>Erro mais comum</b>${escapeHtml(c.erroComum)}</div>
        <div class="bloco"><b>Como a banca pensa</b>${escapeHtml(c.comoBancaPensa)}</div>
        ${padraoDetectadoHtml(dna)}
      </div>
      ${estrategiasDaQuestaoHtml(q)}
      ${feedbackHtml(q)}`;
  }

  /* Fica fora do if: mesmo sem a explicação, o usuário precisa do botão
     para seguir no simulado. */
  if (ui.modo === "simulado" && SIM) {
    SIM.respostas.push({ qid, resposta, correta: res.correta, branco, tempoMs });
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
      ${formatoToggleHtml(simFiltros, {}, "setFormatoSim")}
      ${mselHtml(simFiltros, "concurso", "sim:concurso", "Concurso", CONCURSOS.map(c => ({ v: c.id, t: c.id })), "toggleFiltroSimMulti")}
      ${mselHtml(simFiltros, "disciplina", "sim:disciplina", "Disciplina", listaDisciplinas().map(d => ({ v: d, t: d })), "toggleFiltroSimMulti")}
      <label class="f">Modo<select id="sim-modo">
        <option value="adaptativo" selected>Adaptativo (recomendado)</option>
        <option value="revisao">Revisão espaçada (${devidas} devidas)</option>
        <option value="erradas">Só questões que errei</option>
      </select></label>
    </div>
    <div style="font-size:12px;color:var(--muted);margin-top:2px">Sem marcar concurso ou disciplina, o simulado sorteia entre todos${APP_STATE.config.concursoFoco ? ` (seu foco: ${APP_STATE.config.concursoFoco})` : ""} — priorizando adaptativamente seus pontos fracos.</div>
    <button class="btn" onclick="iniciarSimulado()">▶ Começar</button>
    <div class="aviso">Correção estilo CEBRASPE: <b>cada erro anula um acerto</b>; em branco não pontua. Use o botão "Em branco" estrategicamente, como faria na prova.</div>
  </div>`;
}
/* Filtros do Simulado (concurso/disciplina) — persistem entre renders,
   mesmo padrão de bancoFiltros; sem isto, marcar uma caixa no dropdown
   fecharia o próprio dropdown a cada re-render. */
let simFiltros = { formato: FORMATO_PADRAO };
function toggleFiltroSimMulti(campo, valor) {
  const atual = simFiltros[campo];
  const lista = Array.isArray(atual) ? atual : (valorFiltroAtivo(atual) ? [atual] : []);
  const i = lista.indexOf(valor);
  simFiltros = { ...simFiltros, [campo]: i >= 0 ? lista.filter(v => v !== valor) : [...lista, valor] };
  renderSimulado();
}
async function iniciarSimulado() {
  const n = +$("#sim-n").value;
  const modo = $("#sim-modo").value;
  /* simFiltros[campo] já vem como array (ou undefined) de toggleFiltroSimMulti;
     combina() trata array vazio/undefined como "sem restrição", então não
     há necessidade de normalizar para null aqui — []/undefined têm o
     mesmo efeito. */
  const filtros = { concurso: simFiltros.concurso, disciplina: simFiltros.disciplina, formato: simFiltros.formato || FORMATO_PADRAO };
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

/* "oficial" segue a estrutura do edital; "livre" é o modo antigo, com
   quantidade e disciplinas à escolha. */
let pvModelo = "oficial";
function setProvaModelo(m) { pvModelo = m; renderProva(); }

/* Prévia da prova oficial: mostra ANTES de começar quantos itens cada
   disciplina vale e em que ordem vão cair, que é a informação que o
   modo livre nunca deu. */
function provaOficialHtml(p) {
  const nomeBloco = { p1: "Conhecimentos básicos", p2: "Conhecimentos específicos" };
  const blocos = p.estrutura.map(b => `
    <div class="pv-bloco">
      <div class="pv-bloco-tit">${nomeBloco[b.bloco] || b.bloco.toUpperCase()}
        <span class="hint">${b.disciplinas.reduce((s, d) => s + d.obtidos, 0)} de ${b.itensPrevistos} itens</span></div>
      <ol class="pv-discs">
        ${b.disciplinas.map(d => `<li${d.obtidos < d.previstos ? ' class="falta"' : ""}>
          <span>${escapeHtml(d.disciplina)}</span>
          <b>${d.obtidos}${d.obtidos < d.previstos ? ` <span class="hint">de ${d.previstos}</span>` : ""}</b>
        </li>`).join("")}
      </ol>
    </div>`).join("");

  const falta = p.faltantes.length
    ? `<div class="aviso" style="border-left-color:var(--warn)">
         O banco ainda não tem itens suficientes em
         ${escapeHtml(p.faltantes.map(f => f.disciplina).join(", "))}.
         A prova sai com ${p.questoes.length} itens em vez de ${p.itensPrevistos} — o
         restante da estrutura é respeitado.
       </div>`
    : "";

  return `
    <div class="pv-oficial">
      <div class="pv-resumo">
        <div><b>${p.questoes.length}</b><span>itens</span></div>
        <div><b>${Math.round(p.duracaoSeg / 60)}</b><span>minutos</span></div>
        <div><b>${p.estrutura.reduce((s, b) => s + b.disciplinas.length, 0)}</b><span>disciplinas</span></div>
      </div>
      ${blocos}
      ${falta}
      <div style="font-size:12px;color:var(--muted)">
        As disciplinas caem em blocos seguidos, na ordem do edital — como na prova real.
        Quais itens de cada disciplina aparecem é sorteio.
        ${p.reservaDiscursivaMin ? `O edital dá ${Math.round((p.duracaoSeg / 60) + p.reservaDiscursivaMin)} min para objetiva e discursiva juntas; aqui reservamos ${p.reservaDiscursivaMin} min para a discursiva.` : ""}
      </div>
    </div>`;
}

function renderProva() {
  if (PROVA && !PROVA.finalizada) { renderProvaRunner(); return; }
  const discs = listaDisciplinas();
  const oficial = pvModelo === "oficial" ? montarProvaOficial() : null;

  MAIN().innerHTML = topbar("Modo Prova",
    "Simulado em condições reais: cronômetro correndo, navegação livre e correção só no final — como na prova de verdade.") +
  `<div class="card sim-setup">
    <h3>◈ Configurar prova</h3>
    <div class="pv-modelo" role="radiogroup" aria-label="Modelo de prova">
      <button class="pv-modelo-op ${pvModelo === "oficial" ? "ativo" : ""}" role="radio"
        aria-checked="${pvModelo === "oficial"}" onclick="setProvaModelo('oficial')">
        <b>Prova oficial</b><span>Estrutura do edital: blocos por disciplina, na quantidade que cada uma vale</span>
      </button>
      <button class="pv-modelo-op ${pvModelo === "livre" ? "ativo" : ""}" role="radio"
        aria-checked="${pvModelo === "livre"}" onclick="setProvaModelo('livre')">
        <b>Livre</b><span>Você escolhe quantas questões e de quais disciplinas</span>
      </button>
    </div>
    ${pvModelo === "oficial" && !oficial
      ? `<div class="aviso" style="border-left-color:var(--warn)">Escolha uma trilha no Dashboard para montar a prova oficial. Sem trilha, só o modo livre funciona.</div>`
      : ""}
    ${oficial ? provaOficialHtml(oficial) : ""}
    ${pvModelo === "livre" ? `
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
      ${formatoToggleHtml(pvFiltros, {}, "setFormatoProva")}
      ${mselHtml(pvFiltros, "disciplina", "pv:disciplina", "Disciplina", discs.map(d => ({ v: d, t: d })), "toggleFiltroProvaMulti")}
    </div>
    <div style="font-size:12px;color:var(--muted);margin-top:2px">Sem marcar disciplina, a prova sai com mistura balanceada entre todas.</div>
    ` : ""}
    <button class="btn" onclick="iniciarProva()" ${pvModelo === "oficial" && !oficial ? "disabled" : ""}>◈ Iniciar prova${pvModelo === "oficial" && oficial ? ` — ${oficial.questoes.length} itens` : ""}</button>
    <div class="aviso">
      <b>Regras da prova:</b> o cronômetro não para; você navega livremente e pode marcar questões para revisar;
      <b>não há gabarito nem comentário até você finalizar</b>. Correção estilo CEBRASPE (cada erro anula um acerto;
      em branco não pontua). Ao esgotar o tempo, a prova é entregue automaticamente.
    </div>
  </div>`;
}
/* Filtro de disciplina do Modo Prova — persiste entre renders, mesmo
   padrão de bancoFiltros/simFiltros. */
let pvFiltros = { formato: FORMATO_PADRAO };
function toggleFiltroProvaMulti(campo, valor) {
  const atual = pvFiltros[campo];
  const lista = Array.isArray(atual) ? atual : (valorFiltroAtivo(atual) ? [atual] : []);
  const i = lista.indexOf(valor);
  pvFiltros = { ...pvFiltros, [campo]: i >= 0 ? lista.filter(v => v !== valor) : [...lista, valor] };
  renderProva();
}

function montarProva(n, filtros) {
  /* O filtro é sempre respeitado — se houver menos questões que o
     solicitado dentro do filtro, a prova sai menor, nunca completada
     com questões fora do filtro escolhido. */
  const pool = embaralhar(filtrarQuestoes(filtros || {}));
  return pool.slice(0, Math.min(n, pool.length));
}

async function iniciarProva() {
  let questoes, duracaoSeg, estrutura = null;

  if (pvModelo === "oficial") {
    const p = montarProvaOficial();
    if (!p) { await mostrarAlerta("Escolha uma trilha no Dashboard para montar a prova oficial."); return; }
    if (!p.questoes.length) { await mostrarAlerta("Não há questões suficientes no banco para montar esta prova."); return; }
    if (p.faltantes.length) {
      const lista = p.faltantes.map(f => `${f.disciplina} (${f.disponiveis} de ${f.previstos})`).join("; ");
      const ok = await mostrarConfirm(
        `O banco ainda não cobre a estrutura inteira: ${lista}. A prova sai com ${p.questoes.length} itens em vez de ${p.itensPrevistos}, mantendo a ordem e a proporção do edital. Começar assim?`,
        "Banco incompleto para a prova oficial");
      if (!ok) return;
    }
    questoes = p.questoes;
    duracaoSeg = p.duracaoSeg;
    estrutura = p.estrutura;
  } else {
    const n = +$("#pv-n").value;
    const tempoSel = $("#pv-tempo").value;
    const filtros = { disciplina: pvFiltros.disciplina, formato: pvFiltros.formato || FORMATO_PADRAO };
    questoes = montarProva(n, filtros);
    if (!questoes.length) { await mostrarAlerta("Nenhuma questão encontrada com esses filtros."); return; }
    if (questoes.length < n) {
      const ok = await mostrarConfirm(`Apenas ${questoes.length} questão(ões) encontradas com esses filtros (menos que as ${n} solicitadas). Iniciar a prova mesmo assim com ${questoes.length} questões?`, "Menos questões que o solicitado");
      if (!ok) return;
    }
    duracaoSeg = tempoSel === "auto" ? Math.round(questoes.length * 150) : +tempoSel * 60;
  }

  PROVA = {
    questoes, respostas: {}, marcadas: {}, tempoPorQ: {},
    idx: 0, inicio: Date.now(), fim: Date.now() + duracaoSeg * 1000,
    duracaoSeg, desde: Date.now(), finalizada: false,
    modelo: pvModelo, estrutura,
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
    /* Marca onde uma disciplina termina e outra começa, para a paleta
       refletir os blocos da prova em vez de virar um bloco só de números. */
    const inicioDeBloco = i > 0 && PROVA.questoes[i - 1].disciplina !== qq.disciplina;
    if (inicioDeBloco) cls.push("nova-disc");
    return `<button class="${cls.join(" ")}" onclick="provaIr(${i})" title="Questão ${i + 1} · ${qq.disciplina}${resp ? " · respondida" : ""}${PROVA.marcadas[qq.id] ? " · marcada" : ""}">${i + 1}</button>`;
  }).join("");

  /* Posição dentro do bloco da disciplina atual. Na prova real o
     candidato sabe que está no 3º de 10 itens de Português; sem isso ele
     perde a noção de ritmo que o formato em blocos deveria dar. */
  const mesmaDisc = PROVA.questoes.filter(x => x.disciplina === q.disciplina);
  const posNoBloco = PROVA.questoes.slice(0, PROVA.idx + 1).filter(x => x.disciplina === q.disciplina).length;

  const sel = PROVA.respostas[q.id] || null;
  const btn = (val, label, cls) =>
    `<button class="btn ${cls} ${sel === val ? "" : "ghost"}" style="${sel && sel !== val ? "opacity:.55" : ""}" onclick="provaResp('${q.id}','${val}')">${label}</button>`;

  MAIN().innerHTML = `
  <div class="prova-bar">
    <div class="pv-meta">
      <span class="tag accent">Questão ${PROVA.idx + 1} / ${n}</span>
      <span class="tag">${escapeHtml(q.disciplina)} · ${posNoBloco} de ${mesmaDisc.length}</span>
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
      ${formatoDaQuestao(q) === "ME" ? `<div class="q-alts">
        ${q.alternativas.map((texto, i) => {
          const letra = String.fromCharCode(65 + i);
          return `<button class="q-alt ${sel === letra ? "escolhida" : ""}" onclick="provaResp('${q.id}','${letra}')">
            <span class="qa-letra">${letra}</span><span class="qa-texto">${escapeHtml(texto)}</span></button>`;
        }).join("")}
      </div>` : ""}
      <div class="q-actions ${formatoDaQuestao(q) === "ME" ? "so-branco" : ""}">
        ${formatoDaQuestao(q) === "CE" ? btn("C", "CERTO", "ok") + btn("E", "ERRADO", "bad") : ""}
        ${btn(tokenBranco(q), "Em branco", "")}
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
  /* "B" só é branco em CERTO/ERRADO — em múltipla escolha é a alternativa
     B, e o branco é "-". A prova customizada aceita o formato ME, então a
     comparação crua subnotificava quem marcasse B: o diálogo dizia
     "respondeu 7" para quem tinha respondido 10. */
  const respondidas = PROVA.questoes.filter(q => {
    const r = PROVA.respostas[q.id];
    return r && !respostaEmBranco(q, r);
  }).length;
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
    /* Sem resposta = branco, e o token de branco depende do formato: "B"
       em CERTO/ERRADO, "-" em múltipla escolha (onde "B" é alternativa). */
    const resp = PROVA.respostas[q.id] || tokenBranco(q);
    const tempoMs = PROVA.tempoPorQ[q.id] || 0;
    const res = registrarResposta(q.id, resp, tempoMs, null);
    return { q, resp, correta: res.correta, gabarito: res.gabarito, branco: respostaEmBranco(q, resp), tempoMs };
  });

  const acertos = detalhe.filter(d => !d.branco && d.correta).length;
  const erros = detalhe.filter(d => !d.branco && !d.correta).length;
  const brancos = detalhe.filter(d => d.branco).length;
  const liquida = acertos - erros;
  const taxa = (acertos + erros) ? acertos / (acertos + erros) : 0;
  registrarSessao({ data: Date.now(), n: detalhe.length, acertos, erros, brancos, liquida, tempoTotal });

  renderProvaResultado({ detalhe, acertos, erros, brancos, liquida, taxa, tempoTotal, porTempo });
}

async function renderProvaResultado(r) {
  const { detalhe, acertos, erros, brancos, liquida, taxa, tempoTotal, porTempo } = r;
  const n = detalhe.length;

  /* No Modo Prova o usuário responde tudo sem ver comentário, então os
     detalhes destas disciplinas provavelmente ainda não foram carregados —
     e o gabarito comentado logo abaixo depende deles. */
  try { await carregarDetalhes(detalhe.map(d => d.q.disciplina)); }
  catch { /* provaRevisaoHtml degrada sozinho quando o detalhe não veio */ }

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
  const q = d.q, c = q.comentario;
  const dna = DNA_BANCA.find(x => x.slug === q.pegadinha);
  const gabTxt = escapeHtml(rotuloResposta(q, d.gabarito));
  const suaTxt = escapeHtml(d.branco ? "Em branco" : rotuloResposta(q, d.resp));
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
    ${!c ? `<div class="comentario"><div class="bloco">Explicação indisponível — não foi possível carregar os comentários desta disciplina. Recarregue a página para tentar de novo.</div></div>` : `
    <div class="comentario">
      <div class="bloco"><b>Resolução</b>${escapeHtml(c.resolucao)}</div>
      <div class="bloco"><b>Fundamento legal</b>${escapeHtml(c.fundamento)}</div>
      ${c.jurisprudencia ? `<div class="bloco"><b>Jurisprudência</b>${escapeHtml(c.jurisprudencia)}</div>` : ""}
      <div class="bloco"><b>Macete</b>${escapeHtml(c.macete)}</div>
      <div class="bloco"><b>Como a banca pensa</b>${escapeHtml(c.comoBancaPensa)}</div>
      ${padraoDetectadoHtml(dna)}
    </div>
    ${estrategiasDaQuestaoHtml(q)}
    ${feedbackHtml(q)}`}
  </div>`;
}

/* ================================================================
   RAIO-X DA BANCA (Módulos 2 + 4)
   ================================================================ */
let raioxDisc = "Direito Penal";
function renderRaioX() {
  const intel = inteligenciaDoFoco();
  const dna = dnaDoFoco();
  const ed = editalDoFoco();
  const tabela = intel.frequenciaTemas;
  const freq = tabela.find(f => f.disciplina === raioxDisc) || tabela[0];
  /* Três formatos convivem, e cada um se identifica pelo campo que tem:
       `itens` — contagem no caderno da PC/AL 2021 (trilha PC-AL);
       `freq`  — peso programático do edital (trilha SESAU, primeira edição);
       nenhum  — disciplina que estreia em 2026, sem histórico.
     O gráfico só é desenhado nos dois primeiros; no terceiro a tela lista
     o conteúdo programático e diz por que não há número. */
  const medido = freq.temas.some(t => t.itens != null);
  const freqData = freq.estreia ? [] : freq.temas.slice()
    .sort((a, b) => (b.itens ?? b.freq ?? 0) - (a.itens ?? a.freq ?? 0))
    .map(t => (medido
      ? { label: t.tema, value: t.itens, display: `${t.itens} ${t.itens === 1 ? "item" : "itens"}` }
      : { label: t.tema, value: t.freq, display: `${t.freq}` }));

  /* heatmap: disciplina × padrão. Escopado por trilha nos dois eixos —
     mostrar Direito Penal a candidato de Fisioterapia era exatamente o
     "conteúdo de outra carreira" que a tela não deve ter. */
  const discs = listaDisciplinas();
  const idsEscopo = new Set(questoesDoEscopo().map(q => q.id));
  const padroes = dna.map(d => d.slug);
  const matrix = discs.map(disc => padroes.map(p => {
    const qs = QUESTOES.filter(q => q.disciplina === disc && idsEscopo.has(q.id));
    if (!qs.length) return null;
    const c = qs.filter(q => q.pegadinha === p).length;
    return c ? c / qs.length : null;
  }));

  MAIN().innerHTML = topbar("Raio-X da Banca",
    "Engenharia reversa do CEBRASPE: padrões medidos em prova real, incidência por tema e o que muda em 2026") +
  `<div class="card" style="margin-bottom:16px">
    <h3>🧬 DNA da CEBRASPE <span class="hint">frequência medida em ${totalProvaReal()} itens de prova aplicada</span></h3>
    ${(() => {
      /* Duas grandezas, duas origens, sempre rotuladas: a barra mede
         PROVA REAL da banca; a linha "neste banco" mede o que nós
         escrevemos. Elas divergirem é o alarme de viés de autoria. */
      const comp = new Map(composicaoPadroes().map(c => [c.slug, c]));
      const reais = incidenciaRealPadroes();
      const escopo = new Set(dna.map(d => d.slug));
      const topo = Math.max(...reais.map(r => r.pct), 1);
      return reais.filter(r => escopo.has(r.slug)).map(r => {
        const d = DNA_BANCA.find(x => x.slug === r.slug);
        const c = comp.get(r.slug);
        const viciado = c && c.total >= 30 && c.previsibilidade >= 0.85;
        return `
      <div class="dna-item${r.n === 0 ? " dna-ausente" : ""}">
        <h4>${d.nome}</h4>
        <div class="dna-medida">
          <span class="dna-atencao at-${d.atencao}">atenção ${d.atencao}</span>
          <div class="dna-bar" title="Medido em ${r.n} de ${totalProvaReal()} itens de prova real"><i style="width:${Math.round(100 * r.pct / topo)}%"></i></div>
          <span class="dna-pct">${r.n === 0 ? "não observado" : `${dec1(r.pct)}% · ${r.n} itens`}</span>
        </div>
        ${c ? `<div class="dna-comp">Neste banco: ${c.total} itens · ${Math.round(c.previsibilidade * 100)}% caem em <b>${c.ladoDominante === "C" ? "CERTO" : "ERRADO"}</b>${viciado ? ` <span class="dna-alerta" title="Previsível demais dentro deste acervo — característica do banco, não da banca.">⚠ previsível aqui</span>` : ""}</div>` : ""}
        <p>${d.desc}</p>
        <div class="gatilho">⚡ Gatilho mental: ${d.gatilho}</div>
      </div>`;
      }).join("");
    })()}
    <div class="dna-nota">A barra mede <b>itens de caderno aplicado</b> da CEBRASPE (PC-AL 2021, PC-DF 2021, PF 2025, PC-PE 2024) — enunciado e gabarito da banca. A linha "neste banco" mede o que <b>nós</b> escrevemos. <b>Ressalva:</b> o enunciado é da banca, mas a classificação do mecanismo é nossa leitura, e a amostra é a que conseguimos obter — o número sustenta a <b>ordem</b> entre padrões, não a precisão decimal.</div>
    ${dna.length < DNA_BANCA.length ? `<div style="font-size:12.5px;color:var(--muted);margin-top:10px">
      Exibindo os ${dna.length} padrões que ocorrem nas questões da sua trilha. Os demais existem no banco, mas em disciplinas que não caem na sua prova — <b>jurisprudência inventada</b>, por exemplo, não tem como aparecer em conteúdo clínico.</div>` : ""}
    ${AVISO_ESTATISTICO}
  </div>
  <div class="card" style="margin-bottom:16px">
    <h3>📈 Frequência de temas
      <select style="margin-left:auto" onchange="raioxDisc=this.value;renderRaioX()">
        ${tabela.map(f => `<option ${f.disciplina === raioxDisc ? "selected" : ""}>${escapeHtml(f.disciplina)}${f.estreia ? " (estreia)" : ""}</option>`).join("")}
      </select></h3>
    ${freq.estreia
      ? `<div class="empty" style="padding:20px 12px">
           <div class="big">🆕</div>
           <b>${escapeHtml(freq.disciplina)}</b> estreia no edital de 2026.
           <div style="font-size:12.5px;color:var(--muted);margin-top:8px;max-width:52ch;margin-inline:auto">
             ${escapeHtml(freq.nota || "")} Sem prova anterior, não há incidência para medir — e atribuir uma seria inventar histórico.
             O que dá para mostrar é o conteúdo programático do edital:
           </div>
           <div style="margin-top:14px;display:grid;gap:6px;max-width:46ch;margin-inline:auto;text-align:left">
             ${freq.temas.map(t => `<div class="bloco" style="background:var(--surface2);border-radius:8px;padding:8px 12px;font-size:13px">${escapeHtml(t.tema)}</div>`).join("")}
           </div>
         </div>`
      : `<div class="chart-scroll">${chartHBar(freqData)}</div>
         <div style="font-size:12px;color:var(--muted)">${medido
           ? `itens que cada tema teve no caderno <b>PC/AL 2021 (Agente)</b> — ${freq.itens2021} itens na disciplina, 120 na prova. Contagem, não estimativa.`
           : "peso derivado do conteúdo programático do edital — não há prova anterior deste concurso para medir"}</div>`}
  </div>
  <div class="grid cols-2">
    <div class="card">
      <h3>⏳ O que mudou de 2021 para 2026 <span class="hint">itens medidos × peso de estudo</span></h3>
      ${intel.comparacao ? comparacao2021x2026Html(ed) : `
           ${/* Sem prova anterior é melhor dizer por quê do que desenhar uma
                curva inventada — a honestidade sobre a lacuna é o próprio dado. */""}
           <div class="empty" style="padding:22px 12px">
             <div class="big">📉</div>
             Sem prova anterior para comparar.
             <div style="font-size:12.5px;color:var(--muted);margin-top:8px;max-width:44ch;margin-inline:auto">
               ${escapeHtml(ed ? ed.nome : "")} é primeira edição — o Edital nº 1 não tem certame anterior.
               Traçar uma curva de anos passados aqui seria inventar dado.
               A <b>Frequência de temas</b> acima usa o peso programático do edital, que é informação real.
             </div>
           </div>`}
    </div>
    <div class="card">
      <h3>🔥 Heatmap: onde cada padrão aparece <span class="hint">% das questões da disciplina</span></h3>
      <div class="chart-scroll">${chartHeatmap(discs, dna.map(d => d.nome), matrix)}</div>
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
      ${APP_STATE.config.concursoFoco === "SESAUAL_FISIO"
        ? `Perfil observado em prova CERTO/ERRADO de Fisioterapia do próprio Cebraspe (HUB/UnB, Residência Multiprofissional): a maioria dos itens
           pendura-se em <b>vinheta clínica</b> — "Considerando esse caso clínico, julgue..." —, e o edital do SESAU/AL prevê a estrutura
           <b>Situação hipotética / Assertiva</b>. Os padrões de armadilha são os mesmos das provas jurídicas, com conteúdo clínico no lugar do legal:
           troca de conceito (laser coerente descrito como "incoerente"), premissa verdadeira com conclusão invertida, troca de sujeito
           (ombro caído atribuído ao manguito rotador em vez do trapézio) e troca de rótulo entre escalas (Katz e Barthel apresentados como
           instrumentais quando medem AVD básicas). Espere <b>contraindicação</b> como armadilha recorrente.`
        : `Características típicas: períodos longos com orações intercaladas; linguagem técnico-normativa; alta densidade de remissões a dispositivos legais;
           preferência por reescrituras e substituições em Português; uso de jurisprudência do STF/STJ combinada ao texto legal nas disciplinas jurídicas.`}
    </div>
  </div>`;
}
/* Comparação 2021 → 2026, no lugar da antiga "evolução histórica".

   A curva anterior ia de 2018 a 2025 com um número de itens por
   disciplina em cada ano. Nenhum daqueles pontos veio de caderno: era
   série inventada, e a tela ainda extraía dela uma conclusão ("Legislação
   Especial é a disciplina em maior expansão") que nada sustentava.

   Esta comparação tem os dois lados verificáveis. À esquerda, a contagem
   item a item da PC/AL 2021. À direita, o peso de estudo de 2026,
   derivado das faixas de prioridade do Relatório Consolidado. O que ela
   mostra é aritmética do edital: o total continua 120, entram seis
   disciplinas novas, logo tudo o que já existia encolhe. */
/* Selo que diz de onde veio o peso. Só aparece quando o peso NÃO foi
   contado numa prova: marcar o que é sólido em toda linha vira ruído, e o
   que precisa de ressalva é justamente a minoria estimada. */
function seloProcedencia(disciplina, ed) {
  const p = procedenciaDoPeso(disciplina, ed);
  if (!p || p.chave === "medido") return "";
  return ` <span class="selo-proc selo-${p.chave}" title="${escapeHtml(p.explica)}">${escapeHtml(p.rotulo)}</span>`;
}

function comparacao2021x2026Html(ed) {
  if (!ed || !ed.itensPorDisciplina) return "";
  const de2021 = new Map();
  for (const d of INCIDENCIA_PCAL2021.disciplinas) de2021.set(d.nome2026, d.itens);

  const linhas = Object.entries(ed.itensPorDisciplina)
    .map(([disc, peso2026]) => ({ disc, peso2026, itens2021: de2021.get(disc) ?? null }))
    .sort((a, b) => b.peso2026 - a.peso2026);

  const topo = Math.max(...linhas.map(l => Math.max(l.peso2026, l.itens2021 || 0)));
  const larg = v => Math.round(100 * v / topo);

  /* O parágrafo de leitura trazia "20 itens para peso 12,7" e "de 15 para
     9,6" escritos à mão, e a revisão de pesos de 2026 os deixou para trás:
     a tabela logo acima dizia 14,3 e 10,4 na mesma tela. Número em prosa
     não tem validador — então ele passa a sair da mesma fonte da tabela. */
  const exemplo = disc => {
    const l = linhas.find(x => x.disc === disc);
    return l ? { de: l.itens2021, para: dec1(l.peso2026) } : null;
  };
  const exLP = exemplo("Língua Portuguesa");
  const exDP = exemplo("Direito Penal");
  const novas = linhas.filter(l => l.itens2021 === null).length;
  const POREXTENSO = ["nenhuma", "uma", "duas", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];

  return `
    <div class="cmp-legenda"><span class="cmp-chip cmp-a"></span>2021 (medido) <span class="cmp-chip cmp-b"></span>2026 (peso de estudo)</div>
    <div class="cmp-tabela">
      ${linhas.map(l => `
        <div class="cmp-linha">
          <div class="cmp-nome">${escapeHtml(l.disc)}</div>
          <div class="cmp-barras">
            <div class="cmp-barra cmp-a" style="width:${l.itens2021 ? larg(l.itens2021) : 0}%"></div>
            <div class="cmp-barra cmp-b" style="width:${larg(l.peso2026)}%"></div>
          </div>
          <div class="cmp-num">${l.itens2021 !== null
            ? `${l.itens2021} → ${dec1(l.peso2026)}`
            : `<span class="cmp-novo">nova</span> ${dec1(l.peso2026)}`}${seloProcedencia(l.disc, ed)}</div>
        </div>`).join("")}
    </div>
    <div style="font-size:12.5px;color:var(--muted);margin-top:12px">
      Leitura: a prova continua com <b>120 itens</b> (50 + 70), e o edital de 2026 acrescenta
      <b>${POREXTENSO[novas] || novas} disciplinas</b>. Como o total não cresce, tudo o que já existia cede espaço —
      ${exLP ? `Língua Portuguesa sai de ${exLP.de} itens para peso ${exLP.para}` : ""}${exLP && exDP ? "; " : ""}${exDP ? `Direito Penal, de ${exDP.de} para ${exDP.para}` : ""}.
      Não é leitura sobre a banca, é aritmética do edital.
      <br>O lado de 2021 é contagem no caderno oficial; o de 2026 é peso de <b>estudo</b>
      derivado das faixas de prioridade — o edital define objetos de avaliação, não quota por disciplina.
    </div>`;
}

/* Memoizado por tamanho do banco: são quatro varreduras completas de
   QUESTOES, e o Raio-X chama esta função quatro vezes seguidas dentro do
   mesmo template (uma por número exibido) — dezesseis passagens pelo banco
   para produzir quatro inteiros que não mudam entre elas. É o perfil do
   BANCO, não do aluno, então só se altera quando entra lote novo, e
   `QUESTOES.length` já detecta isso. */
let perfilRedacaoMemo = null;
let perfilRedacaoMemoN = -1;

function perfilRedacao() {
  if (perfilRedacaoMemo && perfilRedacaoMemoN === QUESTOES.length) return perfilRedacaoMemo;
  perfilRedacaoMemo = perfilRedacaoCalcular();
  perfilRedacaoMemoN = QUESTOES.length;
  return perfilRedacaoMemo;
}

function perfilRedacaoCalcular() {
  const nPal = QUESTOES.map(q => q.enunciado.split(/\s+/).length);
  const mediaPalavras = Math.round(nPal.reduce((a, b) => a + b, 0) / nPal.length);
  const comPerig = QUESTOES.filter(q => detectarPalavrasPerigosas(q.enunciado).length).length;
  /* Só itens C/E: múltipla escolha não tem lado, e contá-la aqui
     rebaixaria o percentual de CERTO sem que nada tenha mudado. */
  const itensCE = QUESTOES.filter(q => formatoDaQuestao(q) === "CE");
  const certos = itensCE.filter(q => q.gabarito === "C").length;
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
    <h3>⚠ Palavras perigosas <span class="hint">ordenadas por força medida — marcador é ponto de parada, não gabarito</span></h3>
    <div class="radar-aviso">
      <b>Leia isto antes da lista.</b> Testamos estes marcadores contra <b>372 itens de provas reais da CEBRASPE</b>
      com gabarito oficial — 257 deles de carreira policial (PC-DF, PC-SE e PF, todas de Agente). O resultado foi duro:
      <b>nenhum marcador mostrou poder preditivo distinguível da taxa-base</b>.
      Os termos absolutos aparecem em só <b>14% dos itens reais</b>, e ali a taxa é 55,6% contra 53,8% de quando estão ausentes — <b>1,8 ponto</b>, ou seja, nada.
      E “exclusivamente”, líder da nossa medição interna com 80%, aparece <b>zero vezes</b> em 492 itens reais.
      <br><br>
      Então use a lista como <b>localizador</b>, não como preditor: ela aponta <b>onde parar dentro do item</b> —
      a restrição, a condicionante, o quantificador — e a resposta tem de vir do conteúdo.
      As porcentagens abaixo são do <b>nosso acervo</b>, servem para você entender como estas questões foram construídas,
      e <b>não se transferem para a prova</b>. Detalhes em AUDITORIA-PROVA-REAL-2021.md.
      <br><br>
      <b>Atualização — agosto/2026.</b> Um compilado de <b>2.474 itens com gabarito oficial</b>, de 36 cadernos de
      carreiras policiais, mediu a taxa-base real em <b>49,2% ERRADO</b> (IC 95%: 47,3% a 51,2%) — ou seja,
      essencialmente <b>meio a meio</b>. A auditoria de 2021 estimava 54% ERRADO a partir de 372 itens; com um corpus
      6,6 vezes maior, aquele número ficou <b>fora do intervalo de confiança</b> e foi abandonado.
      Consequência prática para você: <b>não existe lado “mais provável” para chutar</b>. Entre os 36 cadernos, o
      mínimo foi 44,8% e o máximo 56,1% de CERTO — variação de prova para prova, sem tendência.
    </div>
    <div style="font-size:12px;margin:10px 0 8px">
      <span class="tag bad">tende a ERRADO</span> <span class="tag ok">tende a CERTO</span> <span class="tag warn">neutra — exige atenção</span>
      <span class="tag">força: forte &gt; moderado &gt; fraco &gt; nulo</span>
    </div>
    ${[...PALAVRAS_PERIGOSAS]
      .sort((a, b) => (ORDEM_FORCA[b.forca] ?? 0) - (ORDEM_FORCA[a.forca] ?? 0))
      .map(p => `
      <div class="palavra-item">
        <span class="termo">${p.termo}
          <span class="tag ${p.vies === "E" ? "bad" : p.vies === "C" ? "ok" : "warn"}">${p.vies === "E" ? "→ E" : p.vies === "C" ? "→ C" : "atenção"}</span>
          ${p.forca ? `<span class="tag forca-${p.forca}">${p.forca}</span>` : ""}</span>
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

/* As predições têm DUAS naturezas, e ordená-las juntas por um único
   número seria voltar a misturá-las.

   MEDIDAS (`itens2021`) — trilha PC-AL. Quantos itens o tema teve na
   última prova da PC/AL. Ordenam entre si pelo próprio número.

   DE ESTREIA (`estreia`) — o que o edital de 2026 cria. Não têm zero
   itens por serem irrelevantes; não têm número nenhum porque não havia
   onde cair. Vão depois das medidas, sem número inventado no lugar.

   ESTIMADAS (`score`) — trilha SESAU/AL, que é primeira edição do
   concurso e não tem prova anterior para contar. Ali o score continua
   sendo o que sempre foi, uma leitura do peso programático do edital, e
   segue rotulado como estimativa na própria tela. */
function ordenarPredicoes(lista) {
  const val = p => (p.itens2021 != null ? p.itens2021 : (p.score != null ? p.score : -1));
  return lista.slice().sort((a, b) => {
    const ea = a.estreia ? 1 : 0, eb = b.estreia ? 1 : 0;
    if (ea !== eb) return ea - eb;
    return val(b) - val(a);
  });
}

function predScoreHtml(p) {
  if (p.itens2021 != null) {
    return `<div class="pred-score pred-medido" title="Itens que este tema teve na prova PC/AL 2021 (Agente)"><b>${p.itens2021}</b><span>itens<br>em 2021</span></div>`;
  }
  if (p.estreia) {
    return `<div class="pred-score pred-estreia" title="Disciplina ou tema que entra no edital de 2026 — sem prova anterior para contar">estreia<span>sem histórico</span></div>`;
  }
  return `<div class="pred-score">${p.score}%</div>`;
}

function renderPredicao() {
  const rank = ordenarPredicoes(inteligenciaDoFoco().predicoes);
  const medidos = rank.filter(p => p.itens2021 != null);
  MAIN().innerHTML = topbar("Predição de Cobrança",
    medidos.length
      ? "Temas ordenados por quantos itens tiveram na última prova da PC/AL — contagem no caderno oficial, não estimativa"
      : "Ranking de temas por peso programático do edital") +
  `<div class="card">
    <h3>🏆 Ranking de temas por incidência medida</h3>
    ${medidos.length ? `<div class="dna-nota" style="margin-bottom:14px">Os ${medidos.length} primeiros vêm da contagem item a item do caderno <b>PC/AL 2021, cargo de Agente</b> — 120 itens. O campo à direita é o número de itens que o tema teve, e <b>onde</b> ele caiu está no detalhe de cada linha. Os temas de <b>estreia</b> vêm depois, sem número: são o que o edital de 2026 cria, e por isso não têm prova anterior para contar.</div>` : ""}
    ${rank.map((p, i) => `
      <div class="pred-item">
        <div class="pred-rank">${i + 1}º</div>
        <div class="pred-body">
          <h4>${p.tema}</h4>
          <div class="motivos"><span class="tag">${p.disciplina}</span></div>
          ${p.base ? `<div class="motivos" style="color:var(--texto);opacity:.85">📄 ${escapeHtml(p.base)}</div>` : ""}
          <div class="motivos">${p.motivos.map(m => "· " + m).join("<br>")}</div>
        </div>
        ${predScoreHtml(p)}
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
   PLANO DE ESTUDO DIRIGIDO
   Cruza dias até a prova + Predição de Cobrança + desempenho por
   disciplina (radar/diagnóstico) numa lista única do que priorizar
   hoje, com cota sugerida de questões por disciplina.
   ================================================================ */
async function salvarDataProva() {
  const val = $("#pe-data-input").value;
  if (!val) return;
  definirDataProva(val);
  renderPlanoEstudo();
}
async function limparDataProva() {
  const ok = await mostrarConfirm("Remover a data da prova? O plano volta a mostrar só as prioridades, sem contagem de dias.", "Remover data da prova");
  if (!ok) return;
  definirDataProva(null);
  renderPlanoEstudo();
}
function estudarDisciplinaAgora(disciplina, modo) {
  bancoFiltros = { disciplina };
  if (modo === "revisar") bancoFiltros.somenteErradas = true;
  else if (modo === "explorar") bancoFiltros.somenteNaoRespondidas = true;
  bancoIndice = 0;
  bancoPagina = 0;
  navigate("banco");
}
/* Fecha a meta do dia em um clique: monta a fila já priorizada pelo plano
   e a roda pelo simulado, que é a única tela que aceita uma lista pronta
   de questões. Sem isso, cumprir a cota exigia entrar disciplina por
   disciplina e contar de cabeça quantas ainda faltavam. */
async function iniciarMetaDoDia() {
  const plano = planoEstudoDirigido();
  /* Com a meta já cumprida a fila vem vazia (restantes = 0), então
     remonta-se uma rodada extra do tamanho da própria cota. */
  const fila = plano.fila.length
    ? plano.fila
    : montarFilaDoDia(plano.foco.map(it => ({ ...it, restantesHoje: it.questoesSugeridas })), plano.metaDiaria);
  if (!fila.length) {
    await mostrarAlerta("Não há questões pendentes nas disciplinas prioritárias para montar a fila de hoje. Use a revisão de erros ou o Simulado Adaptativo.");
    return;
  }
  /* Navega antes de montar o SIM porque renderSimulado() desenha o
     formulário de configuração e sobrescreveria a fila; e sai fora se a
     navegação for barrada (prova ou duelo em andamento). */
  await navigate("simulado");
  if (currentView !== "simulado") return;
  SIM = { questoes: fila, idx: 0, respostas: [], inicio: Date.now(), finalizado: false };
  renderQuestaoSimulado();
}

/* Editor da meta diária. O número deixou de ser fixo em META_SEMANAL/7
   porque rotina de estudo é pessoal — e porque, com data de prova
   marcada, o ritmo que fecha o edital é calculável e vira sugestão. */
async function abrirEditorMetaDiaria() {
  const valor = await mostrarPromptNumero({
    titulo: "Meta diária de questões",
    mensagem: `Quantas questões você quer resolver por dia? O padrão é ${metaDiariaPadrao()} (sua meta semanal dividida por 7).`,
    valorInicial: metaDiariaConfigurada(),
    min: META_DIARIA_MIN, max: META_DIARIA_MAX, sufixo: "questões/dia",
  });
  if (valor === null) return;
  definirMetaDiaria(valor);
  renderPlanoEstudo();
}

/* Revisão agregada: manda ao Banco só os itens que o usuário errou, em
   todas as disciplinas — é o modo mais direto de atacar os erros. */
function revisarErrosAgora() {
  bancoFiltros = { somenteErradas: true };
  bancoIndice = 0;
  bancoPagina = 0;
  navigate("banco");
}
function renderPlanoEstudo() {
  const plano = planoEstudoDirigido();
  const statusCls = { naoIniciada: "idle", risco: "bad", atencao: "warn", dominada: "ok" };
  const statusIco = { naoIniciada: "○", risco: "✖", atencao: "⚠", dominada: "✔" };

  const contagemHtml = plano.dataProva
    ? `<div class="pe-contagem">
        <div class="pe-dias ${plano.diasRestantes <= 7 ? "urgente" : ""}">${plano.diasRestantes >= 0 ? plano.diasRestantes : 0}</div>
        <div class="pe-dias-lbl">dia${plano.diasRestantes === 1 ? "" : "s"} até a prova
          <div class="hint">${new Date(plano.dataProva + "T00:00:00").toLocaleDateString("pt-BR")} · <a href="#" onclick="limparDataProva();return false;">alterar</a></div>
        </div>
      </div>`
    : `<div class="pe-sem-data">
        <label class="f">Data da sua prova (opcional — ativa a contagem regressiva)
          <input type="date" id="pe-data-input" min="${new Date().toISOString().slice(0, 10)}"></label>
        <button class="btn small" onclick="salvarDataProva()">Definir data</button>
      </div>`;

  const modoBadge = { revisar: '<span class="tag warn">↻ revisar erros</span>', explorar: '<span class="tag">＋ conteúdo novo</span>' };
  const modoBottom = it => it.modo === "revisar"
    ? `${it.erros} ${it.erros === 1 ? "questão errada para revisar" : "questões erradas para revisar"}`
    : `${it.novas} ${it.novas === 1 ? "questão não explorada" : "questões não exploradas"}`;
  const modoBtn = it => it.modo === "revisar" ? "Revisar erros →" : "Estudar agora →";

  /* Card de progresso (item 4) + linha de ritmo (item 3). */
  const pg = plano.progresso;
  const rt = plano.ritmo;
  const coberturaPct = Math.round(pg.cobertura * 100);
  const ritmoHtml = rt ? (rt.noRitmo
    ? `<div class="pe-ritmo ok">✓ No ritmo: com ${plano.metaDiaria} questões/dia, você cobre as ${rt.novasRestantes} não vistas em ~${rt.diasParaCobrir} dia${rt.diasParaCobrir === 1 ? "" : "s"}, dentro do prazo.</div>`
    : `<div class="pe-ritmo bad">⚠ Fora do ritmo: no passo atual (${plano.metaDiaria}/dia) as ${rt.novasRestantes} não vistas levariam ~${rt.diasParaCobrir} dias, mas faltam ${plano.diasRestantes}. Para cobrir tudo, faça ~${rt.ritmoNecessario}/dia — ou priorize pelo peso e aceite deixar o menos cobrado de fora.</div>`)
    : "";
  const progressoHtml = pg.total ? `
  <div class="card pe-progresso" style="margin-bottom:16px">
    <h3>📈 Sua trajetória</h3>
    <div class="pe-prog-top">
      <span class="pe-prog-pct">${coberturaPct}%</span>
      <span class="hint">do banco já visto ao menos uma vez · ${pg.vistas} de ${pg.total} questões</span>
    </div>
    <div class="gami-bar" style="margin-top:8px"><i style="width:${coberturaPct}%"></i></div>
    <div class="pe-prog-nums">
      <span class="tag ${pg.emRisco ? "bad" : ""}">${pg.emRisco} em risco</span>
      <span class="tag ${pg.dominadas ? "ok" : ""}">${pg.dominadas} dominada${pg.dominadas === 1 ? "" : "s"}</span>
    </div>
    ${ritmoHtml}
  </div>` : "";

  /* Card da meta do dia. É o primeiro da tela por ser a única resposta que
     o candidato precisa antes de qualquer outra: quantas já fiz hoje e
     quantas faltam. Antes disso, a cota por disciplina aparecia sem placar
     nenhum e não dava para saber se o dia estava cumprido. */
  const hj = plano.hoje;
  const podeFechar = plano.fila.length > 0;
  const streakAtual = calcularStreak().atual;
  /* Ritmo necessário só vira sugestão quando de fato aperta o passo atual —
     oferecer "ajuste para 9/dia" a quem já faz 14 seria ruído. */
  const sugestaoRitmo = plano.ritmo && !plano.ritmo.noRitmo && plano.ritmo.ritmoNecessario > hj.meta
    ? plano.ritmo.ritmoNecessario : null;
  const taxaHoje = hj.taxa === null ? null : Math.round(hj.taxa * 100);
  const metaDiaHtml = `
  <div class="card pe-hoje ${hj.cumprida ? "cumprida" : ""}" style="margin-bottom:16px">
    <h3>🎯 Meta de hoje</h3>
    <div class="pe-hoje-top">
      <div class="pe-hoje-placar">
        <b>${hj.feitas}</b><span class="pe-hoje-sep">/</span><span class="pe-hoje-meta">${hj.meta}</span>
      </div>
      <div class="pe-hoje-txt">
        <div class="pe-hoje-falta">${hj.cumprida
          ? `✓ Meta batida${hj.feitas > hj.meta ? ` — e você passou ${hj.feitas - hj.meta}` : ""}.`
          : `Faltam <b>${hj.restantes}</b> ${hj.restantes === 1 ? "questão" : "questões"} para fechar o dia.`}</div>
        <div class="hint">${hj.feitas === 0
          ? "Nenhuma questão respondida hoje nesta trilha."
          : `Hoje: ${hj.acertos} ${hj.acertos === 1 ? "certa" : "certas"} · ${hj.erros} ${hj.erros === 1 ? "errada" : "erradas"}${hj.brancos ? ` · ${hj.brancos} em branco` : ""}${taxaHoje === null ? "" : ` · ${taxaHoje}% de acerto`}`}</div>
      </div>
    </div>
    <div class="gami-bar" style="margin-top:10px"><i style="width:${hj.pct}%"></i></div>
    <div class="pe-hoje-acoes">
      ${hj.cumprida
        ? `<button class="btn ghost small" onclick="iniciarMetaDoDia()" ${podeFechar ? "" : "disabled"}>Continuar estudando →</button>`
        : `<button class="btn small" onclick="iniciarMetaDoDia()" ${podeFechar ? "" : "disabled"}>▶ Fazer ${podeFechar ? `as ${plano.fila.length}` : "as"} que faltam</button>`}
      <button class="btn ghost small" onclick="abrirEditorMetaDiaria()">Ajustar meta (${hj.meta}/dia)</button>
    </div>
    ${!podeFechar && !hj.cumprida
      ? `<div class="hint" style="margin-top:8px">Sem questões pendentes nas disciplinas prioritárias para montar a fila — use a revisão abaixo ou o Simulado Adaptativo.</div>` : ""}
    ${sugestaoRitmo
      ? `<div class="pe-hoje-sugestao">Para cobrir o edital até a prova, o ritmo necessário é <b>${sugestaoRitmo}/dia</b>.
         <a href="#" onclick="definirMetaDiaria(${sugestaoRitmo});renderPlanoEstudo();return false;">Adotar esse ritmo</a></div>` : ""}
    ${hj.feitas === 0 && streakAtual > 0
      ? `<div class="pe-hoje-sugestao">🔥 Sua sequência de ${streakAtual} dia${streakAtual === 1 ? "" : "s"} se mantém com pelo menos uma questão hoje.</div>` : ""}
  </div>`;

  /* Card de revisão do dia — só aparece se há o que revisar. */
  const revisaoHtml = (plano.totalErros > 0 || plano.devidasSRS > 0) ? `
  <div class="card pe-revisao" style="margin-bottom:16px">
    <h3>↻ Revisão de hoje</h3>
    <div class="pe-revisao-nums">
      ${plano.totalErros > 0 ? `<div class="pe-rev-num"><b>${plano.totalErros}</b><span>${plano.totalErros === 1 ? "questão errada" : "questões erradas"} acumulada(s)</span></div>` : ""}
      ${plano.devidasSRS > 0 ? `<div class="pe-rev-num"><b>${plano.devidasSRS}</b><span>vencida(s) na repetição espaçada</span></div>` : ""}
    </div>
    <div class="pe-revisao-acoes">
      ${plano.totalErros > 0 ? `<button class="btn small" onclick="revisarErrosAgora()">Revisar meus erros →</button>` : ""}
      ${plano.devidasSRS > 0 ? `<button class="btn ghost small" onclick="navigate('simulado')">Simulado de revisão (SRS) →</button>` : ""}
    </div>
  </div>` : "";

  MAIN().innerHTML = topbar("Plano de Estudo Dirigido",
    "O que priorizar hoje, cruzando dias até a prova, peso do edital e seu desempenho por disciplina") +
  `<div class="card" style="margin-bottom:16px">
    <h3>📅 Contagem regressiva</h3>
    ${contagemHtml}
    <div class="pe-fase pe-fase-${plano.fase.id}">
      <span class="pe-fase-nome">Fase: ${plano.fase.nome}</span>
      <span class="pe-fase-desc">${plano.fase.desc}</span>
    </div>
  </div>
  ${metaDiaHtml}
  ${progressoHtml}
  ${revisaoHtml}
  <div class="card">
    <h3>📌 Prioridades de hoje <span class="hint">a meta de ${plano.metaDiaria}/dia, redistribuída pelo peso no edital e pelo seu desempenho${plano.metaPersonalizada ? "" : " (padrão: meta semanal ÷ 7)"}</span></h3>
    ${plano.foco.length ? plano.foco.map(it => `
      <div class="pe-item ${it.cumprida ? "cumprida" : ""}">
        <div class="pe-item-top">
          <span class="tag ${statusCls[it.statusId]}">${statusIco[it.statusId]} ${escapeHtml(it.statusNome)}</span>
          ${faixaPrioridadeTag(it.disciplina)}
          <span class="tag" title="Peso de estudo desta disciplina: repartição do bloco pela faixa de prioridade. NÃO é previsão de quantos itens a prova terá — o edital define objetos de avaliação, não quota por disciplina.">peso ${it.peso}</span>
          ${modoBadge[it.modo] || ""}
          <b class="pe-disc">${escapeHtml(it.disciplina)}</b>
          <span class="pe-cota ${it.cumprida ? "ok" : ""}" title="Feitas hoje nesta disciplina / cota do dia">${it.cumprida
            ? `✓ ${it.feitasHoje} hoje`
            : `${it.feitasHoje}/${it.questoesSugeridas} hoje`}</span>
        </div>
        <div class="diag-bar ${statusCls[it.statusId]}"><i style="width:${it.taxa === null ? 100 : Math.round(it.taxa * 100)}%"></i></div>
        <div class="pe-item-bottom">
          <span class="hint">${it.taxa === null ? "Ainda não iniciada" : Math.round(it.taxa * 100) + "% de acerto"} · ${modoBottom(it)} · ${it.cumprida ? "cota do dia cumprida" : `${it.restantesHoje === 1 ? "falta 1" : `faltam ${it.restantesHoje}`} para a cota`}</span>
          <button class="btn ghost small" onclick="estudarDisciplinaAgora('${it.disciplina}','${it.modo}')">${modoBtn(it)}</button>
        </div>
      </div>`).join("")
    : plano.devidasSRS > 0
      ? `<div class="empty"><div class="big">↻</div>Sem novas nem erros pendentes — mas você tem <b>${plano.devidasSRS}</b> questão(ões) vencida(s) na repetição espaçada. Faça o simulado de revisão (SRS) acima para não esquecer o que já domina.</div>`
      : plano.fase.id === "reta"
        ? `<div class="empty"><div class="big">✅</div>Nada pendente para revisar hoje. Você está com tudo em dia para a reta final — mantenha o descanso e revise pontos-chave.</div>`
        : `<div class="empty"><div class="big">🎉</div>Você já explorou todo o banco disponível e não há erros nem revisões pendentes. Continue mantendo o ritmo pelo Simulado Adaptativo!</div>`}
    ${plano.totalDisciplinasPendentes > plano.foco.length ? `<div class="hint" style="margin-top:10px">+ ${plano.totalDisciplinasPendentes - plano.foco.length} outra(s) disciplina(s) pendente(s), de menor prioridade agora.</div>` : ""}
  </div>
  ${AVISO_ESTATISTICO}`;
}

/* ================================================================
   ESTRATÉGIAS (Módulo 10)
   ================================================================ */
let estrategiaCat = null; /* null = todas as categorias */
function setEstrategiaCat(cat) { estrategiaCat = cat || null; renderEstrategias(); }

/* Bloco da questão-exemplo com o recorte da estratégia já destacado —
   é a demonstração central da aba: mostra, no texto real do item, qual
   oração dispara a técnica. */
function exemploEstrategiaHtml(e) {
  const q = QUESTOES.find(x => x.id === e.exemplo);
  if (!q) return "";
  const liberada = questaoLiberada(q);
  const gabTxtEx = rotuloResposta(q, q.gabarito);
  const gabOk = q.gabarito === "C";
  return `<div class="estr-exemplo">
    <div class="ee-head">
      <span class="tag accent">${q.id}</span>
      <span class="tag">${escapeHtml(q.disciplina)}</span>
      <span class="tag">${escapeHtml(q.assunto)}</span>
      <span class="tag ${formatoDaQuestao(q) === "ME" ? "accent" : gabOk ? "ok" : "bad"}">gabarito: ${escapeHtml(gabTxtEx)}</span>
    </div>
    <blockquote class="ee-enunciado">${marcarTrechoEstrategia(q.enunciado, e.trecho, "Trecho que materializa a estratégia")}</blockquote>
    <p class="ee-porque"><b>Por que este trecho:</b> ${escapeHtml(e.porqueTrecho)}</p>
    ${liberada
      ? `<button class="btn ghost small" onclick="verExemploEstrategia('${e.id}')">Resolver esta questão no banco →</button>`
      : `<p class="ee-bloqueio">🔒 Esta questão faz parte do banco completo. <a href="#" onclick="navigate('planos');return false;">Ver planos</a> para resolvê-la com comentário e estratégias da banca.</p>`}
  </div>`;
}

/* Cada estratégia é um <details> fechado: as 16 técnicas somavam mais de
   23.000px de rolagem no celular, o equivalente a ~29 telas. Fechadas,
   viram uma lista escaneável e o candidato abre só a que interessa —
   mesmo padrão já usado no bloco "Engenharia cognitiva" das questões. */
function estrategiaCardHtml(e) {
  const dnas = (e.contraDNA || []).map(slug => DNA_BANCA.find(d => d.slug === slug)).filter(Boolean);
  return `<details class="estrategia">
    <summary class="estr-top">
      <h4>✦ ${escapeHtml(e.nome)}</h4>
      ${dnas.map(d => `<span class="tag dna" title="${escapeHtml(d.desc)}">neutraliza: ${escapeHtml(d.nome)}</span>`).join("")}
    </summary>
    <p class="estr-desc">${escapeHtml(e.desc)}</p>

    <div class="estr-bloco padrao">
      <b>📐 Padrão observado nas provas</b>
      <p>${escapeHtml(e.padrao)}</p>
    </div>

    <div class="estr-bloco">
      <b>▸ Como aplicar</b>
      <ol class="estr-passos">${e.passos.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ol>
    </div>

    <div class="estr-duo">
      <div class="estr-bloco ganho"><b>✔ O que você ganha</b><p>${escapeHtml(e.ganho)}</p></div>
      <div class="estr-bloco risco"><b>⚠ Quando a técnica falha</b><p>${escapeHtml(e.armadilha)}</p></div>
    </div>

    <div class="aplicar">Quando aplicar: ${escapeHtml(e.aplicar)}</div>
    ${e.exemplo ? exemploEstrategiaHtml(e) : ""}
  </details>`;
}

/* Etiqueta da faixa de prioridade da disciplina na trilha escolhida.
   Devolve "" quando a trilha não tem faixas declaradas — só a PC-AL tem,
   porque só ela foi objeto do relatório consolidado. */
function faixaPrioridadeTag(disciplina) {
  const ed = editalDoFoco();
  const faixa = ed && ed.prioridade && ed.prioridade[disciplina];
  if (!faixa) return "";
  const cls = faixa.startsWith("S") ? "pri-s" : (faixa.startsWith("A+") ? "pri-a-mais" : "pri-a");
  return `<span class="tag pri ${cls}" title="Faixa de prioridade no Relatório Consolidado CEBRASPE — PC/AL 2026: S++ é o núcleo de prioridade máxima, A/B o de menor peso.">${escapeHtml(faixa)}</span>`;
}

/* O protocolo de resolução: oito perguntas que localizam o ponto de
   ruptura ANTES de o padrão entrar em cena. A ordem importa — a última
   pergunta é a do qualificador, justamente para que o candidato não
   comece por ela e decida a questão pela forma. */
function protocoloResolucaoHtml() {
  const porCod = Object.fromEntries(PONTOS_RUPTURA.map(r => [r.cod, r]));
  return `<div class="card protocolo">
    <h3>◎ Protocolo de resolução — onde o item se rompe</h3>
    <p>A banca costuma preservar o núcleo verdadeiro da proposição e alterar <b>um</b> elemento determinante.
    Resolver é localizar esse elemento. As perguntas abaixo varrem os pontos onde a alteração cabe.</p>
    <ol class="proto-lista">
      ${CHECKLIST_RESOLUCAO.map(c => `<li>
        <b>${escapeHtml(c.p)}</b> <span class="proto-para">${escapeHtml(c.para)}</span>
        <span class="proto-rup">${c.rup.map(r => `<abbr title="${escapeHtml((porCod[r] || {}).nome || r)}">${r}</abbr>`).join(" ")}</span>
      </li>`).join("")}
    </ol>
    <details class="proto-det">
      <summary>Os 12 pontos de ruptura, com um exemplo do banco em cada</summary>
      <div class="rup-grade">
        ${PONTOS_RUPTURA.map(r => `<div class="rup-item">
          <div class="rup-cab"><span class="rup-cod">${r.cod}</span> <b>${escapeHtml(r.nome)}</b></div>
          <div class="rup-perg">${escapeHtml(r.pergunta)}</div>
          <div class="rup-desc">${escapeHtml(r.desc)}</div>
          <button class="btn-link rup-ex" onclick="abrirQuestaoPorId('${r.exemplo}')">ver ${r.exemplo} no banco →</button>
        </div>`).join("")}
      </div>
    </details>
    <p class="regra-ouro"><b>${escapeHtml(REGRA_DE_OURO.texto)}</b> ${escapeHtml(REGRA_DE_OURO.detalhe)}</p>
  </div>`;
}

/* O contrapeso da biblioteca de estratégias: o que NÃO funciona, e a
   medição que derruba cada crença. Sem isso, uma tela cheia de padrões
   convida exatamente ao erro que o sistema deveria evitar. */
function heuristicasRejeitadasHtml() {
  return `<div class="card heur-rej">
    <h3>⊘ Heurísticas que não se sustentam</h3>
    <p>Todo cursinho repete alguma destas. Cada uma foi testada contra gabaritos oficiais — e nenhuma sobreviveu
    como <b>decisão</b>. Onde o número aparece, ele é auditável e vem do corpus indicado.</p>
    ${HEURISTICAS_REJEITADAS.map(h => `<div class="heur-item">
      <div class="heur-cab">
        <span class="heur-nome">${escapeHtml(h.heuristica)}</span>
        <span class="heur-status heur-${h.status.includes("NÃO") ? "nv" : "rej"}">${escapeHtml(h.status)}</span>
      </div>
      <div class="heur-med"><b>O que medimos:</b> ${escapeHtml(h.medicao)}</div>
      ${h.ressalva ? `<div class="heur-res"><b>Ressalva:</b> ${escapeHtml(h.ressalva)}</div>` : ""}
      <div class="heur-uso"><b>Uso permitido:</b> ${escapeHtml(h.usoPermitido)}</div>
    </div>`).join("")}
  </div>`;
}

function renderEstrategias() {
  const cats = estrategiaCat ? ESTRATEGIA_CATEGORIAS.filter(c => c.id === estrategiaCat) : ESTRATEGIA_CATEGORIAS;
  const nTotal = ESTRATEGIAS.length;
  const nExemplos = ESTRATEGIAS.filter(e => e.exemplo).length;

  MAIN().innerHTML = topbar("Estratégias CEBRASPE",
    `${nTotal} técnicas de resolução derivadas de padrões recorrentes da banca — com o trecho exato que dispara cada uma`) +
  `<div class="card estr-intro">
    <h3>🔬 Como esta biblioteca foi construída</h3>
    <p>Cada técnica abaixo parte de um <b>comportamento recorrente e verificável</b> nas provas CEBRASPE de domínio público
    (cadernos e gabaritos oficiais divulgados pela banca). Para cada uma você encontra o padrão explorado, o procedimento
    de aplicação, o ganho esperado e — igualmente importante — <b>em que situação a própria técnica falha</b>.</p>
    <p>Em ${nExemplos} das ${nTotal} estratégias há uma questão-exemplo do banco com o <mark class="trecho-estrategia">trecho
    destacado</mark> que materializa o padrão: é ali que a banca age.</p>
    <p class="hint">Os percentuais de incidência são estimativas do QuestLab a partir do perfil histórico da banca —
    servem para priorizar estudo, não como previsão de prova.</p>
  </div>

  ${protocoloResolucaoHtml()}
  ${heuristicasRejeitadasHtml()}

  <div class="estr-filtros">
    <button class="chip ${!estrategiaCat ? "active" : ""}" onclick="setEstrategiaCat(null)">Todas (${nTotal})</button>
    ${ESTRATEGIA_CATEGORIAS.map(c => {
      const n = ESTRATEGIAS.filter(e => e.categoria === c.id).length;
      return `<button class="chip ${estrategiaCat === c.id ? "active" : ""}" onclick="setEstrategiaCat('${c.id}')">${c.ico} ${escapeHtml(c.nome)} (${n})</button>`;
    }).join("")}
  </div>

  ${cats.map(c => {
    const lista = ESTRATEGIAS.filter(e => e.categoria === c.id);
    if (!lista.length) return "";
    return `<div class="card estr-cat">
      <h3>${c.ico} ${escapeHtml(c.nome)}</h3>
      <p class="hint estr-cat-desc">${escapeHtml(c.desc)}</p>
      ${lista.map(estrategiaCardHtml).join("")}
    </div>`;
  }).join("")}`;
}

/* Abre uma questão qualquer no Banco pelo ID. Mesmo caminho de
   verExemploEstrategia(), sem o destaque de trecho — usado pelos
   exemplos dos pontos de ruptura. */
function abrirQuestaoPorId(id) {
  const q = QUESTOES.find(x => x.id === id);
  if (!q) return;
  if (!questaoLiberada(q)) { navigate("planos"); return; }

  destaqueEstrategia = null;
  bancoFiltros = { disciplina: q.disciplina, assunto: q.assunto };
  bancoListaCache = null;
  const idx = listaBancoAtual().findIndex(x => x.id === q.id);
  bancoIndice = idx >= 0 ? idx : 0;
  bancoPagina = idx >= 0 ? Math.floor(idx / tamanhoPaginaBanco()) : 0;
  navigate("banco");
}

/* Abre a questão-exemplo no Banco com o trecho da estratégia destacado. */
function verExemploEstrategia(idEstrategia) {
  const e = ESTRATEGIAS.find(x => x.id === idEstrategia);
  if (!e || !e.exemplo) return;
  const q = QUESTOES.find(x => x.id === e.exemplo);
  if (!q) return;
  if (!questaoLiberada(q)) { navigate("planos"); return; }

  destaqueEstrategia = { qid: q.id, trecho: e.trecho, estrategia: e };
  bancoFiltros = { disciplina: q.disciplina, assunto: q.assunto };
  const idx = listaBancoAtual().findIndex(x => x.id === q.id);
  bancoIndice = idx >= 0 ? idx : 0;
  bancoPagina = idx >= 0 ? Math.floor(idx / tamanhoPaginaBanco()) : 0;
  navigate("banco");

  if (bancoModoVisual !== "unica") {
    setTimeout(() => {
      const el = document.getElementById("qc-" + q.id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }
}

/* ================================================================
   PERFIL DO ESTUDANTE (Módulo 8)
   ================================================================ */
async function submitAtivarConvitePerfil() {
  const codigo = $("#perfil-convite-input").value.trim();
  const msg = $("#perfil-convite-msg");
  const btn = $("#perfil-convite-btn");
  if (!codigo) { msg.style.color = "var(--bad)"; msg.textContent = "Informe um código de convite."; return; }
  const ok = await resgatarConvite(codigo, msg, btn);
  if (ok) renderPerfil();
}
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
    /* A lista sai de EDITAIS, não de CONCURSOS: trilha é carreira com edital
       mapeado, e só essas escopam de verdade o banco e pesam o Plano de
       Estudo. PF/PRF/PCDF/PCE continuam existindo como procedência das
       questões, mas oferecê-las aqui prometeria um escopo que não existe. */
    `<label class="f" style="min-width:150px">Trilha<select onchange="trocarTrilha(this.value)">
      <option value="" ${!APP_STATE.config.concursoFoco ? "selected" : ""}>Todas (sem trilha)</option>
      ${Object.values(EDITAIS).map(e => `<option value="${e.id}" ${APP_STATE.config.concursoFoco === e.id ? "selected" : ""}>${escapeHtml(e.nome)}</option>`).join("")}
    </select></label>
    <label class="f" style="min-width:130px">Cargo-foco<select onchange="APP_STATE.config.cargoFoco=this.value;saveState();renderPerfil()">
      ${cargosDoFoco().map(c => `<option ${APP_STATE.config.cargoFoco === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
    </select></label>`) +
  (APP_STATE.config.plano !== "completo" ? `<div class="card" style="margin-bottom:16px">
    <h3>🔓 Ativar código de convite</h3>
    <p class="hint" style="margin-bottom:10px">Você está no plano gratuito, com acesso a uma amostra do banco de questões. Um código de convite libera acesso completo, a qualquer momento.</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end">
      <label class="f" style="flex:1;min-width:200px">Código de convite
        <input type="text" id="perfil-convite-input" autocomplete="off" placeholder="ex.: A1B2C3D4" style="text-transform:uppercase"></label>
      <button class="btn" id="perfil-convite-btn" onclick="submitAtivarConvitePerfil()">Ativar</button>
    </div>
    <div id="perfil-convite-msg" style="margin-top:8px;font-size:13px;min-height:18px" role="status" aria-live="polite"></div>
  </div>` : "") +
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

/* ================================================================
   PLANOS — assinatura paga recorrente via Mercado Pago (Preapproval)
   ================================================================ */
const PLANOS_PRECO = {
  mensal:     { label: "Mensal",     preco: 19.90,  periodo: "mês" },
  trimestral: { label: "Trimestral", preco: 49.90,  periodo: "3 meses" },
  semestral:  { label: "Semestral",  preco: 89.90,  periodo: "6 meses" },
  anual:      { label: "Anual",      preco: 159.90, periodo: "ano" },
};

function renderPlanos() {
  const planoAtual = APP_STATE.config.assinaturaTipo;
  const completo = APP_STATE.config.plano === "completo";
  MAIN().innerHTML = topbar("Planos", "Acesso completo ao banco de questões, sem limites") +
  (completo && !planoAtual ? `<div class="card" style="margin-bottom:16px">
    <p>✅ Sua conta já tem <strong>acesso completo</strong> (ativado por convite).</p>
  </div>` : "") +
  `<div class="grid cols-4">
    ${Object.entries(PLANOS_PRECO).map(([id, p]) => `
      <div class="card ${planoAtual === id ? "stat" : ""}">
        <h3>${p.label}</h3>
        <div style="font-size:26px;font-weight:700;margin:8px 0">R$ ${p.preco.toFixed(2).replace(".", ",")}</div>
        <div class="lbl" style="margin-bottom:14px">cobrado a cada ${p.periodo}</div>
        ${planoAtual === id
          ? `<span class="tag ok">Plano atual</span>`
          : `<button class="btn" style="width:100%" onclick="assinar('${id}')" id="assinar-${id}">Assinar</button>`}
      </div>`).join("")}
  </div>
  <div id="planos-msg" style="margin-top:14px;font-size:13px;min-height:18px" role="status" aria-live="polite"></div>
  <div style="font-size:12px;color:var(--muted);margin-top:14px">Cobrança recorrente automática via Mercado Pago. Cancele quando quiser diretamente pelo Mercado Pago.</div>`;
}

async function assinar(planoTipo) {
  const msg = $("#planos-msg");
  const btn = $(`#assinar-${planoTipo}`);
  if (btn) btn.disabled = true;
  msg.style.color = "var(--muted)";
  msg.textContent = "Redirecionando para o Mercado Pago…";
  try {
    /* supa.functions.invoke() falha com "Failed to send a request to the
       Edge Function" em alguns navegadores/versões do supabase-js — um
       fetch() direto para o mesmo endpoint funciona normalmente, então
       chamamos a function assim em vez de usar o wrapper da lib. */
    const { data: { session } } = await supa.auth.getSession();
    const res = await fetch(`${SUPABASE_URL}/functions/v1/mp-criar-assinatura`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plano_tipo: planoTipo }),
    });
    const data = await res.json();
    if (!res.ok || data?.error) throw new Error(data?.error || "Não foi possível iniciar a assinatura no Mercado Pago.");
    if (!data?.init_point) throw new Error("Resposta inesperada do servidor de pagamentos.");
    window.location.href = data.init_point;
  } catch (err) {
    msg.style.color = "var(--bad)";
    msg.textContent = err.message || "Não foi possível iniciar a assinatura. Tente novamente.";
    if (btn) btn.disabled = false;
  }
}
