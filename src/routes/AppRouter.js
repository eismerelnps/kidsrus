import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";

import { Girls } from "../components/categories/girls/Girls";
import { Boys } from "../components/categories/boys/Boys";
import { Babies } from "../components/categories/babies/Babies";
import { Home } from "../components/categories/home/Home";
import { Play } from "../components/categories/play/Play";

import ErrorPage from "../components/errorPage/ErrorPage";
import { ProductScreen } from "../components/product/ProductScreen";
import { NewArrivals } from "../components/newArrivals/NewArrivals";

export const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "*",
          element: <NewArrivals />,

          children: [
            // Las rutas anidadas dentro de NewArrivals se definen aquí nuevamente

            {
              path: "girls",
              element: <Girls />,
            },
            {
              path: "boys",
              element: <Boys />,
            },
            {
              path: "babies",
              element: <Babies />,
            },
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "play",
              element: <Play />,
            },
          ],
        },
        {
          path: "product/:productsId",
          element: <ProductScreen />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  {
    basename: "/kidsrus",
  }
);
