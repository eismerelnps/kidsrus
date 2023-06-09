import React from "react";
import { SearchBar } from "../search/SearchBar";
import { CategoryBox } from "../categoryBox/CategoryBox";
import { Outlet } from "react-router-dom";

export const NewArrivals = () => {
  const path = "/assets/main/home-8.png";
  const imagePath = `${process.env.PUBLIC_URL}.${path}`;

  return (
    <div className="container-fluid">
      <div class="d-flex flex-column justify-content-center align-items-center text-center mb-5">
        <h4 className="font_francois_one color_mate_blue">NEW ARRIVALS</h4>
        <img src={imagePath} class="img" alt="" />
      </div>
      <div className="row">
        <div className="col-4">
          <SearchBar />
          <CategoryBox />
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
