//Modificar textos o imágenes

const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

//Formas de acceder al texto
console.log(encabezado.innerText); // Si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); //Sí lo va a encontrar
console.log(encabezado.innerHTML); //Se trae el HTML

document.querySelector(".contenido-hero h1").textContent = "nuevo heading";

//Modificar imagen
const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";
