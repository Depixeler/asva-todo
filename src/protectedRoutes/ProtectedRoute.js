import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import LoginScreen from "../components/LoginScreen";

const ProtectedRoute = () => {
  const isAuth = useSelector((state) => state.user.isLoggedIn);
  return isAuth ? <Outlet /> : <LoginScreen />;
};

export default ProtectedRoute;
