/** @format */

const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", obtenerDatos);

async function obtenerDatos() {
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
