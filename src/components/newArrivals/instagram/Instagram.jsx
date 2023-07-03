import React from "react";

import "./instagram.css";

import submark from "../../../assets/main/home-8.png";
const imagesSRC = require.context("../../../assets/main/instagram", true);

export const Instagram = () => {

  const images = [
    "84981049_620107085435507_4260875787090681190_nlow.jpg",
    "85051426_2060664737412512_8458893884651247910_nlow.jpg",
    "87339849_530805007551424_292323017375800029_nlow.jpg",
    "85069033_185901059177965_6767010623440980864_nlow.jpg",
    "87413583_2660130777540405_5722961474466513534_nlow.jpg",
  ];

  return (
    <div className="mb-5">
      <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
        <h4 className="font_francois_one color_mate_blue">
          INSTAGRAM @KIDSRUS
        </h4>
        <img src={submark} className="img" alt="submark" />
      </div>
      <div className="row justify-content-center">
        {images.map((img, i) => (
          <div key={i} className="col-6 col-xl-2 mb-3">
            <img
              style={{ cursor: "pointer" }}
              src={imagesSRC(`./${ img }`)}
              className="instagram_images img-fluid "
              alt="instagram"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
