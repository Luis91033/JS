//Promisse

//Resolve: lo que se ejecuta cuando el promisse se ejecuta correctamente o cuando se cumple el promisse.
//Reject: Cuando hay un error en el promisse
const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = false;

  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

//Hay 3 valores posibles
// Fuldiled - El promise se cumplió
// Rejected - El promise no se cumplió
// Pending - No e ha cumlido, pero tampoco se ha rechazado

//El .then, es la acción que se va a ejecutar cuando se realizar el promisse

aplicarDescuento.then((resultado) => {
  console.log(resultado);
});

//Siempre que el promise falla, se usa .catch

aplicarDescuento.catch((error) => {
  console.log(error);
});
