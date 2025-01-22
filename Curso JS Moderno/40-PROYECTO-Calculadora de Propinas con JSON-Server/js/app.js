/** @format */

let cliente = {
  mesa: "",
  hora: "",
  pedido: [],
};

const categorias = {
  1: "Comida",
  2: "Bebidas",
  3: "Postres",
};

const btnGuardarCliente = document.querySelector("#guardar-cliente");
btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
  const mesa = document.querySelector("#mesa").value;
  const hora = document.querySelector("#hora").value;

  //Check for empty fields
  const camposVacios = [mesa, hora].some((campo) => campo === "");

  if (camposVacios) {
    //Check for an already alert
    const existeAlerta = document.querySelector(".invalid-feedback");
    if (!existeAlerta) {
      const alerta = document.createElement("DIV");
      alerta.classList.add("invalid-feedback", "d-block", "text-center");
      alerta.textContent = "Todos los campos son obligatorios";
      document.querySelector(".modal-body form").appendChild(alerta);

      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }
    return;
  }
  // Asing form data client
  cliente = { ...cliente, mesa, hora };

  //Hide modal
  const modalFormulario = document.querySelector("#formulario");
  const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
  modalBootstrap.hide();

  //Show section
  mostrarSecciones();

  //Get dishes from JSON-Server API
  obtenerPlatillos();
}

function mostrarSecciones() {
  const seccionesOcultas = document.querySelectorAll(".d-none");
  seccionesOcultas.forEach((seccion) => seccion.classList.remove("d-none"));
}

function obtenerPlatillos() {
  const url = "http://localhost:4000/platillos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => mostrarPlatillos(data))
    .then((error) => console.log(error));
}

function mostrarPlatillos(platillos) {
  const contenido = document.querySelector("#platillos .contenido");
  platillos.forEach((platillo) => {
    const row = document.createElement("DIV");
    row.classList.add("row", "py-3", "border-top");

    const nombre = document.createElement("DIV");
    nombre.classList.add("col-md-4");
    nombre.textContent = platillo.nombre;

    const precio = document.createElement("DIV");
    precio.classList.add("col-md-3", "fw-bold");
    precio.textContent = ` $${platillo.precio}`;

    const categoria = document.createElement("DIV");
    categoria.classList.add("col-md-3");
    categoria.textContent = categorias[platillo.categoria];

    const inputCantidad = document.createElement("INPUT");
    inputCantidad.type = "number";
    inputCantidad.min = 0;
    inputCantidad.value = 0;
    inputCantidad.id = `producto-${platillo.id}`;
    inputCantidad.classList.add("form-control");

    //Function that detects the amount and the dish being added
    inputCantidad.onchange = () => {
      const cantidad = parseInt(inputCantidad.value);
      agregarPlatillo({ ...platillo, cantidad });
    };

    const agregar = document.createElement("DIV");
    agregar.classList.add("col-md-2");
    agregar.appendChild(inputCantidad);

    row.appendChild(nombre);
    row.appendChild(precio);
    row.appendChild(categoria);
    row.appendChild(agregar);

    contenido.appendChild(row);
  });
}

function agregarPlatillo(producto) {
  //Extract the actual order
  let { pedido } = cliente;
  //Check that the quantity is greater than zero.
  if (producto.cantidad > 0) {
    //Check if the element already exits in the array
    if (pedido.some((articulo) => articulo.id === producto.id)) {
      //The article exits, update the quantity
      const pedidoActualizado = pedido.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      //Assing the new array to client.pedido
      cliente.pedido = [...pedidoActualizado];
    } else {
      //The article doesn´t exits, we add it to the order array
      cliente.pedido = [...pedido, producto];
    }
  } else {
    //Delete elements when the quantity is zero
    const resultado = pedido.filter((articulo) => articulo.id !== producto.id);
    cliente.pedido = [...resultado];
  }
  // Clean HTML
  limpiarHTML();

  if (cliente.pedido.length) {
    //Show Resume
    actualizarResumen();
  } else {
    mensajePedido();
  }
}

