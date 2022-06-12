//Funciones a un objeto
const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciedo canción con el id ${id}`);
  },
  pausar: function () {
    console.log("Pausando..");
  },
  crear: function (nombre) {
    console.log(`Creando la playlist de ${nombre}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

//Añadir funciones al oobjetoS
reproductor.borrar = function (id) {
  console.log(`Borrando canción ${id}`);
};

reproductor.borrar(30);
reproductor.crear("Rapsusklei");
