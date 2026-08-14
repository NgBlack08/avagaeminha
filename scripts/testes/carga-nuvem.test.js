/*
 * Carga do estado da nuvem.
 *
 * Regressão de um defeito visto em PRODUÇÃO, com conta real: no primeiro
 * carregamento a frio o app mostrou "plano gratuito" e não-admin para uma
 * conta que é completa e administradora. Recarregando, vinha certo.
 *
 * A causa era o descarte do erro das seis consultas
 * (`const [{ data: perfil }, ...]`): qualquer falha transitória virava o
 * valor PADRÃO em silêncio. Duas consequências, as duas cobertas aqui:
 *
 *   - perfil ilegível  => assinante pagante rebaixado para o gratuito
 *   - respostas ilegíveis => histórico inteiro sumindo da tela
 *
 * Sem rede as seis falham juntas, o que anulava a casca offline do
 * service worker: abrir sem conexão mostrava um app zerado.
 *
 * A regra que estes testes fixam: falha de LEITURA nunca vira dado.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp: criarAppBase } = require("./harness.js");

/* Relógio automático: a carga espera entre as tentativas de leitura, e com
   relógio manual esse await nunca resolveria. */
const criarApp = (o = {}) => criarAppBase({ ...o, relogioAutomatico: true });

const USUARIO = { id: "u-1" };

/* Resposta típica do servidor para um assinante com histórico. */
function povoarServidor(app, { plano = "completo", isAdmin = true } = {}) {
  const qid = app.json("QUESTOES[0]").id;
  Object.assign(app.supa.leitura.linhas, {
    profiles: { id: USUARIO.id, tema: "light", plano, is_admin: isAdmin,
                nickname: "Delegado_93", cargo_foco: "Agente", concurso_foco: "PCAL",
                meta_taxa: 0.8, onboarding_visitas: {} },
    respostas: [
      { qid, resposta: "C", correta: true, branco: false, tempo_ms: 5000,
        confianca: 3, created_at: new Date(Date.now() - 864e5).toISOString() },
    ],
    srs: [{ qid, nivel: 2, proxima: new Date(Date.now() + 864e5).toISOString() }],
    sessoes: [{ created_at: new Date(Date.now() - 864e5).toISOString(),
                n: 10, acertos: 8, erros: 2, brancos: 0, liquida: 6, tempo_total: 600 }],
    assinaturas: null,
    feedback_questao: [],
  });
  return qid;
}

const cfg = app => app.json("APP_STATE.config");

test("leitura íntegra popula o estado e guarda a cópia local", async () => {
  const app = criarApp();
  povoarServidor(app);

  await app.chamar("carregarEstadoNuvem", USUARIO);

  assert.equal(cfg(app).plano, "completo");
  assert.equal(cfg(app).isAdmin, true);
  assert.equal(app.get("Object.keys(APP_STATE.respostas).length"), 1);
  assert.equal(app.get("APP_STATE.sessoes.length"), 1);
  assert.equal(app.json("statusSincronizacao()").desatualizado, false);
  assert.ok(app.localStorage.getItem("questlab-v1:nuvem"), "cópia local gravada");
});

test("perfil ilegível NÃO rebaixa o assinante para o plano gratuito", async () => {
  const app = criarApp();
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);   /* 1ª carga: tudo certo */

  app.supa.leitura.falhar.add("profiles");            /* agora só o perfil falha */
  await app.chamar("carregarEstadoNuvem", USUARIO);

  /* O defeito original devolvia "gratuito" e isAdmin false aqui. */
  assert.equal(cfg(app).plano, "completo", "plano preservado da cópia local");
  assert.equal(cfg(app).isAdmin, true, "permissão preservada");
  assert.equal(app.json("statusSincronizacao()").desatualizado, true);
});

test("respostas ilegíveis NÃO esvaziam o histórico na tela", async () => {
  const app = criarApp();
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);

  app.supa.leitura.falhar.add("respostas");
  await app.chamar("carregarEstadoNuvem", USUARIO);

  assert.equal(app.get("Object.keys(APP_STATE.respostas).length"), 1,
    "o dado segue no servidor; some da tela era o bug");
  assert.equal(app.json("statusSincronizacao()").desatualizado, true);
});

