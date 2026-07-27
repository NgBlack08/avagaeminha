/* =====================================================================
   QUESTLAB — Service Worker (fase 1: só instalabilidade, sem cache)
   O app já tem seu próprio mecanismo de cache-busting em index.html
   (fetch de version.json com cache:"no-store" + ?v= em cada script).
   Um service worker que armazenasse arquivos em cache poderia servir
   versões antigas por baixo desse mecanismo — por isso, por enquanto,
   este worker só repassa as requisições para a rede (nenhum cache de
   verdade ainda), servindo apenas para tornar o site instalável como
   app (critério do Chrome/Android: ter um service worker registrado
   com um handler de fetch).
   ===================================================================== */
self.addEventListener("install", () => { self.skipWaiting(); });
self.addEventListener("activate", (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (event) => { event.respondWith(fetch(event.request)); });
