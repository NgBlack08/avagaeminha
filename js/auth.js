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

function renderAuthScreen(erro) {
  const root = document.getElementById("approot");
  if (root) root.classList.add("no-sidebar");

  /* Prova social HONESTA: números reais computados da própria plataforma
     (nunca métricas inventadas). */
  const nQ = QUESTOES.length;
  const nDisc = new Set(QUESTOES.map(q => q.disciplina)).size;
  const nBlocos = new Set(QUESTOES.filter(q => q.textoApoio).map(q => q.textoApoio)).size;
  const nPadroes = DNA_BANCA.length;

  MAIN().innerHTML = `
  <div class="landing">
    <div class="landing-bg" aria-hidden="true"></div>
    <header class="landing-top">
      <div class="brand">
        <div class="logo">CL</div>
        <h1>CEBRASPE Lab<small>Carreiras Policiais · Foco PCAL</small></h1>
      </div>
      <button class="btn ghost small" onclick="toggleTheme()" aria-label="Alternar tema claro/escuro">◐ Tema</button>
    </header>

    <div class="landing-grid">
      <section class="pitch" aria-label="Apresentação da plataforma">
        <h1>Estude como a banca pensa.<br><span class="grad">Aprove com método.</span></h1>
        <p class="lead">Laboratório de engenharia reversa da CEBRASPE para carreiras policiais:
        questões inéditas com engenharia cognitiva, simulados adaptativos com repetição espaçada
        e estatísticas que mostram exatamente onde você erra — com prioridade absoluta para a PC-AL.</p>
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
      const { data, error } = await supa.auth.signUp({ email, password: senha });
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
    msg.textContent = traduzErroAuth(err.message);
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
  return msg;
}
