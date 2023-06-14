import { nav } from "../../data/nav";
import { NavItem } from "./NavItem";

import "./ui.css";

export const Header = () => {
  return (
    <div className="mb-5">
      <div className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/main/logo.png`}
          className="img mb-5"
          alt="page_logo"
        />
      </div>

      <ul className="nav justify-content-center mb-5">
        {nav.map(({ title, navTo }) => (
          <NavItem key={title} title={title} navTo={navTo} />
        ))}
        <i className="fa-regular fa-heart p-2 color_mate_blue"></i>

        <i className="fa-solid fa-cart-shopping p-2 color_mate_blue position-relative">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            2<span className="visually-hidden">Products in cart</span>
          </span>
        </i>

        <i className="fa-solid fa-magnifying-glass p-2 color_mate_blue"></i>
      </ul>
    </div>
  );
};
