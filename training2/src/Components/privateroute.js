import React from "react";
import { Outlet, Navigate } from "react-router-dom";
function PrivateRoute() {
  let userid = localStorage.getItem("token") == null ? false : true;
  return <div>{userid ? <Outlet /> : <Navigate to="/" />}</div>;
}

export default PrivateRoute;
