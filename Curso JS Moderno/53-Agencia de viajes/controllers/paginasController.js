/** @format */

import { Viaje } from "../models/Viaje.js";
import { Testimoniales } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
  //Consult 3 trip models

  const promiseDB = [];
  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimoniales.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseDB);

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
  //req - lo que enviamos : res - lo que express nos devuelve
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  //Query Database
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Proximos viajes",
    viajes,
  });
};

const paginaTestimonios = async (req, res) => {
  try {
    const testimoniales = await Testimoniales.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

//Show a trip down your slug
const paginaDetalle = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({
      where: {
        slug,
      },
    });
    res.render("viaje", {
      pagina: "Informacion Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonios,
  paginaDetalle,
};
