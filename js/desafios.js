/* =====================================================================
   CEBRASPE LAB — Ranking & Desafios (duelos assíncronos)
   - Ranking público dos maiores vencedores (via função SECURITY DEFINER
     no Supabase; nunca expõe e-mail — só o apelido escolhido).
   - Desafio direcionado: o desafiante joga N questões; o adversário
     responde EXATAMENTE as mesmas e vence a maior pontuação líquida.
   ===================================================================== */

let DUELO = null; /* estado do duelo em andamento */

/* ---------------- Wrappers de dados (Supabase) ---------------- */
async function carregarRanking() {
  const { data, error } = await supa.rpc("ranking_desafios");
  if (error) { console.error("Erro ao carregar ranking:", error); return []; }
  return data || [];
}
async function carregarDesafiosPendentes() {
  const { data, error } = await supa.from("desafios").select("*")
    .eq("desafiado_id", CURRENT_USER.id).eq("status", "pendente")
    .order("created_at", { ascending: false });
  if (error) { console.error("Erro ao carregar pendentes:", error); return []; }
  return data || [];
}
async function carregarDesafiosEnviados() {
  const { data, error } = await supa.from("desafios").select("*")
    .eq("desafiante_id", CURRENT_USER.id).eq("status", "pendente")
    .order("created_at", { ascending: false });
  if (error) { console.error("Erro ao carregar enviados:", error); return []; }
  return data || [];
}
async function carregarHistoricoDesafios() {
  const uid = CURRENT_USER.id;
  const { data, error } = await supa.from("desafios").select("*")
    .or(`desafiante_id.eq.${uid},desafiado_id.eq.${uid}`).eq("status", "concluido")
    .order("concluido_at", { ascending: false }).limit(12);
  if (error) { console.error("Erro ao carregar histórico:", error); return []; }
  return data || [];
}

async function salvarApelido() {
  const val = ($("#ap-input").value || "").trim();
  const msg = $("#ap-msg");
  if (!/^[0-9A-Za-zÀ-ÿ_. ]{3,20}$/.test(val)) {
    msg.style.color = "var(--bad)";
    msg.textContent = "Use de 3 a 20 caracteres (letras, números, espaço, _ ou .).";
    return;
  }
  msg.style.color = "var(--muted)"; msg.textContent = "Salvando…";
  const { error } = await supa.from("profiles")
    .update({ apelido: val, updated_at: new Date().toISOString() })
    .eq("id", CURRENT_USER.id);
  if (error) {
    msg.style.color = "var(--bad)";
    msg.textContent = /duplicate|unique/i.test(error.message)
      ? "Esse apelido já está em uso. Escolha outro."
      : "Não foi possível salvar: " + error.message;
    return;
  }
  APP_STATE.config.apelido = val;
  renderRanking();
}

