self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("kniga-znakov-cache-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./icon-192.png",
        "./icon-512.png"
      ]);
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