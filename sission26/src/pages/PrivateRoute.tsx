import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children }: { children: JSX.Element }) {
  const isAuth = localStorage.getItem("isAuth") === "true";

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
