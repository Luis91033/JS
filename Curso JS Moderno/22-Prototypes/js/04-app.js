function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }

  return tipo;
};

//Instanciarlo
const lalo = new Cliente("Lalo", 6000);
console.log(lalo);

function Persona(nombre, saldo, telefono) {
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype); //Copia el constructor
Persona.prototype.constructor = Cliente;

const juan = new Persona("Juan", 500, 5529626757);
