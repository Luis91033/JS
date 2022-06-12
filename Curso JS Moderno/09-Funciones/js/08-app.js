// Funciones que retornan valores

function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado);

//Ejemplo más avanzado

let total = 0;
function agregar(precio) {
  return (total += precio);
}

function impuesto(total) {
  return total * 1.15;
}
total = agregar(300);
const totalpagar = impuesto(total);
console.log(`El total a pagar es de ${totalpagar}`);

console.log(total);
