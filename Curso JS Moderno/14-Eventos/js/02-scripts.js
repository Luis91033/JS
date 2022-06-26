//Eventos con el mouse
const nav = document.querySelector(".navegacion");

//Registrar un evento
nav.addEventListener("mouseenter", () => {
  console.log("Entrando a la navegación");
});

nav.addEventListener("mouseout", () => {
  console.log("Saliendo de la navegación");
});

//mousedown = similar al click
//click
//doubleclick = doble click
//mouseup = cuando sueltas el mouse
