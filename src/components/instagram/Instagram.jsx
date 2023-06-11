import React from "react";

export const Instagram = () => {
    const path = "/assets/main/home-8.png";
  const imagePath = `${process.env.PUBLIC_URL}.${path}`;

  return (
    <div className="mb-5">
    <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
        <h4 className="font_francois_one color_mate_blue">INSTAGRAM @KIDSRUS</h4>
        <img src={imagePath} className="img" alt="" />
      </div>
      <div className="row justify-content-center">
        <img src={`${process.env.PUBLIC_URL}./assets/main/instagram/84981049_620107085435507_4260875787090681190_nlow.jpg`} className="img col-2" alt="instagram" />
        <img src={`${process.env.PUBLIC_URL}./assets/main/instagram/85051426_2060664737412512_8458893884651247910_nlow.jpg`} className="img col-2" alt="instagram" />
        <img src={`${process.env.PUBLIC_URL}./assets/main/instagram/87339849_530805007551424_292323017375800029_nlow.jpg`} className="img col-2" alt="instagram" />
        <img src={`${process.env.PUBLIC_URL}./assets/main/instagram/85069033_185901059177965_6767010623440980864_nlow.jpg`} className="img col-2" alt="instagram" />
        <img src={`${process.env.PUBLIC_URL}./assets/main/instagram/87413583_2660130777540405_5722961474466513534_nlow.jpg`} className="img col-2" alt="instagram" />

      </div>
    </div>
  );
};
//public\assets\main\instagram\84981049_620107085435507_4260875787090681190_nlow.jpg
