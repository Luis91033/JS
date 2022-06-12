//Arrow function en objetos
const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciedo canción con el id ${id}`),
  pausar: () => console.log("Pausando.."),
  crear: (nombre) => console.log(`Creando la playlist de ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },

  get obtener() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "dando y perdiendo";
reproductor.obtener;
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

//Añadir funciones al oobjetoS
reproductor.borrar = (id) => console.log(`Borrando canción ${id}`);

reproductor.borrar(30);
reproductor.crear("Rapsusklei");
