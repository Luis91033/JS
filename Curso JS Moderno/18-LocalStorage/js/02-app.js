//Obtener datos de localstorage

const nombre = localStorage.getItem("nombre");
const producto = localStorage.getItem("producto");

console.log(nombre);
console.log(producto);

//Convertir de string a objeto
console.log(JSON.parse(producto));
