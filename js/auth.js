/* =====================================================================
   CEBRASPE LAB — Autenticação (Supabase Auth)
   Acesso exclusivo por login (e-mail e senha). Não há modo local/sem
   conta: é preciso estar autenticado para usar a plataforma, e todo o
   progresso é sincronizado na nuvem (Supabase).
   ===================================================================== */
let authTab = "entrar";

async function bootstrapAuth() {
  const { data: { session } } = await supa.auth.getSession();
  if (session && session.user) {
    await carregarEstadoNuvem(session.user);
    iniciarApp();
  } else {
    renderAuthScreen();
  }

  supa.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT") {
      voltarModoLocal();
      renderAuthScreen();
    }
  });
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
    ${landingHeroBg()}
    <header class="landing-top">
      <div class="brand">
        <div class="logo">CL</div>
        <h1>CEBRASPE Lab<small>Foco: Carreiras Policiais</small></h1>
      </div>
      <button class="btn ghost small" onclick="toggleTheme()" aria-label="Alternar tema claro/escuro">◐ Tema</button>
    </header>

    <div class="landing-grid">
      <section class="pitch fx-stagger" aria-label="Apresentação da plataforma">
        <span class="hero-eyebrow">Plataforma especializada em Engenharia Reversa da Banca CEBRASPE</span>
        <h1>Estude como a banca pensa.<br><span class="grad">Aprove com método.</span></h1>
        <p class="lead">Laboratório de engenharia reversa da CEBRASPE para carreiras policiais:
        questões inéditas com engenharia cognitiva, simulados adaptativos com repetição espaçada
        e estatísticas que mostram exatamente onde você erra.</p>
        <div class="feat-grid" aria-label="Principais recursos">
          ${feats.map(([ico, label]) => `<div class="feat-card"><span class="ficon">${ico}</span><span>${label}</span></div>`).join("")}
        </div>
      </section>

      <section class="card auth-card fx-stagger" aria-label="Acesso à plataforma">
        ${erro ? `<div class="resultado bad" style="margin-bottom:12px">${escapeHtml(erro)}</div>` : ""}
        <div class="auth-tabs">
          <button class="btn small" id="tab-entrar" onclick="setAuthTab('entrar')">Entrar</button>
          <button class="btn ghost small" id="tab-criar" onclick="setAuthTab('criar')">Criar conta</button>
        </div>
        <form onsubmit="return submitAuthForm(event)">
          <label class="f">E-mail<input type="email" id="auth-email" required autocomplete="email" placeholder="voce@email.com"></label>
          <label class="f" style="margin-top:12px">Senha<input type="password" id="auth-senha" required minlength="6" autocomplete="current-password" placeholder="mínimo 6 caracteres"></label>
          <label class="f" id="auth-convite-wrap" style="margin-top:12px;display:none">Código de convite
            <input type="text" id="auth-convite" autocomplete="off" placeholder="ex.: A1B2C3D4" style="text-transform:uppercase"></label>
          <button class="btn" type="submit" style="margin-top:18px;width:100%" id="auth-submit">Entrar</button>
        </form>
        <div id="auth-msg" style="margin-top:10px;font-size:13px;min-height:18px" role="status" aria-live="polite"></div>
        <div class="auth-foot">
          É necessário entrar ou criar uma conta para acessar a plataforma. Seu progresso fica salvo e sincronizado entre seus dispositivos.
        </div>
      </section>
    </div>

    <section class="credibility-band fx-stagger" aria-label="Números da plataforma">
      ${cred.map(([ico, n, label]) => `<div class="cred-card"><span class="cico">${ico}</span><div><div class="cnum" data-count="${n}">0</div><div class="clbl">${label}</div></div></div>`).join("")}
    </section>
  </div>`;
  setAuthTab("entrar");
  initLandingFX();
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
    const bg = document.querySelector(".landing-bg .hero-workstation, .landing-bg .hero-holo");
    const scene = document.querySelector(".landing-bg svg");
    if (scene) {
      document.querySelector(".landing")?.addEventListener("mousemove", e => {
        const w = window.innerWidth, h = window.innerHeight;
        const dx = (e.clientX / w - .5) * 10;
        const dy = (e.clientY / h - .5) * 6;
        scene.style.transform = `translate(${dx}px, ${dy}px) scale(1.02)`;
      });
    }
  }
}

function setAuthTab(tab) {
  authTab = tab;
  $("#tab-entrar").className = tab === "entrar" ? "btn small" : "btn ghost small";
  $("#tab-criar").className = tab === "criar" ? "btn small" : "btn ghost small";
  $("#auth-submit").textContent = tab === "entrar" ? "Entrar" : "Criar conta";
  $("#auth-msg").textContent = "";
  const convite = $("#auth-convite-wrap");
  if (convite) {
    convite.style.display = tab === "criar" ? "" : "none";
    $("#auth-convite").required = tab === "criar";
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
      if (!convite) { msg.style.color = "var(--bad)"; msg.textContent = "Informe o código de convite para criar sua conta."; return false; }
      const { data, error } = await supa.auth.signUp({
        email, password: senha,
        options: { data: { invite_code: convite } },
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
  return msg;
}
