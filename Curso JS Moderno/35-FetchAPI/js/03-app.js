//Cargar json con arreglos

const cargarJSONArrayBtn = document.querySelector("#cargarJSONArray");
cargarJSONArrayBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  fetch("data/empleados.json")
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarHTML(resultado));
}

function mostrarHTML(empleados) {
  const contenido = document.querySelector(".contenido");

  let html = "";

  empleados.forEach((empleado) => {
    const { id, nombre, empresa, trabajo } = empleado;
    html += `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>

        `;
  });

  contenido.innerHTML = html;
}
