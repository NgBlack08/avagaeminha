/* =====================================================================
   QUESTLAB — Autenticação (Supabase Auth)
   Acesso exclusivo por login (e-mail e senha, ou Google). Não há modo
   local/sem conta: é preciso estar autenticado para usar a plataforma,
   e todo o progresso é sincronizado na nuvem (Supabase).
   ===================================================================== */
let authTab = "entrar";

/* Ícones inline (SVG autoral/genérico) — sem dependência de rede. */
const EYE_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg>`;
const EYE_OFF_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M6.61 6.61A18.5 18.5 0 0 0 1 12s4 8 11 8a9.26 9.26 0 0 0 5.39-1.61M14.12 14.12a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
const GOOGLE_ICON = `<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"/></svg>`;

function authRedirectUrl() {
  return window.location.origin + window.location.pathname;
}

/* Lê error/error_description da URL (ex.: usuário cancelou o consentimento
   do Google) e limpa a URL, devolvendo a mensagem já decodificada. */
function checkAuthRedirectError() {
  const params = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams((window.location.hash || "").replace(/^#/, ""));
  const err = params.get("error_description") || hashParams.get("error_description") ||
              params.get("error") || hashParams.get("error");
  if (err) {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    window.history.replaceState({}, document.title, url.toString());
    return decodeURIComponent(String(err).replace(/\+/g, " "));
  }
  return null;
}

/* Lê mp_status da URL (retorno do checkout de assinatura do Mercado Pago,
   ver back_url em mp-criar-assinatura/index.ts) e limpa a URL. O valor em
   si não importa muito — quem manda é o webhook, que confirma o status
   real de forma assíncrona — isso só sinaliza "o usuário acabou de voltar
   do Mercado Pago" pra iniciarApp() (js/app.js) decidir mostrar a tela de
   Planos e tentar recarregar o estado. */
function checkMpRedirectStatus() {
  const params = new URLSearchParams(window.location.search);
  const status = params.get("mp_status");
  if (status) {
    const url = new URL(window.location.href);
    url.searchParams.delete("mp_status");
    window.history.replaceState({}, document.title, url.toString());
    return status;
  }
  return null;
}

async function bootstrapAuth() {
  const oauthErro = checkAuthRedirectError();
  let recuperandoSenha = false;

  /* Registrado ANTES do await getSession(): o cliente Supabase troca
     tokens da URL (OAuth/recuperação de senha) durante sua inicialização
     interna, que getSession() aguarda. Se o listener fosse registrado só
     depois desse await, o evento PASSWORD_RECOVERY já teria disparado e
     seria perdido — por isso a ordem aqui importa. */
  supa.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT") {
      voltarModoLocal();
      renderAuthScreen();
    } else if (event === "PASSWORD_RECOVERY") {
      recuperandoSenha = true;
      renderRedefinirSenhaScreen();
    }
  });

  const { data: { session } } = await supa.auth.getSession();
  if (recuperandoSenha) return; /* já mostrando a tela de redefinição de senha */
  if (session && session.user) {
    await carregarEstadoNuvem(session.user);
    iniciarApp();
  } else {
    renderAuthScreen(oauthErro || undefined);
  }
}

async function sair() {
  await supa.auth.signOut();
}

/* =====================================================================
   Plano de fundo heroico da landing/login — ilustração cinematográfica
   100% AUTORAL em SVG (nenhuma foto/logo/brasão/farda de terceiros;
   autossuficiente, sem dependência de rede, adaptável aos temas claro/
   escuro). Cena: investigador(a) de costas diante de um posto de
   trabalho com múltiplos monitores exibindo dados abstratos (gráficos
   genéricos, sem texto real), painéis holográficos flutuantes, uma
   rede tática de investigação ao fundo e o skyline de uma cidade
   genérica desfocado — sugerindo profundidade de campo cinematográfica.
   ===================================================================== */
