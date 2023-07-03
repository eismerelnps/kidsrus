import React from "react";

import home_01 from '../../../assets/main/slider-1.jpg'
import home_02 from '../../../assets/main/girls-power.jpg'

import "./home.css";

export const Home = () => {
  return (
    <div className="row mb-5">
      <div className="col-12 col-xl-8 p-1">
        <div className="position-relative">
          <img
            //src={`/docs/assets/main/slider-1.jpg`}
            src={`.${home_01}`}
            className="img-fluid"
            alt="page_logo"
          />
          <div className="position-absolute bottom-0 start-0 p-3">
            <h1 className="text-white">Jumpsuits</h1>
            <p className="text-white mb-3">
              Confortable clothes for you little babies
            </p>
            <div className="bg-light p-1 d-inline-block">
              <button className="discover-btn btn color_mate_blue font_francois_one">
                DISCOVER
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-4 p-1">
        <img
          //src={`./docs/assets/main/girls-power.jpg`}
          src={`.${home_02}`}
          className="img-fluid"
          alt="page_logo"
        />
        <div className="text-center p-0 m-0">
          <p className="font_francois_one color_mate_blue m-0"> GIRL POWER</p>
          <p className="font_gilda_display"> For a colorful summer </p>
        </div>
      </div>
    </div>
  );
};
