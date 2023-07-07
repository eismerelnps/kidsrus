import { nav } from "../../data/nav";
import { NavItem } from "./NavItem";
import logo from "../../assets/main/logo.png";
//import logo2 from "../../assets/logo.png";

import "./ui.css";
import { DrawerAppBar } from "../newArrivals/navbar/DrawerAppBar";
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";

export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mb-5">
      <div className="text-center">
        <img src={logo} className="img mb-5" alt="page_logo" />
      </div>

      <ul className="nav justify-content-center mb-5 ">
        {nav.map(({ title, navTo }, index) => (
          <NavItem key={title} title={title} navTo={navTo} index={index} />
        ))}

        <i className="fa-regular fa-heart p-2 color_mate_blue position-relative ">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {user.wishList.count}
            <span className="visually-hidden">Products in wish-list</span>
          </span>
        </i>

        <i className="fa-solid fa-cart-shopping p-2 color_mate_blue position-relative">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {user.cart.count}
            <span className="visually-hidden">Products in cart</span>
          </span>
        </i>

        <i className="fa-solid fa-magnifying-glass p-2 color_mate_blue" ></i>
      </ul>
    </div>
  );
};
