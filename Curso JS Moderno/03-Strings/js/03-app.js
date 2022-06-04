//Concatenar strings

const producto = "Monitor de 20 pulgadas";
const precio = "30 USD";

console.log(producto.concat(precio));

console.log(producto + "Con un precio de:" + precio);
console.log("El producto " + producto + " tiene un precio de:" + precio);
console.log("El producto ", producto, " tiene un precio de:", precio);

//Template strings o template literals para concatenar
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);