/* ---------------- Tela: Ranking & Desafios ---------------- */
async function renderRanking() {
  MAIN().innerHTML = topbar("Ranking & Desafios",
    "Os maiores vencedores da plataforma — desafie outros candidatos em duelos de questões",
    APP_STATE.config.apelido ? `<button class="btn small" onclick="abrirNovoDesafio()">⚔ Novo desafio</button>` : "") +
    `<div class="empty" id="ranking-load"><div class="big">🏆</div>Carregando ranking…</div>`;

  /* Sem apelido: precisa criar para participar */
  if (!APP_STATE.config.apelido) {
    const ranking = await carregarRanking();
    MAIN().querySelector("#ranking-load")?.remove();
    MAIN().insertAdjacentHTML("beforeend", `
      <div class="card" style="margin-bottom:16px">
        <h3>🎭 Crie seu apelido para competir</h3>
        <p style="color:var(--muted);font-size:14px;margin:6px 0 12px">
          Para aparecer no ranking e desafiar outros candidatos, escolha um apelido público.
          Seu e-mail nunca é exibido para ninguém.</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end">
          <label class="f" style="flex:1;min-width:200px">Apelido
            <input type="text" id="ap-input" maxlength="20" placeholder="ex.: FuturoDelegado_AL" autocomplete="off"></label>
          <button class="btn" onclick="salvarApelido()">Salvar apelido</button>
        </div>
        <div id="ap-msg" style="margin-top:8px;font-size:13px;min-height:18px" role="status" aria-live="polite"></div>
      </div>
      ${rankingTabelaHtml(ranking, null)}`);
    return;
  }

  const [ranking, pendentes, enviados, historico] = await Promise.all([
    carregarRanking(), carregarDesafiosPendentes(), carregarDesafiosEnviados(), carregarHistoricoDesafios()
  ]);
  const eu = APP_STATE.config.apelido;
  MAIN().querySelector("#ranking-load")?.remove();

  let html = "";

  /* Desafios pendentes recebidos */
  if (pendentes.length) {
    html += `<div class="card" style="margin-bottom:16px">
      <h3>📥 Desafios esperando por você <span class="tag bad">${pendentes.length}</span></h3>
      ${pendentes.map(d => `
        <div class="desafio-item">
          <div class="desafio-info">
            <b>${escapeHtml(d.apelido_desafiante)}</b> te desafiou · ${d.n} questões${d.disciplina ? " · " + escapeHtml(d.disciplina) : ""}
            <div class="hint">Pontuação a superar: <b>${d.desafiante_liquida} líquida</b> (${d.desafiante_acertos}✔/${d.desafiante_erros}✖)</div>
          </div>
          <div class="desafio-acoes">
            <button class="btn small" onclick="aceitarDesafio('${d.id}')">⚔ Aceitar</button>
            <button class="btn ghost small" onclick="recusarDesafio('${d.id}')">Recusar</button>
          </div>
        </div>`).join("")}
    </div>`;
  }

  /* Ranking */
  html += rankingTabelaHtml(ranking, eu);

  /* Enviados aguardando resposta */
  if (enviados.length) {
    html += `<div class="card" style="margin-top:16px">
      <h3>📤 Seus desafios aguardando resposta</h3>
      ${enviados.map(d => `<div class="radar-linha">⏳ Você desafiou <b>${escapeHtml(d.apelido_desafiado)}</b> · ${d.n} questões
        <span class="pct">sua marca: ${d.desafiante_liquida} líquida</span></div>`).join("")}
    </div>`;
  }

  /* Histórico de duelos concluídos */
  if (historico.length) {
    html += `<div class="card" style="margin-top:16px">
      <h3>🗡 Histórico de duelos</h3>
      ${historico.map(d => desafioHistoricoLinha(d)).join("")}
    </div>`;
  }

  MAIN().insertAdjacentHTML("beforeend", html);
}

