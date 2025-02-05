/** @format */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcular, pagoAMeses } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    setTotal(calcular(cantidad, meses));
  }, [cantidad, meses]);

  useEffect(() => {
    setPago(pagoAMeses(total, meses));
  }, [total]);

  const min = 0;
  const max = 20000;
  const step = 100;

  const handle = (e) => {
    setCantidad(+e.target.value);
  };
  const handleClickDecremento = () => {
    if (cantidad <= min) {
      alert("Cantidad no válida");
    } else {
      setCantidad(cantidad - step);
    }
  };
  const handleClickAumento = () => {
    if (cantidad >= max) {
      alert("Cantidad no válida");
    } else {
      setCantidad(cantidad + step);
    }
  };

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleClickDecremento} />
        <Button operador="+" fn={handleClickAumento} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handle}
        min={min}
        max={max}
        step={step}
        value={cantidad}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-500"> Plazo</span> a pagar
      </h2>
      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value={6}>6 Meses</option>
        <option value={12}>12 Meses</option>
        <option value={24}>24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-500"> de pagos</span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">
          {meses} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(pago)} Mensuales
        </p>
      </div>
    </div>
  );
}

export default App;
