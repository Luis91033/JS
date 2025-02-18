/** @format */

import { React, Fragment, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import { useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import { Link } from "react-router-dom";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const params = useParams();
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [nuevoPassword, setNuevoPassword] = useState(false);

  const { msg } = alerta;
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setAlerta({ msg: "Coloca tu nuevo Password" });
        setTokenValido(true);
      } catch (error) {
        setAlerta({ msg: "Hubo un error con el enlace", error: true });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlerta({
        msg: "El password es muy corto, agrega mínimo 6 caracteres",
        error: true,
      });

      return;
    }
    try {
      const { data } = await clienteAxios.post(
        `/veterinarios/olvide-password/${token}`,
        { password }
      );

      setAlerta({
        msg: data.msg,
      });
      setNuevoPassword(true);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };
  return (
    <Fragment>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Restablece tu password y no Pierdas Acceso a{" "}
          <span className="text-black">tus Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        {tokenValido && (
          <form onSubmit={handleSubmit}>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nuevo Password
            </label>
            <input
              type="password"
              placeholder="Tu Nuevo Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Restablecer Password"
              className="bg-indigo-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
            />
          </form>
        )}
        {nuevoPassword && (
          <Link className="block text-center my-5 text-gray-500" to="/">
            Iniciar Sesión
          </Link>
        )}
      </div>
    </Fragment>
  );
};

export default NuevoPassword;