function landingHeroBg() {
  return `<div class="landing-bg" aria-hidden="true">
    <svg class="hero-svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#070c1a"/>
          <stop offset=".55" stop-color="#0e1130"/>
          <stop offset="1" stop-color="#1c1042"/>
        </linearGradient>
        <radialGradient id="glowCyan" cx="72%" cy="58%" r="34%">
          <stop offset="0" stop-color="#5ad2ff" stop-opacity=".28"/>
          <stop offset="100%" stop-color="#5ad2ff" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="glowPurple" cx="14%" cy="82%" r="42%">
          <stop offset="0" stop-color="#7c3aed" stop-opacity=".30"/>
          <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#bfe8ff" stop-opacity=".9"/>
          <stop offset=".55" stop-color="#4fa3ff" stop-opacity=".55"/>
          <stop offset="1" stop-color="#1c3a7a" stop-opacity=".4"/>
        </linearGradient>
        <linearGradient id="scrimGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#070b18" stop-opacity=".95"/>
          <stop offset=".42" stop-color="#0a0f22" stop-opacity=".72"/>
          <stop offset=".64" stop-color="#0a0f22" stop-opacity=".32"/>
          <stop offset="1" stop-color="#0a0f22" stop-opacity=".05"/>
        </linearGradient>
        <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#000" stop-opacity=".38"/>
          <stop offset=".16" stop-color="#000" stop-opacity="0"/>
          <stop offset=".86" stop-color="#000" stop-opacity="0"/>
          <stop offset="1" stop-color="#000" stop-opacity=".42"/>
        </linearGradient>
        <filter id="blurFar" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>
        <filter id="blurSoft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="5"/></filter>
        <filter id="glowSoft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="7"/></filter>
      </defs>

      <!-- base cinematográfica: azul-marinho → roxo -->
      <rect width="1600" height="1000" fill="url(#bgGrad)"/>
      <rect width="1600" height="1000" fill="url(#glowPurple)"/>
      <rect width="1600" height="1000" fill="url(#glowCyan)"/>

      <!-- rede tática de investigação (desfocada, ao fundo) -->
      <g class="hero-farlines" filter="url(#blurFar)" opacity=".22" stroke="#7fb2ff" fill="none">
        <path d="M980 210 L1180 300 L1360 220 M1180 300 L1140 460 M1360 220 L1440 400 M1140 460 L1300 560 M1300 560 L1500 520" stroke-width="1.2"/>
        <g fill="#7fb2ff" stroke="none">
          <circle cx="980" cy="210" r="5"/><circle cx="1180" cy="300" r="5"/><circle cx="1360" cy="220" r="5"/>
          <circle cx="1140" cy="460" r="5"/><circle cx="1440" cy="400" r="5"/><circle cx="1300" cy="560" r="5"/><circle cx="1500" cy="520" r="5"/>
        </g>
      </g>

      <!-- skyline genérico desfocado (profundidade de campo) -->
      <g class="hero-skyline" filter="url(#blurSoft)" opacity=".38">
        <path fill="#1b2c55" d="M700 760 L700 620 L760 620 L760 580 L820 580 L820 610 L890 610 L890 540 L960 540 L960 590 L1040 590 L1040 630 L1110 630 L1110 560 L1180 560 L1180 605 L1260 605 L1260 640 L1340 640 L1340 570 L1420 570 L1420 615 L1500 615 L1500 650 L1600 650 L1600 760 Z"/>
      </g>

      <!-- grade tática (sutil, atrás do posto de trabalho) -->
      <g class="hero-gridlines" opacity=".10" stroke="#7fb2ff" stroke-width="1">
        <path d="M760 340 L1600 340 M760 420 L1600 420 M760 500 L1600 500 M900 260 L900 760 M1060 260 L1060 800 M1220 260 L1220 800 M1380 260 L1380 800"/>
      </g>

      <!-- painéis holográficos flutuantes + posto de trabalho (deslocados p/ ficarem visíveis ao lado do card de acesso) -->
      <g transform="translate(-95,15)">
      <g class="hero-holo hero-holo-a">
        <rect x="955" y="378" width="150" height="92" rx="14" filter="url(#glowSoft)" fill="#5ad2ff" opacity=".22"/>
        <rect x="955" y="378" width="150" height="92" rx="14" fill="#0e1a33" fill-opacity=".55" stroke="#7fd4ff" stroke-opacity=".45"/>
        <g transform="translate(970,398)" stroke="none">
          <rect x="0" y="34" width="10" height="20" rx="2" fill="#7fd4ff" fill-opacity=".8"/>
          <rect x="16" y="22" width="10" height="32" rx="2" fill="#7fd4ff" fill-opacity=".9"/>
          <rect x="32" y="10" width="10" height="44" rx="2" fill="#bfe8ff"/>
          <rect x="48" y="26" width="10" height="28" rx="2" fill="#7fd4ff" fill-opacity=".85"/>
          <circle cx="105" cy="28" r="20" fill="none" stroke="#294a7a" stroke-width="5"/>
          <circle cx="105" cy="28" r="20" fill="none" stroke="#7fd4ff" stroke-width="5" stroke-dasharray="94 126" stroke-linecap="round" transform="rotate(-90 105 28)"/>
        </g>
      </g>
      <g class="hero-holo hero-holo-b">
        <rect x="1370" y="430" width="128" height="78" rx="12" filter="url(#glowSoft)" fill="#a78bfa" opacity=".2"/>
        <rect x="1370" y="430" width="128" height="78" rx="12" fill="#150f2e" fill-opacity=".55" stroke="#c4b5fd" stroke-opacity=".4"/>
        <polyline points="1384,486 1404,468 1420,478 1440,452 1460,462 1480,440" fill="none" stroke="#c4b5fd" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- posto de trabalho: desk + monitores + investigador(a) de costas -->
      <g class="hero-workstation">
        <!-- cadeira (atrás da silhueta) -->
        <rect x="1090" y="560" width="170" height="200" rx="26" fill="#0a1120" fill-opacity=".7"/>
        <!-- monitor esquerdo (linha do tempo) -->
        <g transform="rotate(-9 985 660)">
          <rect x="900" y="580" width="170" height="128" rx="10" fill="#0a1120" stroke="#345a92" stroke-opacity=".6"/>
          <rect x="908" y="588" width="154" height="112" rx="6" fill="url(#screenGlow)"/>
          <polyline points="918,672 940,650 958,662 980,630 1000,644 1020,614 1044,632" fill="none" stroke="#0b1e3e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>
          <rect x="985" y="700" width="12" height="24" fill="#0a1120"/>
        </g>
        <!-- monitor direito (mapa/rede) -->
        <g transform="rotate(9 1385 660)">
          <rect x="1300" y="580" width="170" height="128" rx="10" fill="#0a1120" stroke="#345a92" stroke-opacity=".6"/>
          <rect x="1308" y="588" width="154" height="112" rx="6" fill="url(#screenGlow)"/>
          <g stroke="#0b1e3e" stroke-width="2" opacity=".8">
            <path d="M1330 610 L1370 640 L1410 620 L1440 660"/>
          </g>
          <g fill="#0b1e3e" opacity=".9">
            <circle cx="1330" cy="610" r="4"/><circle cx="1370" cy="640" r="4"/><circle cx="1410" cy="620" r="4"/><circle cx="1440" cy="660" r="4"/>
          </g>
          <rect x="1377" y="700" width="12" height="24" fill="#0a1120"/>
        </g>
        <!-- monitor central (indicadores) -->
        <rect x="1075" y="540" width="230" height="160" rx="12" fill="#0a1120" stroke="#4a8fe0" stroke-opacity=".7"/>
        <rect x="1085" y="550" width="210" height="132" rx="8" fill="url(#screenGlow)"/>
        <rect x="1097" y="562" width="130" height="6" rx="3" fill="#0b1e3e" opacity=".55"/>
        <g fill="#0b1e3e">
          <rect x="1097" y="640" width="16" height="30" rx="2" opacity=".8"/>
          <rect x="1120" y="618" width="16" height="52" rx="2" opacity=".9"/>
          <rect x="1143" y="600" width="16" height="70" rx="2"/>
          <rect x="1166" y="626" width="16" height="44" rx="2" opacity=".85"/>
          <rect x="1189" y="610" width="16" height="60" rx="2" opacity=".92"/>
        </g>
        <circle cx="1258" cy="600" r="26" fill="none" stroke="#0b1e3e" stroke-width="6" opacity=".35"/>
        <circle cx="1258" cy="600" r="26" fill="none" stroke="#eaf6ff" stroke-width="6" stroke-dasharray="115 164" stroke-linecap="round" transform="rotate(-90 1258 600)"/>
        <rect x="1182" y="700" width="16" height="30" fill="#0a1120"/>

        <!-- mesa -->
        <rect x="860" y="748" width="620" height="16" rx="4" fill="#0a1120"/>
        <rect x="860" y="748" width="620" height="3" rx="1.5" fill="#4a8fe0" opacity=".3"/>

        <!-- investigador(a): silhueta de costas (genérica, sem farda/distintivo) -->
        <g class="hero-investigator" fill="#050912">
          <path d="M1140 596 Q1175 580 1210 596 L1216 632 Q1175 618 1134 632 Z"/>
          <circle cx="1175" cy="566" r="27"/>
          <path d="M1128 636 Q1175 612 1222 636 L1234 742 Q1175 764 1116 742 Z"/>
          <path d="M1128 648 Q1096 668 1090 716 L1104 726 Q1114 686 1140 664 Z"/>
          <path d="M1222 648 Q1254 668 1260 716 L1246 726 Q1236 686 1210 664 Z"/>
        </g>
      </g>
      </g>

      <!-- partículas -->
      <g class="hero-particles" fill="#9fc7ff">
        <circle cx="420" cy="180" r="1.6" opacity=".4"/><circle cx="620" cy="120" r="1.3" opacity=".3"/>
        <circle cx="300" cy="340" r="1.7" opacity=".35"/><circle cx="1520" cy="200" r="1.4" opacity=".4"/>
        <circle cx="1250" cy="150" r="1.3" opacity=".3"/><circle cx="820" cy="230" r="1.5" opacity=".35"/>
        <circle cx="1050" cy="180" r="1.2" opacity=".3"/><circle cx="540" cy="420" r="1.3" opacity=".3"/>
      </g>

      <!-- véu de legibilidade (mais forte à esquerda, onde fica o texto) + vinheta -->
      <rect class="hero-scrim" width="1600" height="1000" fill="url(#scrimGrad)"/>
      <rect width="1600" height="1000" fill="url(#vGrad)"/>
    </svg>
  </div>`;
}

