//import { Navbar } from "./components/ui/NavBar";
import { NewArrivals } from "./components/newArrivals/NewArrivals";


import './app.css';
import { Header } from "./components/ui/Header";
import { Navbar } from "./components/ui/NavBar";


export const App = () => {
  return (
    <>
     <div className="color-bg-orange">
        <div className="container px-5 text-center">
          <p className="text-light font_quicksand ">
            20% off all kidswear + free shipping when you spend $60 or more
          </p>
        </div>
      </div>
      <div className="container mx-5 px-5">
      <Header />
      <div className="container">
        <Navbar />
        <NewArrivals />
      </div>
      </div>
      
      <div className="mt-5">
         <h1 className="font_gilda_display"> Gilda_Display</h1>
        <h1 className="font_francois_one"> Francois_One</h1>
        <h1 className="font_quicksand"> Quicksand</h1>
        <h1 className="font_quicksand"> Search Products</h1>
      </div>
     
    </>
  );
};
