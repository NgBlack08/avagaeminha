/* =====================================================================
   QUESTLAB — Painel de Administração (somente leitura + convites)
   Visível apenas para contas com is_admin = true (checagem também
   reforçada no servidor via SECURITY DEFINER: qualquer chamada de uma
   conta não-admin é rejeitada pelo Supabase, independentemente da UI).
   ===================================================================== */

async function renderAdmin() {
  if (!APP_STATE.config.isAdmin) {
    MAIN().innerHTML = `<div class="empty"><div class="big">🔒</div>Acesso restrito a administradores.</div>`;
    return;
  }

  MAIN().innerHTML = topbar("Administração", "Explicações sinalizadas, usuários cadastrados e convites de acesso",
    `<button class="btn small" onclick="gerarConvite()">➕ Gerar convite</button>`) +
    `<div class="empty" id="admin-load"><div class="big">👥</div>Carregando dados…</div>`;

  const [{ data: usuarios, error: e1 }, { data: convites, error: e2 }, { data: fila, error: e3 },
         { data: suspeitas, error: e4 }, { data: eventos, error: e5 }] = await Promise.all([
    supa.rpc("admin_listar_usuarios"),
    supa.rpc("admin_listar_convites"),
    supa.rpc("admin_fila_feedback"),
    supa.rpc("admin_questoes_suspeitas", { p_min_respostas: 3 }),
    supa.rpc("admin_eventos_cliente", { p_dias: 7 }),
  ]);

  /* As três chamadas levam tempo, e nesse intervalo o usuário pode ter
     trocado de tela. Sem esta guarda, o insertAdjacentHTML abaixo colava as
     tabelas do painel no fim de QUALQUER view que estivesse aberta — o
     Dashboard aparecia com a lista de usuários grudada embaixo. */
  if (currentView !== "admin") return;

  MAIN().querySelector("#admin-load")?.remove();

  if (e1 || e2 || e3 || e4 || e5) {
    MAIN().insertAdjacentHTML("beforeend",
      `<div class="card"><div class="resultado bad">Erro ao carregar dados: ${escapeHtml((e1 || e2 || e3 || e4 || e5).message)}</div></div>`);
    return;
  }

  /* Falhas primeiro: perda de dado do aluno é mais urgente que qualquer
     outra coisa aqui. Depois gabarito suspeito (conteúdo errado no ar),
     depois explicação confusa, e por fim o que é só consulta. */
  MAIN().insertAdjacentHTML("beforeend",
    eventosClienteHtml(eventos || []) + questoesSuspeitasHtml(suspeitas || []) +
    filaFeedbackHtml(fila || []) + usuariosTabelaHtml(usuarios || []) +
    convitesCardHtml(convites || []));
}

/* Falhas que os aplicativos dos alunos reportaram nos últimos 7 dias.
   Ver registrar_evento() no Supabase para o desenho.

   Este card existe porque o bug do rebaixamento de plano viveu semanas em
   produção sem ninguém saber, e a correção dele deixou a falha ainda mais
   silenciosa: o app passou a mostrar a cópia local e seguir funcionando.
   Sem contagem, "com que frequência isso acontece?" era especulação. */
const EVENTO_ROTULOS = {
  escrita_descartada: { titulo: "Resposta perdida no envio", cls: "bad",
    ajuda: "A fila esgotou as tentativas e descartou o item. É perda de dado real do aluno — se aparecer, investigue antes de qualquer outra coisa." },
  estado_incompleto: { titulo: "Leitura do estado falhou", cls: "warn",
    ajuda: "O app caiu na cópia local. O aluno não viu dado errado, mas o servidor não respondeu." },
  excecao: { titulo: "Erro não tratado na tela", cls: "warn",
    ajuda: "Exceção que chegou ao window.onerror." },
  storage_cheio: { titulo: "Navegador recusou gravar", cls: "bad",
    ajuda: "localStorage sem espaço. A fila offline depende dele: sem gravar, resposta feita sem rede não sobrevive a fechar a aba." },
};

