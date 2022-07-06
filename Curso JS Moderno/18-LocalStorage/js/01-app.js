//Mandar datos a localstorage

localStorage.setItem("nombre", "Eduardo");

const producto = {
  nombre: "monitor",
  precio: 300,
};

const productostring = JSON.stringify(producto); //Este método permite pasar a string
console.log(productostring);

localStorage.setItem("producto", productostring);
