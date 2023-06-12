import { nav } from "../../data/nav";
import { NavItem } from "./NavItem";

import './ui.css'

export const Header = () => {
  return (
    <div className="mb-5">
      <div className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}./assets/main/logo.png`}
          className="img mb-5"
          alt="page_logo"
        />
      </div>

      
      <ul className="nav justify-content-center mb-5">
        {nav.map(({ title, navTo }) => (
          <NavItem key={title} title={title} navTo={navTo} />
        ))}
        <i className="fa-regular fa-heart p-2 color_mate_blue"></i>
        <i className="fa-solid fa-cart-shopping p-2 color_mate_blue"></i>
        <i className="fa-solid fa-magnifying-glass p-2 color_mate_blue"></i>
      </ul>

      
    </div>
  );
};
