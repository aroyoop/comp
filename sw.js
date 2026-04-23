self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("site-cache").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/project.css",
                "/index2.css",
                "/project.js"
            ])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request)
        })
    )
})