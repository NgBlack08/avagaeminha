/* =====================================================================
   QUESTLAB — Motor Inteligente
   Perfil do estudante (Módulo 8), simulador adaptativo com repetição
   espaçada (Módulo 7), detector de pegadinhas (Módulo 5) e camada
   estatística (Módulos 2, 12, 13 — versão local/heurística).
   ===================================================================== */

const STORAGE_KEY = "questlab-v1";

/* ---------------- Detalhes das questões sob demanda ----------------
   "comentario" e "cognitivo" respondem por 71% do banco (333 KB de 468 KB
   gzip) e só aparecem DEPOIS que o usuário responde. Carregá-los no boot
   custava caro mesmo com cache quente, porque cache evita o download, não
   o parse dos 2,25 MB de JS.

   Ficam então em js/gerado/detalhes-<disciplina>.js, gerados por
   scripts/dividir-dados.js e trazidos por injeção de <script> — e não por
   fetch(), que o navegador bloqueia em file://, cenário que o README ainda
   documenta como forma de abrir o app. */

const QUESTOES_POR_ID = new Map(QUESTOES.map(q => [q.id, q]));
const detalhesCarregados = new Set();
const detalhesEmVoo = new Map();

/* Chamada pelos próprios arquivos de detalhe assim que carregam. */
function registrarDetalhes(mapa) {
  for (const id in mapa) {
    const q = QUESTOES_POR_ID.get(id);
    if (q) Object.assign(q, mapa[id]);
  }
}

function slugDisciplina(texto) {
  return String(texto)
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/* Aceita uma disciplina ou uma lista. Resolve imediatamente se já estiver
   tudo em memória, então é barato chamar antes de qualquer render. */
function carregarDetalhes(disciplinas) {
  const pendentes = [...new Set([].concat(disciplinas).map(slugDisciplina))]
    .filter(s => DETALHES_CHUNKS[s] && !detalhesCarregados.has(s));
  if (!pendentes.length) return Promise.resolve();

  return Promise.all(pendentes.map(s => {
    if (detalhesEmVoo.has(s)) return detalhesEmVoo.get(s);
    const p = new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.src = "js/gerado/" + DETALHES_CHUNKS[s];
      el.onload = () => { detalhesCarregados.add(s); detalhesEmVoo.delete(s); resolve(); };
      el.onerror = () => { detalhesEmVoo.delete(s); reject(new Error("Falha ao carregar os detalhes de " + s)); };
      document.head.appendChild(el);
    });
    detalhesEmVoo.set(s, p);
    return p;
  })).then(() => undefined);
}

/* Usado pela busca textual, que varre a resolução de todas as questões. */
function carregarTodosDetalhes() {
  return carregarDetalhes(Object.keys(DETALHES_CHUNKS));
}

/* ---------------- Persistência ----------------
   Login obrigatório: o app só é exibido após autenticação (Supabase),
   e todo o progresso é salvo e sincronizado na nuvem (MODO "cloud").
   "offline"/localStorage existe apenas como estado inicial transitório
   (antes do login) e rede de segurança defensiva — não é acessível
   pela interface. */
let MODO = "offline";
let CURRENT_USER = null;

function estadoInicial() {
  return {
    respostas: {}, srs: {}, sessoes: [],
    config: {
      tema: "dark", concursoFoco: null, cargoFoco: "Escrivão", isAdmin: false,
      plano: "gratuito", onboardingVisitas: {}, metaTaxa: 0.75,
      metaDiaria: null, dataProva: null,
    },
  };
}

/* O try/catch sozinho só cobria JSON inválido. Um JSON VÁLIDO porém
   malformado passava direto e derrubava o app no boot: `null`, `[]` ou
   `{"respostas":null,"config":null}` viravam APP_STATE, e a primeira
   leitura de APP_STATE.config.tema estourava antes de qualquer tela
   aparecer — tela branca, sem caminho de recuperação para o usuário.

   Isso não é hipótese remota: acontece com escrita interrompida por
   quota estourada, com formato antigo de uma versão anterior e com
   qualquer extensão que mexa no storage. Por isso cada campo é conferido
   e completado a partir do padrão, em vez de descartar tudo — quem tinha
   respostas válidas e só perdeu a config não perde o histórico. */
function loadLocalState() {
  const padrao = estadoInicial();
  let salvo = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) salvo = JSON.parse(raw);
  } catch (e) { /* JSON inválido: segue com o padrão */ }

  if (!salvo || typeof salvo !== "object" || Array.isArray(salvo)) return padrao;

  const ehObjeto = v => v && typeof v === "object" && !Array.isArray(v);
  return {
    respostas: ehObjeto(salvo.respostas) ? salvo.respostas : padrao.respostas,
    srs: ehObjeto(salvo.srs) ? salvo.srs : padrao.srs,
    sessoes: Array.isArray(salvo.sessoes) ? salvo.sessoes : padrao.sessoes,
    config: { ...padrao.config, ...(ehObjeto(salvo.config) ? salvo.config : {}) },
  };
}
/* Sem try/catch, um QuotaExceededError (storage cheio, modo privado do
   Safari, extensão que bloqueia storage) estourava para quem chamou e
   abortava o fluxo no meio — inclusive dentro de registrarResposta(). */
function saveLocalState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(APP_STATE));
    return true;
  } catch (e) {
    console.error("Não foi possível gravar o estado local:", e);
    registrarEvento("storage_cheio", "saveLocalState: " + (e && e.name || e));
    return false;
  }
}
const APP_STATE = loadLocalState();

/* Grava colunas do perfil (tema, foco, metas, data da prova, onboarding).
   Antes cada uma dessas escritas era dispare-e-esqueça, com um
   console.error como único vestígio da falha — a mesma família do defeito
   que rebaixava assinante em silêncio, só que do lado da escrita.

   O efeito para o aluno era desconcertante: ele ajustava a meta diária,
   via o número mudar na tela (porque APP_STATE já tinha sido alterado) e,
   ao recarregar, encontrava o valor antigo de volta, sem explicação.

   Agora vai pela mesma fila das respostas. Encaixa bem porque é `update`
   por id: idempotente e último-escreve-vence, então reenviar nunca
   duplica nada. E como só o estado final importa, os itens colapsam —
   mudar de trilha cinco vezes seguidas deixa um item na fila, não cinco. */
function salvarPerfil(campos) {
  if (MODO === "cloud" && CURRENT_USER) {
    enfileirar("perfil", {
      user_id: CURRENT_USER.id,
      campos: { ...campos, updated_at: new Date().toISOString() },
    });
  } else {
    saveLocalState();
  }
}

/* Salva a config (tema/foco) no destino certo conforme o modo atual. */
function saveState() {
  salvarPerfil({
    tema: APP_STATE.config.tema,
    concurso_foco: APP_STATE.config.concursoFoco,
    cargo_foco: APP_STATE.config.cargoFoco,
  });
}

/* ================================================================
   FILA DE ESCRITA RESILIENTE

   Antes, gravar uma resposta na nuvem era dispare-e-esqueça: o insert
   saía, e se falhasse o único vestígio era um console.error. Como em
   modo "cloud" nada era gravado localmente, a resposta existia apenas
   na memória — no F5 seguinte carregarEstadoNuvem() sobrescrevia o
   APP_STATE com o que estava no servidor e a questão voltava a constar
   como não respondida. Uma sessão inteira estudada no 4G do ônibus
   sumia sem nenhum aviso.

   Agora toda escrita de progresso é primeiro enfileirada no
   localStorage (síncrono, sobrevive a crash e a fechar a aba) e só
   depois enviada. O item sai da fila quando o servidor confirma; se
   não confirmar, fica e é retentado com espera crescente.

   Idempotência: cada item carrega um `client_id` que vai junto no
   upsert (índice único (user_id, client_id), migração
   client_id_idempotencia_fila_escrita). Sem isso, um insert que
   commitou mas cuja resposta se perdeu na rede viraria uma resposta
   duplicada no retry, inflando as estatísticas. `srs` dispensa
   client_id porque já é upsert por (user_id, qid).

   O `created_at` vai explícito, com o horário em que o aluno de fato
   respondeu — e não com o now() do momento do envio. Sem isso, uma
   fila drenada horas depois jogaria as respostas no dia errado e
   quebraria a meta do dia e a sequência de estudo.
   ================================================================ */
const FILA_KEY = STORAGE_KEY + ":fila";
const FILA_MAX = 2000;
const FILA_MAX_TENTATIVAS = 12;
const FILA_BACKOFF_MS = [5e3, 10e3, 20e3, 40e3, 80e3, 160e3, 300e3];
/* Erros de forma do dado: retentar nunca vai resolver, e manter o item
   na fila só trava tudo que está atrás dele. 23505 aparece por
   segurança — com ignoreDuplicates ele já não deveria surgir. */
const FILA_ERROS_PERMANENTES = new Set(["23505", "23503", "23502", "22P02", "22007"]);

let filaTimer = null;
let filaEmVoo = false;
let filaFalhasSeguidas = 0;

function novoId() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function lerFila() {
  try {
    const raw = localStorage.getItem(FILA_KEY);
    const fila = raw ? JSON.parse(raw) : [];
    return Array.isArray(fila) ? fila.filter(i => i && i.id && i.tipo && i.payload) : [];
  } catch (e) {
    return [];
  }
}

function gravarFila(fila) {
  try {
    localStorage.setItem(FILA_KEY, JSON.stringify(fila));
    return true;
  } catch (e) {
    /* Grave: sem gravar a fila, uma resposta respondida offline não
       sobrevive ao fechar a aba. */
    console.error("Não foi possível gravar a fila de envio:", e);
    registrarEvento("storage_cheio", "gravarFila: " + (e && e.name || e));
    return false;
  }
}

function filaPendentes(userId) {
  return lerFila().filter(i => i.userId === userId);
}

/* Enfileira e tenta enviar já. Escritas de SRS do mesmo item são
   colapsadas: só o último nível/vencimento importa, e sem isso uma
   sessão longa offline encheria a fila de estados intermediários que
   o servidor sobrescreveria em seguida. */
function enfileirar(tipo, payload) {
  if (!CURRENT_USER) return;
  const fila = lerFila();
  if (tipo === "srs") {
    const i = fila.findIndex(x => x.tipo === "srs" && x.userId === CURRENT_USER.id && x.payload.qid === payload.qid);
    if (i >= 0) {
      fila[i].payload = payload;
      fila[i].tentativas = 0;
      gravarFila(fila);
      agendarFlush(0);
      return;
    }
  }
  /* Perfil colapsa MESCLANDO, não substituindo: cada chamada mexe em
     colunas diferentes (tema aqui, meta ali), e substituir perderia o que
     ainda não subiu. Trocar de trilha cinco vezes deixa um item, não
     cinco — só o estado final importa. */
  if (tipo === "perfil") {
    const i = fila.findIndex(x => x.tipo === "perfil" && x.userId === CURRENT_USER.id);
    if (i >= 0) {
      fila[i].payload.campos = { ...fila[i].payload.campos, ...payload.campos };
      fila[i].tentativas = 0;
      gravarFila(fila);
      agendarFlush(0);
      return;
    }
  }
  if (fila.length >= FILA_MAX) {
    console.error("Fila de envio cheia; descartando o item mais antigo.");
    fila.shift();
  }
  fila.push({ id: novoId(), tipo, userId: CURRENT_USER.id, payload, tentativas: 0 });
  gravarFila(fila);
  notificarStatusFila();
  agendarFlush(0);
}

function removerDaFila(id) {
  gravarFila(lerFila().filter(i => i.id !== id));
}

function atualizarNaFila(item) {
  const fila = lerFila();
  const i = fila.findIndex(x => x.id === item.id);
  if (i >= 0) { fila[i] = item; gravarFila(fila); }
}

/* Último motivo de falha, para a telemetria dizer POR QUE um item foi
   descartado — "sumiu uma resposta" sem a causa não orienta correção. */
let ultimoErroDaFila = "";

/* "ok" saiu | "descartar" nunca vai passar | "falhou" tentar de novo */
async function enviarItemDaFila(item) {
  const p = item.payload;
  let resultado;
  try {
    if (item.tipo === "resposta") {
      resultado = await supa.from("respostas")
        .upsert({ ...p, client_id: item.id }, { onConflict: "user_id,client_id", ignoreDuplicates: true });
    } else if (item.tipo === "sessao") {
      resultado = await supa.from("sessoes")
        .upsert({ ...p, client_id: item.id }, { onConflict: "user_id,client_id", ignoreDuplicates: true });
    } else if (item.tipo === "srs") {
      resultado = await supa.from("srs").upsert(p, { onConflict: "user_id,qid" });
    } else if (item.tipo === "perfil") {
      /* Sem client_id: é update por id, idempotente por natureza — o
         reenvio reescreve o mesmo valor. */
      resultado = await supa.from("profiles").update(p.campos).eq("id", p.user_id);
    } else {
      return "descartar";
    }
  } catch (e) {
    ultimoErroDaFila = String(e && e.message || e);
    return "falhou"; /* rede caiu no meio da requisição */
  }
  const erro = resultado?.error;
  if (!erro) return "ok";
  ultimoErroDaFila = (erro.code ? erro.code + " " : "") + (erro.message || "");
  if (FILA_ERROS_PERMANENTES.has(erro.code)) {
    console.error("Escrita irrecuperável descartada:", item.tipo, erro);
    registrarEvento("escrita_descartada", `${item.tipo} irrecuperável: ${ultimoErroDaFila}`);
    return "descartar";
  }
  return "falhou";
}

/* Drena a fila em ordem. Para na primeira falha de rede: se uma
   requisição não passou, as seguintes provavelmente também não
   passariam, e insistir só gastaria bateria. Preservar a ordem
   também evita gravar o SRS de uma resposta que ainda não subiu. */
async function flushFila() {
  if (filaEmVoo || MODO !== "cloud" || !CURRENT_USER) return;
  /* Sem rede não se reagenda: a retomada vem do evento "online" e do
     visibilitychange, e um timer de retorno aqui só queimaria bateria
     repetindo a mesma checagem enquanto o aparelho está offline. */
  if (navigator.onLine === false) { notificarStatusFila(); return; }

  const meus = filaPendentes(CURRENT_USER.id);
  if (!meus.length) { filaFalhasSeguidas = 0; notificarStatusFila(); return; }

  filaEmVoo = true;
  let travou = false;
  try {
    for (const item of meus) {
      const r = await enviarItemDaFila(item);
      if (r === "ok" || r === "descartar") {
        removerDaFila(item.id);
        continue;
      }
      item.tentativas = (item.tentativas || 0) + 1;
      if (item.tentativas >= FILA_MAX_TENTATIVAS) {
        console.error("Item excedeu o limite de tentativas e foi descartado:", item.tipo, item.payload);
        /* Perda de dado REAL do aluno — o evento mais importante que esta
           telemetria existe para contar. */
        registrarEvento("escrita_descartada",
          `${item.tipo} após ${item.tentativas} tentativas: ${ultimoErroDaFila}`);
        removerDaFila(item.id);
        continue;
      }
      atualizarNaFila(item);
      travou = true;
      break;
    }
  } finally {
    filaEmVoo = false;
  }

  if (travou) { filaFalhasSeguidas++; agendarFlush(); }
  else {
    filaFalhasSeguidas = 0;
    /* CORRIGE O AVISO QUE NÃO SUMIA. `meus` é uma fotografia tirada no
       início do voo. Toda resposta enfileirada DEPOIS dela chama
       agendarFlush(0), mas esse flush encontra `filaEmVoo` verdadeiro e
       retorna sem fazer nada — consumindo o timer. Quando o voo em
       andamento terminava sem falha, nada era reagendado, e os itens que
       chegaram no meio ficavam na fila sem ninguém para enviá-los.
       Resultado: "Enviando N respostas…" fixo na tela até o aluno
       responder outra questão ou trocar de aba.

       Acontecia justamente em quem responde rápido — várias questões
       seguidas, cada uma gerando dois itens (resposta + SRS). */
    if (filaPendentes(CURRENT_USER.id).length) agendarFlush(0);
  }
  notificarStatusFila();
}

