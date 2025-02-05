import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("userInfo")); // Get user from local storage

  console.log(user)

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
