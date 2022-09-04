let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setInterval(() => {
    crearCliente();
  }, 5000);
});

function crmDB() {
  //Crear base de datos version 1.0
  let crmDB = window.indexedDB.open("crm", 1);

  //Si hay error
  crmDB.onerror = function () {
    console.log("Hubo un error a la hora de crear la BD");
  };
  //Si se creo bien
  crmDB.onsuccess = function () {
    console.log("Base de datos creada");
    DB = crmDB.result;
  };

  //Configuracion de la base de daos
  crmDB.onupgradeneeded = function () {
    const db = e.target.result;

    const objectStore = db.createObjectStore("crm", {
      ketPath: "crm",
      autoIncrement: true,
    });

    //Definir las columnas
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });
  };
}

function crearCliente() {
  let transaction = DB.transaction(["crm"], "readwrite");

  transaction.oncomplete = function () {
    console.log("Transacción completada");
  };
}