function rankingTabelaHtml(ranking, eu) {
  if (!ranking.length) {
    return `<div class="card"><h3>🏆 Ranking dos maiores vencedores</h3>
      <div class="empty"><div class="big">🥇</div>Ainda não há duelos concluídos. Seja o primeiro a desafiar alguém!</div></div>`;
  }
  const medalha = i => i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}º`;
  return `<div class="card">
    <h3>🏆 Ranking dos maiores vencedores</h3>
    <div class="chart-scroll">
    <table class="ranking-tab">
      <thead><tr><th>#</th><th>Apelido</th><th>Vitórias</th><th>Derrotas</th><th>Empates</th><th>Aproveit.</th></tr></thead>
      <tbody>
        ${ranking.map((r, i) => {
          const jogos = Number(r.total) || 0;
          const aprov = jogos ? Math.round((Number(r.vitorias) / jogos) * 100) : 0;
          const souEu = eu && r.apelido === eu;
          return `<tr class="${souEu ? "me" : ""}">
            <td class="rk-pos">${medalha(i)}</td>
            <td class="rk-nome">${escapeHtml(r.apelido)}${souEu ? ' <span class="tag accent">você</span>' : ""}</td>
            <td class="rk-v">${r.vitorias}</td>
            <td>${r.derrotas}</td>
            <td>${r.empates}</td>
            <td>${jogos ? aprov + "%" : "—"}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table></div>
    <div style="font-size:12px;color:var(--muted);margin-top:8px">Ordenado por vitórias e, em caso de empate, por aproveitamento.</div>
  </div>`;
}

function desafioHistoricoLinha(d) {
  const uid = CURRENT_USER.id;
  const souDesafiante = d.desafiante_id === uid;
  const meu = souDesafiante ? d.desafiante_liquida : d.desafiado_liquida;
  const dele = souDesafiante ? d.desafiado_liquida : d.desafiante_liquida;
  const oponente = souDesafiante ? d.apelido_desafiado : d.apelido_desafiante;
  let tag;
  if (d.vencedor_id === uid) tag = '<span class="tag ok">vitória</span>';
  else if (d.vencedor_id === null) tag = '<span class="tag">empate</span>';
  else tag = '<span class="tag bad">derrota</span>';
  return `<div class="radar-linha">🆚 <b>${escapeHtml(oponente)}</b> · ${d.n} questões
    <span class="pct">${meu} × ${dele} líquida</span> ${tag}</div>`;
}

/* ---------------- Criar desafio ---------------- */
async function abrirNovoDesafio() {
  const ranking = await carregarRanking();
  const eu = APP_STATE.config.apelido;
  const oponentes = ranking.filter(r => r.apelido !== eu);
  MAIN().innerHTML = topbar("Novo desafio", "Escolha o adversário e o tamanho do duelo", `<button class="btn ghost small" onclick="navigate('ranking')">← Voltar</button>`) +
    `<div class="card sim-setup">
      <h3>⚔ Montar duelo</h3>
      <div class="opts">
        <label class="f">Apelido do adversário
          <input type="text" id="dz-oponente" list="dz-lista" maxlength="20" placeholder="digite o apelido" autocomplete="off">
          <datalist id="dz-lista">${oponentes.map(o => `<option value="${escapeHtml(o.apelido)}">`).join("")}</datalist>
        </label>
        <label class="f">Número de questões<select id="dz-n">
          <option value="5">5 (rápido)</option><option value="10" selected>10</option><option value="20">20</option>
        </select></label>
        <label class="f">Disciplina<select id="dz-disc">
          <option value="">Todas</option>${listaDisciplinas().map(d => `<option>${escapeHtml(d)}</option>`).join("")}
        </select></label>
      </div>
      <button class="btn" onclick="iniciarDueloCriar()">Começar a responder →</button>
      <div class="aviso">Você responde primeiro. O adversário receberá exatamente as mesmas questões e precisará superar a sua pontuação líquida (cada erro anula um acerto). Sem gabarito durante o duelo.</div>
    </div>`;
}

async function iniciarDueloCriar() {
  const oponente = ($("#dz-oponente").value || "").trim();
  const n = +$("#dz-n").value;
  const disciplina = $("#dz-disc").value || null;
  const eu = APP_STATE.config.apelido;
  if (!oponente) { await mostrarAlerta("Digite o apelido do adversário."); return; }
  if (oponente === eu) { await mostrarAlerta("Você não pode desafiar a si mesmo."); return; }
  const questoes = montarProva(n, disciplina ? { disciplina } : {});
  if (!questoes.length) { await mostrarAlerta("Nenhuma questão encontrada com esse filtro."); return; }
  DUELO = {
    modo: "criar", oponente, disciplina, desafioId: null,
    questoes, qids: questoes.map(q => q.id),
    idx: 0, respostas: [], inicioQ: Date.now(), inicioTotal: Date.now(),
  };
  renderDueloRunner();
}

/* ---------------- Aceitar / responder desafio ---------------- */
async function aceitarDesafio(id) {
  const { data, error } = await supa.from("desafios").select("*").eq("id", id).single();
  if (error || !data) { await mostrarAlerta("Não foi possível carregar o desafio."); return; }
  const questoes = data.qids.map(qid => QUESTOES.find(q => q.id === qid)).filter(Boolean);
  if (!questoes.length) { await mostrarAlerta("As questões deste desafio não estão mais disponíveis."); return; }
  DUELO = {
    modo: "responder", oponente: data.apelido_desafiante, desafioId: data.id,
    alvoLiquida: data.desafiante_liquida, disciplina: data.disciplina,
    questoes, qids: questoes.map(q => q.id),
    idx: 0, respostas: [], inicioQ: Date.now(), inicioTotal: Date.now(),
  };
  renderDueloRunner();
}

async function recusarDesafio(id) {
  const ok = await mostrarConfirm("Recusar este desafio? Ele será descartado.", "Recusar desafio");
  if (!ok) return;
  const { error } = await supa.rpc("recusar_desafio", { p_id: id });
  if (error) { await mostrarAlerta("Não foi possível recusar: " + error.message); return; }
  renderRanking();
}

/* ---------------- Runner do duelo (sequencial, sem feedback) ---------------- */
function renderDueloRunner() {
  const q = DUELO.questoes[DUELO.idx];
  const n = DUELO.questoes.length;
  const pct = (DUELO.idx / n) * 100;
  DUELO.inicioQ = Date.now();
  MAIN().innerHTML =
    `<div class="duelo-bar">
      <div class="pv-meta">
        <span class="tag accent">Duelo vs ${escapeHtml(DUELO.oponente)}</span>
        <span class="tag">Questão ${DUELO.idx + 1} / ${n}</span>
        ${DUELO.modo === "responder" ? `<span class="tag">superar: ${DUELO.alvoLiquida} líquida</span>` : ""}
      </div>
      <span class="duelo-timer" id="duelo-timer">0:00</span>
    </div>
    <div class="sim-progress" style="margin-top:14px"><i style="width:${pct}%"></i></div>
    <div class="card q-card" style="margin-top:14px">
      <div class="q-head">
        <span class="tag accent">${q.id}</span>
        <span class="tag">${escapeHtml(q.disciplina)}</span>
        <span class="tag">${escapeHtml(q.assunto)}</span>
        <span class="tag diff">${"●".repeat(q.dificuldade) + "○".repeat(3 - q.dificuldade)}</span>
      </div>
      ${q.textoApoio ? `<div class="q-texto-apoio">${escapeHtml(q.textoApoio)}</div>` : ""}
      <div class="q-enunciado">${escapeHtml(q.enunciado)}</div>
      <div class="q-actions">
        <button class="btn ok" onclick="dueloResponder('C')">CERTO</button>
        <button class="btn bad" onclick="dueloResponder('E')">ERRADO</button>
        <button class="btn ghost" onclick="dueloResponder('B')">Em branco</button>
      </div>
      <div class="aviso" style="margin-top:14px">Duelo em andamento — o gabarito e os comentários só aparecem no fim.</div>
    </div>`;
  iniciarTimerDuelo();
}

let dueloTimerInterval = null;
function iniciarTimerDuelo() {
  pararTimerDuelo();
  dueloTimerInterval = setInterval(() => {
    const el = $("#duelo-timer"); if (!el || !DUELO) return;
    const seg = Math.floor((Date.now() - DUELO.inicioTotal) / 1000);
    el.textContent = Math.floor(seg / 60) + ":" + String(seg % 60).padStart(2, "0");
  }, 1000);
}
function pararTimerDuelo() { if (dueloTimerInterval) { clearInterval(dueloTimerInterval); dueloTimerInterval = null; } }

function dueloResponder(resp) {
  if (!DUELO) return;
  const q = DUELO.questoes[DUELO.idx];
  const tempoMs = Date.now() - DUELO.inicioQ;
  const res = registrarResposta(q.id, resp, tempoMs, null); /* alimenta stats/SRS/XP também */
  DUELO.respostas.push({ qid: q.id, resp, correta: res.correta, branco: resp === "B", tempoMs });
  DUELO.idx++;
  if (DUELO.idx >= DUELO.questoes.length) { finalizarDuelo(); return; }
  renderDueloRunner();
  window.scrollTo(0, 0);
}

async function finalizarDuelo() {
  pararTimerDuelo();
  const r = DUELO.respostas;
  const acertos = r.filter(x => x.correta && !x.branco).length;
  const erros = r.filter(x => !x.correta && !x.branco).length;
  const brancos = r.filter(x => x.branco).length;
  const tempo = Math.round((Date.now() - DUELO.inicioTotal) / 1000);
  const liquida = acertos - erros;

  MAIN().innerHTML = `<div class="empty"><div class="big">⏳</div>Registrando o duelo…</div>`;

  if (DUELO.modo === "criar") {
    const { error } = await supa.rpc("criar_desafio", {
      p_desafiado_apelido: DUELO.oponente, p_n: DUELO.questoes.length, p_qids: DUELO.qids,
      p_disciplina: DUELO.disciplina, p_acertos: acertos, p_erros: erros, p_brancos: brancos, p_tempo: tempo,
    });
    const oponente = DUELO.oponente; DUELO = null;
    if (error) {
      await mostrarAlerta("Não foi possível enviar o desafio: " + traduzErroDesafio(error.message));
      renderRanking(); return;
    }
    MAIN().innerHTML = topbar("Desafio enviado!", "", `<button class="btn small" onclick="navigate('ranking')">Ver ranking</button>`) +
      `<div class="card" style="text-align:center">
        <div style="font-size:44px">📨</div>
        <h3>Desafio enviado para ${escapeHtml(oponente)}</h3>
        <p style="color:var(--muted)">Sua marca: <b>${liquida} líquida</b> (${acertos}✔ / ${erros}✖ / ${brancos}⊘) em ${tempo}s.</p>
        <p style="color:var(--muted)">Assim que ${escapeHtml(oponente)} responder, o resultado aparece no seu histórico.</p>
        <button class="btn" style="margin-top:12px" onclick="navigate('ranking')">Voltar ao ranking</button>
      </div>`;
    return;
  }

  /* modo responder */
  const { data, error } = await supa.rpc("responder_desafio", {
    p_id: DUELO.desafioId, p_acertos: acertos, p_erros: erros, p_brancos: brancos, p_tempo: tempo,
  });
  const st = DUELO; DUELO = null;
  if (error) {
    await mostrarAlerta("Não foi possível registrar sua resposta: " + traduzErroDesafio(error.message));
    renderRanking(); return;
  }
  renderResultadoDuelo(data, { acertos, erros, brancos, tempo, liquida, oponente: st.oponente });
}

function renderResultadoDuelo(d, meu) {
  const venci = d.vencedor_id === CURRENT_USER.id;
  const empate = d.vencedor_id === null;
  const cls = venci ? "ok" : empate ? "neutro" : "bad";
  const titulo = venci ? "🏆 Você venceu o duelo!" : empate ? "🤝 Empate!" : "😔 Você perdeu o duelo";
  MAIN().innerHTML = topbar("Resultado do duelo", "", `<button class="btn small" onclick="navigate('ranking')">Ver ranking</button>`) +
    `<div class="card">
      <div class="resultado ${cls}" style="font-size:18px;text-align:center">${titulo}</div>
      <div class="duelo-placar">
        <div class="dp-lado ${venci ? "vencedor" : ""}">
          <div class="dp-nome">Você</div>
          <div class="dp-liq">${meu.liquida}</div>
          <div class="dp-det">${meu.acertos}✔ / ${meu.erros}✖ / ${meu.brancos}⊘ · ${meu.tempo}s</div>
        </div>
        <div class="dp-x">×</div>
        <div class="dp-lado ${!venci && !empate ? "vencedor" : ""}">
          <div class="dp-nome">${escapeHtml(meu.oponente)}</div>
          <div class="dp-liq">${d.desafiante_liquida}</div>
          <div class="dp-det">${d.desafiante_acertos}✔ / ${d.desafiante_erros}✖ / ${d.desafiante_brancos}⊘ · ${d.desafiante_tempo}s</div>
        </div>
      </div>
      <p style="color:var(--muted);font-size:13px;text-align:center;margin-top:6px">
        Critério: maior pontuação líquida (cada erro anula um acerto). Empate na líquida é decidido pelo menor tempo.</p>
      <div style="text-align:center;margin-top:12px">
        <button class="btn" onclick="navigate('ranking')">Voltar ao ranking</button>
      </div>
    </div>`;
}

function traduzErroDesafio(m) {
  if (/apelido/i.test(m) && /desafiar/i.test(m)) return "você precisa definir um apelido.";
  if (/nao encontrado|não encontrado/i.test(m)) return "adversário não encontrado (confira o apelido).";
  if (/si mesmo/i.test(m)) return "você não pode desafiar a si mesmo.";
  if (/ja finalizado|já finalizado/i.test(m)) return "este desafio já foi finalizado.";
  return m;
}
