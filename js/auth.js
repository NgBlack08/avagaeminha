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
   Plano de fundo heroico da landing/login — ilustração 100% AUTORAL em
   SVG (nenhuma foto de terceiros; autossuficiente, sem dependência de
   rede, e adaptável aos temas claro/escuro). Tema: carreira policial —
   silhuetas de agentes táticos, skyline da cidade protegida, holofote,
   brasão (honra), radar de investigação e a "linha azul".
   ===================================================================== */
function landingHeroBg() {
  return `<div class="landing-bg" aria-hidden="true">
    <svg class="hero-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="heroSpot" cx="57%" cy="70%" r="52%">
          <stop offset="0" stop-color="#4f93ff" stop-opacity=".85"/>
          <stop offset="30%" stop-color="#2f6fe0" stop-opacity=".38"/>
          <stop offset="70%" stop-color="#2563eb" stop-opacity=".12"/>
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="heroCore" cx="57%" cy="66%" r="24%">
          <stop offset="0" stop-color="#bcd6ff" stop-opacity=".55"/>
          <stop offset="100%" stop-color="#bcd6ff" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="heroFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#050a16" stop-opacity="0"/>
          <stop offset="1" stop-color="#050a16" stop-opacity=".92"/>
        </linearGradient>
        <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#3b82f6" stop-opacity="0"/>
          <stop offset=".5" stop-color="#7fb2ff" stop-opacity=".95"/>
          <stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="heroSweep" cx="240" cy="720" r="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#60a5fa" stop-opacity=".5"/>
          <stop offset="1" stop-color="#60a5fa" stop-opacity="0"/>
        </radialGradient>
        <g id="heroOfficer">
          <circle cx="30" cy="16" r="12"/>
          <rect x="19" y="25" width="22" height="7" rx="3.5"/>
          <path d="M13 34 Q30 27 47 34 L45 93 Q30 100 15 93 Z"/>
          <rect x="5" y="36" width="9" height="48" rx="4.5"/>
          <rect x="46" y="36" width="9" height="48" rx="4.5"/>
          <rect x="17" y="90" width="11" height="60" rx="4.5"/>
          <rect x="32" y="90" width="11" height="60" rx="4.5"/>
        </g>
      </defs>

      <!-- holofote / glow tático -->
      <rect class="hero-glow" width="1440" height="900" fill="url(#heroSpot)"/>
      <rect class="hero-glow" width="1440" height="900" fill="url(#heroCore)"/>

      <!-- radar de investigação -->
      <g class="hero-radar" transform="translate(0,0)">
        <circle cx="240" cy="720" r="150" fill="none" stroke="#3b82f6" stroke-opacity=".16"/>
        <circle cx="240" cy="720" r="112" fill="none" stroke="#3b82f6" stroke-opacity=".14"/>
        <circle cx="240" cy="720" r="72" fill="none" stroke="#3b82f6" stroke-opacity=".12"/>
        <circle cx="240" cy="720" r="34" fill="none" stroke="#3b82f6" stroke-opacity=".12"/>
        <line x1="90" y1="720" x2="390" y2="720" stroke="#3b82f6" stroke-opacity=".10"/>
        <line x1="240" y1="570" x2="240" y2="870" stroke="#3b82f6" stroke-opacity=".10"/>
        <g class="hero-sweep">
          <path d="M240 720 L390 720 A150 150 0 0 0 355 605 Z" fill="url(#heroSweep)"/>
          <animateTransform attributeName="transform" type="rotate" from="0 240 720" to="360 240 720" dur="12s" repeatCount="indefinite"/>
        </g>
      </g>

      <!-- brasão / estrela (honra) -->
      <g class="hero-badge" transform="translate(1108,150) scale(1.9)">
        <path d="M2 6 Q2 2 6 2 L94 2 Q98 2 98 6 L98 60 Q98 92 50 116 Q2 92 2 60 Z" fill="#60a5fa" fill-opacity=".05" stroke="#7fb2ff" stroke-opacity=".18" stroke-width="1.2"/>
        <path d="M50 24 L56.5 41.1 L74.7 42 L60.5 53.4 L65.3 71 L50 61 L34.7 71 L39.5 53.4 L25.3 42 L43.5 41.1 Z" fill="#7fb2ff" fill-opacity=".10" stroke="#7fb2ff" stroke-opacity=".22" stroke-width="1"/>
      </g>

      <!-- partículas -->
      <g fill="#8ab4ff" fill-opacity=".35">
        <circle cx="480" cy="150" r="1.6"/><circle cx="760" cy="90" r="1.3"/><circle cx="1040" cy="210" r="1.7"/>
        <circle cx="1260" cy="330" r="1.4"/><circle cx="640" cy="260" r="1.2"/><circle cx="900" cy="130" r="1.5"/>
        <circle cx="1180" cy="150" r="1.2"/><circle cx="380" cy="320" r="1.3"/>
      </g>

      <!-- faixa inferior (fade) -->
      <rect class="hero-band" x="0" y="360" width="1440" height="540" fill="url(#heroFade)"/>

      <!-- skyline da cidade protegida -->
      <path class="hero-city" d="M0 900 L0 700 L90 700 L90 650 L170 650 L170 690 L250 690 L250 610 L330 610 L330 660 L430 660 L430 700 L520 700 L520 640 L600 640 L600 680 L700 680 L700 600 L780 600 L780 655 L880 655 L880 700 L980 700 L980 630 L1070 630 L1070 675 L1160 675 L1160 605 L1250 605 L1250 660 L1340 660 L1340 690 L1440 690 L1440 900 Z"/>
      <g class="hero-windows" fill="#6aa6ff" fill-opacity=".85">
        <rect x="112" y="666" width="3" height="4"/><rect x="128" y="676" width="3" height="4"/>
        <rect x="270" y="628" width="3" height="4"/><rect x="292" y="646" width="3" height="4"/>
        <rect x="356" y="676" width="3" height="4"/><rect x="540" y="658" width="3" height="4"/>
        <rect x="616" y="696" width="3" height="4"/><rect x="720" y="618" width="3" height="4"/>
        <rect x="742" y="640" width="3" height="4"/><rect x="900" y="672" width="3" height="4"/>
        <rect x="1000" y="648" width="3" height="4"/><rect x="1088" y="690" width="3" height="4"/>
        <rect x="1180" y="622" width="3" height="4"/><rect x="1202" y="648" width="3" height="4"/>
        <rect x="1268" y="676" width="3" height="4"/><rect x="470" y="678" width="3" height="4"/>
      </g>

      <!-- linha azul (thin blue line) -->
      <rect class="hero-blueline-glow" x="0" y="678" width="1440" height="26" fill="url(#heroLine)" opacity=".4"/>
      <rect class="hero-blueline" x="0" y="688" width="1440" height="3" fill="url(#heroLine)"/>

      <!-- agentes táticos (silhuetas retroiluminadas) -->
      <g class="hero-officers">
        <use href="#heroOfficer" transform="translate(736,662) scale(1.45)"/>
        <use href="#heroOfficer" transform="translate(958,672) scale(1.38)"/>
        <use href="#heroOfficer" transform="translate(828,626) scale(1.68)"/>
      </g>
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
      <section class="pitch" aria-label="Apresentação da plataforma">
        <h1>Estude como a banca pensa.<br><span class="grad">Aprove com método.</span></h1>
        <p class="lead">Laboratório de engenharia reversa da CEBRASPE para carreiras policiais:
        questões inéditas com engenharia cognitiva, simulados adaptativos com repetição espaçada
        e estatísticas que mostram exatamente onde você erra.</p>
        <ul class="pitch-feats">
          <li><span class="fico">🧠</span><span><b>Engenharia cognitiva por questão</b> — o porquê da questão, a pegadinha usada e a regra mental que a resolve.</span></li>
          <li><span class="fico">🎯</span><span><b>Simulado adaptativo + revisão espaçada</b> — prioriza seus pontos fracos e agenda revisões automáticas.</span></li>
          <li><span class="fico">📊</span><span><b>Raio-X da banca</b> — padrões, frequências e predições fundamentadas em lei e jurisprudência STF/STJ.</span></li>
        </ul>
        <div class="stats-grid" aria-label="Números da plataforma">
          <div><div class="snum grad">${nQ}</div><div class="slbl">questões inéditas</div></div>
          <div><div class="snum">${nDisc}</div><div class="slbl">disciplinas do edital</div></div>
          <div><div class="snum">${nBlocos}</div><div class="slbl">blocos de simulado</div></div>
          <div><div class="snum">${nPadroes}</div><div class="slbl">padrões da banca mapeados</div></div>
        </div>
      </section>

      <section class="card auth-card" aria-label="Acesso à plataforma">
        ${erro ? `<div class="resultado bad" style="margin-bottom:12px">${escapeHtml(erro)}</div>` : ""}
        <div style="display:flex;gap:8px;margin-bottom:16px">
          <button class="btn small" id="tab-entrar" onclick="setAuthTab('entrar')" style="flex:1">Entrar</button>
          <button class="btn ghost small" id="tab-criar" onclick="setAuthTab('criar')" style="flex:1">Criar conta</button>
        </div>
        <form onsubmit="return submitAuthForm(event)">
          <label class="f">E-mail<input type="email" id="auth-email" required autocomplete="email" placeholder="voce@email.com"></label>
          <label class="f" style="margin-top:10px">Senha<input type="password" id="auth-senha" required minlength="6" autocomplete="current-password" placeholder="mínimo 6 caracteres"></label>
          <label class="f" id="auth-convite-wrap" style="margin-top:10px;display:none">Código de convite
            <input type="text" id="auth-convite" autocomplete="off" placeholder="ex.: A1B2C3D4" style="text-transform:uppercase"></label>
          <button class="btn" type="submit" style="margin-top:16px;width:100%" id="auth-submit">Entrar</button>
        </form>
        <div id="auth-msg" style="margin-top:10px;font-size:13px;min-height:18px" role="status" aria-live="polite"></div>
        <div style="font-size:12px;color:var(--muted);margin-top:14px">
          É necessário entrar ou criar uma conta para acessar a plataforma. Seu progresso fica salvo e sincronizado entre seus dispositivos.
        </div>
      </section>
    </div>
  </div>`;
  setAuthTab("entrar");
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
