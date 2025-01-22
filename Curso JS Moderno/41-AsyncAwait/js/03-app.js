/** @format */

function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = false;
    setTimeout(() => {
      if (!error) {
        resolve("El estado de clientes se deracgó correctamente");
      } else {
        reject("Error en la conexión");
      }
    }, 3000);
  });
}

//Async await
const ejecutar = async () => {
  try {
    const respuesta = await descargarClientes();
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
ejecutar();
