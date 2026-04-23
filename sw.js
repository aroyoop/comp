const CACHE_NAME = "site-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./project.css",
  "./index2.css",
  "./project.js"
];

// install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cached files");
      return cache.addAll(urlsToCache);
    })
  );
});

// activate (يمسح القديم)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
