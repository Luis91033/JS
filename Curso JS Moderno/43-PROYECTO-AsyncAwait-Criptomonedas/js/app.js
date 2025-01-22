/** @format */

const criptomonedaSelect = document.querySelector("#criptomonedas");
const monedaSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

const objBusqueda = {
  moneda: "",
  criptomoneda: "",
};

//Crear un Promise
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();

  formulario.addEventListener("submit", submitFormulario);

  criptomonedaSelect.addEventListener("change", leerValor);
  monedaSelect.addEventListener("change", leerValor);
});

async function consultarCriptomonedas() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    const criptomoneda = await obtenerCriptomonedas(data.Data);
    SelectCriptomonedas(criptomoneda);
  } catch (error) {
    console.log(error);
  }
}

function SelectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    criptomonedaSelect.appendChild(option);
  });
}

function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
  e.preventDefault();

  //Validar
  const { moneda, criptomoneda } = objBusqueda;

  if (moneda === "" || criptomoneda === "") {
    mostrarAlerta("Ambos campos deben de ser obligatorios");
    return;
  }
  //consultar la API con los resultados
  consultarAPI();
}

function mostrarAlerta(mensaje) {
  const error = document.querySelector(".error");
  if (!error) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("error");

    divMensaje.textContent = mensaje;

    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

async function consultarAPI() {
  const { moneda, criptomoneda } = objBusqueda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

  try {
    const res = await fetch(url);
    const cotizacion = await res.json();
    mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
  } catch (error) {
    console.log(error);
  }
}

function mostrarCotizacionHTML(cotizacion) {
  limpiar();

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

  const precioAlto = document.createElement("p");
  precioAlto.innerHTML = `<p>Precio más alto del día <span>${HIGHDAY}</span>`;

  const precioBajo = document.createElement("p");
  precioBajo.innerHTML = `<p>Precio más bajo del día <span>${LOWDAY}</span>`;

  const horas = document.createElement("p");
  horas.innerHTML = `<p>Variación últimas 24 horas <span>${CHANGEPCT24HOUR}%</span>`;

  const actualizacion = document.createElement("p");
  actualizacion.innerHTML = `<p>Última actualización<span>${LASTUPDATE}</span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(horas);
  resultado.appendChild(actualizacion);
}

function limpiar() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function mostrarSpinner() {
  limpiar();

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");

  spinner.innerHTML = `

  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>

  `;

  resultado.appendChild(spinner);
}
