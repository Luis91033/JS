//Los booleans sólo tienen 2 valores, true or false

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(typeof boolean1);
console.log(boolean1 == boolean3);

const boolean4 = new Boolean(true);
console.log(typeof boolean4); //El new es un constructor que se usa en objetos