function renderAuthScreen(erro) {
  const root = document.getElementById("approot");
  if (root) root.classList.add("no-sidebar");
  historyInitialized = false; /* reinicia o controle de histórico do navegador (app.js) */

  /* Prova social HONESTA: números reais computados da própria plataforma
     (nunca métricas inventadas). */
  const nQ = QUESTOES.length;
  const nDisc = new Set(QUESTOES.map(q => q.disciplina)).size;
  const nBlocos = new Set(QUESTOES.filter(q => q.textoApoio).map(q => q.textoApoio)).size;
  const nPadroes = DNA_BANCA.length;

  const feats = [
    ["🧬", "Questões inéditas com padrão CEBRASPE"],
    ["🎯", "Simulados adaptativos"],
    ["🧠", "Engenharia cognitiva por questão"],
    ["🔁", "Revisão espaçada"],
    ["📊", "Estatísticas inteligentes"],
    ["🧭", "Diagnóstico por disciplina"],
  ];
  const cred = [
    ["📚", nQ, "questões inéditas"],
    ["🗂️", nDisc, "disciplinas do edital"],
    ["📝", nBlocos, "blocos de simulado"],
    ["🧩", nPadroes, "padrões da banca mapeados"],
  ];

  MAIN().innerHTML = `
  <div class="landing">
    <div class="landing-split">
      <div class="landing-panel landing-panel-brand">
        ${landingHeroBg()}
        <header class="landing-top">
          <div class="brand">
            <div class="logo">QL</div>
            <h1>QuestLab<small>Foco: Carreiras Policiais</small></h1>
          </div>
          <button class="btn ghost small" onclick="toggleTheme()" aria-label="Alternar tema claro/escuro">◐ Tema</button>
        </header>

        <div class="landing-panel-brand-content fx-stagger">
          <span class="hero-eyebrow">Plataforma especializada em Engenharia Reversa da Banca CEBRASPE</span>
          <h1>Estude como a banca pensa.<br><span class="grad">Aprove com método.</span></h1>
          <p class="lead">Laboratório de engenharia reversa da CEBRASPE para carreiras policiais:
          questões inéditas com engenharia cognitiva, simulados adaptativos com repetição espaçada
          e estatísticas que mostram exatamente onde você erra.</p>
          <div class="feat-grid" aria-label="Principais recursos">
            ${feats.map(([ico, label]) => `<div class="feat-card"><span class="ficon">${ico}</span><span>${label}</span></div>`).join("")}
          </div>

          <section class="credibility-band fx-stagger" aria-label="Números da plataforma">
            ${cred.map(([ico, n, label]) => `<div class="cred-card"><span class="cico">${ico}</span><div><div class="cnum" data-count="${n}">0</div><div class="clbl">${label}</div></div></div>`).join("")}
          </section>
        </div>
      </div>

      <div class="landing-panel landing-panel-form">
        <section class="card auth-card fx-stagger" aria-label="Acesso à plataforma">
          ${erro ? `<div class="resultado bad" style="margin-bottom:12px">${escapeHtml(erro)}</div>` : ""}
          <div class="auth-tabs">
            <button class="auth-tab" id="tab-entrar" onclick="setAuthTab('entrar')">Entrar</button>
            <button class="auth-tab" id="tab-criar" onclick="setAuthTab('criar')">Criar conta</button>
          </div>
          <form onsubmit="return submitAuthForm(event)">
            <label class="f">E-mail<input type="email" id="auth-email" required autocomplete="email" placeholder="voce@email.com"></label>
            <label class="f" style="margin-top:12px">Senha
              <div class="pw-wrap">
                <input type="password" id="auth-senha" required minlength="6" autocomplete="current-password" placeholder="mínimo 6 caracteres">
                <button type="button" class="pw-toggle" id="pw-toggle-btn" onclick="toggleSenhaVisivel()" aria-label="Mostrar senha" aria-pressed="false">${EYE_ICON}</button>
              </div>
            </label>
            <div class="auth-forgot" id="auth-forgot-wrap">
              <button type="button" class="link-btn" onclick="esqueciSenha()">Esqueci minha senha</button>
            </div>
            <div id="auth-cadastro-wrap" style="display:none">
              <label class="f" style="margin-top:12px">Nome completo
                <input type="text" id="auth-nome" autocomplete="name" placeholder="Seu nome completo"></label>
              <label class="f" style="margin-top:12px">Telefone/WhatsApp
                <input type="tel" id="auth-telefone" autocomplete="tel" placeholder="(82) 90000-0000"></label>
              <label class="f" style="margin-top:12px">Cargo pretendido
                <select id="auth-cargo-foco">
                  ${CARGOS.map(c => `<option>${c}</option>`).join("")}
                </select></label>
              <label class="f" id="auth-convite-wrap" style="margin-top:12px">Código de convite (opcional — libera acesso completo)
                <input type="text" id="auth-convite" autocomplete="off" placeholder="ex.: A1B2C3D4" style="text-transform:uppercase"></label>
            </div>
            <button class="btn" type="submit" style="margin-top:18px;width:100%" id="auth-submit">Entrar</button>
          </form>
          <div class="auth-divider" role="separator"><span></span>ou<span></span></div>
          <button type="button" class="btn btn-google" id="btn-google" onclick="loginComGoogle()">${GOOGLE_ICON}<span>Continuar com Google</span></button>
          <div id="auth-msg" style="margin-top:10px;font-size:13px;min-height:18px" role="status" aria-live="polite"></div>
          <div class="auth-foot">
            É necessário entrar ou criar uma conta para acessar a plataforma. Seu progresso fica salvo e sincronizado entre seus dispositivos.
          </div>
        </section>
      </div>
    </div>
  </div>`;
  setAuthTab("entrar");
  initLandingFX();
}

