// Campos de formulario

const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

//UI
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

let editando;

class Citas {
  constructor() {
    this.citas = [];
  }
  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }
  editarCita(citaActualizada) {
    this.citas = this.citas.map((cita) =>
      cita.id === citaActualizada.id ? citaActualizada : cita
    );
  }
}

class UI {
  imprimirAlerta(mensaje, tipo) {
    // Crear div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

    //Agregar clase en base al tipo de error

    if (tipo) {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    //Mensaje de error
    divMensaje.textContent = mensaje;

    //Agregar al DOM
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));

    //Quitar la alerta después de 3 segundos
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  imprimirCitas({ citas }) {
    this.limpriarHTML();
    citas.forEach((cita) => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } =
        cita;

      const divCita = document.createElement("div");
      divCita.classList.add("cita", "p-3");
      divCita.dataset.id = id;

      //Scripting de los elementos d ela cita
      const mascotaParrafo = document.createElement("h2");
      mascotaParrafo.classList.add("card-title", "font-weight-bolder");
      mascotaParrafo.textContent = mascota;

      const propietarioParrafo = document.createElement("p");
      propietarioParrafo.innerHTML = `
      <span class =" font-weight-bolder">Propietario: </span> ${propietario}
      `;

      const telefonoParrafo = document.createElement("p");
      telefonoParrafo.innerHTML = `
      <span class =" font-weight-bolder">Telefono: </span> ${telefono}
      `;

      const fechaParrafo = document.createElement("p");
      fechaParrafo.innerHTML = `
      <span class =" font-weight-bolder">Fecha: </span> ${fecha}
      `;

      const horaParrafo = document.createElement("p");
      horaParrafo.innerHTML = `
      <span class =" font-weight-bolder">Hora: </span> ${hora}
      `;

      const sintomasParrafo = document.createElement("p");
      sintomasParrafo.innerHTML = `
      <span class =" font-weight-bolder">Síntomas: </span> ${sintomas}
      `;

      //Botón para eliminar la celda
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-danger", "mr-2");
      btn.innerHTML =
        'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

      btn.onclick = () => eliminarCita(id);

      //Botón para editar
      const btnEdit = document.createElement("button");
      btnEdit.classList.add("btn", "btn-info");
      btnEdit.innerHTML =
        'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

      btnEdit.onclick = () => editarCita(cita);

      //Agregar los parrafos al div citas
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btn);
      divCita.appendChild(btnEdit);

      //Agregar las citas al html
      contenedorCitas.appendChild(divCita);
    });
  }

  limpriarHTML() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

const ui = new UI();
const administrarCitas = new Citas();

//Registrar eventos
EventListener();
function EventListener() {
  mascotaInput.addEventListener("input", datosCita);
  propietarioInput.addEventListener("input", datosCita);
  telefonoInput.addEventListener("input", datosCita);
  fechaInput.addEventListener("input", datosCita);
  horaInput.addEventListener("input", datosCita);
  sintomasInput.addEventListener("input", datosCita);

  formulario.addEventListener("submit", nuevaCita);
}

//Objeto con la información de la cita
const citaObj = {
  mascota: "",
  propietario: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

// Agrega datos al objeto de cita
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
  e.preventDefault();

  //Extraer la informacion del objeto de cita
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

  //Validar
  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas === ""
  ) {
    ui.imprimirAlerta("Todos los campos son obligatorio", "error");
    return;
  }

  if (editando) {
    ui.imprimirAlerta("Editado correctamente");

    //Pasar el objeto de la cita a edicion
    administrarCitas.editarCita({ ...citaObj });
    //Cambiar el texto del formulario
    formulario.querySelector('button[type="submit"]').textContent =
      "Crear Cita";

    // Quitando modo edicion
    editando = false;
  } else {
    //Generando id
    citaObj.id = Date.now();

    //Creando una nueva cita
    administrarCitas.agregarCita({ ...citaObj });

    //Mensakje
    ui.imprimirAlerta("Se agregó correctamente");
  }

  //Reinicia objeto para validación
  reiniciarObjeto();

  //Reinicia el formulario
  formulario.reset();

  //Mostrar HTML
  ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.fecha = "";
  citaObj.telefono = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

function eliminarCita(id) {
  //Eliminar cita
  administrarCitas.eliminarCita(id);

  //Muestre mensaje
  ui.imprimirAlerta("La cita se eliminó correctamente");

  //Refresacar cita
  ui.imprimirCitas(administrarCitas);
}

//Cargar los datos y el modo edición
function editarCita(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

  //Llenar los inputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  //Llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.fecha = fecha;
  citaObj.telefono = telefono;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  //Cambiar el texto del formulario
  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar Cambios";

  editando = true;
}
