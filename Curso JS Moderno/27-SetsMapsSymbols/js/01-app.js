//Sets
//Permite crear una lista de valores sin duplicados

const carrito = new Set();

//SetMethods
carrito.add("camisa");
carrito.add("disco#1");
carrito.add("disco#2");
carrito.add("disco#3");

console.log(carrito.has("camisa"));
console.log(carrito.size);
console.log(carrito);

//Del siguiente arreglo, eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);
