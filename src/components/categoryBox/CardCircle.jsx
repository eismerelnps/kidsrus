import React from "react";
import { NavLink } from "react-router-dom";

export const CardCircle = ({ id, title, navTo }) => {
  return (
    <div className="card  border-0 mx-5">
      <img src={`${process.env.PUBLIC_URL}./assets/main/navbar/${id}.png`} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <NavLink 
        className={ ({ isActive }) => "font_francois_one color_mate_blue text-decoration-none" + (isActive ? 'active' : '') }
        to={navTo}>{title}
        </NavLink>
      </div>
    </div>
  );
};
