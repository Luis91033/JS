//Callback Hell

const paises = [];

function nuevoPais(pais, callback) {
  paises.push(pais);

  console.log(`Agregado: ${pais}`);
  callback();
}

function mostrarPaises() {
  console.log(paises);
}

function iniciarCallbackHell() {
  setTimeout(() => {
    nuevoPais("Alemania", mostrarPaises);

    setTimeout(() => {
      nuevoPais("Francia", mostrarPaises);
    }, 3000);
  }, 3000);
}

iniciarCallbackHell();
