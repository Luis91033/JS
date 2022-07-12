//Contructores
function Seguros(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}
//Realiza la cotización con los datos
Seguros.prototype.cotizarSeguro = function () {
  /*
    1= Americano 1.15
    2= Asiatico 1.05
    3= Europeo 1.35
*/

  let cantidad;
  const base = 2000;

  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;

    default:
      break;
  }

  //Leer el año
  const diferencia = new Date().getFullYear() - this.year;

  //Cada que la diferencia es mayor, el costo va a reducirse 3%

  cantidad -= (diferencia * 3 * cantidad) / 100;

  /*
  Si el seguro es basico, se multiplica por un 30% más
  Si el seguro es completo se multiplica por un 50% mas
 */

  this.tipo === "basico" ? (cantidad *= 1.3) : (cantidad *= 1.5);
  return cantidad;
};
function UI() {}

//Llena las opciones de los años
UI.prototype.llenar = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  const select = document.querySelector("#year");
  for (let i = max; i > min; i--) {
    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;

    select.appendChild(opcion);
  }
};
//Muestra alertas de pantalla
UI.prototype.mensaje = (mensaje, tipo) => {
  const div = document.createElement("div");

  if (tipo == "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }

  div.classList.add("mensaje", "mt-10");
  div.textContent = mensaje;

  //Insertar en HTML
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove();
  }, 3000);
};

UI.prototype.mostrarResultado = (total, seguro) => {
  const { marca, year, tipo } = seguro;

  let textoMarca;

  switch (marca) {
    case "1":
      textoMarca = "Americano";
      break;

    case "2":
      textoMarca = "Asiatico";
      break;

    case "3":
      textoMarca = "Europeo";
      break;

    default:
      break;
  }
  //Crear resultado
  const div = document.createElement("div");
  div.classList.add("mt-10");

  div.innerHTML = `
    <p class ="header"> Tu resumen</p>
    <p class = "font-bold"> Marca: <span class= "font-normal">  ${textoMarca} </span> </p>
    <p class = "font-bold"> Año: <span class= "font-normal">  ${year} </span> </p>
    <p class = "font-bold"> Tipo: <span class= "font-normal capitalize">  ${tipo} </span> </p>
    <p class = "font-bold"> Total: <span class= "font-normal"> $ ${total} </span> </p>
`;

  const resultado = document.querySelector("#resultado");

  //Mostrar spinner
  const spinner = document.querySelector("#cargando");
  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none"; //Se borra spinner
    resultado.appendChild(div); //Se agrega resultado
  }, 3000);
};

//Intanciar UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.llenar(); //Llena el Select con los años
});

eventListener();
function eventListener() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  //leer la marca seleccionada
  const marca = document.querySelector("#marca").value;

  //Leer el año seleccionado
  const year = document.querySelector("#year").value;

  //leer el tipo de cobertura
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca === "" || year === "" || tipo === "") {
    ui.mensaje("Todos los campos son obligatorio", "error");
    return;
  }
  ui.mensaje("Cotizando...", "exito");

  //Ocultar cotizaciones previas

  const resultados = document.querySelector("#resultado div");
  resultados != null && resultados.remove();

  //Instanciar el seguro
  const seguro = new Seguros(marca, year, tipo);
  const total = seguro.cotizarSeguro();

  //Utilizar el prototype que va a cotizar
  ui.mostrarResultado(total, seguro);
}
