import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppContext } from "../app/appContext";

export const PrivateRoute = ({ children }) => {
    const { user } =  useContext(AppContext);
    const { pathname, search } = useLocation();
    localStorage.setItem("lastPath", `${pathname}${search}`);
    return user.logged ? children : <Navigate to='/signin'/>
};
