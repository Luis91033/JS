//Parámetros por default

function saludar(nombre = "Desconocido", apellido = "No tiene apellido") {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Eduardo", "Corral");
saludar("Eduardo");
saludar();