/* Tela de redefinição de senha — chegada por link de e-mail (evento
   PASSWORD_RECOVERY). Não faz parte do fluxo normal de login: o
   Supabase já concede uma sessão válida ao clicar no link, então aqui
   só coletamos a nova senha antes de liberar o acesso ao app. */
function renderRedefinirSenhaScreen() {
  const root = document.getElementById("approot");
  if (root) root.classList.add("no-sidebar");
  MAIN().innerHTML = `
  <div class="landing-reset">
    <section class="card auth-card fx-stagger" aria-label="Redefinir senha">
      <h2 style="margin-bottom:6px;font-size:20px">Defina sua nova senha</h2>
      <p class="lead" style="font-size:13.5px;margin-bottom:20px">Você acessou por um link de redefinição de senha. Escolha uma nova senha para continuar.</p>
      <form onsubmit="return submitNovaSenha(event)">
        <label class="f">Nova senha
          <div class="pw-wrap">
            <input type="password" id="nova-senha" required minlength="6" autocomplete="new-password" placeholder="mínimo 6 caracteres">
            <button type="button" class="pw-toggle" id="nova-senha-toggle-btn" onclick="toggleNovaSenhaVisivel()" aria-label="Mostrar senha" aria-pressed="false">${EYE_ICON}</button>
          </div>
        </label>
        <button class="btn" type="submit" style="margin-top:18px;width:100%" id="nova-senha-submit">Salvar nova senha</button>
      </form>
      <div id="nova-senha-msg" style="margin-top:10px;font-size:13px;min-height:18px" role="status" aria-live="polite"></div>
    </section>
  </div>`;
}

