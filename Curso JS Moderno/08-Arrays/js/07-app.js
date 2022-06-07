//Eliminar elementos de un arreglo
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

const producto3 = {
  nombre: "Tablet",
  precio: 100,
};

const producto4 = {
  nombre: "Celular2",
  precio: 800,
};

//Agregar el producto al arreglo al final del arreglo
carrito.push(producto);
carrito.push(producto3);

//Agregar el producto2 al arreglo al inicio del arreglo
carrito.unshift(producto2);
carrito.unshift(producto4);

console.table(carrito);

//Eliminar el último elemento del arreglo
carrito.pop();
console.table(carrito);

//Eliminar el primero elemento del arreglo
carrito.shift();
console.table(carrito);

//Elimiar un elemento de el medio del arreglo
carrito.splice(1, 1); //Colocas en dónde se posiciona y despúes cuántos elementos va a eliminar
console.table(carrito);
