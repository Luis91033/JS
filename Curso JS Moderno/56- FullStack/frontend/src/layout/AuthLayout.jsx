/** @format */
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import React from "react";

const AuthLayout = () => {
  return (
    <Fragment>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default AuthLayout;
