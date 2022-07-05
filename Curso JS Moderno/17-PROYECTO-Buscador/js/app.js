//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//Contenedor para resultados
const resultado = document.querySelector("#resultado");

const max = 2020;
const min = max - 10;

//Generar objeto de busqueda

const busqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximio: "",
  puertas: "",
  transmision: "",
  color: "",
};

//Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); //Muestra los autos

  //Llena las opciones de años
  llenarSelect();
});

//Event listener pata los select de busqueda
marca.addEventListener("change", (e) => {
  busqueda.marca = e.target.value;

  filtrarAuto();
});

year.addEventListener("change", (e) => {
  busqueda.year = e.target.value;

  filtrarAuto();
});

minimo.addEventListener("change", (e) => {
  busqueda.minimo = e.target.value;

  filtrarAuto();
});

maximo.addEventListener("change", (e) => {
  busqueda.maximo = e.target.value;

  filtrarAuto();
});

transmision.addEventListener("change", (e) => {
  busqueda.transmision = e.target.value;

  filtrarAuto();
});

puertas.addEventListener("change", (e) => {
  busqueda.puertas = e.target.value;

  filtrarAuto();
});

color.addEventListener("change", (e) => {
  busqueda.color = e.target.value;

  filtrarAuto();
});

//Funciones
function mostrarAutos(autos) {
  limpiar(); //Eimina el HTML previo

  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
    ${marca}
    ${modelo} -
    ${year} -
    ${puertas} Puertas - Transmisión:
    ${transmision} - Precio:
    ${precio} - Color:
    ${color}
    `;

    //insertar en HTML
    resultado.appendChild(autoHTML);
  });
}

//Limpia el HTML
function limpiar() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

//Genera los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //Agrega las opciones de año
  }
}

//Funcion que filtra en base a la busqueda
function filtrarAuto() {
  const resultado = autos
    .filter(filtraMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}
function noResultado() {
  limpiar();

  const noresultado = document.createElement("div");
  noresultado.classList.add("alerta", "error");
  noresultado.textContent =
    "No hay resultado. Intenta con otros términos de búsqueda";

  resultado.appendChild(noresultado);
}

function filtraMarca(auto) {
  const { marca } = busqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}
function filtrarYear(auto) {
  const { year } = busqueda;
  if (year) {
    return auto.year === parseInt(year);
  }
  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = busqueda;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}

function filtrarMaximo(auto) {
  const { maximo } = busqueda;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}

function filtrarPuertas(auto) {
  const { puertas } = busqueda;
  if (puertas) {
    return auto.puertas === parseInt(puertas);
  }
  return auto;
}

function filtrarTransmision(auto) {
  const { transmision } = busqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarColor(auto) {
  const { color } = busqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
