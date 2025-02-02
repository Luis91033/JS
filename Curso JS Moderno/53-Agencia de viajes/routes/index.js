/** @format */

import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonios,
  paginaDetalle,
} from "../controllers/paginasController.js";

import { guardarTestimoniales } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalle);

router.get("/testimoniales", paginaTestimonios);

router.post("/testimoniales", guardarTestimoniales);

export default router;
