//Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos

EventListener();

function EventListener() {
  document.addEventListener("DOMContentLoaded", preguntarPresu);
  formulario.addEventListener("submit", agregarGasto);
}

//Classes

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );

    this.restante = this.presupuesto - gastado;
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    this.calcularRestante();
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    const { presupuesto, restante } = cantidad;
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    //Crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    tipo === "error"
      ? divMensaje.classList.add("alert-danger")
      : divMensaje.classList.add("alert-success");

    //Mensaje
    divMensaje.textContent = mensaje;

    //Insertar en HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario);
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  agregarGastoListado(gastos) {
    this.limpiar(); //Elimina el HTML previo
    //Iterar sobre los gastos
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;

      //Crear Li
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between align-items-center";
      nuevoGasto.dataset.id = id;

      //Agregar HTML
      nuevoGasto.innerHTML = `${nombre} <span class ="badge badge-primary badge-pill">$ ${cantidad}</span>

      `;

      //Boton para borrar el gasto
      const btn = document.createElement("button");
      btn.innerHTML = "Borrar &times";
      btn.classList.add("btn", "btn-danger", "borrar-gasto");
      btn.onclick = () => {
        eliminarGasto(id);
      };

      nuevoGasto.appendChild(btn);

      //Agregar HTML

      gastoListado.appendChild(nuevoGasto);
    });
  }
  limpiar() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
  }

  comprobarPresupuesto(presupuestoObj) {
    const { presupuesto, restante } = presupuestoObj;

    const restantediv = document.querySelector(".restante");

    //Comprobar el 25%
    if (presupuesto / 4 > restante) {
      restantediv.classList.remove("alert-success", "alert-warning");
      restantediv.classList.add("alert-danger");
    } else if (presupuesto / 2 > restante) {
      restantediv.classList.remove("alert-success");
      restantediv.classList.add("alert-warning");
    } else {
      restantediv.classList.remove("alert-danger", "alert-warning");
      restantediv.classList.add("alert-success");
    }

    //Si el total el menor a 0 o menor
    if (restante <= 0) {
      ui.imprimirAlerta("El presupuesto se ha agotado", "error");

      formulario.querySelector('button[type ="submit"]').disabled = true;
    }
  }
}

//Instanciar
const ui = new UI();
let presupuesto;

//Funciones

function preguntarPresu() {
  const presupuestoUsuario = prompt("¿Cúal es tu presupuesto?");

  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);

  ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
  e.preventDefault();

  //Leer datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  //Validar
  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Cantidad no válida", "error");
    return;
  }

  //Generar un objeto de tipo gasto
  const gasto = { nombre, cantidad, id: Date.now() };

  //Añade un nuevo gasto
  presupuesto.nuevoGasto(gasto);

  //Mensaje de todo bien
  ui.imprimirAlerta("Gasto agregado correctamente");

  //Imprimir los gastos
  const { gastos, restante } = presupuesto;
  ui.agregarGastoListado(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);

  //Reinicia formulario
  formulario.reset();
}

function eliminarGasto(id) {
  //Elimina del arreglo
  presupuesto.eliminarGasto(id);

  //Elimina los gastos del HTML
  const { gastos, restante } = presupuesto;
  ui.agregarGastoListado(gastos);
  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);
}
