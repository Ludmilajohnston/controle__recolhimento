const CACHE_NAME = "controle-v1";

const arquivos = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./logo.png",
  "./assinatura.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(arquivos);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request)
    .then(response => {
      return response || fetch(e.request);
    })
  );
});