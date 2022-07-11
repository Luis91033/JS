function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new Cliente("Juan", 500);

function Formatear(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(Formatear(juan));