function actualizarResumen() {
  const contenido = document.querySelector("#resumen .contenido");

  const resumen = document.createElement("DIV");
  resumen.classList.add("col-md-6", "card", "py-2", "px-3", "shadow");
  //Table information
  const mesa = document.createElement("P");
  mesa.textContent = "Mesa: ";
  mesa.classList.add("fw-bold");

  const mesaSpan = document.createElement("SPAN");
  mesaSpan.textContent = cliente.mesa;
  //Hour information
  const hora = document.createElement("P");
  hora.textContent = "Hora: ";
  hora.classList.add("fw-bold");

  const horaSpan = document.createElement("SPAN");
  horaSpan.textContent = cliente.hora;
  horaSpan.classList.add("fw-normal");
  horaSpan.classList.add("fw-normal");

  mesa.appendChild(mesaSpan);
  hora.appendChild(horaSpan);

  //Section title
  const heading = document.createElement("H3");
  heading.textContent = "Platillos consumidos";
  heading.classList.add("my-4", "text-center");

  //Iterate into the array
  const grupo = document.createElement("UL");
  grupo.classList.add("list-group");
  const { pedido } = cliente;
  pedido.forEach((articulo) => {
    const { nombre, cantidad, precio, id } = articulo;
    const lista = document.createElement("LI");
    lista.classList.add("list-group-item");

    const nombreEl = document.createElement("H4");
    nombreEl.classList.add("my-4");
    nombreEl.textContent = nombre;

    //Article quantity
    const cantidadEl = document.createElement("P");
    cantidadEl.classList.add("fw-bold");
    cantidadEl.textContent = "Cantidad: ";

    const cantidadValor = document.createElement("SPAN");
    cantidadValor.classList.add("fw-normal");
    cantidadValor.textContent = cantidad;

    //Article price
    const precioEl = document.createElement("P");
    precioEl.classList.add("fw-bold");
    precioEl.textContent = "Precio: ";

    const precioValor = document.createElement("SPAN");
    precioValor.classList.add("fw-normal");
    precioValor.textContent = `$${precio}`;

    //Subtotal article
    const subtotalEl = document.createElement("P");
    subtotalEl.classList.add("fw-bold");
    subtotalEl.textContent = "Subtotal: ";

    const subtotalValor = document.createElement("SPAN");
    subtotalValor.classList.add("fw-normal");
    subtotalValor.textContent = calcularSubtotal(precio, cantidad);

    //Delete Button
    const btnEliminar = document.createElement("BUTTON");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.textContent = "Eliminar del Pedido";
    btnEliminar.onclick = () => {
      eliminarProducto(id);
    };

    //Add values to containers
    cantidadEl.appendChild(cantidadValor);
    precioEl.appendChild(precioValor);
    subtotalEl.appendChild(subtotalValor);

    //Add element into LI
    lista.appendChild(nombreEl);
    lista.appendChild(cantidadEl);
    lista.appendChild(precioEl);
    lista.appendChild(subtotalEl);
    lista.appendChild(btnEliminar);

    //Add list into principal group
    grupo.appendChild(lista);
  });

  //Add to content
  resumen.appendChild(heading);
  resumen.appendChild(mesa);
  resumen.appendChild(hora);

  resumen.appendChild(grupo);

  contenido.appendChild(resumen);

  //Show tip form
  formularioDePropinas();
}

function limpiarHTML() {
  const contenido = document.querySelector("#resumen .contenido");

  while (contenido.firstChild) {
    contenido.removeChild(contenido.firstChild);
  }
}

function calcularSubtotal(precio, cantidad) {
  return `$ ${precio * cantidad}`;
}

function eliminarProducto(id) {
  const { pedido } = cliente;
  const resultado = pedido.filter((articulo) => articulo.id !== id);
  cliente.pedido = [...resultado];

  limpiarHTML();
  if (cliente.pedido.length) {
    actualizarResumen();
  } else {
    mensajePedido();
  }

  //The product was deleted so we return the quantity to 0 in the form

  const inputEiminado = document.querySelector(`#producto-${id}`);
  inputEiminado.value = 0;
}

function mensajePedido() {
  const contenido = document.querySelector("#resumen .contenido");
  const texto = document.createElement("P");

  texto.classList.add("text-center");
  texto.textContent = "Añade los elementos del pedido";

  contenido.appendChild(texto);
}

