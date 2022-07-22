//Iteradores

function crearIterador(carrito) {
  let i = 0;

  return {
    siguiente: () => {
      const fin = i >= carrito.lenght;
      const valor = !fin ? carrito[i++] : undefined;

      return {
        fin,
        valor,
      };
    },
  };
}

const carrito = ["carrito10", "carrito2", "carrito3"];

//Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
