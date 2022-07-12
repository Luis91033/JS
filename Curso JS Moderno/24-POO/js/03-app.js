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

//Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }
}

const lalo = new Cliente("Lalo", 400);

const empresa = new Empresa("Hola", 500);
console.log(empresa.mostrar());
