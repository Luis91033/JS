//Query Selector
//Sintaxis similar a CSS
//Retorna el primer valor que encuentra
const card = document.querySelector(".card");
console.log(card);

//Podemos tener selectores especificos como en CSS
const info = document.querySelector(".premium .info");
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundocard = document.querySelector(".hospedaje .card:nth-child(2");
console.log(segundocard);

//Seleccionar el formulario por id
const formulario = document.querySelector("#formulario");
console.log(formulario);

//Seleccionar HTML
const navegacion = document.querySelector("nav");
console.log(navegacion);
