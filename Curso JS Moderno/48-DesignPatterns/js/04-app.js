/** @format */

//Factory Crea objetos basadosen ciertas condiciones

class InputHtml {
  constructor(type, nombre) {
    this.type = type;
    this.nombre = nombre;
  }

  crearInput() {
    return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
  }
}

class HTMLFactory {
  crearElemento(tipo, nombre) {
    switch (tipo) {
      case "text":
        return new InputHtml("text", nombre);

      default:
        break;
    }
  }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento("text", "nombre-cliente");
