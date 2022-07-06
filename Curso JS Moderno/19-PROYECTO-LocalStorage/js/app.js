//variables
const formulario = document.querySelector("#formulario");
const lista = document.querySelector("#lista-tweets");
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners() {
  //Cuando el usuarion agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  //Cuando el documento está listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    crearHTML();
  });
}

//Funciones
function agregarTweet(e) {
  e.preventDefault();

  //TextArea
  const tweet = document.querySelector("#tweet").value;
  //Validacion
  if (tweet === "") {
    error("Un mensaje no puede ir vacio");

    return; //Evita que siga el código
  }

  const tweetobj = {
    id: Date.now(),
    texto: tweet,
  };

  //Añadir al arreglo de tweets
  tweets = [...tweets, tweetobj];

  //Crear HTML
  crearHTML();
  formulario.reset();
}

//Mostrar mensaje error
function error(error) {
  const merror = document.createElement("p");
  merror.textContent = error;
  merror.classList.add("error");

  //Insertarlo
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(merror);

  setTimeout(() => {
    merror.remove();
  }, 3000);
}

//Crea un listado de los tweets
function crearHTML() {
  limpiarHTML();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Agregar botón
      const btn = document.createElement("a");
      btn.classList.add("borrar-tweet");
      btn.innerHTML = "X";

      //Añadir funcion de eliminar
      btn.onclick = () => {
        borrarTweet(tweet.id);
      };

      //Crear HTML
      const li = document.createElement("li");
      li.innerText = tweet.texto;
      li.appendChild(btn);
      lista.appendChild(li);
    });
  }

  sincronizarStorage();
}

//Borrar Tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearHTML();
}

//Limpiar HTML
function limpiarHTML() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

//Agrega los tweets a local storage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