function toggleNovaSenhaVisivel() {
  const input = $("#nova-senha");
  const btn = $("#nova-senha-toggle-btn");
  const visivel = input.type === "text";
  input.type = visivel ? "password" : "text";
  btn.innerHTML = visivel ? EYE_ICON : EYE_OFF_ICON;
  btn.setAttribute("aria-label", visivel ? "Mostrar senha" : "Ocultar senha");
  btn.setAttribute("aria-pressed", String(!visivel));
}

async function submitNovaSenha(ev) {
  ev.preventDefault();
  const senha = $("#nova-senha").value;
  const msg = $("#nova-senha-msg");
  const btn = $("#nova-senha-submit");
  btn.disabled = true;
  msg.style.color = "var(--muted)";
  msg.textContent = "Salvando…";
  try {
    const { data, error } = await supa.auth.updateUser({ password: senha });
    if (error) throw error;
    msg.style.color = "var(--ok)";
    msg.textContent = "Senha atualizada! Entrando…";
    await carregarEstadoNuvem(data.user);
    iniciarApp();
  } catch (err) {
    msg.style.color = "var(--bad)";
    msg.textContent = traduzErroAuth(err.message);
    btn.disabled = false;
  }
  return false;
}

/* Upgrade de plano gratuito → completo via código de convite, chamável a
   qualquer momento (não bloqueia nada — convite é opcional). Reaproveitada
   pelo card "Ativar código de convite" no Perfil (js/app.js). */
