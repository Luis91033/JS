//For of
//Itera sobre arreglos

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];

const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Monitor de 26 pulgadas", precio: 400 },
  { nombre: "Monitor de 25 pulgadas", precio: 300 },
  { nombre: "Monitor de 24 pulgadas", precio: 200 },
  { nombre: "Monitor de 23 pulgadas", precio: 100 },
];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (let producto of carrito) {
  console.log(producto);
}
