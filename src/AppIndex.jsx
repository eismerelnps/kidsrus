import React, { useEffect, useReducer } from "react";
import { AppContext } from "./app/appContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/appRouter";
import { appReducer } from "./app/appReducer";

const USER_LOCAL_STORAGE_KEY = "user";

const init = () => {
  const storedUser = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  if (storedUser) {
    return {
      ...JSON.parse(storedUser),
      cart: { count: 0, items: [] },
      wishList: { count: 0, items: [] },
    };
  }

  return {
    logged: false,
    cart: { count: 0, items: [] },
    wishList: { count: 0, items: [] },
  };
};

export const AppIndex = () => {
  const [user, dispatch] = useReducer(appReducer, {}, init);

  useEffect(() => {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  return (
    <AppContext.Provider value={{ user, dispatch }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
};
