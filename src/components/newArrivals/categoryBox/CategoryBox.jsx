import React from "react";
import { NavLink } from "react-router-dom";

 import { categotyBox } from "../../../data/categotyBox";

import "./categoryBox.css";

export const CategoryBox = () => {

 
  return (
    <div className="d-none d-lg-block mb-5 "
    style={{cursor: "pointer"}}

    >
      <h1 className="mb-4 font_francois_one color_mate_blue text-center">CATEGORIES</h1>
      <div className="font_francois_one">
        <ul className="border_gray_dashed_own list-group list-group-flush p-3">
          {
          categotyBox.map(({ id, title, navTo, amount }) => (
            <li key={title} className="category_box_item list-group-item color_mate_blue ">
              
                <NavLink className="category_box_item_text nav-item nav-link" to={navTo}>
                <div className="row bg-purple">
                  <p className="col-10 ">{title}</p>
                  <p className="col-2 ">({amount})</p>
                  </div>
                </NavLink>
                
             
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};
