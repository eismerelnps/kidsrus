import React from "react";
import { NavLinkItem } from "../navlink/NavLinkItem";

import "./categoryBox.css";

export const CategoryBox = () => {
  return (
    <div>
      <h1 className="mb-4 font_francois_one color_mate_blue">CATEGORIES</h1>
      <div className="font_francois_one">
        <ul className="category_box_body list-group list-group-flush p-3">
          <li className="list-group-item color_mate_blue ">
            <NavLinkItem path={"/babies"} title={"For Babies"} amount={"11"} />
          </li>
          <li className="list-group-item">
            <NavLinkItem path={"/boys"} title={"For Boys"} amount={"19"} />
          </li>
          <li className="list-group-item">
            <NavLinkItem path={"/girls"} title={"For Girls"} amount={"20"} />
          </li>
          <li className="list-group-item">
            <NavLinkItem path={"/home"} title={"For Home"} amount={"14"} />
          </li>
          <li className="list-group-item">
            <NavLinkItem path={"/play"} title={"For Play"} amount={"8"} />
          </li>
        </ul>
      </div>
    </div>
  );
};