function agendarFlush(ms) {
  clearTimeout(filaTimer);
  const espera = ms != null
    ? ms
    : FILA_BACKOFF_MS[Math.min(filaFalhasSeguidas, FILA_BACKOFF_MS.length - 1)];
  filaTimer = setTimeout(flushFila, espera);
}

function pararFila() {
  clearTimeout(filaTimer);
  filaTimer = null;
  filaFalhasSeguidas = 0;
}

/* `pendentes` conta tudo (controla o flush); `respostas` conta só o que
   o aluno reconhece como trabalho dele — mostrar o registro de SRS no
   aviso faria "1 questão respondida" aparecer como "2 respostas". */
function statusFila() {
  const itens = CURRENT_USER ? filaPendentes(CURRENT_USER.id) : [];
  return {
    pendentes: itens.length,
    respostas: itens.filter(i => i.tipo === "resposta").length,
    online: navigator.onLine !== false,
    /* Quantas vezes o item mais insistente já falhou. Serve para a tela
       parar de dizer "Enviando…" quando na verdade está apanhando: com o
       backoff cheio, um item que sempre falha leva ~35 minutos até ser
       descartado, e nesse intervalo o aviso otimista mente para o aluno. */
    tentativas: itens.reduce((m, i) => Math.max(m, i.tentativas || 0), 0),
    limiteTentativas: FILA_MAX_TENTATIVAS,
  };
}

/* Evento de DOM em vez de callback direto para o engine não precisar
   conhecer a camada de UI (js/app.js escuta e desenha o aviso). */
function notificarStatusFila() {
  try {
    window.dispatchEvent(new CustomEvent("questlab:fila", { detail: statusFila() }));
  } catch (e) { /* ambiente sem window (testes em Node) */ }
}

/* Coluna do banco -> chave em APP_STATE.config. `updated_at` fica de fora
   de propósito: é carimbo de servidor, não configuração do aluno. */
const PERFIL_COLUNA_PARA_CONFIG = {
  tema: "tema",
  concurso_foco: "concursoFoco",
  cargo_foco: "cargoFoco",
  meta_taxa: "metaTaxa",
  meta_diaria: "metaDiaria",
  data_prova: "dataProva",
  onboarding_visitas: "onboardingVisitas",
};

/* Reaplica sobre o APP_STATE recém-carregado o que ainda não subiu,
   para que recarregar a página offline não faça as respostas do dia
   desaparecerem da tela. A deduplicação por timestamp cobre o caso de
   um item ter subido mas ainda constar na fila. */
function reaplicarPendentes(userId) {
  for (const item of filaPendentes(userId)) {
    const p = item.payload;
    if (item.tipo === "resposta") {
      const quando = new Date(p.created_at).getTime();
      if (!APP_STATE.respostas[p.qid]) APP_STATE.respostas[p.qid] = [];
      if (APP_STATE.respostas[p.qid].some(r => r.data === quando)) continue;
      APP_STATE.respostas[p.qid].push({
        qid: p.qid, resposta: p.resposta, correta: p.correta, branco: p.branco,
        tempoMs: p.tempo_ms, confianca: p.confianca, data: quando,
      });
    } else if (item.tipo === "srs") {
      APP_STATE.srs[p.qid] = { nivel: p.nivel, proxima: new Date(p.proxima).getTime() };
    } else if (item.tipo === "sessao") {
      const quando = new Date(p.created_at).getTime();
      if (APP_STATE.sessoes.some(s => s.data === quando)) continue;
      APP_STATE.sessoes.push({
        data: quando, n: p.n, acertos: p.acertos, erros: p.erros,
        brancos: p.brancos, liquida: p.liquida, tempoTotal: p.tempo_total,
      });
    } else if (item.tipo === "perfil") {
      /* Sem isto, mudar a meta diária sem rede e recarregar mostraria o
         valor antigo: a leitura traz o do servidor, que ainda não recebeu
         a alteração. */
      for (const [coluna, valor] of Object.entries(p.campos || {})) {
        const chave = PERFIL_COLUNA_PARA_CONFIG[coluna];
        if (chave) APP_STATE.config[chave] = valor;
      }
    }
  }
  APP_STATE.sessoes.sort((a, b) => a.data - b.data);
}

/* ================================================================
   CARGA DO ESTADO DA NUVEM, COM CÓPIA LOCAL DE SEGURANÇA

   A versão anterior desta função descartava o erro das seis consultas
   (`const [{ data: perfil }, ...]`): bastava uma falhar para o campo
   virar o padrão, em silêncio. Duas consequências, as duas observadas
   em produção:

     - perfil ilegível => plano "gratuito" e isAdmin false. Um assinante
       pagante era REBAIXADO sem nenhum aviso, até recarregar a página.
     - respostas ilegíveis => `APP_STATE.respostas = {}`. O dado seguia
       intacto no servidor, mas o aluno via meses de estudo sumirem da
       tela.

   Sem rede as seis falham de uma vez, o que anulava na prática a casca
   offline do service worker: abrir sem conexão mostrava um app zerado.

   A regra agora é uma só: **falha de LEITURA nunca vira dado**. Só o
   que o servidor de fato respondeu pode rebaixar plano ou esvaziar
   histórico. Se não deu para ler, mostramos a última cópia boa e
   avisamos que está desatualizada.

   Por isso `.maybeSingle()` no lugar de `.single()` no perfil: com
   `single()`, "não existe linha" e "não consegui ler" chegavam os dois
   como erro, e era impossível distinguir o usuário sem perfil (em que o
   padrão é a resposta certa) da falha de rede (em que o padrão é uma
   mentira).
   ================================================================ */
/* ================================================================
   TELEMETRIA DE FALHAS

   Existe por um motivo concreto. O bug do rebaixamento de plano atingia
   quem paga, viveu semanas em produção, e só apareceu porque alguém
   abriu o app e reparou num número estranho. E a correção dele PIOROU o
   ponto cego: agora a leitura que falha cai na cópia local e o app segue
   funcionando — o sintoma sumiu, a falha não.

   Três caminhos por onde dado do aluno some em silêncio, todos daqui:
   item da fila descartado após esgotar as tentativas (perda real),
   leitura caindo na cópia, e exceção não tratada.

   Regras que este código não pode quebrar:

     - Nunca vira erro na cara do aluno. Falhou o envio, azar.
     - Nunca dispara telemetria de si mesma. A rejeição da própria
       chamada é engolida ali no `.then(ok, erro)`; sem isso, um erro de
       rede viraria `unhandledrejection`, que chamaria isto de novo, em
       laço.
     - Nunca passa pela fila de escrita. A fila é para o que não pode se
       perder; perder um evento de telemetria é aceitável, e enfileirar
       aqui seria circular (a falha da fila gerando item na fila).
     - Nunca carrega conteúdo de estudo: nem enunciado, nem resposta,
       nem gabarito. Só tipo de falha, mensagem curta e versão.
   ================================================================ */
const EVENTO_TETO_SESSAO = 10;
let eventosEnviados = 0;
const eventosJaVistos = new Set();

function registrarEvento(tipo, detalhe) {
  try {
    if (MODO !== "cloud" || !CURRENT_USER) return;
    if (eventosEnviados >= EVENTO_TETO_SESSAO) return;
    /* O mesmo erro repetido não é informação nova, e é justamente o que
       um laço de falha produz aos milhares. */
    const chave = tipo + "|" + String(detalhe || "").slice(0, 120);
    if (eventosJaVistos.has(chave)) return;
    eventosJaVistos.add(chave);
    eventosEnviados++;
    supa.rpc("registrar_evento", {
      p_tipo: tipo,
      p_detalhe: String(detalhe || "").slice(0, 300),
      p_versao: String(globalThis.APP_VERSION || ""),
    }).then(() => {}, () => {});
  } catch (e) { /* telemetria nunca propaga */ }
}

const CACHE_NUVEM_KEY = STORAGE_KEY + ":nuvem";
const CARGA_TENTATIVAS = 3;
const CARGA_ESPERA_MS = [0, 400, 1200];

/* Marca que o que está na tela é a cópia local, não o servidor. */
let ESTADO_DESATUALIZADO = null;

function statusSincronizacao() {
  return { desatualizado: !!ESTADO_DESATUALIZADO, desde: ESTADO_DESATUALIZADO?.desde || null };
}

function notificarSincronizacao() {
  try {
    window.dispatchEvent(new CustomEvent("questlab:estado", { detail: statusSincronizacao() }));
  } catch (e) { /* ambiente sem window (testes em Node) */ }
}

/* A cópia é carimbada com o dono: usar cache de outra conta exibiria o
   progresso de um usuário para outro. */
function salvarCacheNuvem(userId) {
  try {
    localStorage.setItem(CACHE_NUVEM_KEY, JSON.stringify({
      userId, em: Date.now(),
      respostas: APP_STATE.respostas, srs: APP_STATE.srs,
      sessoes: APP_STATE.sessoes, config: APP_STATE.config,
    }));
    return true;
  } catch (e) {
    console.error("Não foi possível guardar a cópia local do estado:", e);
    return false;
  }
}

function lerCacheNuvem(userId) {
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_NUVEM_KEY) || "null");
    if (!c || typeof c !== "object" || c.userId !== userId) return null;
    const ehObj = v => v && typeof v === "object" && !Array.isArray(v);
    if (!ehObj(c.config)) return null;
    return {
      em: c.em || null,
      respostas: ehObj(c.respostas) ? c.respostas : {},
      srs: ehObj(c.srs) ? c.srs : {},
      sessoes: Array.isArray(c.sessoes) ? c.sessoes : [],
      config: c.config,
    };
  } catch (e) {
    return null;
  }
}

/* ---------------- Leitura paginada ----------------

   O DEFEITO QUE ISTO CORRIGE, porque ele é silencioso e cresce sozinho.

   O PostgREST devolve no máximo `max-rows` linhas por requisição (mil, no
   padrão do Supabase). As consultas abaixo não pediam faixa nenhuma, então
   passavam a ser CORTADAS assim que o aluno cruzava esse total — sem erro,
   sem aviso: `error` vinha nulo e `data` vinha incompleto. O código tratava
   isso como leitura bem-sucedida, substituía APP_STATE.respostas pelo
   pedaço e ainda gravava a cópia local com o buraco dentro.

   O efeito para quem estuda todo dia é cruel de diagnosticar: as respostas
   CONTINUAM sendo gravadas no servidor (o caminho de escrita nunca teve
   problema), mas param de voltar na tela. Dashboard, diagnóstico por
   disciplina, taxa de acerto e revisão espaçada congelam no dia em que a
   conta passou de mil, e cada resposta nova reforça a impressão de que o
   app "não está salvando" — quando o que ele não está fazendo é LER.

   Pior ainda pela ordenação: `created_at` ascendente faz o corte cair
   sobre as linhas MAIS RECENTES. Some exatamente o estudo de hoje.

   COMO A PAGINAÇÃO AVANÇA. Pelo tamanho do lote que VOLTOU, nunca pelo
   que foi pedido. Se o teto do servidor for menor que PAGINA_NUVEM, um
   laço que avançasse de PAGINA_NUVEM em PAGINA_NUVEM pularia linhas; e um
   que parasse no primeiro lote "curto" pararia cedo demais. Avançar pelo
   recebido é correto sob qualquer teto, inclusive se ele mudar depois.

   O desempate por `id` existe porque paginação sobre ORDER BY só é estável
   com chave única no fim da ordenação — dois registros no mesmo
   milissegundo poderiam trocar de página e sumir da leitura. */
const PAGINA_NUVEM = 1000;
/* Trava de segurança contra laço infinito se o servidor devolver sempre a
   mesma página. É folgado de propósito: um ano de estudo pesado não chega
   perto disto, então bater no teto é sinal de defeito, não de uso. */
const TETO_NUVEM = 200000;

async function buscarTudo(rotulo, fabrica) {
  const linhas = [];
  let inicio = 0;
  let maiorLote = 0;
  for (;;) {
    const r = await fabrica().range(inicio, inicio + PAGINA_NUVEM - 1);
    if (r.error) return { data: null, error: r.error };
    const lote = r.data || [];
    linhas.push(...lote);
    if (!lote.length) break;
    inicio += lote.length;
    /* Lote menor que o maior já visto = última página. */
    if (lote.length < maiorLote) break;
    maiorLote = Math.max(maiorLote, lote.length);
    if (inicio >= TETO_NUVEM) {
      console.error(`Leitura de ${rotulo} atingiu o teto de ${TETO_NUVEM} linhas.`);
      registrarEvento("leitura_no_teto", `${rotulo}: ${inicio} linhas`);
      break;
    }
  }
  return { data: linhas, error: null };
}

function consultarNuvem(user) {
  return Promise.all([
    supa.from("profiles").select("*").eq("id", user.id).maybeSingle(),
    buscarTudo("respostas", () => supa.from("respostas").select("*").eq("user_id", user.id)
      .order("created_at", { ascending: true }).order("id", { ascending: true })),
    buscarTudo("srs", () => supa.from("srs").select("*").eq("user_id", user.id)
      .order("qid", { ascending: true })),
    buscarTudo("sessoes", () => supa.from("sessoes").select("*").eq("user_id", user.id)
      .order("created_at", { ascending: true }).order("id", { ascending: true })),
    supa.from("assinaturas").select("plano_tipo").eq("user_id", user.id).eq("status", "autorizada").maybeSingle(),
    /* Só o par questão/motivo: no máximo uma linha por questão sinalizada,
       o que na prática é uma dúzia. Entra no mesmo Promise.all para não
       custar mais um tempo de ida e volta no boot. Paginado junto com os
       demais porque "hoje são poucas linhas" foi exatamente a premissa que
       fez `respostas` passar de mil sem ninguém perceber. */
    /* `resolvido` entra aqui porque sem ele o app não tinha como fechar o
       ciclo: o aluno sinalizava, a questão era corrigida, e o card
       continuava dizendo apenas "você sinalizou" — para sempre. Doze
       feedbacks reais foram enviados antes de alguém notar que nenhum
       deles jamais dava retorno visível a quem o escreveu. */
    buscarTudo("feedback_questao", () => supa.from("feedback_questao")
      .select("questao_id, motivo, comentario, resolvido").eq("user_id", user.id)
      .order("questao_id", { ascending: true })),
  ]);
}

