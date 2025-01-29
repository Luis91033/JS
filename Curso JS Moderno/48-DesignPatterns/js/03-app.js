/** @format */

// Singleton sirve para solo crear una instancia del mismo objeto

let instancia = null;

class Persona {
  constructor(nombre, email) {
    if (!instancia) {
      this.nombre = nombre;
      this.email = email;
      instancia = this;
    } else {
      return instancia;
    }
  }
}

const persona = new Persona("Lalo", "lalocorral@gmail.com");
