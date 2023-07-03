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
      <div className="bg_color_orange">
        <div className="px-5 text-center">
          <p className="text-light font_quicksand">
            20% off all kidswear + free shipping when you spend $60 or more
          </p>
        </div>
      </div>
      <div className="  px-5">
        <Header />
        <div className="">
         <Outlet />
        </div>
      </div>

      {/* <Footer /> */}
      <CookiesAd />
    </>
  );
};
