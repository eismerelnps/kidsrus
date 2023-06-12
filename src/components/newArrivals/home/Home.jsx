import React from 'react'

export const Home = () => {
  return (
    <div className="row">
    <div className="col-8 p-1">
      <div className="position-relative">
        <img
          src={`${process.env.PUBLIC_URL}./assets/main/slider-1.jpg`}
          className="img-fluid"
          alt="page_logo"
        />
        <div className="position-absolute bottom-0 start-0 p-3">
          <h1 className="text-white">Jumpsuits</h1>
          <p className="text-white mb-3">Confortable clothes for you little babies</p>
          <div className="bg-light p-1 d-inline-block">
          <button className="discover-btn btn color_mate_blue font_francois_one">DISCOVER</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-4 p-1">
      <img
        src={`${process.env.PUBLIC_URL}./assets/main/girls-power.jpg`}
        className="img-fluid"
        alt="page_logo"
      />
      <div className="text-center p-0 m-0">
        <p className="font_francois_one color_mate_blue m-0"> GIRL POWER</p>
        <p className="font_gilda_display"> For a colorful summer </p>
      </div>
    </div>
  </div>
  )
}