/* Busca todo o estado do usuário logado no Supabase e popula o APP_STATE. */
async function carregarEstadoNuvem(user) {
  /* Quem era o dono do que está em memória, ANTES de trocar. Sem isso, o
     recuo para "o que já estava carregado" exibiria o progresso do
     usuário anterior para o novo, numa troca de conta com o servidor
     fora do ar. */
  const donoAnterior = CURRENT_USER?.id || null;
  CURRENT_USER = user;
  MODO = "cloud";
  /* Drena antes de ler: o que ficou da sessão anterior precisa estar no
     servidor para vir de volta na consulta abaixo. Se ainda não der
     (segue offline), reaplicarPendentes() ao final garante que nada
     suma da tela. */
  await flushFila();

  /* Repete em caso de falha: o defeito que motivou tudo isto era uma
     corrida no primeiro carregamento a frio, com a consulta saindo antes
     de o token estar pronto — some com uma segunda tentativa. Sem rede
     não há o que repetir, e esperar 1,6 s à toa só atrasaria a tela. */
  let leitura = null;
  for (let i = 0; i < CARGA_TENTATIVAS; i++) {
    if (CARGA_ESPERA_MS[i]) await new Promise(r => setTimeout(r, CARGA_ESPERA_MS[i]));
    leitura = await consultarNuvem(user).catch(e => {
      /* Rede caindo no meio pode rejeitar em vez de devolver `error`. */
      return Array(6).fill({ data: null, error: { message: String(e && e.message || e) } });
    });
    if (!leitura.some(r => r && r.error)) break;
    if (navigator.onLine === false) break;
  }

  const [rPerfil, rRespostas, rSrs, rSessoes, rAssinatura, rFeedback] = leitura;
  const falhou = r => !!(r && r.error);
  const cache = lerCacheNuvem(user.id);

  /* De onde recuar quando a leitura falha, em ordem de confiança:
     a cópia local DESTE usuário; senão o que já está em memória, mas só
     se for dele; senão o padrão. Nunca o dado de outra conta — é a
     diferença entre "não consegui atualizar" e "mostrei o progresso de
     outra pessoa". */
  const memoriaEhDele = donoAnterior === user.id;
  const padrao = estadoInicial();
  const recuo = {
    respostas: cache ? cache.respostas : (memoriaEhDele ? APP_STATE.respostas : padrao.respostas),
    srs:       cache ? cache.srs       : (memoriaEhDele ? APP_STATE.srs       : padrao.srs),
    sessoes:   cache ? cache.sessoes   : (memoriaEhDele ? APP_STATE.sessoes   : padrao.sessoes),
    config:    cache ? cache.config    : (memoriaEhDele ? APP_STATE.config    : padrao.config),
  };

  /* --- histórico: só substitui o que veio de verdade --- */
  if (falhou(rRespostas)) {
    APP_STATE.respostas = recuo.respostas;
  } else {
    const respostas = {};
    for (const r of (rRespostas.data || [])) {
      if (!respostas[r.qid]) respostas[r.qid] = [];
      respostas[r.qid].push({ qid: r.qid, resposta: r.resposta, correta: r.correta, branco: r.branco, tempoMs: r.tempo_ms, confianca: r.confianca, data: new Date(r.created_at).getTime() });
    }
    APP_STATE.respostas = respostas;
  }

  if (falhou(rSrs)) {
    APP_STATE.srs = recuo.srs;
  } else {
    const srs = {};
    for (const s of (rSrs.data || [])) srs[s.qid] = { nivel: s.nivel, proxima: new Date(s.proxima).getTime() };
    APP_STATE.srs = srs;
  }

  if (falhou(rSessoes)) {
    APP_STATE.sessoes = recuo.sessoes;
  } else {
    APP_STATE.sessoes = (rSessoes.data || []).map(s => ({ data: new Date(s.created_at).getTime(), n: s.n, acertos: s.acertos, erros: s.erros, brancos: s.brancos, liquida: s.liquida, tempoTotal: s.tempo_total }));
  }

  if (!falhou(rFeedback)) {
    FEEDBACK_ENVIADO.clear();
    for (const f of (rFeedback.data || [])) FEEDBACK_ENVIADO.set(f.questao_id, { motivo: f.motivo, comentario: f.comentario, resolvido: !!f.resolvido });
  }

  /* --- plano e permissões: o ponto mais sensível ---
     Só rebaixa quem o SERVIDOR disse que é gratuito. Perfil ilegível cai
     na cópia local; sem cópia, mantém o que já estava em memória. */
  if (falhou(rPerfil) || falhou(rAssinatura)) {
    APP_STATE.config = { ...padrao.config, ...recuo.config };
  } else {
    const perfil = rPerfil.data;
    const assinaturaAtiva = rAssinatura.data;
    if (!perfil) console.error("Usuário autenticado sem linha em profiles:", user.id);
    APP_STATE.config = {
      tema: perfil?.tema || "dark",
      concursoFoco: perfil?.concurso_foco || null,
      cargoFoco: perfil?.cargo_foco || "Escrivão",
      nickname: perfil?.nickname || null,
      isAdmin: perfil?.is_admin || false,
      plano: (perfil?.plano === "completo" || assinaturaAtiva) ? "completo" : "gratuito",
      assinaturaTipo: assinaturaAtiva?.plano_tipo || null,
      onboardingVisitas: perfil?.onboarding_visitas || {},
      metaTaxa: perfil?.meta_taxa ?? 0.75,
      metaDiaria: perfil?.meta_diaria ?? null,
      dataProva: perfil?.data_prova || null,
    };
  }

  reaplicarPendentes(user.id);

  const houveFalha = leitura.some(falhou);
  if (houveFalha) {
    ESTADO_DESATUALIZADO = { desde: Date.now() };
    const motivos = leitura.filter(falhou).map(r => r.error?.message || r.error?.code);
    console.error("Estado carregado de forma incompleta:", motivos);
    /* Sem isto, a correção do rebaixamento silencioso apenas trocaria um
       problema invisível por outro: o aluno pararia de ver dado errado, e
       a falha continuaria acontecendo sem ninguém saber. */
    registrarEvento("estado_incompleto",
      `${motivos.length}/6 consultas falharam: ${motivos[0] || "?"}`);
  } else {
    ESTADO_DESATUALIZADO = null;
    /* Só grava a cópia quando a leitura veio inteira — cache montado a
       partir de leitura parcial congelaria o buraco. */
    salvarCacheNuvem(user.id);
  }
  notificarSincronizacao();
  notificarStatusFila();
}

/* Define a meta de taxa de acerto do Radar de Aprovação (0.10–1.00) e
   sincroniza na nuvem — mesmo padrão de marcarVisitaOnboarding(). */
function definirMetaTaxa(valor) {
  const meta = Math.min(1, Math.max(0.1, valor));
  APP_STATE.config.metaTaxa = meta;
  salvarPerfil({ meta_taxa: meta });
}

/* ---------------- Feedback sobre a explicação ----------------
   O validador mede o que dá para medir em texto: resolução que ecoa o
   enunciado sem citar fonte. O que ele não alcança é "li tudo e continuo
   sem entender" — quatro heurísticas foram testadas para isso e todas
   marcaram resolução boa demais para valer a pena. Quem sabe é o leitor,
   então a fila de reescrita vem dele.

   Motivos fechados, e não campo livre, porque uma fila só serve se for
   contável: cinco alunos travados na mesma questão é sinal; cinco textos
   soltos são leitura. O comentário livre continua existindo, opcional,
   para o que a lista não cobre. */
const FEEDBACK_MOTIVOS = [
  { slug: "nao_explica",            rotulo: "A resolução não explica por que essa é a resposta" },
  { slug: "gabarito_suspeito",      rotulo: "Acho que o gabarito está errado" },
  { slug: "fonte_incorreta",        rotulo: "O fundamento ou a jurisprudência não confere" },
  { slug: "norma_desatualizada",    rotulo: "A norma mudou — lei nova, revogação ou jurisprudência superada" },
  { slug: "enunciado_confuso",      rotulo: "O enunciado está ambíguo, genérico ou mal recortado" },
  { slug: "estrategia_nao_encaixa", rotulo: "A estratégia mostrada não se aplica a esta questão" },
  /* Última da lista de propósito: um leitor pediu "outros" depois de
     encaixar em `fonte_incorreta` uma crítica que era de redação do
     enunciado. Lista fechada continua sendo o certo — fila só serve se
     for contável —, mas fechada DEMAIS empurra o relato para a caixa
     errada e estraga a contagem que ela existe para produzir. As duas
     categorias acima nasceram desse mesmo relato; esta recolhe o resto. */
  { slug: "outro",                  rotulo: "Outro motivo (descreva abaixo)" },
];

/* IDs que o usuário já sinalizou, carregados no boot junto do resto do
   estado. Existe para o botão nascer marcado ao reabrir a questão — sem
   isso o aluno reclama duas vezes achando que a primeira não pegou. */
const FEEDBACK_ENVIADO = new Map();

function feedbackDaQuestao(qid) { return FEEDBACK_ENVIADO.get(qid) || null; }

async function enviarFeedback(qid, disciplina, motivo, comentario) {
  if (MODO !== "cloud" || !CURRENT_USER) throw new Error("é preciso estar logado para enviar feedback");
  const { error } = await supa.rpc("registrar_feedback", {
    p_questao_id: qid,
    p_disciplina: disciplina || null,
    p_motivo: motivo,
    p_comentario: comentario || null,
  });
  if (error) throw error;
  FEEDBACK_ENVIADO.set(qid, { motivo, comentario: comentario || null });
}

async function removerFeedback(qid) {
  if (MODO !== "cloud" || !CURRENT_USER) return;
  const { error } = await supa.rpc("remover_feedback", { p_questao_id: qid });
  if (error) throw error;
  FEEDBACK_ENVIADO.delete(qid);
}

/* Define (ou limpa, com valor null) a data-alvo da prova, usada pelo
   Plano de Estudo Dirigido para calcular dias restantes e ritmo diário. */
function definirDataProva(valorISO) {
  APP_STATE.config.dataProva = valorISO || null;
  salvarPerfil({ data_prova: valorISO || null });
}

/* Marca uma "visita" de onboarding (ex.: Raio-X, Perfil) e sincroniza na
   nuvem — mesma lógica de saveState(), mas escopada a esse campo para
   não reenviar tema/foco a cada clique. */
function marcarVisitaOnboarding(chave) {
  if (!APP_STATE.config.onboardingVisitas) APP_STATE.config.onboardingVisitas = {};
  if (APP_STATE.config.onboardingVisitas[chave]) return;
  APP_STATE.config.onboardingVisitas[chave] = true;
  salvarPerfil({ onboarding_visitas: APP_STATE.config.onboardingVisitas });
}

/* Volta o app para modo local (após logout), recarregando o localStorage. */
function voltarModoLocal() {
  /* A fila em si NÃO é apagada: se algo ficou para trás, sobe no
     próximo login do mesmo usuário (os itens são carimbados com o
     userId e só são enviados para o dono). */
  pararFila();
  /* A cópia local, ao contrário, vai embora. Ela guarda o histórico
     inteiro, e sair da conta em máquina compartilhada não pode deixar
     meses de estudo legíveis para o próximo — é a mesma preocupação que
     motivou o logout por inatividade. Perde-se abrir offline depois de
     sair, o que é justamente o que "sair" significa. */
  try { localStorage.removeItem(CACHE_NUVEM_KEY); } catch (e) {}
  ESTADO_DESATUALIZADO = null;
  MODO = "offline";
  CURRENT_USER = null;
  const local = loadLocalState();
  APP_STATE.respostas = local.respostas;
  APP_STATE.srs = local.srs;
  APP_STATE.sessoes = local.sessoes;
  APP_STATE.config = local.config;
}

/* ---------------- Formato do item: C/E × múltipla escolha ----------------

   A CEBRASPE aplica os dois formatos. Até a versão 7.178 o banco inteiro
   era CERTO/ERRADO, e a suposição estava espalhada pelo código: botões
   fixos no card, o token "B" para branco, contagens de gabarito "C".

   O modelo agora é este:

     q.tipo === "CE"  gabarito "C" ou "E"; branco = "B".
     q.tipo === "ME"  gabarito "A".."E"; exige q.alternativas (array de
                      textos, na ordem das letras); branco = "-".

   O branco precisou de token próprio no ME porque "B" ali é alternativa
   legítima — registrar branco como "B" faria o histórico de quem marcou
   a letra B virar branco, silenciosamente, para sempre.

   Todo o resto do sistema (SRS, estatísticas, viés, calibração) trabalha
   com o booleano `correta` e a flag `branco` do registro, que não mudam
   de significado. Só as leituras que abrem o gabarito para desenhar
   "CERTO"/"ERRADO" na tela precisam saber o formato — e essas passaram a
   usar os helpers abaixo. */
const FORMATOS_ITEM = [
  { id: "CE", nome: "Certo ou Errado", curto: "C/E" },
  { id: "ME", nome: "Múltipla escolha", curto: "A–E" },
];
/* O padrão é C/E, e é deliberado: é o formato de 99% do acervo e o que a
   banca usa em Agente e Escrivão na PC-AL. Múltipla escolha é escolha
   explícita do usuário, nunca estado inicial. */
const FORMATO_PADRAO = "CE";

function formatoDaQuestao(q) { return q && q.tipo === "ME" ? "ME" : "CE"; }
function tokenBranco(q) { return formatoDaQuestao(q) === "ME" ? "-" : "B"; }
function respostaEmBranco(q, resposta) { return resposta === tokenBranco(q); }

/* Letras efetivamente disponíveis — derivadas do array, não fixas em A–E,
   porque nada impede um item de 4 alternativas. */
function letrasDaQuestao(q) {
  return (q.alternativas || []).map((_, i) => String.fromCharCode(65 + i));
}

/* Texto puro (sem HTML) de uma resposta ou gabarito, para exibição.
   Quem chama é responsável por escapar. */
function rotuloResposta(q, valor) {
  if (respostaEmBranco(q, valor)) return "Em branco";
  if (formatoDaQuestao(q) === "CE") return valor === "C" ? "CERTO" : "ERRADO";
  const alt = (q.alternativas || [])[valor.charCodeAt(0) - 65];
  return alt ? `${valor}) ${alt}` : valor;
}

/* ---------------- Registro de respostas ---------------- */
/* resposta: no formato CE, "C" | "E" | "B" (branco);
             no formato ME, "A".."E" | "-" (branco). confianca: 1-3 (opcional) */
function registrarResposta(qid, resposta, tempoMs, confianca) {
  const q = QUESTOES.find(x => x.id === qid);
  if (!q) return null;
  const branco = respostaEmBranco(q, resposta);
  const correta = !branco && resposta === q.gabarito;
  const registro = { qid, resposta, correta, branco, tempoMs, confianca: confianca || null, data: Date.now() };
  if (!APP_STATE.respostas[qid]) APP_STATE.respostas[qid] = [];
  APP_STATE.respostas[qid].push(registro);
  atualizarSRS(qid, branco ? false : correta, branco);
  if (MODO === "cloud" && CURRENT_USER) persistirRespostaNuvem(registro);
  else saveLocalState();
  return { correta, gabarito: q.gabarito };
}

function persistirRespostaNuvem(registro) {
  enfileirar("resposta", {
    user_id: CURRENT_USER.id, qid: registro.qid, resposta: registro.resposta,
    correta: registro.correta, branco: registro.branco, tempo_ms: registro.tempoMs,
    confianca: registro.confianca,
    /* horário real da resposta, não o do envio — ver comentário da fila */
    created_at: new Date(registro.data).toISOString(),
  });
  const s = APP_STATE.srs[registro.qid];
  if (s) {
    enfileirar("srs", {
      user_id: CURRENT_USER.id, qid: registro.qid, nivel: s.nivel,
      proxima: new Date(s.proxima).toISOString(), updated_at: new Date().toISOString(),
    });
  }
}

/* Registra o resumo de um simulado concluído (Módulo 7 + 8). */
function registrarSessao(sessao) {
  APP_STATE.sessoes.push(sessao);
  if (MODO === "cloud" && CURRENT_USER) {
    enfileirar("sessao", {
      user_id: CURRENT_USER.id, n: sessao.n, acertos: sessao.acertos, erros: sessao.erros,
      brancos: sessao.brancos, liquida: sessao.liquida, tempo_total: sessao.tempoTotal,
      created_at: new Date(sessao.data || Date.now()).toISOString(),
    });
  } else {
    saveLocalState();
  }
}

