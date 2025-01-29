/** @format */

function Vendedor(nombre) {
  this.nombre = nombre;
  this.sala = null;
}
Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(
      `Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`
    );
  },
};

function Comprador(nombre) {}

function Subasta() {}

//Crear objetos
const luis = new Comprador("luis");
const eduardo = new Comprador("eduardo");
const vendedor = new Vendedor("Vender autos");
const subasta = new Subasta();

vendedor.oferta("Mustang 66", 300);
