//Métodos de arreglos
const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Monitor de 26 pulgadas", precio: 400 },
  { nombre: "Monitor de 25 pulgadas", precio: 300 },
  { nombre: "Monitor de 24 pulgadas", precio: 200 },
  { nombre: "Monitor de 23 pulgadas", precio: 100 },
];

//Map crea un nuevo arreglo
const nuevoarreglo = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

//ForEach
carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

console.log(nuevoarreglo);
