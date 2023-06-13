import { Header } from "./components/ui/Header";
import { randomDate } from "./helpers/randomDate";
import { Footer } from "./components/ui/Footer";
import { CookiesAd } from "./components/ui/CookiesAd";
import { Outlet, Route, Routes } from "react-router-dom";

import "./app.css";
import { NewArrivals } from "./components/newArrivals/NewArrivals";
import { Girls } from "./components/categories/girls/Girls";
import { Boys } from "./components/categories/boys/Boys";
import { Babies } from "./components/categories/babies/Babies";
import { Home } from "./components/categories/home/Home";
import { Play } from "./components/categories/play/Play";
import { ProductScreen } from "./components/product/productScreen/ProductScreen";
import { ProductRandom } from "./components/product/ProductRandom";

export const App = () => {
  const date = randomDate();
  console.log(date);
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
          <Routes>
            <Route path="*" element={<NewArrivals />}>
              {/* Rutas anidadas dentro de NewArrivals */}
              <Route path="" element={<ProductRandom />} />
              <Route path="girls" element={<Girls />} />
              <Route path="boys" element={<Boys />} />
              <Route path="babies" element={<Babies />} />
              <Route path="home" element={<Home />} />
              <Route path="play" element={<Play />} />
            </Route>

            {/* Ruta para ProductScreen */}
           
              <Route path="product/:productsId" element={<ProductScreen />} />
          
           
          </Routes>
        </div>
      </div>

      <Footer />
      <CookiesAd />
      <div className="mt-5">
        <h1 className="font_gilda_display">font_gilda_display</h1>
        <h1 className="font_francois_one">font_francois_one</h1>
        <h1 className="font_quicksand">font_quicksand</h1>
      </div>
    </>
  );
};
