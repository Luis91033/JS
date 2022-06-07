//Añadir elementos al incio o final del arreglo
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

//Agregar el producto al arreglo al final del arreglo
carrito.push(producto);

//Agregar el producto2 al arreglo al inicio del arreglo
carrito.unshift(producto2);

console.log(carrito);
