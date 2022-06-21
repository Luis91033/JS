//Crear HTML desde JS

const enlace = document.createElement("a");

//Agregando el texto
enlace.textContent = "Nuevo Enlace";

//Añadiendo href
enlace.href = "/nuevo-enlace";

//Agregando target
enlace.target = "_blank";
console.log(enlace);

//Seleccionar navegacion
const navegacion = document.querySelector(".navegacion");

//Agregas hasta el final
navegacion.appendChild(enlace);

//Agregas entre dos cosas
navegacion.insertBefore(enlace, navegacion.children[1]);

//Crear un card
const p1 = document.createElement("p");
p1.textContent = "Concierto";
p1.classList.add("categoria", "concierto");

const p2 = document.createElement("p");
p2.textContent = "Concierto de Rap";
p2.classList.add("titulo");

const p3 = document.createElement("p");
p3.textContent = "$800 por persona";
p3.classList.add("precio");

//Crear DIV con la clase de info
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(p1);
info.appendChild(p2);
info.appendChild(p3);

//Crear imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

//Crear el crad padre
const card = document.createElement("div");
card.classList.add("card");

//Asignar ka imagen
card.appendChild(imagen);

//Asiganr info
card.appendChild(info);

//Insertar en el html
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.insertBefore(card, contenedor.children[0]);
