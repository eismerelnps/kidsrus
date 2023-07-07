import { /**createBrowserRouter, */  createHashRouter } from "react-router-dom";

import { App } from "../App";

import { Girls } from "../components/categories/girls/Girls";
import { Boys } from "../components/categories/boys/Boys";
import { Babies } from "../components/categories/babies/Babies";
import { Home } from "../components/categories/home/Home";
import { Play } from "../components/categories/play/Play";

import ErrorPage from "../components/errorPage/ErrorPage";
import { ProductScreen } from "../components/product/ProductScreen";
import { NewArrivals } from "../components/newArrivals/NewArrivals";
import { ProductRandom } from "../components/product/ProductRandom";
import { PublicRoute } from "./PublicRoute";
import { SignUpScreen } from "../components/login/SignUpScreen";

/** using 'createHashRouter' to be able to reload
 * the page while it is displayed on GitHub pages,
 * 'createHashRouter' is not recommended,
 * use'createBrowserRouter' instead when using a real host */

//export const router = createBrowserRouter(
export const router = createHashRouter(
  [
    {
      path: '/login',
      element: (
        <PublicRoute>
          <SignUpScreen/>
        </PublicRoute>
      )
    },
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <NewArrivals />,
          children: [
            // Routes nested within NewArrivals are defined here again
            {
              path: "/",
              element: <ProductRandom />,
            },
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
    // basename: "/kidsrus",
  }
);
