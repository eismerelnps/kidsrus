import React from "react";
import { NavLink } from "react-router-dom";

export const CardCircle = ({ id, title, navTo }) => {
  return (
    <div class="card  border-0 mx-5">
      <img src={`${process.env.PUBLIC_URL}./assets/main/navbar/${id}.png`} class="card-img-top" alt={title} />
      <div class="card-body text-center">
        <NavLink to={navTo}>
          <p class=" font_francois_one color_mate_blue">{title}</p>
        </NavLink>
      </div>
    </div>
  );
};
