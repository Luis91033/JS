/** @format */

//Implicit Binding

const usuario = {
  nombre: "Lalo",
  edad: 23,
  informacion() {
    console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
  },
};

usuario.informacion();
