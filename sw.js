/* =====================================================================
   QUESTLAB — Service Worker

   A versão anterior deste arquivo não guardava nada em cache, de
   propósito: o app tem seu próprio cache-busting (`?v=<hash>` por
   arquivo, escrito por scripts/versionar.js) e um worker ingênuo
   poderia servir versão antiga por baixo dele. O receio era correto —
   mas o que ele custava era o app inteiro parar de funcionar sem rede,
   justo para quem estuda no ônibus, no intervalo, no metrô.

   A saída está no próprio cache-busting, e não contra ele:

     - Todo asset chega com `?v=<hash do conteúdo>`. Essa URL é imutável
       por construção: se o arquivo muda, a URL muda. Logo, cache-first
       nesses casos NUNCA serve conteúdo errado.
     - Quem decide qual versão está no ar é o `index.html`, porque é ele
       que carrega as URLs com hash. Ele vai de rede primeiro, com o
       cache só como rede de segurança offline — assim uma release nova é
       sempre vista quando há rede.
     - O `version.json` (gatilho de recarga) não passa pelo worker: sem
       rede ele deve mesmo falhar, e quem o chama já trata isso.

   O que NUNCA entra em cache:
     - Qualquer coisa que não seja deste domínio — em especial a API do
       Supabase. Guardar resposta de dados ou de autenticação criaria
       progresso fantasma e sessão zumbi. Quem cuida de escrever offline
       é a fila em js/engine.js, que é persistida e reenviada.
     - Requisições que não sejam GET.
     - Respostas que não sejam 200 do tipo "basic" (erro, redirect,
       opaca): guardá-las congelaria uma falha momentânea.
   ===================================================================== */

/* Trocado a cada release por scripts/versionar.js. Mudar o nome do cache
   é o que descarta em bloco o conteúdo da versão anterior. */
const VERSAO = "7.192";
const CACHE = `questlab-${VERSAO}`;

/* Casca mínima para abrir o app sem rede. Os arquivos com hash entram
   sozinhos, conforme forem pedidos — pré-listá-los aqui exigiria repetir
   os hashes e criaria duas fontes de verdade. */
const CASCA = [
  "./",
  "./index.html",
  "./manifest.json",
  "./fonts/inter-latin.woff2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      /* addAll é tudo-ou-nada: um arquivo fora do ar impediria a
         instalação inteira. Cada um por si, e o que falhar entra depois
         pelo fetch. */
      .then(cache => Promise.allSettled(CASCA.map(url => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(
        nomes.filter(n => n.startsWith("questlab-") && n !== CACHE)
             .map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

function podeGuardar(req, resp) {
  return req.method === "GET"
    && resp
    && resp.status === 200
    && resp.type === "basic";
}

/* Rede primeiro: para o que define qual versão está no ar. Com rede,
   sempre o mais novo; sem rede, o último que funcionou. */
async function redePrimeiro(req) {
  try {
    const resp = await fetch(req);
    if (podeGuardar(req, resp)) {
      const copia = resp.clone();
      caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
    }
    return resp;
  } catch (e) {
    const guardado = await caches.match(req, { ignoreSearch: true });
    if (guardado) return guardado;
    throw e;
  }
}

/* Cache primeiro: só para URL com hash de conteúdo, que é imutável. */
async function cachePrimeiro(req) {
  const guardado = await caches.match(req);
  if (guardado) return guardado;
  const resp = await fetch(req);
  if (podeGuardar(req, resp)) {
    const copia = resp.clone();
    caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
  }
  return resp;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return; /* segue direto para a rede */

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; /* Supabase e afins: nunca */

  /* Navegação (abrir o app, F5): o index precisa ser o mais novo quando
     há rede, e precisa existir offline. */
  if (req.mode === "navigate") {
    event.respondWith(
      redePrimeiro(req).catch(() => caches.match("./index.html", { ignoreSearch: true }))
    );
    return;
  }

  /* O gatilho de versão nunca passa por aqui: o index.html o pede com um
     `?_=<timestamp>` diferente a cada carga, então cachear criaria uma
     entrada nova por visita, sem limite. E guardá-lo não teria valor —
     offline ele DEVE falhar, e quem chama já trata isso (o `.catch` do
     bloco de APP_VERSION no index.html). */
  if (url.pathname.endsWith("/version.json")) return;

  /* `?v=` presente significa URL carimbada pelo hash do conteúdo. As
     fontes entram junto porque o nome do arquivo é a própria versão —
     por isso são a exceção em versionarUrl() (scripts/versionar.js). */
  if (url.searchParams.has("v") || /\/fonts\//.test(url.pathname)) {
    event.respondWith(cachePrimeiro(req));
    return;
  }

  event.respondWith(redePrimeiro(req));
});
