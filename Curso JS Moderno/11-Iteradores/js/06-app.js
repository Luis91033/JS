//For Each, For Map

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];

pendientes.forEach((pendiente) => {
  console.log(pendiente);
});

const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Monitor de 26 pulgadas", precio: 400 },
  { nombre: "Monitor de 25 pulgadas", precio: 300 },
  { nombre: "Monitor de 24 pulgadas", precio: 200 },
  { nombre: "Monitor de 23 pulgadas", precio: 100 },
];

carrito.forEach((producto) => {
  console.log(producto.precio);
});

const arreglo = carrito.map((producto) => {
  return producto.nombre;
});

console.log(arreglo);
