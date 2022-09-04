//Detectar si hay o no hay conexión a internet

window.addEventListener("online", actualizarEstado);
window.addEventListener("offline", actualizarEstado);

function actualizarEstado() {
  if (navigator.onLine) {
    console.log("Sí estás conectado");
  } else {
    console.log("No estás conectado");
  }
}
