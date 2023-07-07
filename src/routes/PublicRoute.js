import { useContext } from "react";
import { AppContext } from "../app/appContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { user } = useContext(AppContext);

  //when using createBroseRouter
  //return user.logged ? <Navigate to="/kidsrus" /> : children;
  //when using createHashRouter

  return user.logged ? <Navigate to="/" /> : children;
};