async function resgatarConvite(codigo, msgEl, btnEl) {
  btnEl.disabled = true;
  msgEl.style.color = "var(--muted)";
  msgEl.textContent = "Validando…";
  try {
    const { error } = await supa.rpc("resgatar_convite", { p_code: codigo });
    if (error) throw error;
    await carregarEstadoNuvem(CURRENT_USER);
    msgEl.style.color = "var(--ok)";
    msgEl.textContent = "Convite ativado! Acesso completo liberado.";
    return true;
  } catch (err) {
    msgEl.style.color = "var(--bad)";
    msgEl.textContent = traduzErroAuth(err.message);
    return false;
  } finally {
    btnEl.disabled = false;
  }
}

/* Microinterações da landing: contagem progressiva dos números reais da
   plataforma e leve efeito de paralaxe no plano de fundo (ambos
   desativados quando o usuário prefere movimento reduzido). */
function initLandingFX() {
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".cnum[data-count]").forEach(el => {
    const target = parseInt(el.dataset.count, 10) || 0;
    if (reduceMotion || target === 0) { el.textContent = target; return; }
    const dur = 900;
    const t0 = performance.now();
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });

  if (!reduceMotion) {
    const scene = document.querySelector(".landing-bg svg");
    const brandPanel = document.querySelector(".landing-panel-brand");
    if (scene && brandPanel) {
      brandPanel.addEventListener("mousemove", e => {
        const rect = brandPanel.getBoundingClientRect();
        const dx = ((e.clientX - rect.left) / rect.width - .5) * 10;
        const dy = ((e.clientY - rect.top) / rect.height - .5) * 6;
        scene.style.transform = `translate(${dx}px, ${dy}px) scale(1.02)`;
      });
    }
  }
}