/* ---------------- Repetição espaçada (SM-2 simplificado) ----------------
   Intervalos base em dias: erro→0 (revisar já), depois 1, 3, 7, 15, 30, 60 */
const SRS_INTERVALOS = [1, 3, 7, 15, 30, 60];

/* Um erro NÃO devolve a questão à fila no mesmo instante, e um acerto obtido
   antes do vencimento não promove o nível. As duas regras atacam o mesmo
   defeito, que corrompia ao mesmo tempo o aprendizado e a medição:

   antes, errar gravava `proxima = agora`. A questão voltava disponível de
   imediato e, respondida minutos depois com a explicação ainda na memória de
   curto prazo, era "acertada" — mas isso é reconhecimento, não evocação. O
   acerto falso subia o nível para 1, o item saía da fila com apenas um dia de
   intervalo e o buraco reaparecia no dia da prova. De quebra, a taxa de
   acerto inflava: bastava insistir no mesmo item para ver o percentual subir
   sem ter aprendido nada.

   Isto NÃO fecha a porta da revisão imediata de erros: o botão "Revisar meus
   erros" e o filtro "só as que errei" leem APP_STATE.respostas, não o SRS.
   Reestudar hoje continua possível e é desejável — o que muda é que esse
   reestudo deixa de ser contabilizado como retenção comprovada. */
const SRS_LAG_ERRO_DIAS = 1;

function atualizarSRS(qid, acertou, branco) {
  const s = APP_STATE.srs[qid] || { nivel: 0, proxima: 0 };
  const agora = Date.now();
  const aindaNaoVenceu = s.proxima > agora;
  if (branco) { /* branco não avança nem zera: revisa amanhã */
    s.proxima = agora + 1 * 864e5;
  } else if (acertou) {
    /* Só promove quem acertou uma questão de fato vencida. Acertar de novo
       o que ainda não venceu não é prova de retenção — e não pode empurrar
       o intervalo para frente. */
    if (!aindaNaoVenceu) {
      s.nivel = Math.min(s.nivel + 1, SRS_INTERVALOS.length);
      s.proxima = agora + SRS_INTERVALOS[Math.min(s.nivel - 1, SRS_INTERVALOS.length - 1)] * 864e5;
    }
  } else {
    s.nivel = 0;
    s.proxima = agora + SRS_LAG_ERRO_DIAS * 864e5;
  }
  APP_STATE.srs[qid] = s;
}
function questaoLiberada(q) {
  return APP_STATE.config.plano === "completo" || FREE_QUESTION_IDS.has(q.id);
}

/* ---------------- Escopo da trilha ----------------
   A trilha escolhida (APP_STATE.config.concursoFoco) delimita QUAIS
   disciplinas existem para aquele candidato. Antes ela era só um peso: uma
   linha em pesoAdaptativo somava +1 às questões do concurso-foco, e todo o
   resto — Plano de Estudo, Radar, Raio-X, Perfil — calculava sobre o banco
   inteiro. Com uma carreira só isso não aparecia; com duas, um fisioterapeuta
   veria Direito Penal como disciplina a dominar.

   O critério é a DISCIPLINA constar do edital, não `q.concurso` bater. Ver
   EDITAIS em js/data.js para o porquê.

   Sem trilha escolhida (concursoFoco null), o escopo é o banco inteiro —
   é o estado de quem já usa o app e não escolheu nada. */
function editalDoFoco() {
  const foco = APP_STATE.config.concursoFoco;
  return (foco && EDITAIS[foco]) || null;
}
function disciplinasDoFoco() {
  const ed = editalDoFoco();
  return ed ? new Set(Object.keys(ed.itensPorDisciplina)) : null;
}
function noEscopo(q) {
  const discs = disciplinasDoFoco();
  return !discs || discs.has(q.disciplina);
}
/* Trilhas em que a questão de fato cai, pelo mesmo critério de noEscopo():
   a DISCIPLINA constar do edital. Não confundir com `q.concurso`, que é
   procedência — de qual edital a questão foi redigida — e por isso não
   serve para responder "isto cai na minha prova?". Língua Portuguesa e
   Ética no Serviço Público constam dos dois editais: uma questão de ética
   redigida para SESAU vale igualmente para PC-AL, cujo conteúdo
   programático cobra a mesma Lei estadual 6.754/2006. */
function trilhasDaQuestao(q) {
  return Object.values(EDITAIS).filter(e => q.disciplina in e.itensPorDisciplina);
}
/* Cargos da trilha; sem trilha, todos os conhecidos (união dos editais). */
function cargosDoFoco() {
  const ed = editalDoFoco();
  if (ed) return ed.cargos;
  return [...new Set(Object.values(EDITAIS).flatMap(e => e.cargos))];
}
/* Base de tudo que é análise: liberado pelo plano E dentro da trilha. */
function questoesDoEscopo() {
  return QUESTOES.filter(q => questaoLiberada(q) && noEscopo(q));
}

/* Raio-X e Predição são as telas mais específicas de carreira do app. Sem
   trilha escolhida caem em PC-AL, que é a única com série histórica —
   melhor um dado real rotulado do que uma tela vazia. */
function inteligenciaDoFoco() {
  const foco = APP_STATE.config.concursoFoco;
  return (foco && INTELIGENCIA[foco]) || INTELIGENCIA.PCAL;
}

/* Padrões que de fato ocorrem nas questões da trilha, em vez de listar os 12
   do DNA_BANCA sempre. É levantado do próprio banco, e não de uma lista fixa
   por trilha, porque assim se mantém correto sozinho quando entram lotes
   novos — e porque o recorte real é por DISCIPLINA, não por carreira:
   `juris-inventada` não existe em conteúdo clínico, mas continua valendo nas
   disciplinas de legislação da mesma trilha de Fisioterapia. */
function dnaDoFoco() {
  const presentes = new Set(questoesDoEscopo().map(q => q.pegadinha));
  const filtrado = DNA_BANCA.filter(d => presentes.has(d.slug));
  return filtrado.length ? filtrado : DNA_BANCA;
}

function questoesDevidas() {
  const agora = Date.now();
  return QUESTOES.filter(q => {
    if (!questaoLiberada(q) || !noEscopo(q)) return false;
    const s = APP_STATE.srs[q.id];
    return s && s.proxima <= agora;
  });
}

/* ---------------- Estatísticas do estudante ---------------- */
function statsQuestao(qid) {
  const hist = APP_STATE.respostas[qid] || [];
  const respondidas = hist.filter(h => !h.branco);
  const acertos = respondidas.filter(h => h.correta).length;
  return { tentativas: hist.length, respondidas: respondidas.length, acertos,
    taxa: respondidas.length ? acertos / respondidas.length : null,
    ultima: hist.length ? hist[hist.length - 1] : null };
}

function statsPorDisciplina() {
  const map = {};
  for (const q of questoesDoEscopo()) {
    if (!map[q.disciplina]) map[q.disciplina] = { disciplina: q.disciplina, total: 0, respondidas: 0, acertos: 0, erros: 0, brancos: 0, tempoTotal: 0, nRespostas: 0 };
    const d = map[q.disciplina];
    d.total++;
    const hist = APP_STATE.respostas[q.id] || [];
    for (const h of hist) {
      d.nRespostas++;
      d.tempoTotal += h.tempoMs || 0;
      if (h.branco) d.brancos++;
      else if (h.correta) d.acertos++;
      else d.erros++;
    }
    if (hist.length) d.respondidas++;
  }
  return Object.values(map).map(d => ({
    ...d,
    taxa: (d.acertos + d.erros) ? d.acertos / (d.acertos + d.erros) : null,
    liquida: d.acertos - d.erros,
    tempoMedio: d.nRespostas ? d.tempoTotal / d.nRespostas : null,
  }));
}

function statsGerais() {
  const porDisc = statsPorDisciplina();
  let acertos = 0, erros = 0, brancos = 0, tempoTotal = 0, n = 0;
  for (const d of porDisc) { acertos += d.acertos; erros += d.erros; brancos += d.brancos; tempoTotal += d.tempoTotal; n += d.nRespostas; }
  /* Contagens restritas à trilha: sem isso, quem já respondeu questões fora
     dela (por ter trocado de foco) teria cobertura acima de 100% — o
     numerador contando o histórico inteiro e o denominador só o escopo. */
  const idsDoEscopo = new Set(questoesDoEscopo().map(q => q.id));
  const respondidasUnicas = Object.keys(APP_STATE.respostas).filter(id => idsDoEscopo.has(id)).length;
  const taxa = (acertos + erros) ? acertos / (acertos + erros) : null;
  /* Índice de confiança calibrada: acerto médio quando confiança alta */
  let confAltaAcertos = 0, confAltaTotal = 0;
  for (const qid in APP_STATE.respostas) {
    if (!idsDoEscopo.has(qid)) continue;
    for (const h of APP_STATE.respostas[qid]) {
      if (h.confianca === 3 && !h.branco) { confAltaTotal++; if (h.correta) confAltaAcertos++; }
    }
  }
  return {
    porDisc, acertos, erros, brancos, nRespostas: n,
    respondidasUnicas, totalBanco: idsDoEscopo.size,
    taxa, liquida: acertos - erros,
    tempoMedioSeg: n ? (tempoTotal / n / 1000) : null,
    calibracao: confAltaTotal ? confAltaAcertos / confAltaTotal : null,
  };
}

/* Evolução temporal (por sessão de respostas agrupadas por dia) */
function evolucaoDiaria() {
  const porDia = {};
  /* Escopado: é gráfico de DESEMPENHO (taxa de acerto ao longo do tempo), e
     misturar trilhas produziria uma curva sem significado — acertar 80% em
     Legislação do SUS e 50% em Direito Penal viraria um 65% que não descreve
     preparo para prova nenhuma. Contraste com calcularXP/calcularStreak, que
     são de ENGAJAMENTO e ficam globais de propósito. */
  const idsDoEscopo = new Set(questoesDoEscopo().map(q => q.id));
  for (const qid in APP_STATE.respostas) {
    if (!idsDoEscopo.has(qid)) continue;
    for (const h of APP_STATE.respostas[qid]) {
      const dia = new Date(h.data).toISOString().slice(0, 10);
      if (!porDia[dia]) porDia[dia] = { dia, acertos: 0, erros: 0 };
      if (!h.branco) (h.correta ? porDia[dia].acertos++ : porDia[dia].erros++);
    }
  }
  return Object.values(porDia).sort((a, b) => a.dia.localeCompare(b.dia))
    .map(d => ({ ...d, taxa: (d.acertos + d.erros) ? d.acertos / (d.acertos + d.erros) : 0 }));
}

/* Estatística por padrão de pegadinha: onde o usuário mais cai */
function statsPorPegadinha() {
  const map = {};
  for (const q of questoesDoEscopo()) {
    const hist = (APP_STATE.respostas[q.id] || []).filter(h => !h.branco);
    if (!hist.length) continue;
    if (!map[q.pegadinha]) map[q.pegadinha] = { slug: q.pegadinha, acertos: 0, erros: 0 };
    for (const h of hist) (h.correta ? map[q.pegadinha].acertos++ : map[q.pegadinha].erros++);
  }
  /* Prior = desempenho global do próprio candidato, e não 50% fixo: se ele
     acerta 70% no geral, um padrão com duas respostas erradas é evidência
     fraca contra esse pano de fundo, e a suavização deve refletir isso.
     A ordenação passa a usar a taxa suavizada — a crua continua exposta
     para leitura, mas não comanda mais o ranking. */
  const g = statsGerais();
  const prior = g.taxa ?? 0.5;
  return Object.values(map).map(p => {
    const dna = DNA_BANCA.find(d => d.slug === p.slug);
    const n = p.acertos + p.erros;
    return {
      ...p, n, nome: dna ? dna.nome : p.slug,
      taxa: p.acertos / n,
      taxaSuave: taxaSuavizada(p.acertos, n, prior),
      confiavel: n >= PESO_PRIOR,
    };
  }).sort((a, b) => a.taxaSuave - b.taxaSuave);
}

/* ---------------- Radar de Aprovação (Módulo 12) ----------------
   Heurística transparente: combina taxa de acerto, cobertura do banco
   e regularidade. NÃO é garantia — é um termômetro de estudo. */
function radarAprovacao() {
  const g = statsGerais();
  const porDisc = g.porDisc.filter(d => d.acertos + d.erros > 0);
  /* Classificação por taxa SUAVIZADA e com piso de amostra em todas as
     faixas. Antes só "dominada" exigia n mínimo: duas respostas erradas
     bastavam para uma disciplina inteira aparecer como "maior risco",
     que é justamente o rótulo que assusta e desvia o plano de estudo. */
  const MIN_AMOSTRA = 4;
  const prior = g.taxa ?? 0.5;
  const comTaxa = porDisc.map(d => {
    const n = d.acertos + d.erros;
    return { ...d, n, taxaSuave: taxaSuavizada(d.acertos, n, prior), amostraSuficiente: n >= MIN_AMOSTRA };
  });
  const maduras = comTaxa.filter(d => d.amostraSuficiente);
  /* O CORTE É FEITO NO INTEIRO EXIBIDO, não no decimal cru, e a razão é
     que a tela anuncia as faixas em porcentagem cheia ("Domina ≥80%").
     Comparando o decimal, uma disciplina em 0,7996 mostrava "80%" e caía
     em "Precisa melhorar (60–79%)" — a legenda contradizia o número ao
     lado dela. Aconteceu com Direito Constitucional num histórico real.
     Arredondar antes de comparar torna a contradição impossível por
     construção, em vez de depender de o texto e a conta concordarem. */
  const pctDe = d => Math.round(d.taxaSuave * 100);
  const dominadas = maduras.filter(d => pctDe(d) >= 80);
  const atencao = maduras.filter(d => pctDe(d) >= 60 && pctDe(d) < 80);
  const risco = maduras.filter(d => pctDe(d) < 60);
  /* Amostra ainda insuficiente para julgar: não é domínio nem risco. */
  const emAferricao = comTaxa.filter(d => !d.amostraSuficiente);
  const naoIniciadas = g.porDisc.filter(d => d.acertos + d.erros === 0);
  const cobertura = g.respondidasUnicas / g.totalBanco;
  const taxa = g.taxa ?? 0;
  /* nota 0-100: 60% desempenho + 25% cobertura + 15% calibração */
  const calib = g.calibracao ?? taxa;
  const score = Math.round(100 * (0.60 * taxa + 0.25 * cobertura + 0.15 * calib));
  /* referência: nota de corte típica CEBRASPE ≈ acima de 50% líquido;
     aprovados em carreiras policiais costumam ter 70%+ de acerto bruto —
     mas o usuário pode ajustar essa meta (APP_STATE.config.metaTaxa). */
  const metaTaxa = APP_STATE.config.metaTaxa ?? 0.75;
  /* `horasEstimadas` era (meta − taxa) × 400, com 400 saído do nada. Passa a
     derivar do que o candidato de fato leva por questão: quantas questões
     ainda faltam do escopo, multiplicadas pelo tempo mediano medido dele.
     Sem histórico de tempo suficiente, devolve null — melhor não exibir do
     que exibir número inventado. */
  const ritmo = analiseRitmo();
  const restantes = Math.max(0, g.totalBanco - g.respondidasUnicas);
  const horasEstimadas = ritmo ? Math.round(restantes * ritmo.segMediano / 3600) : null;
  return { dominadas, atencao, risco, naoIniciadas, emAferricao, score, taxa, cobertura,
    calibracao: g.calibracao, liquida: g.liquida, horasEstimadas, metaTaxa,
    horasBaseadaEmRitmo: !!ritmo, questoesRestantes: restantes };
}

