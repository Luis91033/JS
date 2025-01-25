/** @format */

//Explicit binding

function persona(el1, el2) {
  console.log(`Mi nombre es ${this.nombre} y eschucho ${el1} y ${el2}`);
}

const informacion = {
  nombre: "Lalo",
};
const musica = ["Rap", "Kase O"];

persona.call(informacion, musica[0], musica[1]);
