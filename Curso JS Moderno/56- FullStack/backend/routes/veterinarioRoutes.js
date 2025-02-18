/** @format */

import express from "express";
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  restaurar,
  comprobarToken,
  nuevoPassword,
  actualizarPerfil,
  actualizarPassword,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//Public Area
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", restaurar);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

//Private Area
router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);

export default router;
