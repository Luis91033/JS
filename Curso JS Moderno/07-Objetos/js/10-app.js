//Unir dos objetos
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medida = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medida);

//Assing
const resultado = Object.assign(producto, medida);
console.log(resultado);

//Spread operator o rest operator
const resultado2 = { ...producto, ...medida }; //Los 3 puntos indican que tomen una copia del objerto
console.log(resultado2);
