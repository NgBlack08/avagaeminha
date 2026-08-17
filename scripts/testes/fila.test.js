/*
 * Fila de escrita resiliente.
 *
 * Cobre o pior defeito latente que o sistema já teve: gravar progresso na
 * nuvem era dispare-e-esqueça, e uma falha de rede fazia a resposta sumir
 * no F5 seguinte sem nenhum aviso.
 *
 * Estes cenários foram verificados uma vez no navegador, à mão. Aqui viram
 * cobertura repetível — que é o ponto: a verificação manual não sobrevive
 * ao próximo refactor.
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { criarApp } = require("./harness.js");

/* App logado, com uma questão real do banco à mão. */
function appLogado({ online = true, userId = "u1" } = {}) {
  const app = criarApp({ online });
  app.logar(userId);
  const q = app.json("QUESTOES[0]");
  return { app, qid: q.id, gabarito: q.gabarito };
}

const fila = app => app.json(`lerFila()`);
const pendentes = app => app.json("statusFila()").pendentes;

test("offline: responder enfileira e não envia nada", async () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 4200, 2);
  await app.timers.rodar();

  assert.equal(pendentes(app), 2, "uma resposta + um registro de SRS");
  assert.equal(app.supa.chamadas.length, 0, "nada foi para a rede");
});

test("offline: a resposta continua visível no estado local", () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 4200, 2);
  assert.equal(app.json(`APP_STATE.respostas[${JSON.stringify(qid)}]`).length, 1);
});

test("created_at guarda o horário da resposta, não o do envio", () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  const antes = Date.now();
  app.chamar("registrarResposta", qid, gabarito, 4200, 2);
  const item = fila(app).find(i => i.tipo === "resposta");
  const gravado = new Date(item.payload.created_at).getTime();
  /* Se fosse o now() do envio, uma fila drenada horas depois jogaria a
     resposta no dia errado e quebraria a meta do dia e a sequência. */
  assert.ok(Math.abs(gravado - antes) < 5000, `created_at fora da janela: ${item.payload.created_at}`);
});

test("escritas de SRS do mesmo item colapsam", async () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  app.chamar("registrarResposta", qid, gabarito, 3000, 3);
  await app.timers.rodar();

  const f = fila(app);
  assert.equal(f.filter(i => i.tipo === "resposta").length, 2, "toda resposta conta");
  assert.equal(f.filter(i => i.tipo === "srs").length, 1, "só o último estado de SRS importa");
});

test("quando a rede volta, a fila drena por inteiro", async () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();

  app.rodar(`navigator.onLine = true;`);
  await app.chamar("flushFila");

  assert.equal(pendentes(app), 0);
  assert.equal(app.supa.escritas("respostas").length, 1);
  assert.equal(app.supa.escritas("srs").length, 1);
});

test("o envio é idempotente: client_id + onConflict + ignoreDuplicates", async () => {
  const { app, qid, gabarito } = appLogado();
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();

  const escrita = app.supa.escritas("respostas")[0];
  /* Sem isto, um insert que commitou mas cuja resposta se perdeu na rede
     viraria resposta duplicada no retry, inflando as estatísticas. */
  assert.equal(escrita.op, "upsert");
  assert.equal(escrita.opts.onConflict, "user_id,client_id");
  assert.equal(escrita.opts.ignoreDuplicates, true);
  assert.match(escrita.linha.client_id, /^[0-9a-f-]{36}$/i);
});

test("o client_id enviado é o id do próprio item da fila", async () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();
  const idNaFila = fila(app).find(i => i.tipo === "resposta").id;

  app.rodar(`navigator.onLine = true;`);
  await app.chamar("flushFila");

  assert.equal(app.supa.escritas("respostas")[0].linha.client_id, idNaFila);
});

test("falha de rede mantém o item na fila e conta a tentativa", async () => {
  const { app, qid, gabarito } = appLogado();
  app.supa.controle.modo = "rede";
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();

  assert.ok(pendentes(app) > 0, "nada pode ser descartado por falha de rede");
  assert.ok(fila(app)[0].tentativas >= 1);
});

