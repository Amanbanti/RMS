import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("userInfo")); // Get user from local storage
  const hasToken = document.cookie.includes("jwt"); // Check if JWT cookie exists

  return user && hasToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