function eventosClienteHtml(lista) {
  if (!lista.length) {
    return `<div class="card" style="margin-bottom:16px">
      <h3>🩺 Falhas reportadas pelos alunos</h3>
      <div style="font-size:13px;color:var(--muted)">
        Nenhuma falha nos últimos 7 dias. Cobre perda de resposta no envio,
        leitura do estado, erro de tela e storage cheio — os quatro caminhos
        por onde dado do aluno some em silêncio.
      </div>
    </div>`;
  }
  const total = lista.reduce((s, e) => s + e.ocorrencias, 0);
  return `<div class="card" style="margin-bottom:16px">
    <h3>🩺 Falhas reportadas pelos alunos <span class="tag bad">${total}</span></h3>
    <div style="font-size:12px;color:var(--muted);margin-bottom:10px">
      Últimos 7 dias. Nenhum evento carrega conteúdo de estudo — só tipo de
      falha, mensagem e versão.
    </div>
    <div class="chart-scroll">
    <table class="ranking-tab">
      <thead><tr><th>Falha</th><th>Ocorr.</th><th>Alunos</th><th>Última</th><th>Versões</th><th>Exemplo</th></tr></thead>
      <tbody>
        ${lista.map(e => {
          const r = EVENTO_ROTULOS[e.tipo] || { titulo: e.tipo, cls: "", ajuda: "" };
          return `<tr>
            <td class="rk-nome"><span class="tag ${r.cls}">${escapeHtml(r.titulo)}</span>
              <div style="font-size:11.5px;color:var(--muted);white-space:normal;max-width:280px;margin-top:4px">${escapeHtml(r.ajuda)}</div></td>
            <td>${e.ocorrencias}</td>
            <td>${e.usuarios}</td>
            <td style="white-space:nowrap">${new Date(e.ultima).toLocaleString("pt-BR")}</td>
            <td style="white-space:nowrap">${escapeHtml(e.versoes || "—")}</td>
            <td style="max-width:300px;white-space:normal;font-size:11.5px">${escapeHtml(e.exemplo || "—")}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table></div>
  </div>`;
}

/* Questões em que os alunos vão pior do que iriam chutando.
   Ver admin_questoes_suspeitas() no Supabase para o raciocínio completo; em
   resumo: item Certo/Errado dá ~50% no chute, então desempenho
   significativamente ABAIXO disso não tem explicação inocente — o caso mais
   provável é gabarito invertido.

   A lista NÃO é veredito. São centenas de questões testadas ao mesmo tempo,
   e a 95% alguns falsos positivos são esperados por acaso; por isso ela vem
   ordenada da mais suspeita para a menos, com o placar à vista, para leitura
   humana. A coluna de sinalizações cruza o sinal estatístico com o relato de
   quem respondeu — as duas coisas juntas valem muito mais que cada uma. */
function questoesSuspeitasHtml(lista) {
  if (!lista.length) {
    return `<div class="card" style="margin-bottom:16px">
      <h3>🎯 Gabaritos sob suspeita</h3>
      <div style="font-size:13px;color:var(--muted)">
        Nenhuma questão com desempenho significativamente abaixo do acaso.
        <b>Isso ainda não é atestado de qualidade do banco:</b> o teste só
        alcança significância a partir de ~5 respostas na mesma questão, e a
        maioria ainda não chegou lá. O sinal fica confiável conforme o uso cresce.
      </div>
    </div>`;
  }
  return `<div class="card" style="margin-bottom:16px">
    <h3>🎯 Gabaritos sob suspeita <span class="tag bad">${lista.length}</span></h3>
    <div style="font-size:12px;color:var(--muted);margin-bottom:10px">
      Questões em que os alunos acertam <b>menos do que acertariam chutando</b>, com
      significância a 95% (limite superior do intervalo de Wilson abaixo de 50%).
      Em item Certo/Errado, a explicação mais provável é gabarito invertido.
      Confira a questão antes de mexer: com muitas questões testadas ao mesmo
      tempo, alguns alarmes falsos são esperados — isto é fila de triagem, não
      veredito.
    </div>
    <div class="chart-scroll">
    <table class="ranking-tab">
      <thead><tr>
        <th>Questão</th><th>Placar</th><th>Taxa</th><th>Teto (95%)</th>
        <th>Brancos</th><th>Alunos</th><th>Sinalizações</th>
      </tr></thead>
      <tbody>
        ${lista.map(q => `
          <tr>
            <td class="rk-nome" style="font-family:monospace">${escapeHtml(q.qid)}</td>
            <td>${q.acertos}/${q.n}</td>
            <td><span class="tag bad">${Math.round(q.taxa * 100)}%</span></td>
            <td>${Math.round(q.wilson_sup * 100)}%</td>
            <td>${q.brancos}</td>
            <td>${q.usuarios}</td>
            <td>${q.feedbacks > 0 ? `<span class="tag warn">${q.feedbacks}</span>` : "—"}</td>
          </tr>`).join("")}
      </tbody>
    </table></div>
  </div>`;
}

/* Fila de explicações que os alunos sinalizaram, uma linha por questão.
   Ordenada no servidor: gabarito suspeito primeiro (é o único motivo que
   pode significar erro de conteúdo no ar), depois fonte, depois volume. */
function filaFeedbackHtml(fila) {
  if (!fila.length) {
    return `<div class="card" style="margin-bottom:16px">
      <h3>📣 Explicações sinalizadas</h3>
      <div style="font-size:13px;color:var(--muted)">Nenhuma pendência. Quando um aluno marcar "esta explicação não ficou clara", a questão aparece aqui.</div>
    </div>`;
  }
  const selo = (n, cls, txt) => n > 0 ? `<span class="tag ${cls}">${n} ${txt}</span> ` : "";
  return `<div class="card" style="margin-bottom:16px">
    <h3>📣 Explicações sinalizadas <span class="tag accent">${fila.length}</span></h3>
    <div style="font-size:12px;color:var(--muted);margin-bottom:10px">Ordenada por gravidade, não por data: gabarito suspeito primeiro, depois fonte incorreta, depois quantidade de alunos. "Resolver" some com a questão da fila — marque só depois de reescrever a resolução.</div>
    <div class="chart-scroll">
    <table class="ranking-tab">
      <thead><tr><th>Questão</th><th>Disciplina</th><th>Alunos</th><th>Motivos</th><th>Comentários</th><th>Ação</th></tr></thead>
      <tbody>
        ${fila.map(f => `
          <tr>
            <td class="rk-nome" style="font-family:monospace">${escapeHtml(f.questao_id)}</td>
            <td>${escapeHtml(f.disciplina || "—")}</td>
            <td>${f.total}</td>
            <td>${
              selo(f.n_gabarito, "bad", "gabarito") +
              selo(f.n_fonte, "warn", "fonte") +
              selo(f.n_explica, "accent", "não explica") +
              selo(f.n_estrategia, "", "estratégia")
            }</td>
            <td style="max-width:340px;white-space:normal">${
              (f.comentarios || []).length
                ? (f.comentarios || []).map(c => `<div class="fb-cmt">“${escapeHtml(c)}”</div>`).join("")
                : '<span style="color:var(--muted)">—</span>'
            }</td>
            <td><button class="btn ghost small" onclick="resolverFeedback(${argHtml(f.questao_id)})">Resolver</button></td>
          </tr>`).join("")}
      </tbody>
    </table></div>
  </div>`;
}

async function resolverFeedback(qid) {
  const ok = await mostrarConfirm(`Marcar ${qid} como resolvida? Ela sai da fila. Se um aluno sinalizar de novo, volta.`, "Resolver pendência");
  if (!ok) return;
  const { error } = await supa.rpc("admin_resolver_feedback", { p_questao_id: qid });
  if (error) { await mostrarAlerta("Não foi possível resolver: " + error.message); return; }
  renderAdmin();
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
  const disponivel = c => !c.usado_em && c.ativo;
  return `<div class="card">
    <h3>🎟 Convites de acesso <span class="tag accent">${convites.length}</span></h3>
    <div style="font-size:12px;color:var(--muted);margin-bottom:10px">Cada código é de uso único. Use os botões de envio para abrir o WhatsApp, o Telegram ou o e-mail já com a mensagem pronta — você escolhe o destinatário e envia.</div>
    <div class="chart-scroll">
    <table class="ranking-tab">
      <thead><tr><th>Código</th><th>Para</th><th>Status</th><th>Criado em</th><th>Usado por</th><th>Enviar</th><th></th></tr></thead>
      <tbody>
        ${convites.map(c => `
          <tr>
            <td class="rk-nome" style="font-family:monospace">${escapeHtml(c.code)}</td>
            <td>${c.observacao ? escapeHtml(c.observacao) : "—"}</td>
            <td>${c.usado_em ? '<span class="tag ok">usado</span>' : c.ativo ? '<span class="tag accent">disponível</span>' : '<span class="tag bad">revogado</span>'}</td>
            <td>${formatarDataAdmin(c.criado_em)}</td>
            <td>${c.usado_por_nickname ? escapeHtml(c.usado_por_nickname) : "—"}</td>
            <td>${disponivel(c) ? botoesEnvioHtml(c.code) : '<span style="color:var(--muted)">—</span>'}</td>
            <td>${disponivel(c) ? `<button class="btn ghost small" onclick="revogarConvite(${argHtml(c.code)})">Revogar</button>` : ""}</td>
          </tr>`).join("") || `<tr><td colspan="7" style="text-align:center;color:var(--muted)">Nenhum convite gerado ainda.</td></tr>`}
      </tbody>
    </table></div>
  </div>`;
}

/* ---------------- Envio do convite ----------------
   Nada é enviado pelo sistema: cada botão apenas ABRE o aplicativo do
   administrador com a mensagem pronta, e o envio (destinatário incluído)
   continua sendo um ato dele. É o padrão de "share intent", e é também o
   arranjo correto do ponto de vista de responsabilidade — o QuestLab não
   dispara mensagem em nome de ninguém. */
function mensagemConvite(code) {
  const url = window.location.origin + window.location.pathname;
  return `Olá! Seu acesso ao QuestLab está liberado.\n\n`
    + `Código de convite: ${code}\n`
    + `Acesse ${url} e informe esse código na tela de criar conta.\n\n`
    + `O código é de uso único.`;
}

/* O argumento passa por duas camadas: JSON.stringify produz um literal
   JavaScript válido, e escapeHtml protege o atributo HTML que o envolve.
   Só JSON.stringify não bastaria — um apóstrofo no valor encerraria o
   atributo antes da hora. Os códigos gerados hoje são alfanuméricos, mas
   um handler inline não deve depender do formato do dado. */
function argHtml(valor) {
  return escapeHtml(JSON.stringify(valor));
}

function botoesEnvioHtml(code) {
  const j = argHtml(code);
  return `<div class="envio-convite">
    <button class="btn ghost small" title="Enviar por WhatsApp" onclick="enviarConvite(${j},'whatsapp')">WhatsApp</button>
    <button class="btn ghost small" title="Enviar por Telegram" onclick="enviarConvite(${j},'telegram')">Telegram</button>
    <button class="btn ghost small" title="Enviar por e-mail" onclick="enviarConvite(${j},'email')">E-mail</button>
    <button class="btn ghost small" title="Copiar a mensagem" onclick="enviarConvite(${j},'copiar')">Copiar</button>
  </div>`;
}

async function enviarConvite(code, canal) {
  const texto = mensagemConvite(code);
  const url = window.location.origin + window.location.pathname;

  if (canal === "copiar") {
    try {
      await navigator.clipboard.writeText(texto);
      await mostrarAlerta("Mensagem copiada. Cole no aplicativo que preferir.", "Convite copiado");
    } catch {
      /* clipboard exige HTTPS e permissão; sem ela, mostra o texto para
         seleção manual em vez de falhar em silêncio. */
      await mostrarAlerta("Não foi possível copiar automaticamente. Selecione e copie a mensagem:\n\n" + texto, "Copiar convite");
    }
    return;
  }

  /* Compartilhamento nativo do celular, quando existir: abre a bandeja do
     sistema com todos os apps instalados, não só os três previstos aqui. */
  if (canal === "sistema" && navigator.share) {
    try { await navigator.share({ title: "Convite QuestLab", text: texto }); } catch { /* cancelado pelo usuário */ }
    return;
  }

  const destinos = {
    whatsapp: "https://wa.me/?text=" + encodeURIComponent(texto),
    telegram: "https://t.me/share/url?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(texto),
    email: "mailto:?subject=" + encodeURIComponent("Seu acesso ao QuestLab") + "&body=" + encodeURIComponent(texto),
  };
  const alvo = destinos[canal];
  if (!alvo) return;
  window.open(alvo, "_blank", "noopener,noreferrer");
}

function formatarDataAdmin(iso) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

async function gerarConvite() {
  /* A observação é opcional, mas pedi-la aqui resolve um problema real do
     painel: sem ela, a lista vira uma coluna de códigos aleatórios e o
     administrador não lembra qual foi para quem. */
  const para = await mostrarPromptTexto({
    titulo: "Gerar convite",
    mensagem: "Para quem é este convite? (opcional — serve só para você identificar o código na lista)",
    placeholder: "ex.: João, indicação da Ana",
    opcional: true,
  });
  if (para === null) return; /* cancelou */

  const { data, error } = await supa.rpc("admin_criar_convite", { p_observacao: para || null });
  if (error) { await mostrarAlerta("Não foi possível gerar o convite: " + error.message); return; }

  await renderAdmin();
  await mostrarAlerta(
    `Código gerado: ${data.code}\n\nUse os botões WhatsApp, Telegram, E-mail ou Copiar na linha do convite para enviá-lo.`,
    "Convite gerado");
}

async function revogarConvite(code) {
  const ok = await mostrarConfirm(`Revogar o convite ${code}? Ele deixará de poder ser usado para criar contas.`, "Revogar convite");
  if (!ok) return;
  const { error } = await supa.rpc("admin_revogar_convite", { p_code: code });
  if (error) { await mostrarAlerta("Não foi possível revogar: " + error.message); return; }
  renderAdmin();
}
