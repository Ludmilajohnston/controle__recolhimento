const CACHE_NAME = "controle-v2";

const arquivos = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./logo.png",
  "./assinatura.png",
  "./icons/icon-192.jpg",
  "./icons/icon-512.jpg"
];

self.addEventListener("install", e => {
  self.skipWaiting(); // ativa a nova versão assim que instalar, sem esperar o usuário fechar todas as abas
  e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(arquivos))
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
    .then(nomes => Promise.all(
      nomes.filter(nome => nome !== CACHE_NAME).map(nome => caches.delete(nome))
    ))
    .then(() => self.clients.claim()) // toma controle das abas já abertas
  );
});

// ESTRATEGIA: sempre tenta a rede primeiro (pega a versão mais nova),
self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request)
      .then(resposta => {
        var copia = resposta.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, copia));
        return resposta;
      })
      .catch(() => caches.match(e.request))
  );
});