/* ---------------- Higiene estatística ----------------

   Duas correções que atravessam todas as métricas abaixo.

   1) SUAVIZAÇÃO. Ordenar por taxa crua faz amostra minúscula dominar
      ranking: dois itens respondidos e nenhum acerto viram "0%", pior que
      quarenta itens com 55%. A média bayesiana puxa o resultado para o
      prior enquanto há pouca evidência e o solta conforme n cresce.
      PESO_PRIOR = 5 significa, na prática, "só confio na taxa depois de
      umas cinco respostas".

   2) RECÊNCIA. A taxa acumulada trata um erro de três meses atrás como se
      fosse de ontem, e o candidato que evoluiu não vê o painel reagir.
      A janela móvel olha as últimas respostas, em ordem cronológica. */
const PESO_PRIOR = 5;
const JANELA_RECENTE = 120;   /* uma prova inteira de respostas */

function taxaSuavizada(acertos, n, prior = 0.5) {
  if (!n) return null;
  return (acertos + PESO_PRIOR * prior) / (n + PESO_PRIOR);
}

/* Histórico achatado e ordenado por data, restrito à trilha. Base das
   métricas que dependem de ordem — recência, viés e ritmo. */
function historicoOrdenado({ incluirBrancos = false } = {}) {
  const idsDoEscopo = new Set(questoesDoEscopo().map(q => q.id));
  const linha = [];
  for (const qid in APP_STATE.respostas) {
    if (!idsDoEscopo.has(qid)) continue;
    for (const h of APP_STATE.respostas[qid]) {
      if (!incluirBrancos && h.branco) continue;
      linha.push(h);
    }
  }
  return linha.sort((a, b) => a.data - b.data);
}

/* Taxa na janela recente, ao lado da acumulada. A diferença entre as duas
   é o sinal de tendência: positiva, está melhorando. */
function taxaRecente(janela = JANELA_RECENTE) {
  const linha = historicoOrdenado();
  if (linha.length < 10) return null;
  const recorte = linha.slice(-janela);
  const acertos = recorte.filter(h => h.correta).length;
  const acumulada = linha.filter(h => h.correta).length / linha.length;
  const recente = acertos / recorte.length;
  return { recente, acumulada, delta: recente - acumulada, n: recorte.length, nTotal: linha.length };
}

/* ---------------- Viés de resposta ----------------

   Em prova de certo/errado, o candidato tem duas formas de perder ponto:
   não saber o conteúdo e ter tendência sistemática para um dos lados. A
   segunda é invisível no percentual de acerto e barata de corrigir, mas
   só aparece quando se compara a proporção de marcações "C" do candidato
   com a proporção de gabaritos "C" das questões que ele de fato respondeu
   — não com 50%, porque o recorte respondido nem sempre é equilibrado.

   Chamar de vício de aquiescência (marcar CERTO demais) é o caso mais
   comum: diante da dúvida, o texto plausível convence. O inverso também
   ocorre em quem estuda por "palavras perigosas" e passa a rejeitar todo
   item com "sempre" ou "somente". */
function viesResposta() {
  const linha = historicoOrdenado();
  if (linha.length < 20) return null;
  const porId = new Map(QUESTOES.map(q => [q.id, q]));

  /* Só itens CERTO/ERRADO entram aqui. "Marcar CERTO demais" não é uma
     grandeza definida em múltipla escolha, e contar itens ME no
     denominador diluiria as duas proporções por igual, fazendo um viés
     real parecer menor do que é. */
  let marcouC = 0, gabaritoC = 0, n = 0;
  let aceitouIndevido = 0, rejeitouIndevido = 0;   /* erros por direção */
  for (const h of linha) {
    const q = porId.get(h.qid);
    if (!q || formatoDaQuestao(q) !== "CE") continue;
    n++;
    if (h.resposta === "C") marcouC++;
    if (q.gabarito === "C") gabaritoC++;
    if (!h.correta) (h.resposta === "C" ? aceitouIndevido++ : rejeitouIndevido++);
  }
  if (n < 20) return null;
  const propMarcada = marcouC / n;
  const propEsperada = gabaritoC / n;
  const desvio = propMarcada - propEsperada;
  const erros = aceitouIndevido + rejeitouIndevido;

  /* 8 pontos percentuais é onde o desvio deixa de ser ruído amostral e
     passa a custar pontos de forma perceptível em 120 itens. */
  const LIMIAR = 0.08;
  let tendencia = "equilibrado";
  if (desvio > LIMIAR) tendencia = "aceita-demais";
  else if (desvio < -LIMIAR) tendencia = "rejeita-demais";

  return {
    n, propMarcada, propEsperada, desvio, tendencia,
    aceitouIndevido, rejeitouIndevido, erros,
    /* fração dos erros que veio de cada direção — o diagnóstico prático */
    fracaoAceitando: erros ? aceitouIndevido / erros : null,
  };
}

/* ---------------- Ritmo ----------------

   O app já media tempo por questão, mas só usava o dado no relatório de
   simulado. Numa prova de 120 itens com tempo fechado, ritmo elimina
   tanto quanto conteúdo — e a pergunta "eu terminaria a prova?" não tinha
   resposta em lugar nenhum.

   Trabalha-se com MEDIANA, não média: uma questão deixada aberta enquanto
   o candidato foi almoçar distorce a média e não diz nada sobre ritmo.
   Descartam-se também tempos absurdos pela mesma razão. */
const TEMPO_MAX_PLAUSIVEL_MS = 15 * 60000;

