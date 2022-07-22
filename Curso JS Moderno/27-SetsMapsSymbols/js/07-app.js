//Generadores
//Antes del nombre de la funcion lleva un asterisco
function* crearGenerador() {
  yield 1;
  yield "Juan";
  yield 3 + 3;
}

const iterador = crearGenerador();

// console.log(iterador);
// //Cada next va recorriendo cada yield
// console.log(iterador.next());

//Generador para carrito de compras

function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ["producto1", "producto2", "producto3"];
const iterado2r = generadorCarrito(carrito);
console.log(iterado2r.next());
console.log(iterado2r.next());
console.log(iterado2r.next());
console.log(iterado2r.next());