test("depois da falha, o reenvio esvazia a fila sem perder nada", async () => {
  const { app, qid, gabarito } = appLogado();
  app.supa.controle.modo = "rede";
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();
  assert.ok(pendentes(app) > 0);

  app.supa.controle.modo = "ok";
  await app.chamar("flushFila");

  assert.equal(pendentes(app), 0);
  assert.equal(app.json(`APP_STATE.respostas[${JSON.stringify(qid)}]`).length, 1);
});

test("falha de rede reagenda o retry com espera crescente", async () => {
  const { app, qid, gabarito } = appLogado();
  app.supa.controle.modo = "rede";
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);

  await app.timers.rodar();
  const primeira = app.timers.esperas()[0];
  await app.timers.rodar();
  const segunda = app.timers.esperas()[0];

  assert.ok(primeira > 0, "o retry precisa estar agendado");
  assert.ok(segunda > primeira, `espera não cresceu: ${primeira} → ${segunda}`);
});

test("erro de forma do dado é descartado em vez de travar a fila", async () => {
  const { app, qid, gabarito } = appLogado();
  app.supa.controle.modo = "erro";
  app.supa.controle.erro = { code: "23502", message: "null value" };
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();

  /* Retentar nunca resolveria, e manter o item preso bloquearia tudo que
     está atrás dele na fila. */
  assert.equal(pendentes(app), 0);
});

test("erro desconhecido do servidor é retentado, não descartado", async () => {
  const { app, qid, gabarito } = appLogado();
  app.supa.controle.modo = "erro";
  app.supa.controle.erro = { code: "XX000", message: "erro interno" };
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();

  assert.ok(pendentes(app) > 0, "na dúvida, preserva o dado do aluno");
});

test("item que esgota as tentativas para de bloquear a fila", async () => {
  const { app, qid, gabarito } = appLogado();
  app.supa.controle.modo = "rede";
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);

  /* Cada rodada tenta um item e para na primeira falha, então a fila só
     esvazia depois de cada item esgotar suas tentativas — o teto do laço
     é folga, não expectativa de quantas rodadas serão precisas. */
  const teto = app.get("FILA_MAX_TENTATIVAS") * 4;
  for (let i = 0; i < teto && pendentes(app) > 0; i++) await app.timers.rodar();

  assert.equal(pendentes(app), 0);
});

test("recarga offline: reaplicarPendentes devolve o que não subiu", async () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 5500, 3);
  await app.timers.rodar();

  /* Simula o que carregarEstadoNuvem() faz: sobrescreve o estado com o
     que veio do servidor — que ainda não tem esta resposta. */
  app.rodar(`APP_STATE.respostas = {}; APP_STATE.srs = {}; APP_STATE.sessoes = [];`);
  app.chamar("reaplicarPendentes", "u1");

  assert.equal(app.json(`APP_STATE.respostas[${JSON.stringify(qid)}]`).length, 1);
  assert.ok(app.json(`APP_STATE.srs[${JSON.stringify(qid)}]`), "o SRS também volta");
});

test("reaplicar duas vezes não duplica a resposta", async () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 5500, 3);
  await app.timers.rodar();

  app.rodar(`APP_STATE.respostas = {};`);
  app.chamar("reaplicarPendentes", "u1");
  app.chamar("reaplicarPendentes", "u1");

  assert.equal(app.json(`APP_STATE.respostas[${JSON.stringify(qid)}]`).length, 1);
});

test("a fila é isolada por usuário", async () => {
  const { app, qid, gabarito } = appLogado({ online: false, userId: "ana" });
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();

  assert.ok(app.chamar("filaPendentes", "ana").length > 0);
  assert.equal(app.chamar("filaPendentes", "bruno").length, 0,
    "dado de um usuário nunca pode ser enviado como de outro");
});

test("outro usuário não drena a fila alheia", async () => {
  const { app, qid, gabarito } = appLogado({ online: false, userId: "ana" });
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();

  app.rodar(`navigator.onLine = true;`);
  app.logar("bruno");
  await app.chamar("flushFila");

  assert.equal(app.supa.chamadas.length, 0);
  assert.ok(app.chamar("filaPendentes", "ana").length > 0, "a fila da Ana segue intacta");
});

