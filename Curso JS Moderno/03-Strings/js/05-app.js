//Método para reemplazar el texto de una cadena

//.replace para reemplazar
const producto = "Monitor de 20 pulgadas";

console.log(producto);
console.log(producto.replace("pulgadas", '"'));

//Método para extraer la parte de una cadena de texto
//.slice para costar
console.log(producto.slice(0, 10)); //si el primer numero es mayor al 1, no va a imprimir nada

//Alternativa a Slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); //Como identifica que el segundo es mayor, cambia las posiciones

//Cortar una posición específica
// .charAt
const usuario = "Luis";
console.log(usuario.charAt(0));
