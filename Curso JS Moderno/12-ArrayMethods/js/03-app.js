//.reduce
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// con un foreach
let total = 0;
carrito.forEach((producto) => (total += producto.precio));
console.log(total);

//.reduce
let total2;
let resultado = carrito.reduce(
  (total2, producto) => total2 + producto.precio,
  0
);
console.log(resultado);