test("zerar o progresso descarta a fila", async () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();
  assert.ok(pendentes(app) > 0);

  app.chamar("resetarDados");

  /* Sem isso a fila drenaria depois do DELETE e ressuscitaria justamente
     o progresso que o usuário mandou apagar. */
  assert.equal(pendentes(app), 0);
});

test("a sessão de simulado também entra na fila", async () => {
  const { app } = appLogado({ online: false });
  app.chamar("registrarSessao", { data: Date.now(), n: 10, acertos: 7, erros: 2, brancos: 1, liquida: 5, tempoTotal: 600 });
  await app.timers.rodar();

  const item = fila(app).find(i => i.tipo === "sessao");
  assert.ok(item, "sessão enfileirada");
  assert.equal(item.payload.acertos, 7);
  assert.ok(item.payload.created_at, "sessão também carimba o horário real");
});

test("statusFila separa respostas de registros internos", async () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();

  const st = app.json("statusFila()");
  assert.equal(st.pendentes, 2, "conta tudo, para controlar o envio");
  assert.equal(st.respostas, 1, "mostra só o que o aluno reconhece como trabalho dele");
  assert.equal(st.online, false);
});

test("mudança na fila é anunciada por evento para a interface", () => {
  const { app, qid, gabarito } = appLogado({ online: false });
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);

  const evento = app.eventos.find(e => e.tipo === "questlab:fila");
  assert.ok(evento, "a interface precisa saber para mostrar o aviso");
  assert.equal(typeof evento.detail.pendentes, "number");
});

test("fila ilegível no storage não derruba o app", () => {
  const app = criarApp({ storage: { "questlab-v1:fila": "{lixo" } });
  app.logar("u1");
  assert.deepEqual(app.json("lerFila()"), []);
  assert.equal(app.json("statusFila()").pendentes, 0);
});

test("itens malformados na fila são ignorados", () => {
  const app = criarApp({
    storage: { "questlab-v1:fila": JSON.stringify([null, { id: "x" }, { tipo: "resposta" }]) },
  });
  app.logar("u1");
  assert.deepEqual(app.json("lerFila()"), [], "todo item sem id/tipo/payload é descartado");
});

/* ---------------- configuração do perfil ----------------
   Estas escritas eram dispare-e-esqueça: o aluno ajustava a meta, via o
   número mudar na tela, e ao recarregar encontrava o valor antigo de
   volta. Passaram para a mesma fila das respostas. */

test("mudança de configuração é enfileirada, não disparada às cegas", async () => {
  const { app } = appLogado({ online: false });
  app.chamar("definirMetaDiaria", 40);
  await app.timers.rodar();

  const item = fila(app).find(i => i.tipo === "perfil");
  assert.ok(item, "configuração precisa sobreviver à falta de rede");
  assert.equal(item.payload.campos.meta_diaria, 40);
  assert.equal(app.supa.chamadas.length, 0);
});

test("configurações pendentes colapsam mesclando, sem perder campo", async () => {
  const { app } = appLogado({ online: false });
  app.chamar("definirMetaDiaria", 40);
  app.chamar("definirDataProva", "2026-12-06");
  app.chamar("definirMetaTaxa", 0.9);
  await app.timers.rodar();

  const perfis = fila(app).filter(i => i.tipo === "perfil");
  assert.equal(perfis.length, 1, "só o estado final importa");
  /* Substituir em vez de mesclar perderia os dois primeiros campos. */
  assert.equal(perfis[0].payload.campos.meta_diaria, 40);
  assert.equal(perfis[0].payload.campos.data_prova, "2026-12-06");
  assert.equal(perfis[0].payload.campos.meta_taxa, 0.9);
});

test("quando a rede volta, a configuração sobe como update do perfil", async () => {
  const { app } = appLogado({ online: false });
  app.chamar("definirMetaDiaria", 40);
  await app.timers.rodar();

  app.rodar(`navigator.onLine = true;`);
  await app.chamar("flushFila");

  assert.equal(pendentes(app), 0);
  assert.equal(app.supa.escritas("profiles")[0].op, "update");
});

