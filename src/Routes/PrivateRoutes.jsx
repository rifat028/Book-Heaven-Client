import React, { use } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import Spinner from "../Components/Spinner";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);
  if (loading) return <Spinner></Spinner>;
  if (user) return children;
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
