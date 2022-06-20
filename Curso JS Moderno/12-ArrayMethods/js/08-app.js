//Spread Operator
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Sprea con arreglo de índices
const meses2 = [...meses, "Agosto"];
console.log(meses2);

//Spread con arreglo de objetos
const producto = { nombre: "Disco Duro", precio: 300 };
const carrito2 = [...carrito, producto];

console.log(carrito2);
