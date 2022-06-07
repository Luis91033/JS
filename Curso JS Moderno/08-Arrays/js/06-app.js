//Agregar elementos al arreglo con spread operator

const carrito = [];

// Definir un producto
const producto = {
  nombre: "Monitor",
  precio: 200,
};

const producto2 = {
  nombre: "Celular",
  precio: 500,
};

let resultado;

resultado = { ...carrito, producto };

console.log(carrito);
console.log(resultado);

resultado = { ...resultado, producto2 };
console.log(resultado);
