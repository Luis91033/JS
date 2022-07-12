class Cliente {
  #nombre; //Hace la variable privada y sólo se puede acceder mediante un método

  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  mostrar() {
    return `Cliente ${this.#nombre}, tu saldo es de ${this.saldo}`;
  }
  //No necesita tener la variable para se llamado
  static bienvenida() {
    return "Bienvenida al cajero";
  }
}
