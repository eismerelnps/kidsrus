import React from "react";
import { NavLink } from "react-router-dom";

import { categotyBox } from "../../data/categotyBox";

import "./categoryBox.css";

export const CategoryBox = () => {
  return (
    <div className="mb-5">
      <h1 className="mb-4 font_francois_one color_mate_blue">CATEGORIES</h1>
      <div className="font_francois_one">
        <ul className="category_box_body list-group list-group-flush p-3">
          {
          categotyBox.map(({ id, title, navTo, amount }) => (
            <li key={title} className="list-group-item color_mate_blue ">
              <div className="row bg-purple">
                <NavLink className="nav-item nav-link col-10" to={navTo}>
                  {title}
                </NavLink>
                <p className="col-2 ">({amount})</p>
              </div>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};
