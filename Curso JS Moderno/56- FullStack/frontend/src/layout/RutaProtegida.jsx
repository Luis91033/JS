/** @format */
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "cargando....";
  return (
    <div>
      <Header />
      {auth?._id ? (
        <main className="container mx-auto mt-10">
          <Outlet />{" "}
        </main>
      ) : (
        <Navigate to="/" />
      )}
      <Footer />
    </div>
  );
};

export default RutaProtegida;