function formularioDePropinas() {
  const contenido = document.querySelector("#resumen .contenido");
  const formulario = document.createElement("DIV");
  formulario.classList.add("col-md-6", "formulario");

  const divFormulario = document.createElement("DIV");
  divFormulario.classList.add("card", "py-2", "px-3", "shadow");

  const heading = document.createElement("H3");
  heading.classList.add("my-4", "text-center");
  heading.textContent = "Propina";

  //Radio Button 10%
  const radio10 = document.createElement("INPUT");
  radio10.type = "radio";
  radio10.name = "propina";
  radio10.value = "10";
  radio10.classList.add("form-check-in");
  radio10.onclick = () => calcularPropina(10);

  const radio10Label = document.createElement("LABEL");
  radio10Label.textContent = "10%";
  radio10Label.classList.add("form-check-label");

  const radio10Div = document.createElement("DIV");
  radio10Div.classList.add("form-check");

  radio10Div.appendChild(radio10);
  radio10Div.appendChild(radio10Label);

  //Radio Button 25%
  const radio25 = document.createElement("INPUT");
  radio25.type = "radio";
  radio25.name = "propina";
  radio25.value = "25";
  radio25.classList.add("form-check-in");
  radio25.onclick = () => calcularPropina(25);

  const radio25Label = document.createElement("LABEL");
  radio25Label.textContent = "25%";
  radio25Label.classList.add("form-check-label");

  const radio25Div = document.createElement("DIV");
  radio25Div.classList.add("form-check");

  radio25Div.appendChild(radio25);
  radio25Div.appendChild(radio25Label);

  //Radio Button 50%
  const radio50 = document.createElement("INPUT");
  radio50.type = "radio";
  radio50.name = "propina";
  radio50.value = "50";
  radio50.classList.add("form-check-in");
  radio50.onclick = () => calcularPropina(50);

  const radio50Label = document.createElement("LABEL");
  radio50Label.textContent = "50%";
  radio50Label.classList.add("form-check-label");

  const radio50Div = document.createElement("DIV");
  radio50Div.classList.add("form-check");

  radio50Div.appendChild(radio50);
  radio50Div.appendChild(radio50Label);

  //Add to principal Div
  divFormulario.appendChild(heading);
  divFormulario.appendChild(radio10Div);
  divFormulario.appendChild(radio25Div);
  divFormulario.appendChild(radio50Div);

  //Add to form
  formulario.appendChild(divFormulario);
  contenido.appendChild(formulario);
}

function calcularPropina(tip) {
  const { pedido } = cliente;
  let subtotal = 0;

  pedido.forEach((articulo) => {
    subtotal += articulo.cantidad * articulo.precio;
  });

  //Calculate tip
  const propina = (subtotal * tip) / 100;

  //Calculate total
  const total = subtotal + propina;

  //Show total HTML

  mostrartTotalHTML(subtotal, total, propina);
}

function mostrartTotalHTML(subtotal, total, propina) {
  const divTotales = document.createElement("DIV");
  divTotales.classList.add("total-pagar", "my-5");

  //Subtotal
  const subtotalParrafo = document.createElement("P");
  subtotalParrafo.classList.add("fs-4", "fw-bold", "mt-2");
  subtotalParrafo.textContent = "Subtotal Consumo: ";

  const subtotalSpan = document.createElement("SPAN");
  subtotalSpan.classList.add("fw-normal");
  subtotalSpan.textContent = `$${subtotal}`;

  subtotalParrafo.appendChild(subtotalSpan);

  //Propina
  const propinaParrafo = document.createElement("P");
  propinaParrafo.classList.add("fs-4", "fw-bold", "mt-2");
  propinaParrafo.textContent = "Propina: ";

  const propinaSpan = document.createElement("SPAN");
  propinaSpan.classList.add("fw-normal");
  propinaSpan.textContent = `$${propina}`;

  propinaParrafo.appendChild(propinaSpan);

  //Total
  const totalParrafo = document.createElement("P");
  totalParrafo.classList.add("fs-4", "fw-bold", "mt-2");
  totalParrafo.textContent = "Total a Pagar: ";

  const totalSpan = document.createElement("SPAN");
  totalSpan.classList.add("fw-normal");
  totalSpan.textContent = `$${total}`;

  totalParrafo.appendChild(propinaSpan);

  //Delete the last result
  const totalPagarDiv = document.querySelector(".total-pagar");
  if (totalPagarDiv) {
    totalPagarDiv.remove();
  }

  divTotales.appendChild(subtotalParrafo);
  divTotales.appendChild(propinaParrafo);
  divTotales.appendChild(totalParrafo);

  const formulario = document.querySelector(".formulario > div");
  formulario.appendChild(divTotales);
}
