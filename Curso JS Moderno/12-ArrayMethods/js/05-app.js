//.find
//Crea un nuevo arreglo basado en la condición dada
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// con un forEach
let resultado = "";
carrito.forEach((producto, index) => {
  if (producto.nombre === "Tablet") {
    resultado = carrito[index];
  }
});

console.log(resultado);

// con un .find

const resultado2 = carrito.find((producto) => producto.nombre === "Tablet"); //Retorna el primer elemento que cumpla la condición
console.log(resultado2);
