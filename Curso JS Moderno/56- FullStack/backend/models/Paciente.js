/** @format */

import mongoose from "mongoose";

const pacientesSchemma = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    propietario: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    sintomas: {
      type: String,
      required: true,
    },
    veterinario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Veterinario",
    },
  },
  {
    Timestamp: true,
  }
);

const Paciente = mongoose.model("Paciente", pacientesSchemma);

export default Paciente;
