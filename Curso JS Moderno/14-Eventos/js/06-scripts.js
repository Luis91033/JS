//Event bubbling

const card = document.querySelector(".card");
const info = document.querySelector(".info");
const titlo = document.querySelector(".titulo");

card.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en card");
});
info.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en info");
});
titulo.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en titulo");
});

//Se refiere a cuando picas en un evento y se disparan los demás elementos