test("sem rede, o app abre com a última cópia em vez de zerado", async () => {
  const app = criarApp();
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);

  /* Offline: as seis consultas falham de uma vez. */
  for (const t of ["profiles", "respostas", "srs", "sessoes", "assinaturas", "feedback_questao"]) {
    app.supa.leitura.falhar.add(t);
  }
  app.rodar(`navigator.onLine = false;`);
  await app.chamar("carregarEstadoNuvem", USUARIO);

  assert.equal(cfg(app).plano, "completo");
  assert.equal(app.get("Object.keys(APP_STATE.respostas).length"), 1);
  assert.equal(app.get("APP_STATE.sessoes.length"), 1);
  assert.equal(app.json("statusSincronizacao()").desatualizado, true,
    "e o aluno é avisado de que está vendo cópia");
});

test("falha transitória se resolve na segunda tentativa, sem marcar desatualizado", async () => {
  const app = criarApp();
  povoarServidor(app);
  /* Era esta a corrida de produção: a 1ª consulta sai antes de o token
     estar pronto, a 2ª passa. */
  app.supa.leitura.falhar.add("profiles");
  const original = app.supa.cliente.from;
  let idas = 0;
  app.supa.cliente.from = (nome) => {
    if (nome === "profiles") {
      idas++;
      if (idas > 1) app.supa.leitura.falhar.delete("profiles");
    }
    return original(nome);
  };

  await app.chamar("carregarEstadoNuvem", USUARIO);

  assert.ok(idas > 1, "houve nova tentativa");
  assert.equal(cfg(app).plano, "completo");
  assert.equal(app.json("statusSincronizacao()").desatualizado, false);
});

test("servidor dizendo 'gratuito' rebaixa de verdade", async () => {
  const app = criarApp();
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);
  assert.equal(cfg(app).plano, "completo");

  /* Assinatura cancelada: o servidor RESPONDEU, e a resposta é gratuito.
     Preservar aqui seria o erro oposto — dar de graça o que não foi pago. */
  app.supa.leitura.linhas.profiles.plano = "gratuito";
  app.supa.leitura.linhas.profiles.is_admin = false;
  await app.chamar("carregarEstadoNuvem", USUARIO);

  assert.equal(cfg(app).plano, "gratuito");
  assert.equal(cfg(app).isAdmin, false);
  assert.equal(app.json("statusSincronizacao()").desatualizado, false);
});

test("usuário sem linha em profiles usa o padrão, não a cópia de outro", async () => {
  const app = criarApp();
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);

  /* maybeSingle devolve data null SEM erro — é "não existe", não "não li". */
  app.supa.leitura.linhas.profiles = null;
  await app.chamar("carregarEstadoNuvem", USUARIO);

  assert.equal(cfg(app).plano, "gratuito");
  assert.equal(app.json("statusSincronizacao()").desatualizado, false);
});

test("a cópia local nunca atravessa contas", async () => {
  const app = criarApp();
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);

  /* Outra conta na mesma máquina, e o servidor fora do ar. */
  for (const t of ["profiles", "respostas", "srs", "sessoes", "assinaturas", "feedback_questao"]) {
    app.supa.leitura.falhar.add(t);
  }
  await app.chamar("carregarEstadoNuvem", { id: "outro-usuario" });

  assert.notEqual(cfg(app).nickname, "Delegado_93",
    "o progresso de um usuário não pode aparecer para outro");
});

test("cópia parcial não é gravada por cima da boa", async () => {
  const app = criarApp();
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);
  const boa = app.localStorage.getItem("questlab-v1:nuvem");

  app.supa.leitura.falhar.add("respostas");
  await app.chamar("carregarEstadoNuvem", USUARIO);

  assert.equal(app.localStorage.getItem("questlab-v1:nuvem"), boa,
    "gravar leitura incompleta congelaria o buraco");
});

test("sair da conta apaga a cópia local", async () => {
  const app = criarApp();
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);
  assert.ok(app.localStorage.getItem("questlab-v1:nuvem"));

  app.chamar("voltarModoLocal");

  /* Máquina compartilhada: sair não pode deixar meses de estudo legíveis
     para o próximo. É a mesma razão do logout por inatividade. */
  assert.equal(app.localStorage.getItem("questlab-v1:nuvem"), null);
  assert.equal(app.json("statusSincronizacao()").desatualizado, false);
});

