import { Navbar } from "./components/ui/NavBar";
import { NewArrivals } from "./components/newArrivals/NewArrivals";


import './app.css';


export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <NewArrivals />
      </div>
      <div className="mt-5">
         <h1 className="font_gilda_display"> Gilda_Display</h1>
         <h1 className="test1"> NEW ARRIVALS</h1>
        <h1 className="test1"> Francois_One</h1>
        <h1 className="test2"> Quicksand</h1>
      </div>
     
    </>
  );
};
