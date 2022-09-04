//Para enviar notificaciones, ellos deben aceptar recibir notificaciones
const notificarBTN = document.querySelector("#notificar");

notificarBTN.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => {
    console.log("El resultado es", resultado);
  });
});

const verNotificacion = document.querySelector("#verNotificacion");

verNotificacion.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    //Granted es cuando aceptan notificacion
    new Notification("This is the notification", {
      icon: "img/ccj.png",
    });
  }
});
