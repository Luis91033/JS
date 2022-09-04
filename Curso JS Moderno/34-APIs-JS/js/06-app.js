//Speech Recognition API

//Permite que cuando uno hable por medio del microfono, se pueda plasmar en la página web

const salida = document.querySelector("#salida");
const microfono = document.querySelector("#microfono");

microfono.addEventListener("click", ejecutarSpeechApi);

function ejecutarSpeechApi() {
  const speechRecognition = webkitSpeechRecognition;
  const recognition = new speechRecognition();

  recognition.start();

  recognition.onstart = function () {
    salida.classList.add("mostrar");
    salida.textContent = "escuchando";
  };
  //Cuando termine de hablar se ejecuta el siguiente codigo
  recognition.onspeechend = function () {
    salida.textContent = "se dejo de grabar";
    recognition.stop();
  };

  recognition.onresult = function (e) {
    console.log(e.results);

    const { confidence, transcript } = e.results[0][0];
    const speech = document.createElement("p");
    speech.innerHTML = `Grabando ${transcript}`;

    salida.appendChild(speech);
  };
}
