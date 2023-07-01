import React from "react";

import './instagram.css'

import submark from "../../../assets/main/home-8.png"

import img1 from "../../../assets/main/instagram/84981049_620107085435507_4260875787090681190_nlow.jpg";
import img2 from     "../../../assets/main/instagram/85051426_2060664737412512_8458893884651247910_nlow.jpg";

import img3 from  "../../../assets/main/instagram/87339849_530805007551424_292323017375800029_nlow.jpg"
import img4 from  "../../../assets/main/instagram/85069033_185901059177965_6767010623440980864_nlow.jpg"
import img5 from  "../../../assets/main/instagram/87413583_2660130777540405_5722961474466513534_nlow.jpg"


export const Instagram = () => {
 

  const images = [

    img1, img2, img3, img4, img5
    // "../../../assets/main/instagram/84981049_620107085435507_4260875787090681190_nlow.jpg",
    // "../../../assets/main/instagram/85051426_2060664737412512_8458893884651247910_nlow.jpg",
    // "../../../assets/main/instagram/87339849_530805007551424_292323017375800029_nlow.jpg",
    // "../../../assets/main/instagram/85069033_185901059177965_6767010623440980864_nlow.jpg",
    // "../../../assets/main/instagram/87413583_2660130777540405_5722961474466513534_nlow.jpg",
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
          <img
          style={{cursor: "pointer"}}
          key={i}
            src={img}
            className="instagram_images img col-2"
            alt="instagram"
          />
        ))}
      </div>
    </div>
  );
};
