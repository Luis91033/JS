/** @format */
import AdminNav from "../components/AdminNav";
import React, { Fragment, useState } from "react";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

const CambiarPassword = () => {
  const { guardarPassword } = useAuth();
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    password_a: "",
    password_nuevo: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    if (password.password_nuevo.length < 6) {
      setAlerta({
        msg: "El Password debe tener mínimo de 6 caracteres",
        error: true,
      });
      return;
    }
    setAlerta(await guardarPassword(password));
  };

  const { msg } = alerta;
  return (
    <Fragment>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Password
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu {""}
        <span className="text-indigo-600 font-bold">Password aquí</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Password Actual
              </label>
              <input
                type="password"
                className="border bg-50 w-full p-2 mt-5 rounded-lg"
                name="password_a"
                placeholder="Escribe tu password actual"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Nuevo Password
              </label>
              <input
                type="password"
                className="border bg-50 w-full p-2 mt-5 rounded-lg"
                name="password_nuevo"
                placeholder="Escribe tu nuevo password"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>

            <input
              type="submit"
              value="Actualizar Password "
              className="bg-indigo-700 px-10 py-3 text-white rounded-lg uppercase w-full mt-5 hover:bg-indigo-900 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CambiarPassword;
