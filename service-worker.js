const CACHE = "melomania-cache-v2";
const FILES = [
  "./",
  "./index.html",
  "./cartas.js",
  "./manifest.webmanifest"
];

// INSTALACIÓN
self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

// ACTIVACIÓN
self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : null)))
    )
  );
  clients.claim();
});

// FETCH dinámico
self.addEventListener("fetch", evt => {
  const url = evt.request.url;

  // 👉 NETWORK FIRST para preguntas
  if (url.endsWith("preguntas.json") || url.endsWith("cartas.js")) {
    evt.respondWith(
      fetch(evt.request)
        .then(res => {
          // guarda nueva versión
          caches.open(CACHE).then(cache => cache.put(evt.request, res.clone()));
          return res;
        })
        .catch(() => caches.match(evt.request)) // offline fallback
    );
    return;
  }

  // 👉 CACHE FIRST para todo lo demás
  evt.respondWith(
    caches.match(evt.request).then(r => r || fetch(evt.request))
  );
});
