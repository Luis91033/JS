//Obtener respuesta por JSON
const cargarJSONBtn = document.querySelector("#cargarJSON");

cargarJSONBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  fetch("data/empleado.json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((resultado) => {
      mostrarHTML(resultado);
    });
}

function mostrarHTML({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector(".contenido");

  contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>



    `;
}
