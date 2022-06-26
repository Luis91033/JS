// Variables
const carrito = document.querySelector("#carrito");
const contenedorcarrito = document.querySelector("#lista-carrito tbody");
const listacursos = document.querySelector("#lista-cursos");
const vaciarcarritobtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener() {
  //Cuando agregas un curso presionando "Agregar al Carrito"
  listacursos.addEventListener("click", agregarCurso);
  //Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);
  //Eliminar el carrito de compras
  vaciarcarritobtn.addEventListener("click", () => {
    articulosCarrito = [];
    limpiarHTML(); //Limíamos todo el html
  });
}

//Funciones
function agregarCurso(e) {
  e.preventDefault(); //Evitas la acción de que te lleve a un link

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement; //Se va al div padre
    leerDatos(cursoSeleccionado);
  }
}

//Elimina un curso del carrito
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoid = e.target.getAttribute("data-id");

    //Elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoid);
    carritoHTML(); //Iteramos de nuevo sobre el carrito
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion
function leerDatos(curso) {
  //Crear objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizamos cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; //Retorna el objeto actualizado
      } else {
        return curso; //Retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    //Agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  carritoHTML();
}

//Muestra el Carrito en el HTML
function carritoHTML() {
  //Limpiar el HTML
  limpiarHTML();
  //Recorre el carrito y genera HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${imagen}"> width="100"
        </td>
        <td>
            ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class= "borrar-curso" data-id = "${id}"> X </a> 
        </td>
    `;
    //agrega el html al tbody
    contenedorcarrito.appendChild(row);
  });
}

//Elimina los cursos del tbody
function limpiarHTML() {
  //Forma lenta
  //contenedorcarrito.innerHTML = "";

  while (contenedorcarrito.firstChild) {
    contenedorcarrito.removeChild(contenedorcarrito.firstChild);
  }
}
