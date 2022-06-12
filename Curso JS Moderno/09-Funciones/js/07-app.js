//Comunicación de las funciones

iniciarApp();

function iniciarApp() {
  console.log("Iniciando app...");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda función");
  usuario("Eduardo");
}

function usuario(usuario) {
  console.log("Autenticando usuario....");
  console.log(`${usuario} autenticado exitosamente`);
}
