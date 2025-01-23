/** @format */

const url = "http://localhost:4000/clientes";

//when a new client is created
export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

//Get all clients
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(url);
    const clientes = resultado.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

//Delete a client
export const eliminarCliente = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

//Get a client by id
export const obtenerCliente = async (id) => {
  try {
    const res = await fetch(`${url}/${id}`);
    const cliente = await res.json();
    return cliente;
  } catch (error) {
    console.log(error);
  }
};

//Update a client
export const editarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
