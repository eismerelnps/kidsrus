import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import { CookiesAd } from "./components/ui/CookiesAd";
import { Outlet } from "react-router-dom";

import "./app.css";

export const App = () => {
  return (
    <>
      <div className="bg_color_orange">
        <div className="container px-5 text-center">
          <p className="text-light font_quicksand">
            20% off all kidswear + free shipping when you spend $60 or more
          </p>
        </div>
      </div>
      <div className="container mx-5 px-5">
        <Header />
        <div className="container">
         <Outlet />
        </div>
      </div>

      <Footer />
      <CookiesAd />
    </>
  );
};
