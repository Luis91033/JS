//Solo puede leer textos o JSON

const cargarTextBtn = document.querySelector("#cargarTxt");
cargarTextBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  //En el pareentesis colocas la url de donde adquieres los datos a donde los envias
  fetch("data/datos.txt") //fetch usa promisses
    .then((respuesta) => {
      //respuesta es el objeto
      console.log(respuesta);
      console.log(respuesta.status);

      return respuesta.text();
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
}
