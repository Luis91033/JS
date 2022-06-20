//.filter
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

let resultado;

//Crea un nuevo arreglo con la condición que se valida y se trae todo lo del arreglo
resultado = carrito.filter((producto) => producto.precio > 400);

resultado = carrito.filter((producto) => producto.precio < 600);

resultado = carrito.filter((producto) => producto.precio !== 300); //Trae todos menos el evaluado

console.log(resultado);
