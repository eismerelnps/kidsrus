import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import submark from "../../assets/main/home-8.png";
export const NavItem = ({ title, navTo, index }) => {
  const [active, setActive] = useState(false);

  const handleSetActive = ({i}) => {
    console.log('active')
  };
  return (
    <li className="nav-item d-flex flex-column align-items-center font_francois_one ">
      <NavLink className="nav-link " to={navTo}>
        <button className="btn color_mate_blue" onClick={handleSetActive(index)}>{title}</button>
      </NavLink>

      {active && <img src={submark} className="img" alt="" />}
    </li>
  );
};