function mediana(v) {
  if (!v.length) return null;
  const s = [...v].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/* Quanto das 4h30 a discursiva consome. Não dá para saber ao certo — o
   edital dá o tempo somado —, então a análise de ritmo e o Modo Prova
   trabalham com a mesma reserva declarada, em vez de cada um inventar a
   sua. */
const RESERVA_DISCURSIVA_MIN = 60;

/* ================================================================
   MONTAGEM DA PROVA OFICIAL

   O Modo Prova sorteava do banco inteiro e fatiava: as disciplinas
   saíam embaralhadas entre si, e a quantidade de cada uma era o que o
   acaso desse. Treinava a responder questões, não a fazer AQUELA prova.

   A prova real da CEBRASPE não é assim. Os itens vêm em blocos
   contíguos por disciplina, na ordem do edital, e cada disciplina vale
   um número fixo de itens. Isso muda como se resolve: o candidato entra
   e sai de um assunto por vez, e precisa administrar o tempo sabendo
   que Português acabou e agora são 10 itens seguidos de RLM.
   ================================================================ */

/* Reparte `total` itens entre disciplinas na proporção dos pesos do
   edital. Os pesos são fracionários (9 disciplinas × 7,8 = 70,2 para um
   bloco de 70), então arredondar cada uma isolada não fecha a conta.
   Método do maior resto: distribui o piso e entrega as sobras a quem
   tem a maior parte fracionária, empate resolvido pela ordem do edital
   — assim a mesma trilha sempre gera a mesma estrutura. */
function repartirItens(pesos, total) {
  const soma = pesos.reduce((s, p) => s + p.peso, 0) || 1;
  const exatos = pesos.map(p => ({ ...p, exato: p.peso / soma * total }));
  const cotas = exatos.map(e => ({ ...e, itens: Math.floor(e.exato) }));
  let sobra = total - cotas.reduce((s, c) => s + c.itens, 0);
  const porResto = cotas
    .map((c, i) => ({ i, resto: c.exato - Math.floor(c.exato) }))
    .sort((a, b) => b.resto - a.resto || a.i - b.i);
  for (let k = 0; k < sobra; k++) cotas[porResto[k % porResto.length].i].itens++;
  return cotas;
}

/* Monta a prova na estrutura do edital do foco. Devolve null se não há
   trilha escolhida — nesse caso a tela cai no modo livre. */
function montarProvaOficial() {
  const ed = editalDoFoco();
  if (!ed || !ed.blocos || !ed.corte) return null;

  const questoes = [];
  const estrutura = [];
  const faltantes = [];

  for (const [chave, nomes] of Object.entries(ed.blocos)) {
    const alvoBloco = ed.corte[chave] ? ed.corte[chave].itens : 0;
    const cotas = repartirItens(
      nomes.map(nome => ({ nome, peso: ed.itensPorDisciplina[nome] || 0 })),
      alvoBloco
    );
    const doBloco = [];
    for (const c of cotas) {
      /* Embaralha DENTRO da disciplina: a ordem entre os blocos é a do
         edital, mas quais itens caem é sorteio. */
      /* A prova oficial replica o caderno da CEBRASPE para Agente e
         Escrivão, que é inteiramente CERTO/ERRADO. Fixar o formato aqui
         impede que um item de múltipla escolha entre num simulacro do
         caderno real — e a correção líquida do modelo pressupõe C/E. */
      const pool = embaralhar(filtrarQuestoes({ disciplina: c.nome, formato: "CE" }));
      const escolhidas = pool.slice(0, c.itens);
      if (escolhidas.length < c.itens) {
        faltantes.push({ disciplina: c.nome, previstos: c.itens, disponiveis: escolhidas.length });
      }
      doBloco.push({ disciplina: c.nome, previstos: c.itens, obtidos: escolhidas.length });
      questoes.push(...escolhidas);
    }
    estrutura.push({ bloco: chave, itensPrevistos: alvoBloco, disciplinas: doBloco });
  }

  const minutos = ed.duracaoMin ? ed.duracaoMin - RESERVA_DISCURSIVA_MIN : Math.round(questoes.length * 2.5);
  return {
    trilha: ed.curto || ed.id,
    questoes,
    estrutura,
    faltantes,
    itensPrevistos: ed.corte.total ? ed.corte.total.itens : questoes.length,
    duracaoSeg: minutos * 60,
    reservaDiscursivaMin: ed.duracaoMin ? RESERVA_DISCURSIVA_MIN : 0,
  };
}

function analiseRitmo({ reservaDiscursivaMin = RESERVA_DISCURSIVA_MIN } = {}) {
  const porId = new Map(QUESTOES.map(q => [q.id, q]));
  const linha = historicoOrdenado({ incluirBrancos: true })
    .filter(h => h.tempoMs > 0 && h.tempoMs < TEMPO_MAX_PLAUSIVEL_MS);
  if (linha.length < 15) return null;

  const razoes = [], segundos = [], porDisc = {};
  for (const h of linha) {
    const q = porId.get(h.qid);
    if (!q || !q.tempoIdealSeg) continue;
    const seg = h.tempoMs / 1000;
    const razao = seg / q.tempoIdealSeg;
    razoes.push(razao); segundos.push(seg);
    (porDisc[q.disciplina] ||= { disciplina: q.disciplina, razoes: [] }).razoes.push(razao);
  }
  if (!razoes.length) return null;

  const razaoMediana = mediana(razoes);
  const segMediano = mediana(segundos);

  const ed = editalDoFoco();
  const itens = ed && ed.corte ? ed.corte.total.itens : 120;
  const disponivelMin = ed && ed.duracaoMin ? ed.duracaoMin - reservaDiscursivaMin : null;
  const projetadoMin = segMediano * itens / 60;

  return {
    n: razoes.length,
    segMediano, razaoMediana,
    /* acima de 1 = mais lento que o tempo ideal do item */
    maisLento: razaoMediana > 1,
    itens, disponivelMin, reservaDiscursivaMin, projetadoMin,
    cabeNoTempo: disponivelMin === null ? null : projetadoMin <= disponivelMin,
    folgaMin: disponivelMin === null ? null : disponivelMin - projetadoMin,
    porDisciplina: Object.values(porDisc)
      .filter(d => d.razoes.length >= 5)
      .map(d => ({ disciplina: d.disciplina, n: d.razoes.length, razao: mediana(d.razoes) }))
      .sort((a, b) => b.razao - a.razao),
  };
}

/* ---------------- Composição do banco por padrão ----------------

   Mede o que o BANCO é, não o que a banca faz — e existe justamente para
   que a diferença fique visível. Se um padrão concentra muitos itens e
   quase todos caem para o mesmo lado, treinar por ele ensina o reflexo
   errado, e o app precisa avisar em vez de exibir como se fosse DNA da
   banca. Ver o comentário de DNA_BANCA em js/data.js. */
/* Separa o que a CEBRASPE escreveu do que nós escrevemos. Fica aqui, e
   não junto de `incidenciaRealPadroes()` lá embaixo, porque `composicaoPadroes`
   já precisa dela — declarada depois, funcionava só por a chamada ser em
   runtime, o que é o tipo de dependência que se quebra numa refatoração. */
const ORIGEM_PROVA_REAL = /CEBRASPE\s+(PC|PF|PRF)/i;

function composicaoPadroes() {
  /* SÓ O QUE NÓS ESCREVEMOS. A tela põe este número ao lado da incidência
     medida em prova real, e a frase que ele sustenta é "quando os dois
     discordam, o banco está te ensinando um reflexo que a banca não paga".
     Com os 131 itens reais dentro da conta, parte da linha de baixo era a
     mesma coisa da de cima, e a comparação perdia o sentido — além de
     maquiar o viés de autoria na direção favorável. */
  const base = questoesDoEscopo().filter(q => !ORIGEM_PROVA_REAL.test(q.origem || ""));
  if (!base.length) return [];
  const m = {};
  for (const q of base) {
    const c = (m[q.pegadinha] ||= { slug: q.pegadinha, C: 0, E: 0 });
    c[q.gabarito]++;
  }
  return Object.values(m).map(c => {
    const total = c.C + c.E;
    const dna = DNA_BANCA.find(d => d.slug === c.slug);
    const ladoDominante = c.C >= c.E ? "C" : "E";
    return {
      ...c, total, ladoDominante,
      nome: dna ? dna.nome : c.slug,
      /* `incidenciaEstimada` saiu daqui junto com o campo que a
         alimentava: era a estimativa editorial vestida de porcentagem, e
         nenhuma tela chegou a consumir este valor. O que substitui é a
         faixa qualitativa, que a tela lê direto do DNA_BANCA. */
      atencao: dna ? dna.atencao : null,
      participacao: total / base.length,
      previsibilidade: Math.max(c.C, c.E) / total,
    };
  }).sort((a, b) => b.total - a.total);
}

/* ---------------- Incidência dos padrões em PROVA REAL ----------------

   A contrapartida de `composicaoPadroes()`. Aquela mede o que NÓS
   escrevemos; esta mede o que a CEBRASPE escreveu, restringindo a conta
   aos itens cujo enunciado e gabarito vieram de caderno aplicado.

   É desta função que sai a faixa de `atencao` do DNA_BANCA — o validador
   recalcula e quebra o build se o arquivo divergir. Antes, a faixa era
   escrita à mão, e a ordem que ela declarava estava errada: punha termo
   absoluto em "alta" e literalidade em "media", quando nos itens reais
   literalidade responde por mais do que o dobro dos dois seguintes
   somados.

   ESCOPO. Deliberadamente NÃO passa por `questoesDoEscopo()`. A pergunta
   aqui é "como a banca constrói item C/E", que é da banca e não da
   trilha; filtrar por disciplina do candidato reduziria uma amostra já
   pequena a quase nada. Quando um padrão não faz sentido na trilha (não
   há jurisprudência em conteúdo clínico), quem resolve é a tela, que já
   escopa a LISTA de padrões exibidos. */
function questoesDeProvaReal() {
  return QUESTOES.filter(q => ORIGEM_PROVA_REAL.test(q.origem || ""));
}

function incidenciaRealPadroes() {
  const base = questoesDeProvaReal();
  const m = {};
  for (const q of base) m[q.pegadinha] = (m[q.pegadinha] || 0) + 1;

  return DNA_BANCA.map(d => {
    const n = m[d.slug] || 0;
    return {
      slug: d.slug, nome: d.nome, n,
      pct: base.length ? (100 * n / base.length) : 0,
      faixa: faixaDeAtencao(base.length ? (100 * n / base.length) : 0),
    };
  }).sort((a, b) => b.n - a.n);
}

/* Converte a frequência medida na faixa qualitativa. Os limiares vêm de
   LIMIARES_ATENCAO (js/data.js), declarados junto dos dados para que
   discordar da calibragem seja mudar um número, não caçar código. */
function faixaDeAtencao(pct) {
  if (pct >= LIMIARES_ATENCAO.alta) return "alta";
  if (pct >= LIMIARES_ATENCAO.media) return "media";
  return "baixa";
}

/* Tamanho da amostra real, para a tela poder declará-lo ao lado do
   número em vez de exibir porcentagem sem denominador. */
function totalProvaReal() { return questoesDeProvaReal().length; }

/* ---------------- Corte oficial e decisão de marcar em branco ----------------

   O edital da trilha traz o piso de eliminação em `corte` (ver EDITAIS, em
   js/data.js). Até aqui o app media desempenho contra uma meta arbitrária
   (metaTaxa, 0,75 por padrão); passa a medir também contra o número que
   elimina de fato.

   A projeção supõe que o candidato responde a todos os itens com a taxa de
   acerto que vem demonstrando. Nessa hipótese, acertando A de N itens, a nota
   líquida é A − (N − A) = 2A − N, porque no método Cebraspe o erro anula um
   acerto. É estimativa, não promessa: taxa medida em banco de questões tende
   a ser otimista frente à prova real. */
/* Φ(z) — acumulada da normal padrão, por aproximação de Abramowitz &
   Stegun (erro < 7,5e-8, muito além do que uma projeção de corte pede).
   Existe aqui porque o projeto não tem — nem quer — dependência externa. */
function normalAcumulada(z) {
  const sinal = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t
                  - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return 0.5 * (1 + sinal * y);
}

/* Desempenho contando SÓ a primeira resposta não-branca de cada questão.
   Reencontrar um item depois de ler a explicação e acertar é
   reconhecimento, não evocação — foi por isso que o SRS deixou de
   promover nesse caso. A taxa que projeta aprovação também não pode
   contar isso: medido no banco real, a diferença é de 8,4 pontos
   percentuais (78,7% com repetições contra 70,3% na primeira tentativa,
   com 92,5% de acerto nas repetições). */
function statsPrimeiraTentativa() {
  const porDisc = {};
  for (const q of questoesDoEscopo()) {
    const d = porDisc[q.disciplina] || (porDisc[q.disciplina] = { disciplina: q.disciplina, acertos: 0, n: 0 });
    const primeira = (APP_STATE.respostas[q.id] || []).find(h => !h.branco);
    if (!primeira) continue;
    d.n++;
    if (primeira.correta) d.acertos++;
  }
  const lista = Object.values(porDisc);
  const acertos = lista.reduce((s, d) => s + d.acertos, 0);
  const n = lista.reduce((s, d) => s + d.n, 0);
  return { porDisc, acertos, n, taxa: n ? acertos / n : null };
}

/* Projeção contra a nota de corte oficial.
 *
 * Três defeitos da versão anterior, os três com o mesmo efeito — dizer ao
 * aluno que ele passa quando não passa:
 *
 *  1. Usava a taxa de TODAS as tentativas, inflada pelas revisões.
 *  2. Extrapolava uma média geral para os 120 itens, ignorando que a
 *     prova tem composição fixa por disciplina. Quem responde só o que
 *     gosta via essa preferência virar prognóstico de aprovação.
 *  3. Devolvia um booleano. Com 40 respostas, "você passa" tem a mesma
 *     cara que com 4.000.
 *
 * Agora: taxa por disciplina (primeira tentativa, suavizada pela taxa
 * geral quando a amostra é pequena), ponderada pelos itens que cada
 * disciplina vale no bloco, com intervalo de confiança.
 *
 * A variância soma duas fontes distintas, que é o ponto de mostrar
 * intervalo: o sorteio da prova (mesmo sabendo exatamente sua taxa, cair
 * uma prova boa ou ruim varia) e a incerteza sobre a própria taxa (que
 * encolhe conforme o aluno responde mais). Disciplinas tratadas como
 * independentes — aproximação, mas o erro é pequeno perto do que se
 * ganha em não fingir precisão que não existe.
 */
function projecaoCorte() {
  const ed = editalDoFoco();
  if (!ed || !ed.corte || !ed.blocos) return null;

  const st = statsPrimeiraTentativa();
  if (st.taxa === null) return null;
  const itens = ed.itensPorDisciplina;

  /* Cada disciplina encolhe em direção a 0,5 — não em direção à taxa
     geral do aluno. A diferença importa e não é sutil:

     Com o prior sendo a média do próprio aluno, quem estudou 4 das 15
     disciplinas e vai bem nelas fazia as outras 11 herdarem esse mesmo
     desempenho, e a ponderação pelo edital não corrigia nada — era só um
     jeito mais elaborado de repetir a média das favoritas.

     0,5 é a linha de base honesta num item Certo/Errado: é o que se
     obtém chutando. Uma disciplina em que o aluno nunca respondeu nada
     entra valendo o chute, e não a competência que ele demonstrou em
     outra matéria. Isso também alinha a projeção com o que a prova
     cobra: cobrir o edital inteiro passa a melhorar o prognóstico,
     porque de fato melhora a nota. */
  const PRIOR_NEUTRO = 0.5;

  /* Disciplinas do bloco; "total" é a prova inteira. */
  const disciplinasDo = chave => chave === "total"
    ? Object.keys(itens)
    : (ed.blocos[chave] || []);

  const proj = ([chave, c]) => {
    const discs = disciplinasDo(chave);
    const pesoTotal = discs.reduce((s, d) => s + (itens[d] || 0), 0) || 1;
    let esperado = 0, variancia = 0;

    for (const nome of discs) {
      /* Itens que esta disciplina vale DENTRO deste bloco, reescalados
         para o total do bloco (os pesos do edital somam ~120, e p1/p2
         valem 50 e 70). */
      const nItens = (itens[nome] || 0) / pesoTotal * c.itens;
      if (!nItens) continue;
      const d = st.porDisc[nome] || { acertos: 0, n: 0 };
      const p = taxaSuavizada(d.acertos, d.n, PRIOR_NEUTRO) ?? PRIOR_NEUTRO;
      const m = d.n + PESO_PRIOR;               /* amostra efetiva com o prior */
      esperado += nItens * p;
      variancia += nItens * p * (1 - p)         /* sorteio da prova */
                 + nItens * nItens * p * (1 - p) / m;  /* incerteza da taxa */
    }

    /* Erro anula acerto, e a projeção supõe que o aluno responde tudo. */
    const liquida = 2 * esperado - c.itens;
    const desvio = 2 * Math.sqrt(Math.max(variancia, 0));

    /* A pergunta do aluno não é "qual meu intervalo", é "eu passo?". Um
       intervalo de 95% responde isso mal: numa prova de 120 itens a sorte
       sozinha vale ±19 pontos líquidos, então quase todo mundo cai em
       cima do corte e receberia "incerto" — inclusive quem tem 96% de
       chance de passar. A probabilidade responde direto. */
    const chance = desvio > 0
      ? 1 - normalAcumulada((c.pontos - liquida) / desvio)
      : (liquida >= c.pontos ? 1 : 0);

    return {
      chave, itens: c.itens, exigido: c.pontos, acertosExigidos: c.acertos,
      taxaExigida: c.acertos / c.itens,
      acertosProjetados: esperado,
      liquidaProjetada: liquida,
      folga: liquida - c.pontos,
      chance,
      intervalo: { min: liquida - 1.96 * desvio, max: liquida + 1.96 * desvio, desvio },
      /* Três estados em vez de booleano. Os cortes são de decisão, não de
         estatística: abaixo de 90% ainda há risco real de eliminação, e
         é honesto dizer isso em vez de garantir aprovação. */
      veredito: chance >= 0.90 ? "passa" : chance <= 0.10 ? "reprova" : "incerto",
    };
  };

  return {
    taxa: st.taxa,
    /* A taxa cheia fica exposta para a interface poder explicar a
       diferença em vez de deixar o aluno achar que um dos números está
       errado. */
    taxaComRevisoes: statsGerais().taxa,
    respostasConsideradas: st.n,
    trilha: ed.curto || ed.id,
    blocos: Object.entries(ed.corte).map(proj),
  };
}

/* Em prova com erro anulando acerto, chutar tem valor esperado 2p − 1, sendo p
   a probabilidade de acerto: só compensa acima de 50%. Abaixo disso, o branco
   (que vale 0) é melhor que o palpite. Esta função confronta esse limiar com o
   histórico real do candidato por nível de confiança declarada — o dado que o
   app já coleta a cada resposta — para dizer em que faixa ele deve deixar em
   branco em vez de arriscar. */
function orientacaoBranco() {
  const faixas = { 1: { n: 0, acertos: 0 }, 2: { n: 0, acertos: 0 }, 3: { n: 0, acertos: 0 } };
  for (const hist of Object.values(APP_STATE.respostas)) {
    for (const h of hist) {
      if (h.branco || !faixas[h.confianca]) continue;
      faixas[h.confianca].n++;
      if (h.correta) faixas[h.confianca].acertos++;
    }
  }
  const rotulos = { 1: "chute", 2: "dúvida", 3: "certeza" };
  const linhas = Object.entries(faixas)
    .filter(([, f]) => f.n >= 5)          /* abaixo disso a taxa é ruído */
    .map(([nivel, f]) => {
      const p = f.acertos / f.n;
      return {
        nivel: Number(nivel), rotulo: rotulos[nivel], n: f.n, taxa: p,
        valorEsperado: 2 * p - 1,          /* por item chutado */
        recomendaBranco: p < 0.5,
      };
    });
  /* Índice por nível para consulta pontual: a orientação passou a ser
     mostrada também dentro da questão, no momento em que o candidato
     declara a confiança — antes ela só existia como resumo no Dashboard,
     isto é, depois de a decisão já ter sido tomada. */
  const porNivel = Object.fromEntries(linhas.map(l => [l.nivel, l]));
  return { limiar: 0.5, linhas, porNivel, temDados: linhas.length > 0 };
}

/* Rótulos das faixas de confiança. Ficam aqui, e não na interface, porque
   a orientação de branco raciocina sobre eles: "chute" e "certeza" nomeiam
   a decisão que o candidato toma na prova, coisa que "baixa" e "alta" não
   faziam. */
const CONFIANCA_ROTULOS = { 1: "chute", 2: "dúvida", 3: "certeza" };

/* ---------------- Plano de Estudo Dirigido ----------------
   Cruza três coisas que já existiam isoladas no app: dias até a prova
   (config.dataProva), o quanto cada disciplina "pesa" na banca segundo
   a Predição de Cobrança (PREDICOES, por tema) e o desempenho real do
   usuário por disciplina (statsPorDisciplina). O resultado é uma lista
   priorizada do que estudar hoje, com uma cota sugerida de questões —
   não é mágica: é a meta semanal de sempre, só redistribuída pelo que
   mais pesa e pelo que está mais fraco. */
const PLANO_STATUS = {
  naoIniciada: { fator: 1.00, nome: "Não iniciada" },
  risco:       { fator: 1.35, nome: "Maior risco" },
  atencao:     { fator: 0.85, nome: "Precisa melhorar" },
  dominada:    { fator: 0.25, nome: "Domina" },
};
/* Disciplina fora do edital (treino complementar) pesa pouco, mas não zero. */
const PLANO_ITENS_PADRAO = 2;

/* Fases do plano em função dos dias até a prova. A estratégia muda: longe
   da prova, ampliar cobertura; perto, parar de ver conteúdo novo e revisar
   erros e questões vencidas na repetição espaçada. */
const PLANO_FASES = {
  base:    { id: "base",    nome: "Base",       desc: "Ampliar a cobertura do edital, sem descuidar do que já errou." },
  reforco: { id: "reforco", nome: "Reforço",   desc: "Reforçar os pontos fracos sem parar de cobrir o que falta." },
  reta:    { id: "reta",    nome: "Reta final", desc: "Só revisão: erros e questões vencidas. Nada de conteúdo novo." },
};
function faseDoPlano(diasRestantes) {
  if (diasRestantes === null) return PLANO_FASES.base;
  if (diasRestantes <= 7) return PLANO_FASES.reta;
  if (diasRestantes <= 30) return PLANO_FASES.reforco;
  return PLANO_FASES.base;
}

/* ---------------- Meta do dia ----------------
   O plano sabia sugerir uma cota diária, mas nunca fechava o ciclo: não
   contava o que já tinha sido feito hoje nem quanto faltava. Na prática a
   cota virava número solto — o candidato abria a aba, lia "14 questões
   hoje" e não tinha como saber se já as tinha feito. As funções abaixo
   fecham esse laço.

   ESCOPO: por trilha, e não global como o XP/streak. A distinção é a
   mesma já documentada na seção de gamificação — engajamento é global,
   desempenho é por trilha —, e aqui pesa um motivo extra e concreto: a
   cota do dia é consumida pelas disciplinas do plano, que são as do
   edital ativo. Contar respostas de outra trilha faria o total do dia
   não bater com a soma das disciplinas exibidas logo abaixo dele. */
const META_DIARIA_MIN = 1;
const META_DIARIA_MAX = 200;
function metaDiariaPadrao() { return Math.max(5, Math.round(META_SEMANAL_QUESTOES / 7)); }
function metaDiariaConfigurada() {
  const v = APP_STATE.config.metaDiaria;
  return Number.isFinite(v) && v > 0
    ? Math.min(META_DIARIA_MAX, Math.max(META_DIARIA_MIN, Math.round(v)))
    : metaDiariaPadrao();
}
/* Passar null volta ao padrão derivado da meta semanal. */
function definirMetaDiaria(valor) {
  const n = valor === null || valor === undefined || !Number.isFinite(+valor)
    ? null
    : Math.min(META_DIARIA_MAX, Math.max(META_DIARIA_MIN, Math.round(+valor)));
  APP_STATE.config.metaDiaria = n;
  salvarPerfil({ meta_diaria: n });
}

/* Quanto do dia já foi cumprido, com a quebra por disciplina que alimenta
   o "3 de 5 feitas" de cada linha do plano. Conta respostas, não questões
   distintas: refazer um item que você errou é estudo, e o contador do dia
   mede esforço do dia. */
function metaDoDia() {
  const inicio = new Date(); inicio.setHours(0, 0, 0, 0);
  const t0 = inicio.getTime();
  const discPorId = new Map(questoesDoEscopo().map(q => [q.id, q.disciplina]));
  const porDisciplina = {};
  let feitas = 0, acertos = 0, erros = 0, brancos = 0;
  for (const qid in APP_STATE.respostas) {
    const disc = discPorId.get(qid);
    if (!disc) continue;
    for (const h of APP_STATE.respostas[qid]) {
      if (h.data < t0) continue;
      feitas++;
      porDisciplina[disc] = (porDisciplina[disc] || 0) + 1;
      if (h.branco) brancos++; else if (h.correta) acertos++; else erros++;
    }
  }
  const meta = metaDiariaConfigurada();
  return { meta, feitas, porDisciplina, acertos, erros, brancos,
    restantes: Math.max(0, meta - feitas),
    pct: Math.min(100, Math.round(feitas / meta * 100)),
    cumprida: feitas >= meta,
    taxa: (acertos + erros) ? acertos / (acertos + erros) : null };
}

/* Monta a fila exata que fecha o dia: percorre o foco na ordem de
   prioridade e saca de cada disciplina a cota que ela ainda deve,
   respeitando o modo da fase (revisar erros x explorar conteúdo novo).
   É o que permite um único clique resolver "o que falta hoje" em vez de
   obrigar o candidato a entrar disciplina por disciplina. */
function montarFilaDoDia(foco, restantes) {
  if (restantes <= 0 || !foco.length) return [];
  const escopo = questoesDoEscopo();
  const usados = new Set();
  const fila = [];
  const saca = (it, n) => {
    if (n <= 0) return;
    const pool = escopo.filter(q => {
      if (q.disciplina !== it.disciplina || usados.has(q.id)) return false;
      const hist = APP_STATE.respostas[q.id] || [];
      if (it.modo === "revisar") {
        const u = hist[hist.length - 1];
        return !!u && !u.branco && !u.correta;
      }
      return !hist.length;
    });
    for (const q of embaralhar(pool).slice(0, n)) { usados.add(q.id); fila.push(q); }
  };
  /* Primeira passada respeita a cota de cada disciplina; a segunda completa
     o que sobrou quando alguma delas esgotou o próprio estoque. */
  for (const it of foco) {
    if (fila.length >= restantes) break;
    saca(it, Math.min(it.restantesHoje, restantes - fila.length));
  }
  for (const it of foco) {
    if (fila.length >= restantes) break;
    saca(it, restantes - fila.length);
  }
  return fila.slice(0, restantes);
}

function planoEstudoDirigido() {
  /* A data informada pelo candidato prevalece; na falta dela, usa-se a do
     edital da trilha, que agora existe em EDITAIS. Antes, quem não digitasse
     nada ficava sem contagem regressiva mesmo com data pública conhecida. */
  const ed = editalDoFoco();
  const dataProva = APP_STATE.config.dataProva || (ed && ed.dataProva) || null;
  let diasRestantes = null;
  if (dataProva) {
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    const alvo = new Date(dataProva + "T00:00:00");
    diasRestantes = Math.ceil((alvo - hoje) / 864e5);
  }
  const fase = faseDoPlano(diasRestantes);
  const agora = Date.now();

  /* Uma passada só, classificando cada questão liberada em "nova" (nunca
     respondida) ou "erro" (última resposta errada — mesma semântica do
     filtro 'só as que errei' do Banco, para o botão bater com a contagem). */
  const porDisc = {};
  for (const q of questoesDoEscopo()) {
    const d = porDisc[q.disciplina] || (porDisc[q.disciplina] =
      { disciplina: q.disciplina, total: 0, novas: 0, erros: 0, acertos: 0, totErros: 0 });
    d.total++;
    const hist = APP_STATE.respostas[q.id] || [];
    if (!hist.length) { d.novas++; continue; }
    for (const h of hist) { if (h.branco) continue; else if (h.correta) d.acertos++; else d.totErros++; }
    const ultima = hist[hist.length - 1];
    if (!ultima.branco && !ultima.correta) d.erros++;
  }

  const naReta = fase.id === "reta";
  const itens = Object.values(porDisc).map(d => {
    const taxa = (d.acertos + d.totErros) ? d.acertos / (d.acertos + d.totErros) : null;
    /* Sem trilha escolhida cai no peso padrão para todas — o plano ainda
       funciona, só não sabe o que vale mais naquela prova. */
    const itens = editalDoFoco()?.itensPorDisciplina || {};
    const peso = itens[d.disciplina] ?? PLANO_ITENS_PADRAO;
    let statusId;
    if (taxa === null) statusId = "naoIniciada";
    else if (taxa < 0.6) statusId = "risco";
    else if (taxa < 0.8) statusId = "atencao";
    else statusId = "dominada";
    /* Na reta final, conteúdo novo é descartado: só entra quem tem erro a
       revisar. Nas demais fases, novas e erros contam. */
    const pendentes = naReta ? d.erros : d.novas + d.erros;
    /* Modo do botão varia por fase, criando um gradiente real:
       - Base (>30d): cobertura primeiro — explora conteúdo novo se houver.
       - Reforço (8-30d): disciplina fraca com erro pendente vira revisão;
         as demais continuam cobrindo.
       - Reta (<=7d): só revisão. */
    const ehFraca = statusId === "risco" || statusId === "atencao";
    let modo;
    if (fase.id === "reta") modo = "revisar";
    else if (fase.id === "reforco" && ehFraca && d.erros > 0) modo = "revisar";
    else if (d.novas > 0) modo = "explorar";
    else modo = "revisar";
    const prioridade = pendentes > 0 ? peso * PLANO_STATUS[statusId].fator : 0;
    return { disciplina: d.disciplina, novas: d.novas, erros: d.erros, pendentes,
      taxa, statusId, statusNome: PLANO_STATUS[statusId].nome, peso, modo, prioridade };
  }).filter(it => it.pendentes > 0).sort((a, b) => b.prioridade - a.prioridade);

  /* A cota do dia agora sai de metaDoDia(), que já resolve o padrão x o
     valor escolhido pelo candidato. A soma por disciplina continua sendo
     uma redistribuição dessa cota pelo peso do edital e pela fraqueza. */
  const hoje = metaDoDia();
  const metaDiaria = hoje.meta;
  const somaPrioridade = itens.reduce((s, it) => s + it.prioridade, 0) || 1;
  const foco = itens.slice(0, 5).map(it => {
    const questoesSugeridas = Math.max(1, Math.round((it.prioridade / somaPrioridade) * metaDiaria));
    const feitasHoje = hoje.porDisciplina[it.disciplina] || 0;
    return { ...it, questoesSugeridas, feitasHoje,
      restantesHoje: Math.max(0, questoesSugeridas - feitasHoje),
      cumprida: feitasHoje >= questoesSugeridas };
  });
  const fila = montarFilaDoDia(foco, hoje.restantes);

  /* Revisão do dia, agregada: erros acumulados e questões vencidas no SRS. */
  const totalErros = Object.values(porDisc).reduce((s, d) => s + d.erros, 0);
  const devidasSRS = questoesDevidas().length;

  /* Trajetória (item 4): quanto do edital já foi ao menos visto uma vez, e
     em que estado estão as disciplinas. */
  const discs = Object.values(porDisc);
  const totalQuestoes = discs.reduce((s, d) => s + d.total, 0);
  const novasRestantes = discs.reduce((s, d) => s + d.novas, 0);
  const progresso = {
    total: totalQuestoes,
    vistas: totalQuestoes - novasRestantes,
    cobertura: totalQuestoes ? (totalQuestoes - novasRestantes) / totalQuestoes : 0,
    emRisco: itens.filter(it => it.statusId === "risco").length,
    dominadas: discs.filter(d => (d.acertos + d.totErros) && d.acertos / (d.acertos + d.totErros) >= 0.8).length,
  };

  /* Ritmo (item 3): só faz sentido com data marcada, dias pela frente e
     conteúdo novo a cobrir. Compara a meta diária com o ritmo necessário
     para ver tudo de novo antes da prova. */
  let ritmo = null;
  if (diasRestantes !== null && diasRestantes > 0 && novasRestantes > 0) {
    const ritmoNecessario = Math.ceil(novasRestantes / diasRestantes);
    const diasParaCobrir = Math.ceil(novasRestantes / metaDiaria);
    ritmo = {
      novasRestantes, ritmoNecessario, diasParaCobrir,
      noRitmo: diasParaCobrir <= diasRestantes,
    };
  }

  return { dataProva, diasRestantes, fase, metaDiaria, foco, hoje, fila,
    metaPersonalizada: Number.isFinite(APP_STATE.config.metaDiaria) && APP_STATE.config.metaDiaria > 0,
    totalDisciplinasPendentes: itens.length, totalErros, devidasSRS, progresso, ritmo };
}

/* ---------------- Seleção adaptativa (Módulo 7) ----------------
   Peso da questão = erroTopico*3 + devidaSRS*2.5 + naoVista*2
   + proximidadeDificuldade + prioridadeConcursoFoco */
/* Bônus máximo do peso do edital. Fica na casa dos demais termos da fórmula
   (erro na disciplina vale até 3, SRS vencido 2,5, questão nova 2) para
   pesar sem dominar: o edital diz o que mais cai, não o que você mais erra. */
const PESO_MAX_EDITAL = 3;

function pesoAdaptativo(q, ctx) {
  let w = 1;
  const s = statsQuestao(q.id);
  const discStats = ctx.porDisc.find(d => d.disciplina === q.disciplina);
  if (discStats && discStats.taxa !== null && discStats.taxa < 0.7) w += 3 * (0.7 - discStats.taxa) / 0.7 * 3;
  const srs = APP_STATE.srs[q.id];
  if (srs && srs.proxima <= Date.now()) w += 2.5;
  if (!s.tentativas) w += 2;
  /* dificuldade-alvo: taxa alta → sobe dificuldade */
  const taxaGeral = ctx.taxa ?? 0.5;
  const alvo = taxaGeral >= 0.8 ? 3 : taxaGeral >= 0.6 ? 2 : 1;
  w += 1 - Math.abs(q.dificuldade - alvo) * 0.4;
  /* Peso pelo item que a disciplina vale na prova da trilha: uma disciplina
     de 12,5 itens merece mais sorteio que uma de 7,8. Substituiu o antigo
     "+1 se q.concurso == foco", que virou redundante quando o foco passou a
     escopar o banco — e que estava errado no modelo novo, porque
     `q.concurso` é procedência, não pertinência à trilha. */
  /* O divisor fixo /10 com teto de 1,5 foi calibrado para a PC-AL, onde
     nenhuma disciplina passa de 10 itens — ali o teto nunca chegava a atuar.
     Na SESAU-AL ele quebrava o modelo: Fisioterapia vale 70 itens (58% da
     prova) e deveria receber 7,0, mas era achatada para 1,5, contra 1,25 de
     uma disciplina de 12,5 itens. Ou seja, uma diferença de 5,6x no peso da
     prova virava 1,2x no sorteio, e o simulado adaptativo tratava a
     disciplina que decide a aprovação quase como qualquer outra.

     Normalizar pelo maior peso da própria trilha corrige isso e torna a
     escala comparável entre editais de tamanhos diferentes: a disciplina
     mais pesada de cada trilha recebe o bônus máximo, e as demais entram na
     proporção exata em que a prova as cobra. */
  const itensDaTrilha = editalDoFoco()?.itensPorDisciplina;
  const itensDaQuestao = itensDaTrilha?.[q.disciplina];
  if (itensDaQuestao) {
    const maior = Math.max(...Object.values(itensDaTrilha));
    if (maior > 0) w += (itensDaQuestao / maior) * PESO_MAX_EDITAL;
  }
  if (s.ultima && !s.ultima.correta && !s.ultima.branco) w += 1.5;
  return Math.max(w, 0.1);
}

/* Fisher–Yates: garante que toda geração de questões saia em ordem
   diferente, nunca repetindo a ordem de inserção do banco. */
function embaralhar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* O filtro é sempre respeitado: se não houver questões suficientes (ou
   nenhuma) dentro do filtro escolhido, o resultado vem menor (ou vazio) —
   nunca se recorre ao banco inteiro para completar a quantidade pedida. */
function montarSimulado(n, filtros) {
  const pool = embaralhar(filtrarQuestoes(filtros || {}));
  const ctx = statsGerais();
  const pesos = pool.map(q => pesoAdaptativo(q, ctx));
  const escolhidas = [];
  const poolCopy = [...pool], pesosCopy = [...pesos];
  while (escolhidas.length < n && poolCopy.length) {
    const total = pesosCopy.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < pesosCopy.length; idx++) { r -= pesosCopy[idx]; if (r <= 0) break; }
    idx = Math.min(idx, poolCopy.length - 1);
    escolhidas.push(poolCopy[idx]);
    poolCopy.splice(idx, 1); pesosCopy.splice(idx, 1);
  }
  return escolhidas;
}

