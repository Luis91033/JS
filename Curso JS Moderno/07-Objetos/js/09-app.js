// Sellar un objeto
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

//No se pueden agregar ni eliminar propiedades, pero sí se pueden modificar las propiedades
Object.seal(producto);
console.log(producto);

// Se modificó el precio
producto.precio = 400;
console.log(producto);
console.log(Object.isSealed(producto));