function setAuthTab(tab) {
  authTab = tab;
  $("#tab-entrar").className = tab === "entrar" ? "auth-tab active" : "auth-tab";
  $("#tab-criar").className = tab === "criar" ? "auth-tab active" : "auth-tab";
  $("#auth-submit").textContent = tab === "entrar" ? "Entrar" : "Criar conta";
  $("#auth-msg").textContent = "";
  const cadastro = $("#auth-cadastro-wrap");
  if (cadastro) {
    cadastro.style.display = tab === "criar" ? "" : "none";
    $("#auth-nome").required = tab === "criar";
    $("#auth-telefone").required = tab === "criar";
  }
  const forgotWrap = $("#auth-forgot-wrap");
  if (forgotWrap) forgotWrap.style.display = tab === "entrar" ? "" : "none";
}

function toggleSenhaVisivel() {
  const input = $("#auth-senha");
  const btn = $("#pw-toggle-btn");
  const visivel = input.type === "text";
  input.type = visivel ? "password" : "text";
  btn.innerHTML = visivel ? EYE_ICON : EYE_OFF_ICON;
  btn.setAttribute("aria-label", visivel ? "Mostrar senha" : "Ocultar senha");
  btn.setAttribute("aria-pressed", String(!visivel));
}

async function esqueciSenha() {
  const email = $("#auth-email").value.trim();
  const msg = $("#auth-msg");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg.style.color = "var(--bad)";
    msg.textContent = "Informe seu e-mail no campo acima para receber o link de redefinição.";
    return;
  }
  msg.style.color = "var(--muted)";
  msg.textContent = "Enviando…";
  try {
    const { error } = await supa.auth.resetPasswordForEmail(email, { redirectTo: authRedirectUrl() });
    if (error) throw error;
    msg.style.color = "var(--ok)";
    msg.textContent = "Se este e-mail estiver cadastrado, enviamos um link de redefinição de senha.";
  } catch (err) {
    msg.style.color = "var(--bad)";
    msg.textContent = traduzErroAuth(err.message);
  }
}

async function loginComGoogle() {
  const btn = $("#btn-google");
  const msg = $("#auth-msg");
  /* Convite é opcional (upgrade, não gate): login com Google nunca precisa
     dele. Quem quiser acesso completo pode resgatar um código depois, a
     qualquer momento, direto no Perfil (resgatarConvite() em js/auth.js). */
  btn.disabled = true;
  msg.style.color = "var(--muted)";
  msg.textContent = "Redirecionando para o Google…";
  try {
    /* signInWithOAuth redireciona a página inteira para o Supabase antes de
       qualquer resposta chegar ao nosso JS: a checagem "provider habilitado?"
       acontece no servidor, depois do redirect, quando este script já não
       está mais na página. Por isso consultamos antes o endpoint público
       /auth/v1/settings (o mesmo que os componentes oficiais de Auth UI
       usam para exibir/ocultar botões de provedor) — só assim conseguimos
       mostrar a mensagem amigável em vez do JSON cru de erro do Supabase. */
    const settingsRes = await fetch(`${SUPABASE_URL}/auth/v1/settings`, { headers: { apikey: SUPABASE_ANON_KEY } });
    if (settingsRes.ok) {
      const settings = await settingsRes.json();
      if (!settings || !settings.external || !settings.external.google) {
        msg.style.color = "var(--bad)";
        msg.textContent = "Login com Google ainda não está disponível. Use e-mail e senha.";
        btn.disabled = false;
        return;
      }
    }
    const { error } = await supa.auth.signInWithOAuth({ provider: "google", options: { redirectTo: authRedirectUrl() } });
    if (error) throw error;
    /* Sucesso: o navegador está saindo da página agora — nada mais a fazer aqui. */
  } catch (err) {
    msg.style.color = "var(--bad)";
    msg.textContent = traduzErroAuth(err.message);
    btn.disabled = false;
  }
}

