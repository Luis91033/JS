//Eventos sobre los inputs y teclados
const busqueda = document.querySelector(".busqueda");

//Escucha por cortar, pegar, copiar
busqueda.addEventListener("input", (e) => {
  console.log(e.target.value);
});
