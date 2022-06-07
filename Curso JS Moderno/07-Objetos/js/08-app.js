//Métodos de los objetos
//Se usa un operador estricto para acceder a los métodos de los objetos
"use strict";

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Congelar objeto para que no se pueda modificar

Object.freeze(producto); //No permite modificar, agregar o quitar propiedades del objeto
console.log(producto);
console.log(Object.isFrozen(producto)); //Imprime si el objeto está congelado o no
