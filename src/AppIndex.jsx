import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/appRouter";
import { authReducer } from "./auth/authReducer";

export const AppIndex = () => {
  const init = () => {
    return (
      JSON.parse(localStorage.getItem("user")) || {
        logged: false,
        cart: { count: 0, items: [] },
        wishList: { count: 0, items: [] },
      }
    );
  };
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};
