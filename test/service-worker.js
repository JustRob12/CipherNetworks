self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("app-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/src/index.css", // Add paths to your CSS, JS, and image files
          "/src/App.jsx",
          "/src/assets/cn192.png",
          "/src/assets/cn512.png"
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
  