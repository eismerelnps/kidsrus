import { useEffect, useReducer } from "react";
import { AppContext } from "./app/appContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/appRouter";
import { appReducer } from "./app/appReducer";

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
  const [user, dispatch] = useReducer(appReducer, {}, init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]); 
  return (
    <AppContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
};
