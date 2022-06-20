//. concat
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre"];

//. concat
const meses3 = meses.concat(meses2);
console.log(meses3);

//spread opeartor
const resultado = [...meses, ...meses2]; //Los tres puntos al incio, hacen que sea una copia del arreglo
console.log(resultado);
