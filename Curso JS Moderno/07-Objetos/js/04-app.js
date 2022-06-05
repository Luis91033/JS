//Destruring objets

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Forma antigua
// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring, extraer de una estructura
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
