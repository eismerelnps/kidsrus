import React from "react";
import { NavLink } from "react-router-dom";

export const BestSellers = () => {
  return (
    <div className="mb-5 " style={{ cursor: "pointer" }}>
      <h1 className="mb-4 font_francois_one color_mate_blue">BEST SELLERS</h1>
      <div className="font_francois_one">
        <ul className="border_gray_dashed_own list-group list-group-flush p-3"></ul>
      </div>
    </div>
  );
};
