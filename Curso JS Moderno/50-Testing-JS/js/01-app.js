/** @format */

//Try 2 values

function suma(a, b) {
  return a + b;
}

let resultado = suma(1, 2);
let esperado = 3;

if (resultado !== esperado) {
  console.error("La prueba no pasó");
} else {
  console.log("La prueba pasó correctamente");
}
