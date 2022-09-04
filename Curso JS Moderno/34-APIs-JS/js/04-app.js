//Api para hacer la pantalla grande

const abrirBtn = document.querySelector("#abrir-pantalla-completa");
const salirBtn = document.querySelector("#salir-pantalla-completa");

abrirBtn.addEventListener("click", pantallaCompleta);
salirBtn.addEventListener("click", cerrarPantallaCompleta);

function pantallaCompleta() {
  //Pone modo pantalla completa
  document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
  document.exitFullscreen();
}
