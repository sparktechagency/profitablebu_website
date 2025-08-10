import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Skeleton } from "antd";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const accessToken = localStorage.getItem("accessToken"); 

  if (!accessToken) {
    return <Navigate to={"/auth/login"} state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;