//Callbacks

//Son funciones que mandan llamar otra función dentro de una función

const paises = ["Francia", "España", "Portugual", "Australia"];

function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 1000);
}
function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000);
}

mostrarPaises();

nuevoPais("Alemania", mostrarPaises);
