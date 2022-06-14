//For in
//Itera sobre objetos

const automovil = {
  modelo: "Camaro",
  year: 1966,
  motor: "6.0",
};

for (let propiedad in automovil) {
  console.log(`${automovil[propiedad]}`);
}

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(valor);
}
