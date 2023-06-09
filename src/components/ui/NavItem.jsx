import React from "react";

export const NavItem = ({ title, navTo}) => {
  return (
    <li class="nav-item  font_francois_one">
      <a class="nav-link color_mate_blue" href={navTo}>
        {title}
      </a>
    </li>
  );
};
