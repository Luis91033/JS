//Destructuring de arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;
const [, , tercero2] = numeros; //Una forma de obtener la 3ra posición sin colocar variables extras
const [uno, dos, ...tres] = numeros;
console.log(tercero2);
console.log(tercero);
console.log(tres); //Imprime un arreglo con las últimas posiciones
