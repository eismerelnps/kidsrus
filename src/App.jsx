import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import { CookiesAd } from "./components/ui/CookiesAd";
import { Outlet } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./app.css";

export const App = () => {
  return (
    <>
      
      <div className=" container-lg px-5">
        <Header />
       
        <div className="">
         <Outlet />
        </div>
      </div>

       <Footer /> 
      <CookiesAd />
    </>
  );
};
