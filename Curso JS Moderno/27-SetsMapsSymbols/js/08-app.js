//Diferentes iteradores

const ciudades = ["londres", "madrid", "paris"];

const ordenes = new Set([123, 231, 131, 102]);

const datos = new Map();

datos.set("nombre", "Lalo");
datos.set("profesion", "Estudiante");

//Default
for (let ciudad of ciudades) {
  console.log(ciudad);
}

//Keys Iterator
for (let keys of ciudades.keys()) {
  console.log(keys);
}

for (let keys of ordenes.keys()) {
  console.log(keys);
}

for (let keys of datos.keys()) {
  console.log(keys);
}

//Values Iterador
for (let value of ciudades.values()) {
  console.log(value);
}

for (let value of ordenes.values()) {
  console.log(value);
}

for (let value of datos.values()) {
  console.log(value);
}

//Entries Iterador
for (let entry of ciudades.entries()) {
  console.log(entry);
}

for (let entry of ordenes.entries()) {
  console.log(entry);
}

for (let entry of datos.entries()) {
  console.log(entry);
}
