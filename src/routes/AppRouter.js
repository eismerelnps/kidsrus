import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";

import { Girls } from "../components/categories/girls/Girls";
import { Boys } from "../components/categories/boys/Boys";
import { Babies } from "../components/categories/babies/Babies";
import { Home } from "../components/categories/home/Home";
import { Play } from "../components/categories/play/Play";
import { KidScreen } from "../components/kidsrus/KidScreen";

import ErrorPage from "../components/errorPage/ErrorPage";



export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,

       children: [
    {
      path: "girls",
      element: <Girls />,
    },
    {
      path: "/boys",
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
    {
      path: "kids/:kidsId",
      element: <KidScreen />,
    },
    
     ],
     
     },
     
  ],
  {
    // basename: '/'
  }
);