test("zerar o progresso não deixa a cópia ressuscitá-lo", async () => {
  const app = criarApp();
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);
  app.logar(USUARIO.id);

  app.chamar("resetarDados");
  /* Agora o servidor fica ilegível: a carga cai na cópia local. */
  for (const t of ["profiles", "respostas", "srs", "sessoes", "assinaturas", "feedback_questao"]) {
    app.supa.leitura.falhar.add(t);
  }
  await app.chamar("carregarEstadoNuvem", USUARIO);

  assert.equal(app.get("Object.keys(APP_STATE.respostas).length"), 0);
  assert.equal(app.get("APP_STATE.sessoes.length"), 0);
});

test("cópia local corrompida não derruba a carga", async () => {
  const app = criarApp({ storage: { "questlab-v1:nuvem": "{lixo" } });
  povoarServidor(app);
  await app.chamar("carregarEstadoNuvem", USUARIO);
  assert.equal(cfg(app).plano, "completo");
});

/* ------------------------------------------------------------------
   Paginação — o defeito que fazia o app "parar de salvar"

   O PostgREST devolve no máximo `max-rows` linhas por requisição (mil,
   no padrão do Supabase). A consulta não pedia faixa nenhuma, então era
   cortada em silêncio: `error` nulo e `data` incompleto.

   Visto em produção com conta real de 1.042 respostas. As respostas
   continuavam sendo GRAVADAS — o caminho de escrita nunca teve
   problema —, mas paravam de voltar na leitura. Dashboard, diagnóstico
   por disciplina e revisão espaçada congelavam, e cada resposta nova
   reforçava a impressão de que nada estava sendo salvo.

   Como a ordenação é por `created_at` ascendente, o corte caía sobre as
   linhas MAIS RECENTES: sumia exatamente o estudo do dia.
   ------------------------------------------------------------------ */

/* Gera n respostas distribuídas em qids reais do banco. A mais recente
   fica por último, que é a posição que o corte comia. */
function muitasRespostas(app, n) {
  const qids = app.json("QUESTOES.slice(0, 400).map(q => q.id)");
  const base = Date.now() - n * 60000;
  return Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    qid: qids[i % qids.length],
    resposta: "C", correta: true, branco: false, tempo_ms: 30000, confianca: 2,
    created_at: new Date(base + i * 60000).toISOString(),
  }));
}

test("histórico acima do teto do servidor vem INTEIRO, em páginas", async () => {
  const app = criarApp();
  povoarServidor(app);
  const N = 2500;                     /* 2,5 páginas de mil */
  app.supa.leitura.linhas.respostas = muitasRespostas(app, N);

  await app.chamar("carregarEstadoNuvem", USUARIO);

  const carregadas = app.get(
    "Object.values(APP_STATE.respostas).reduce((s, l) => s + l.length, 0)");
  assert.equal(carregadas, N,
    `esperava ${N} respostas carregadas; o defeito trazia só a 1ª página`);
});

test("a resposta MAIS RECENTE sobrevive à paginação", async () => {
  const app = criarApp();
  povoarServidor(app);
  const linhas = muitasRespostas(app, 2500);
  const ultima = linhas[linhas.length - 1];
  app.supa.leitura.linhas.respostas = linhas;

  await app.chamar("carregarEstadoNuvem", USUARIO);

  const quando = new Date(ultima.created_at).getTime();
  const achou = app.get(
    `(APP_STATE.respostas[${JSON.stringify(ultima.qid)}] || []).some(r => r.data === ${quando})`);
  /* Era esta a queixa: "respondi hoje e o diagnóstico não mudou". */
  assert.equal(achou, true, "a resposta mais recente não voltou do servidor");
});

test("teto menor que a página pedida não faz a leitura parar cedo", async () => {
  const app = criarApp();
  povoarServidor(app);
  /* Servidor com max-rows apertado: o laço tem de avançar pelo que
     RECEBEU, não pelo que pediu — senão pula linhas ou para na 1ª página. */
  app.supa.leitura.maxRows = 250;
  app.supa.leitura.linhas.respostas = muitasRespostas(app, 900);

  await app.chamar("carregarEstadoNuvem", USUARIO);

  const carregadas = app.get(
    "Object.values(APP_STATE.respostas).reduce((s, l) => s + l.length, 0)");
  assert.equal(carregadas, 900);
});
