/* =====================================================================
   CEBRASPE LAB — Painel de Administração (somente leitura + convites)
   Visível apenas para contas com is_admin = true (checagem também
   reforçada no servidor via SECURITY DEFINER: qualquer chamada de uma
   conta não-admin é rejeitada pelo Supabase, independentemente da UI).
   ===================================================================== */

async function renderAdmin() {
  if (!APP_STATE.config.isAdmin) {
    MAIN().innerHTML = `<div class="empty"><div class="big">🔒</div>Acesso restrito a administradores.</div>`;
    return;
  }

  MAIN().innerHTML = topbar("Administração", "Usuários cadastrados e convites de acesso",
    `<button class="btn small" onclick="gerarConvite()">➕ Gerar convite</button>`) +
    `<div class="empty" id="admin-load"><div class="big">👥</div>Carregando dados…</div>`;

  const [{ data: usuarios, error: e1 }, { data: convites, error: e2 }] = await Promise.all([
    supa.rpc("admin_listar_usuarios"),
    supa.rpc("admin_listar_convites"),
  ]);
  MAIN().querySelector("#admin-load")?.remove();

  if (e1 || e2) {
    MAIN().insertAdjacentHTML("beforeend",
      `<div class="card"><div class="resultado bad">Erro ao carregar dados: ${escapeHtml((e1 || e2).message)}</div></div>`);
    return;
  }

  MAIN().insertAdjacentHTML("beforeend", usuariosTabelaHtml(usuarios || []) + convitesCardHtml(convites || []));
}

function usuariosTabelaHtml(usuarios) {
  return `<div class="card" style="margin-bottom:16px">
    <h3>👥 Usuários cadastrados <span class="tag accent">${usuarios.length}</span></h3>
    <div class="chart-scroll">
    <table class="ranking-tab">
      <thead><tr>
        <th>Nickname</th><th>E-mail</th><th>Cadastro</th><th>Último acesso</th>
        <th>Respostas</th><th>Aproveit.</th><th>Sessões</th><th>XP</th>
      </tr></thead>
      <tbody>
        ${usuarios.map(u => {
          const jogadas = Number(u.acertos) + Number(u.erros);
          const aprov = jogadas ? Math.round((Number(u.acertos) / jogadas) * 100) : null;
          return `<tr>
            <td class="rk-nome">${escapeHtml(u.nickname || "—")}${u.is_admin ? ' <span class="tag accent">admin</span>' : ""}</td>
            <td>${escapeHtml(u.email)}</td>
            <td>${formatarDataAdmin(u.criado_em)}</td>
            <td>${u.ultimo_acesso ? formatarDataAdmin(u.ultimo_acesso) : "—"}</td>
            <td>${u.total_respostas}</td>
            <td>${aprov === null ? "—" : aprov + "%"}</td>
            <td>${u.total_sessoes}</td>
            <td>${u.xp}</td>
          </tr>`;
        }).join("") || `<tr><td colspan="8" style="text-align:center;color:var(--muted)">Nenhum usuário encontrado.</td></tr>`}
      </tbody>
    </table></div>
  </div>`;
}

function convitesCardHtml(convites) {
  return `<div class="card">
    <h3>🎟 Convites de acesso <span class="tag accent">${convites.length}</span></h3>
    <div style="font-size:12px;color:var(--muted);margin-bottom:10px">Cada código é de uso único. Compartilhe com o futuro aluno para que ele consiga criar a conta.</div>
    <div class="chart-scroll">
    <table class="ranking-tab">
      <thead><tr><th>Código</th><th>Status</th><th>Criado em</th><th>Usado por</th><th>Ação</th></tr></thead>
      <tbody>
        ${convites.map(c => `
          <tr>
            <td class="rk-nome" style="font-family:monospace">${escapeHtml(c.code)}</td>
            <td>${c.usado_em ? '<span class="tag ok">usado</span>' : c.ativo ? '<span class="tag accent">disponível</span>' : '<span class="tag bad">revogado</span>'}</td>
            <td>${formatarDataAdmin(c.criado_em)}</td>
            <td>${c.usado_por_nickname ? escapeHtml(c.usado_por_nickname) : "—"}</td>
            <td>${(!c.usado_em && c.ativo) ? `<button class="btn ghost small" onclick="revogarConvite('${c.code}')">Revogar</button>` : ""}</td>
          </tr>`).join("") || `<tr><td colspan="5" style="text-align:center;color:var(--muted)">Nenhum convite gerado ainda.</td></tr>`}
      </tbody>
    </table></div>
  </div>`;
}

function formatarDataAdmin(iso) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

async function gerarConvite() {
  const { data, error } = await supa.rpc("admin_criar_convite");
  if (error) { await mostrarAlerta("Não foi possível gerar o convite: " + error.message); return; }
  await mostrarAlerta(`Código gerado: ${data.code} — compartilhe com o futuro aluno; ele deve informá-lo na tela de criar conta.`, "Convite gerado");
  renderAdmin();
}

async function revogarConvite(code) {
  const ok = await mostrarConfirm(`Revogar o convite ${code}? Ele deixará de poder ser usado para criar contas.`, "Revogar convite");
  if (!ok) return;
  const { error } = await supa.rpc("admin_revogar_convite", { p_code: code });
  if (error) { await mostrarAlerta("Não foi possível revogar: " + error.message); return; }
  renderAdmin();
}
