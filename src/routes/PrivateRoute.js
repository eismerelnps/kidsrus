import { useContext } from "react";
import { AppContext } from "../auth/appContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { user } =  useContext(AppContext);
    const { pathname, search } = useLocation();
    localStorage.setItem("lastPath", `${pathname}${search}`);
    return user.logged ? children : <Navigate to='/login'/>
};
