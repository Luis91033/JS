//Evento submit
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validar);

function validar(e) {
  e.preventDefault(); //Previenes la acción y la detienes
  console.log(e);
}
