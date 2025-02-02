/** @format */
import { Testimoniales } from "../models/Testimoniales.js";

const guardarTestimoniales = async (req, res) => {
  //Validate
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El Nombre está vacío" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El Correo está vacío" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El Mesaje está vacío" });
  }

  if (errores.length > 0) {
    const testimoniales = await Testimoniales.findAll();
    //Show errors views
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    //Add in the database
    try {
      await Testimoniales.create({
        nombre,
        correo,
        mensaje,
      });

      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimoniales };
