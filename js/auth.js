/* =====================================================================
   CEBRASPE LAB — Autenticação (Supabase Auth)
   Cadastro/login por e-mail e senha, com alternativa "modo local"
   (sem conta, dados só neste navegador — comportamento original).
   ===================================================================== */
const AUTH_LOCAL_KEY = "cebraspe-lab-modo-local";
let authTab = "entrar";

async function bootstrapAuth() {
  const { data: { session } } = await supa.auth.getSession();
  if (session && session.user) {
    await carregarEstadoNuvem(session.user);
    iniciarApp();
  } else if (localStorage.getItem(AUTH_LOCAL_KEY) === "1") {
    iniciarApp();
  } else {
    renderAuthScreen();
  }

  supa.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT") {
      voltarModoLocal();
      localStorage.removeItem(AUTH_LOCAL_KEY);
      renderAuthScreen();
    }
  });
}

function mostrarTelaLogin() {
  renderAuthScreen();
}

function continuarSemConta() {
  localStorage.setItem(AUTH_LOCAL_KEY, "1");
  voltarModoLocal();
  iniciarApp();
}

async function sair() {
  await supa.auth.signOut();
}

function renderAuthScreen(erro) {
  const root = document.getElementById("approot");
  if (root) root.classList.add("no-sidebar");
  MAIN().innerHTML = `
  <div class="auth-wrap">
    <div class="card auth-card">
      <div class="brand" style="padding:0 0 18px">
        <div class="logo">CL</div>
        <h1>CEBRASPE Lab<small>Carreiras Policiais · Foco PCAL</small></h1>
      </div>
      ${erro ? `<div class="resultado bad" style="margin-bottom:12px">${escapeHtml(erro)}</div>` : ""}
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <button class="btn small" id="tab-entrar" onclick="setAuthTab('entrar')" style="flex:1">Entrar</button>
        <button class="btn ghost small" id="tab-criar" onclick="setAuthTab('criar')" style="flex:1">Criar conta</button>
      </div>
      <form onsubmit="return submitAuthForm(event)">
        <label class="f">E-mail<input type="email" id="auth-email" required placeholder="voce@email.com"></label>
        <label class="f" style="margin-top:10px">Senha<input type="password" id="auth-senha" required minlength="6" placeholder="mínimo 6 caracteres"></label>
        <button class="btn" type="submit" style="margin-top:16px;width:100%" id="auth-submit">Entrar</button>
      </form>
      <div id="auth-msg" style="margin-top:10px;font-size:13px;min-height:18px"></div>
      <div style="text-align:center;margin:16px 0 6px;color:var(--muted);font-size:12.5px">— ou —</div>
      <button class="btn ghost" style="width:100%" onclick="continuarSemConta()">Continuar sem conta (só neste dispositivo)</button>
      <div style="font-size:12px;color:var(--muted);margin-top:14px">
        Criar conta sincroniza seu progresso entre computador e celular. Sem conta, os dados ficam salvos apenas neste navegador.
      </div>
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
