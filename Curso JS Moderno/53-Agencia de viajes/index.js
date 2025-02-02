/** @format */
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// Connect DataBase
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

//Define the port
const port = process.env.PORT || 4000;

//Hablity pug
app.set("view engine", "pug");

//Get actual year
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de viajes";
  return next();
});

//Add body parser to read the formulate data
app.use(express.urlencoded({ extended: true }));

//Define public Folder
app.use(express.static("public"));

//Add router
app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
