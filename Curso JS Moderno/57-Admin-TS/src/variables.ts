/** @format */

import { generarId } from "./funciones";
import { CitaI } from "./types";

let editando = {
  value: false,
};

// Objeto de Cita
const citaObj: CitaI = {
  id: generarId(),
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

export { editando, citaObj };
