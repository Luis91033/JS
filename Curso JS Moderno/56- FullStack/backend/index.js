/** @format */

import express from "express";
import conncectDB from "./config/db.js";
import { configDotenv } from "dotenv";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
configDotenv();
conncectDB();

const dominios = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (dominios.indexOf(origin) !== -1) {
      //The origin is accepted
      callback(null, true);
    } else {
      callback(new Error("No está permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor Funcionando ${PORT}`);
});
