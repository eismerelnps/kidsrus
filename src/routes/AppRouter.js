import { createBrowserRouter } from "react-router-dom";

import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import ErrorPage from "../components/error/ErrorPage";
import { HeroesApp } from "../HeroesApp";
import { HeroScreen } from "../components/hero/HeroScreen";

export const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/",
      element: <HeroesApp />,
      errorElement: <ErrorPage />,
      
       children: [
   // },
    {
      path: "marvel",
      element: <MarvelScreen />,
    },
    {
      path: "dc",
      element: <DcScreen />,
    },
    {
      path: "search",
      element: <SearchScreen />,
    },
    {
      path: "hero/:heroeId",
      element: <HeroScreen />,
    },
    
     ],
     
     },
     
  ],
  {
    // basename: '/'
  }
);
