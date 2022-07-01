//Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formulario = document.querySelector("#enviar-mail");

//Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListener();
function eventListener() {
  //Cuando la App arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);

  //Campor de formulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

  //Enviar email
  formulario.addEventListener("submit", enviarEmail);

  //Reinicia el formulario
  btnReset.addEventListener("click", Resetear);
}

//Functions
function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    //Elimina los errores
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }

    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");
  } else {
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");

    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }
      e.target.classList.remove("border", "border-red-500");
      e.target.classList.add("border", "border-green-500");
    } else {
      e.target.classList.remove("border", "border-green-500");
      e.target.classList.add("border", "border-red-500");
      mostrarError("El email no es válido");
    }
  }

  if (er.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );

  const errores = document.querySelectorAll(".error");

  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
}

//Envia el email
function enviarEmail(e) {
  e.preventDefault();
  console.log("enviar");
  //mostrar spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  //Después de 3 segundos ocultar el spinener y mostrar el mensaje
  setTimeout(() => {
    spinner.style.display = "none";

    //Mensaje que dice que se envió correctamente
    const parrafo = document.createElement("p");
    parrafo.textContent = "El mensaje se envió correctamente";
    parrafo.classList.add(
      "text-center",
      "my-10",
      "p-2",
      "bg-green-500",
      "text-white",
      "font-bold",
      "uppercase"
    );

    formulario.insertBefore(parrafo, spinner);

    setTimeout(() => {
      parrafo.remove(); //Eliminar el mensaje de éxito
      Resetear();
    }, 5000);
  }, 3000);
}

//Resetear formulario
function Resetear() {
  formulario.reset();

  iniciarApp();
}
