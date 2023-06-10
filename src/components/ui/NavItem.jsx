import React from "react";

export const NavItem = ({ title, navTo}) => {
  return (
    <li className="nav-item  font_francois_one">
      <a className="nav-link color_mate_blue" href={navTo}>
        {title}
      </a>
    </li>
  );
};