/* ---------------- Filtros combinados (Módulo 1) ----------------
   Cada campo categórico aceita um valor único (compatibilidade com quem
   monta o filtro na mão, como os atalhos "estudar esta disciplina") OU um
   array (o Banco de Questões, que agora marca vários ao mesmo tempo).
   Vazio/null/undefined sempre significa "sem restrição". */
function combina(filtro, valor) {
  if (filtro === null || filtro === undefined || filtro === "") return true;
  if (Array.isArray(filtro)) return !filtro.length || filtro.includes(valor);
  return filtro === valor;
}
/* Para campos onde o dado da questão já é uma lista (q.cargo pode valer
   para vários cargos) — passa se HOUVER interseção com o filtro. */
function combinaAlgum(filtro, valores) {
  if (filtro === null || filtro === undefined || filtro === "") return true;
  const alvo = Array.isArray(filtro) ? filtro : [filtro];
  return !alvo.length || valores.some(v => alvo.includes(v));
}

function filtrarQuestoes(f) {
  return QUESTOES.filter(q => {
    if (!questaoLiberada(q)) return false;
    /* `todoOBanco` é a válvula de escape do Banco de Questões: o escopo da
       trilha esconde ~90% do acervo, e esconder em silêncio é justamente o
       modo de falha que este projeto combate. A tela mostra o escopo ativo
       e um botão para ver tudo. */
    if (!f.todoOBanco && !noEscopo(q)) return false;
    /* Formato do item. Sem o filtro definido, entrega tudo — é o caso das
       chamadas internas (revisão devida, exemplos de estratégia), que não
       devem esconder item nenhum. As telas passam sempre um valor, e o
       valor inicial delas é FORMATO_PADRAO. */
    if (f.formato && formatoDaQuestao(q) !== f.formato) return false;
    if (!combina(f.concurso, q.concurso)) return false;
    if (!combinaAlgum(f.cargo, q.cargo)) return false;
    if (!combina(f.disciplina, q.disciplina)) return false;
    if (!combina(f.assunto, q.assunto)) return false;
    if (!combina(f.dificuldade, q.dificuldade)) return false;
    if (!combina(f.pegadinha, q.pegadinha)) return false;
    if (f.somenteErradas) {
      const s = statsQuestao(q.id);
      if (!s.ultima || s.ultima.branco || s.ultima.correta) return false;
    }
    if (f.somenteNaoRespondidas) {
      if ((APP_STATE.respostas[q.id] || []).length) return false;
    }
    if (f.busca) {
      /* q.comentario pode ainda não ter chegado (carga sob demanda); quem
         chama a busca dispara carregarTodosDetalhes() antes de renderizar,
         então isto é só uma rede de segurança. */
      const alvo = (q.enunciado + " " + q.assunto + " " + q.subassunto + " " + ((q.comentario && q.comentario.resolucao) || "")).toLowerCase();
      if (!alvo.includes(f.busca.toLowerCase())) return false;
    }
    return true;
  });
}

