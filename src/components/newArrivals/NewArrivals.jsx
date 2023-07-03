import React from "react";
import { CategoryBox } from "./categoryBox/CategoryBox";
import { Outlet } from "react-router-dom";
import { Instagram } from "./instagram/Instagram";
import { Home } from "./home/Home";
import { Navbar } from "./navbar/NavBar";
import { BestSellers } from "./bestsellers/BestSellers";
import { JoinUs } from "./joinUs/JoinUs";
import { SearchBar } from "./search/SearchBar";
import { AppBar } from "@mui/material";
import DrawerAppBar from "./navbar/DrawerAppBar";

export const NewArrivals = () => {
  const imagePath = "../assets/main/home-8.png";

  return (
    <div className="container-fluid">
      <Home />
      <Navbar />

      <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
        <h4 className="font_francois_one color_mate_blue">NEW ARRIVALS</h4>
        <img src={imagePath} className="img" alt="" />
      </div>

      <div className="row">
      
        <div className="col-12 col-lg-4 ">
          <SearchBar />
          <CategoryBox />
          <BestSellers />
          <JoinUs />
        </div>
        <div className="col-12 col-lg-8 ">
          <Outlet />{" "}
        </div>
        
      </div>
      <Instagram />
    </div>
  );
};
