import React from "react";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const isAuth = localStorage.getItem("token");

  if (!isAuth) {
    return (
      <div>
        <Navigate to="/auth/Login" replace="true" />
      </div>
    );
  }
  return children;
};

export default ReqAuth;
