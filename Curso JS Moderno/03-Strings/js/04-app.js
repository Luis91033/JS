//Métodos para eliminar el espacio em blanco de al inicio o final de una cadena de texto

const producto = "                 Monitor de 20 pulgadas          ";
console.log(producto);
console.log(producto.length);

//Eliminar espacios en blanco del inicio..
console.log(producto.trimStart());
//Eliminar espacios en blanco del final..

console.log(producto.trimEnd());

//Eliminar el espacio tanto al inicio como al final
console.log(producto.trimStart().trimEnd());
console.log(producto.trim());
