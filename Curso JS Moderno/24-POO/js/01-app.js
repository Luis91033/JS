//class declaration
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrar() {
    return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
  }
  //No necesita tener la variable para se llamado
  static bienvenida() {
    return "Bienvenida al cajero";
  }
}

const lalo = new Cliente("Lalo", 400);
console.log(lalo);
console.log(lalo.mostrar());
console.log(Cliente.bienvenida());

//class expression
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrar() {
    return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
  }
};