async function submitAuthForm(ev) {
  ev.preventDefault();
  const email = $("#auth-email").value.trim();
  const senha = $("#auth-senha").value;
  const msg = $("#auth-msg");
  const btn = $("#auth-submit");
  btn.disabled = true;
  msg.style.color = "var(--muted)";
  msg.textContent = "Processando…";
  try {
    if (authTab === "criar") {
      const convite = $("#auth-convite").value.trim();
      const nome = $("#auth-nome").value.trim();
      const telefone = $("#auth-telefone").value.trim();
      const cargoFoco = $("#auth-cargo-foco").value;
      const { data, error } = await supa.auth.signUp({
        email, password: senha,
        options: { data: {
          nome_completo: nome, telefone, cargo_foco: cargoFoco,
          ...(convite ? { invite_code: convite } : {}),
        } },
      });
      if (error) throw error;
      if (data.session) {
        await carregarEstadoNuvem(data.user);
        iniciarApp();
        return false;
      }
      msg.style.color = "var(--ok)";
      msg.textContent = "Conta criada! Verifique seu e-mail para confirmar antes de entrar.";
    } else {
      const { data, error } = await supa.auth.signInWithPassword({ email, password: senha });
      if (error) throw error;
      await carregarEstadoNuvem(data.user);
      iniciarApp();
      return false;
    }
  } catch (err) {
    msg.style.color = "var(--bad)";
    /* No cadastro, falhas de validação de convite (trigger no banco) chegam
       como HTTP 500 e a supabase-js embrulha a mensagem real de forma
       inutilizável (AuthRetryableFetchError, message vazio) — tratamos esse
       caso à parte em vez de depender do texto do erro. */
    msg.textContent = (authTab === "criar" && err.status === 500)
      ? "Não foi possível criar a conta. Verifique o código de convite: ele pode estar incorreto, já ter sido utilizado, ou o e-mail já pode estar cadastrado. Confirme com quem te convidou."
      : traduzErroAuth(err.message);
  } finally {
    btn.disabled = false;
  }
  return false;
}

function traduzErroAuth(msg) {
  if (/already registered|already exists/i.test(msg)) return "Este e-mail já está cadastrado. Tente entrar.";
  if (/invalid login credentials/i.test(msg)) return "E-mail ou senha incorretos.";
  if (/password should be|at least 6/i.test(msg)) return "A senha deve ter pelo menos 6 caracteres.";
  if (/rate limit/i.test(msg)) return "Muitas tentativas. Aguarde um instante e tente de novo.";
  if (/convite.*ausente/i.test(msg)) return "É necessário informar um código de convite para criar sua conta.";
  if (/convite invalido/i.test(msg)) return "Código de convite inválido. Confira e tente novamente.";
  if (/convite ja utilizado|convite.*inativo/i.test(msg)) return "Este código de convite já foi utilizado ou está inativo.";
  if (/database error saving new user/i.test(msg)) return "Não foi possível criar a conta. Verifique o código de convite.";
  if (/provider is not enabled|unsupported provider|validation_failed/i.test(msg)) return "Login com Google ainda não está disponível. Use e-mail e senha.";
  return msg;
}
