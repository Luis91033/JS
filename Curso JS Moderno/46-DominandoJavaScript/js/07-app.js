/** @format */

console.log("Primero");

setTimeout(() => {
  console.log("Segundo");
}, 0);

console.log("Tercero");

setTimeout(() => {
  console.log("Cuarto");
}, 0);

new Promise(function (resolve) {
  resolve("Desconocido");
}).then(console.log);

console.log("Último");
