/** @format */

const nombre = "apv-v1";

const archivos = [
  "/",
  "/index.html",
  "/error.html",
  "/css/bootstrap.css",
  "/css/styles.css",
  "/js/app.js",
  "/js/apv.js",
];

self.addEventListener("install", (e) => {
  console.log("Intalado el Servidor Worker");

  e.waitUntil(
    caches.open(nombre).then((cache) => {
      console.log("Cachenado");
      cache.addAll(archivos);
    })
  );
});

//Activate Service Worker

self.addEventListener("activate", (e) => {
  console.log("Service Worker activado");
});

//Fetch event
self.addEventListener("fetch", (e) => {
  console.log("fetch...", e);

  e.respondWith(
    caches
      .match(e.request)
      .then((respuesta) => {
        return respuesta;
      })
      .catch(() => caches.match("/error.html"))
  );
});
