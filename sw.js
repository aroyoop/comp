const CACHE_NAME = "site-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./project.css",
  "./index2.css",
  "./project.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
