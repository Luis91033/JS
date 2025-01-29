/** @format */

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const funcionesPersona = {
  mostrarInformacion() {
    console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
  },
};

//Añadir funcionesPersona a la clase de Persona

Object.assign(Persona.prototype, funcionesPersona);
const cliente = new Persona("Lalo", "correo@correo.com");
cliente.mostrarInformacion();