/* ---------------- Estratégias aplicáveis a uma questão ----------------
   O bloco pós-resposta antes trazia "Engenharia cognitiva", cujos campos
   em grande parte repetiam o que `comentario` já dizia (mede≈fundamento,
   ondeErra≈erroComum, regraMental≈macete, pegadinhaDesc≈comoBancaPensa).

   Em vez de comentar a questão duas vezes, sobe-se um nível: mostra-se a
   técnica geral que neutraliza aquele padrão. O elo já existia no dado —
   `q.pegadinha` guarda o slug do padrão e cada estratégia declara em
   `contraDNA` quais padrões ela combate. Todos os 12 padrões do DNA_BANCA
   têm ao menos uma estratégia, então nenhuma questão fica sem retorno.

   Ordenadas para dar primeiro a que tem exemplo na própria disciplina, o
   que torna a técnica mais reconhecível. */
function estrategiasDaQuestao(q) {
  if (!q || !q.pegadinha) return [];
  const casadas = ESTRATEGIAS.filter(e => {
    if (!(e.contraDNA || []).includes(q.pegadinha)) return false;
    /* Casar só por padrão produzia recomendação sem sentido: `literalidade`
       em Direito quer dizer "confira o artigo", mas em Estatística quer
       dizer "confira a fórmula" — e 189 questões de Português, RLM, TI e
       Estatística acabavam recebendo "leia a letra da lei nova". Por isso
       a estratégia pode declarar `escopo: "juridica"`. */
    if (e.escopo === "juridica" && !DISCIPLINAS_JURIDICAS.includes(q.disciplina)) return false;
    return true;
  });
  return casadas.sort((a, b) => {
    const disc = e => {
      const ex = QUESTOES_POR_ID.get(e.exemplo);
      return ex && ex.disciplina === q.disciplina ? 0 : 1;
    };
    return disc(a) - disc(b);
  });
}

/* ---------------- Detector de pegadinhas (Módulo 5) ---------------- */
/* \b não funciona com acentos em JS — usamos limites unicode explícitos */
function reTermo(termo, flags) {
  /* no modo unicode ('u'), só se pode escapar metacaracteres reais */
  const esc = termo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp("(?<![\\p{L}\\p{N}_])(" + esc + ")(?![\\p{L}\\p{N}_])", flags + "u");
}
function detectarPalavrasPerigosas(texto) {
  const found = [];
  for (const p of PALAVRAS_PERIGOSAS) {
    if (reTermo(p.termo, "i").test(texto)) found.push(p);
  }
  return found;
}
function highlightPerigos(texto) {
  let html = escapeHtml(texto);
  const encontrados = detectarPalavrasPerigosas(texto);
  for (const p of encontrados) {
    html = html.replace(reTermo(p.termo, "gi"), '<mark class="perigo" data-vies="' + p.vies + '" title="' + escapeHtml(p.explica) + '">$1</mark>');
  }
  return html;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------------- Destaque de trecho (Estratégias) ----------------
   Recorta o enunciado em torno do trecho que materializa uma estratégia.
   Como escapeHtml() mapeia caractere a caractere, escapar cada fatia
   isoladamente e concatenar equivale a escapar o texto inteiro — o que
   permite marcar o trecho sem risco de quebrar entidades HTML.
   Os trechos são definidos em fronteira de palavra (validado na suíte),
   de modo que o lookbehind/lookahead de reTermo() continua correto em
   cada fatia. */
function fatiarTrecho(texto, trecho) {
  if (!trecho) return null;
  const i = texto.indexOf(trecho);
  if (i < 0) return null;
  return { antes: texto.slice(0, i), meio: texto.slice(i, i + trecho.length), depois: texto.slice(i + trecho.length) };
}
function marcaTrecho(htmlInterno, titulo) {
  return '<mark class="trecho-estrategia"' + (titulo ? ' title="' + escapeHtml(titulo) + '"' : "") + ">" + htmlInterno + "</mark>";
}
/* Antes de responder: só o trecho da estratégia (as palavras perigosas
   continuam ocultas — são reveladas junto com o gabarito). */
function marcarTrechoEstrategia(texto, trecho, titulo) {
  const f = fatiarTrecho(texto, trecho);
  if (!f) return escapeHtml(texto);
  return escapeHtml(f.antes) + marcaTrecho(escapeHtml(f.meio), titulo) + escapeHtml(f.depois);
}
/* Depois de responder: palavras perigosas + trecho da estratégia. */
function highlightEnunciado(texto, trecho, titulo) {
  const f = fatiarTrecho(texto, trecho);
  if (!f) return highlightPerigos(texto);
  return highlightPerigos(f.antes) + marcaTrecho(highlightPerigos(f.meio), titulo) + highlightPerigos(f.depois);
}

/* ---------------- Helpers de catálogo ----------------
   Alimentam os seletores de filtro; seguem o escopo da trilha para que o
   dropdown não ofereça disciplina que não cai na prova do candidato.
   `todoOBanco` acompanha o filtro homônimo de filtrarQuestoes. */
function listaDisciplinas({ todoOBanco } = {}) {
  const base = todoOBanco ? QUESTOES.filter(questaoLiberada) : questoesDoEscopo();
  return [...new Set(base.map(q => q.disciplina))];
}
function listaAssuntos(disciplina, { todoOBanco } = {}) {
  const base = todoOBanco ? QUESTOES.filter(questaoLiberada) : questoesDoEscopo();
  return [...new Set(base.filter(q => combina(disciplina, q.disciplina)).map(q => q.assunto))];
}

function resetarDados() {
  APP_STATE.respostas = {}; APP_STATE.srs = {}; APP_STATE.sessoes = [];
  if (MODO === "cloud" && CURRENT_USER) {
    /* Descarta o que ainda não subiu: sem isso, a fila drenaria depois
       do DELETE e ressuscitaria justamente o progresso que o usuário
       acabou de mandar apagar. A cópia local vai junto, pelo mesmo
       motivo: uma leitura que falhasse em seguida restauraria da cópia
       o histórico recém-apagado. */
    gravarFila(lerFila().filter(i =>
      i.userId !== CURRENT_USER.id || i.tipo === "perfil"));
    salvarCacheNuvem(CURRENT_USER.id);
    notificarStatusFila();
    Promise.all([
      supa.from("respostas").delete().eq("user_id", CURRENT_USER.id),
      supa.from("srs").delete().eq("user_id", CURRENT_USER.id),
      supa.from("sessoes").delete().eq("user_id", CURRENT_USER.id),
    ]).then(results => {
      const erro = results.find(r => r.error);
      if (erro) console.error("Erro ao zerar dados na nuvem:", erro.error);
    });
  } else {
    saveLocalState();
  }
}

/* ---------------- Gamificação ----------------
   Camada inteiramente calculada a partir de respostas/sessões já
   persistidas — nenhuma tabela nova no Supabase, nenhum novo estado
   para sincronizar. XP, patente, sequência de dias, meta semanal e
   conquistas são recalculados a cada leitura. */
const PATENTES = [
  { nome: "Recruta",              xp: 0 },
  { nome: "Soldado",               xp: 100 },
  { nome: "Cabo",                  xp: 250 },
  { nome: "3º Sargento",           xp: 450 },
  { nome: "2º Sargento",           xp: 700 },
  { nome: "1º Sargento",           xp: 1000 },
  { nome: "Subtenente",            xp: 1400 },
  { nome: "Aspirante a Oficial",   xp: 1900 },
  { nome: "2º Tenente",            xp: 2500 },
  { nome: "1º Tenente",            xp: 3200 },
  { nome: "Capitão",               xp: 4000 },
  { nome: "Major",                 xp: 5000 },
  { nome: "Tenente-Coronel",       xp: 6200 },
  { nome: "Coronel",               xp: 7600 },
  { nome: "Delegado-Geral",        xp: 9200 },
];

const META_SEMANAL_QUESTOES = 100;

/* ---------------- Escopo da gamificação: GLOBAL, por decisão ----------------
   XP, patente, streak, meta semanal e conquistas somam TODAS as respostas e
   sessões, ignorando a trilha ativa. Isso é deliberado, e a distinção que
   sustenta a escolha é entre desempenho e engajamento:

     DESEMPENHO  (taxa, radar, cobertura, plano de estudo, revisões devidas,
                  evolução diária) → escopado por trilha, porque mede preparo
                  para UMA prova e misturar editais não descreve prova nenhuma.

     ENGAJAMENTO (XP, patente, streak, conquistas) → global, porque mede
                  esforço, não conteúdo.

   O motivo é concreto: escopar a patente faria quem estudou meses de PC-AL
   ver o nível zerar ao trocar para Fisioterapia, e quebraria o streak de
   quem estudou todos os dias — punindo justamente o hábito que o produto
   quer premiar. Por isso as funções abaixo NÃO usam questoesDoEscopo(); a
   ausência é intencional e não deve ser "corrigida" sem rever esta decisão. */

function calcularXP() {
  let xp = 0;
  for (const qid in APP_STATE.respostas) {
    for (const h of APP_STATE.respostas[qid]) {
      if (h.branco) xp += 1;
      else if (h.correta) xp += 10;
      else xp += 3;
    }
  }
  for (const s of APP_STATE.sessoes) xp += 25 + Math.max(0, s.liquida) * 2;
  return xp;
}

function nivelAtual(xp) {
  let idx = 0;
  for (let i = 0; i < PATENTES.length; i++) if (xp >= PATENTES[i].xp) idx = i;
  const atual = PATENTES[idx];
  const prox = PATENTES[idx + 1] || null;
  const pct = prox ? Math.round(((xp - atual.xp) / (prox.xp - atual.xp)) * 100) : 100;
  return { indice: idx, nome: atual.nome, xp, xpAtual: atual.xp,
    xpProximo: prox ? prox.xp : null, proximoNome: prox ? prox.nome : null, pct };
}

/* Sequência de dias com pelo menos uma resposta registrada. */
function calcularStreak() {
  const dias = new Set();
  for (const qid in APP_STATE.respostas) {
    for (const h of APP_STATE.respostas[qid]) dias.add(new Date(h.data).toISOString().slice(0, 10));
  }
  const lista = [...dias].sort();
  if (!lista.length) return { atual: 0, recorde: 0, ultimoDia: null };
  let recorde = 1, corrente = 1;
  for (let i = 1; i < lista.length; i++) {
    const diff = Math.round((new Date(lista[i]) - new Date(lista[i - 1])) / 864e5);
    corrente = diff === 1 ? corrente + 1 : 1;
    recorde = Math.max(recorde, corrente);
  }
  const hoje = new Date().toISOString().slice(0, 10);
  const ontem = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  const ultimoDia = lista[lista.length - 1];
  let atual = 0;
  if (ultimoDia === hoje || ultimoDia === ontem) {
    atual = 1;
    for (let i = lista.length - 1; i > 0; i--) {
      const diff = Math.round((new Date(lista[i]) - new Date(lista[i - 1])) / 864e5);
      if (diff === 1) atual++; else break;
    }
  }
  return { atual, recorde, ultimoDia };
}

/* Progresso na semana corrente (segunda 00h → agora). */
function calcularMetaSemanal() {
  const agora = new Date();
  const diaSemana = (agora.getDay() + 6) % 7; /* 0 = segunda */
  const inicioSemana = new Date(agora);
  inicioSemana.setHours(0, 0, 0, 0);
  inicioSemana.setDate(inicioSemana.getDate() - diaSemana);
  let n = 0;
  for (const qid in APP_STATE.respostas) {
    for (const h of APP_STATE.respostas[qid]) if (h.data >= inicioSemana.getTime()) n++;
  }
  return { respondidas: n, meta: META_SEMANAL_QUESTOES, pct: Math.min(100, Math.round(n / META_SEMANAL_QUESTOES * 100)) };
}

const CONQUISTAS = [
  { id: "primeiro-passo", nome: "Primeiro Passo", icone: "🎯", desc: "Responda sua primeira questão.",
    condicao: c => c.totalRespondidas >= 1 },
  { id: "recruta-dedicado", nome: "Recruta Dedicado", icone: "📘", desc: "Responda 50 questões.",
    condicao: c => c.totalRespondidas >= 50 },
  { id: "maratonista", nome: "Maratonista", icone: "🏃", desc: "Responda 500 questões.",
    condicao: c => c.totalRespondidas >= 500 },
  { id: "veterano", nome: "Veterano de Guerra", icone: "🎖️", desc: "Responda 1.500 questões.",
    condicao: c => c.totalRespondidas >= 1500 },
  { id: "sequencia-7", nome: "Sequência de Ferro", icone: "🔥", desc: "Estude 7 dias seguidos.",
    condicao: c => c.streak.recorde >= 7 },
  { id: "sequencia-30", nome: "Sequência Lendária", icone: "⚡", desc: "Estude 30 dias seguidos.",
    condicao: c => c.streak.recorde >= 30 },
  { id: "batismo-fogo", nome: "Batismo de Fogo", icone: "🚔", desc: "Conclua seu primeiro simulado ou Modo Prova.",
    condicao: c => c.sessoes.length >= 1 },
  { id: "rotina-aprovado", nome: "Rotina de Aprovado", icone: "📋", desc: "Conclua 10 simulados ou provas.",
    condicao: c => c.sessoes.length >= 10 },
  { id: "gestao-branco", nome: "Gestão de Branco", icone: "🧊", desc: "Conclua um simulado com 10+ questões sem deixar nenhuma em branco.",
    condicao: c => c.sessoes.some(s => s.n >= 10 && s.brancos === 0) },
  { id: "nota-mil", nome: "Nota Mil", icone: "💯", desc: "Acerte todas as questões de um simulado com 10 ou mais itens.",
    condicao: c => c.sessoes.some(s => s.n >= 10 && s.erros === 0 && s.brancos === 0) },
  { id: "mira-certeira", nome: "Mira Certeira", icone: "🏆", desc: "Atinja 90% de acerto geral com 50+ questões respondidas.",
    condicao: c => c.taxaGeral !== null && c.taxaGeral >= 0.9 && c.totalRespondidas >= 50 },
  { id: "especialista", nome: "Especialista de Disciplina", icone: "🧠", desc: "Domine uma disciplina com 85%+ de acerto em 20+ questões.",
    condicao: c => c.disciplinasEspecialista >= 1 },
  { id: "coruja", nome: "Coruja da Delegacia", icone: "🦉", desc: "Responda uma questão entre 0h e 5h da manhã.",
    condicao: c => c.temRespostaMadrugada },
];

function calcularConquistas() {
  const g = statsGerais();
  const streak = calcularStreak();
  const totalRespondidas = g.acertos + g.erros + g.brancos;
  let temRespostaMadrugada = false;
  for (const qid in APP_STATE.respostas) {
    for (const h of APP_STATE.respostas[qid]) {
      const hora = new Date(h.data).getHours();
      if (hora >= 0 && hora < 5) temRespostaMadrugada = true;
    }
  }
  const disciplinasEspecialista = statsPorDisciplina()
    .filter(d => d.taxa !== null && d.taxa >= 0.85 && (d.acertos + d.erros) >= 20).length;
  const ctx = { totalRespondidas, taxaGeral: g.taxa, streak, sessoes: APP_STATE.sessoes, disciplinasEspecialista, temRespostaMadrugada };
  return CONQUISTAS.map(a => ({ id: a.id, nome: a.nome, icone: a.icone, desc: a.desc, desbloqueada: !!a.condicao(ctx) }));
}

/* API pública consumida pela interface. */
function gamificacao() {
  const xp = calcularXP();
  const nivel = nivelAtual(xp);
  const streak = calcularStreak();
  const semana = calcularMetaSemanal();
  const conquistas = calcularConquistas();
  return { nivel, streak, semana, conquistas,
    desbloqueadas: conquistas.filter(c => c.desbloqueada).length, totalConquistas: conquistas.length };
}
