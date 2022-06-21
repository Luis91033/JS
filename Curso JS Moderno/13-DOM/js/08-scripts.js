//Traversing the DOM / Recorrer el DOM
const navegacion = document.querySelector(".navegacion");
console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children); //Los espacios en blanco ya no son considerados elementos

console.log(navegacion.children[1].nodeName); //Nombre de la etiqueta
console.log(navegacion.children[1].nodeType); //

const card = document.querySelector(".card");
console.log(card.children[1].children[1].textContent);

console.log(card.children[0]);
card.children[0].src = "img/hacer3.jpg";
console.log(card.children[0]);

//Seleccionar la clase padre
console.log(card.parentElement);

//Seleccionar las clases hermanas de un elemento padre
console.log(card.nextElementSibling);

//Selecciona el último card
const ultimocard = document.querySelector(".card:nth-child(4)");

//Selecciona un elemento antes de las clases hermanas
console.log(ultimocard.previousElementSibling);

//Seleccionar primer enlace
console.log(navegacion.firstElementChild);