test("configuração pendente reaparece após recarga offline", async () => {
  const { app } = appLogado({ online: false });
  app.chamar("definirMetaDiaria", 40);
  await app.timers.rodar();

  /* Simula o que carregarEstadoNuvem faz: sobrescreve com o servidor,
     que ainda não recebeu a alteração. */
  app.rodar(`APP_STATE.config.metaDiaria = null;`);
  app.chamar("reaplicarPendentes", "u1");

  assert.equal(app.get("APP_STATE.config.metaDiaria"), 40);
});

test("zerar o progresso não descarta configuração pendente", async () => {
  const { app } = appLogado({ online: false });
  app.chamar("definirMetaDiaria", 40);
  const q = app.json("QUESTOES[0]");
  app.chamar("registrarResposta", q.id, q.gabarito, 4000, 2);
  await app.timers.rodar();

  app.chamar("resetarDados");

  /* Apagar o progresso é uma coisa; a preferência do aluno é outra. */
  assert.ok(fila(app).some(i => i.tipo === "perfil"), "configuração preservada");
  assert.ok(!fila(app).some(i => i.tipo === "resposta"), "progresso descartado");
});

test("configuração não conta como resposta no aviso ao aluno", async () => {
  const { app } = appLogado({ online: false });
  app.chamar("definirMetaDiaria", 40);
  await app.timers.rodar();

  const st = app.json("statusFila()");
  assert.equal(st.pendentes, 1);
  assert.equal(st.respostas, 0, "'1 resposta guardada' seria mentira");
});

/* ------------------------------------------------------------------
   O aviso "Enviando N respostas…" que não sumia da tela.

   `flushFila` tira uma fotografia da fila (`meus`) no início do voo e
   itera sobre ela. Toda resposta registrada DEPOIS dessa fotografia
   chama agendarFlush(0) — mas esse flush encontra `filaEmVoo` verdadeiro
   e volta sem fazer nada, consumindo o timer. Quando o voo em andamento
   terminava sem falha, nada era reagendado: os itens que chegaram no meio
   ficavam na fila sem ninguém para enviá-los, e a barra de status ficava
   presa até o aluno responder outra questão ou trocar de aba.

   Não era caso raro. O envio de verdade leva dezenas de milissegundos de
   rede; um setTimeout de 0ms dispara em ~4ms. Ou seja, o timer quase
   SEMPRE caía no meio do voo — bastava responder duas questões seguidas.
   ------------------------------------------------------------------ */
test("resposta registrada durante um envio em andamento não fica órfã", async () => {
  const { app, qid, gabarito } = appLogado();
  const outra = app.json("QUESTOES[1]");

  app.chamar("registrarResposta", qid, gabarito, 4000, 2);

  /* Começa o voo sem esperar: é o estado em que o app fica enquanto a
     requisição está na rede. */
  const voo = app.timers.rodar();

  /* O aluno responde a segunda questão no meio disso. Ela agenda um flush
     de 0ms, e esse timer DISPARA antes de o primeiro voo terminar — é o
     `rodar()` abaixo que modela isso. O flush encontra `filaEmVoo`
     verdadeiro, volta sem fazer nada, e o timer se esgota no processo. */
  app.chamar("registrarResposta", outra.id, outra.gabarito, 3000, 3);
  await app.timers.rodar();

  await voo;

  const restou = pendentes(app);
  if (restou > 0) {
    assert.ok(app.timers.quantidade > 0,
      `${restou} item(ns) na fila e nenhum envio agendado — a barra de status ficaria presa`);
  }

  /* Drena o que ficou agendado: a fila tem de esvaziar sozinha, sem
     depender de o aluno responder mais nada. */
  for (let i = 0; i < 5 && pendentes(app) > 0; i++) await app.timers.rodar();
  assert.equal(pendentes(app), 0, "a fila esvaziou sem intervenção externa");
});

test("statusFila informa quantas vezes o item mais insistente já falhou", async () => {
  const { app, qid, gabarito } = appLogado();
  app.supa.controle.modo = "rede";
  app.chamar("registrarResposta", qid, gabarito, 4000, 2);
  await app.timers.rodar();
  await app.timers.rodar();

  const st = app.json("statusFila()");
  assert.ok(st.tentativas >= 1, "a tela precisa saber que o envio está apanhando");
  assert.equal(st.limiteTentativas, app.get("FILA_MAX_TENTATIVAS"));
});
