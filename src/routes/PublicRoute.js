import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  
  //when using createBroseRouter
 //return user.logged ? <Navigate to="/kidsrus" /> : children;
  //when using createHashRouter

  return user.logged ? <Navigate to="/" /> : children;
};
