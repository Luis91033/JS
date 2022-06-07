//Métodos de los objetos
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Keys sirve para obtener las llaves del objeto y determinar si tienen valores o no
console.log(Object.keys(producto));

//Values regresa los valores de las llaves
console.log(Object.values(producto));

//Entries retorna tanto las llaves como con su respectivo valor
console.log(Object.entries(producto));
