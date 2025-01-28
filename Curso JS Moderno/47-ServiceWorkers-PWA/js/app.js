/** @format */

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((registrado) =>
      console.log("Se ha registrado correctamente...", registrado)
    )
    .catch((error) => console.log("Falló la instalación...", error));
} else {
  console.log("No lo soporto");
}
