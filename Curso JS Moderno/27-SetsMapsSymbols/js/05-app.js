//Symbols

const sym = Symbol();
const sym2 = Symbol();

sym === sym2 ? console.log("son iguales") : console.log("son diferentes");

//Los symbols no son iterables

//Definir una descripcion del symbol

const nombreCliente = Symbol("Nombre del cliente");
