import React, { useState } from "react";

import './newArrivals.css'

export const ZoomImage = ({ src }) => {

  const [zoomStyle, setZoomStyle] = useState(null);

  const handleMouseMove = (event) => {
   // console.log(event.clientX)

    const { left, top, width, height } = event.target.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    const zoomX = (mouseX / width) * 100;
    const zoomY = (mouseY / height) * 100;

    setZoomStyle({
      background: `url(${src})`,
      backgroundSize: "cover",
      backgroundPosition: `${zoomX}% ${zoomY}%`,
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 9999,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle(null);
  };

  return (
    <div
      className="image-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <img 
      className="image" 
      src={src} 
      alt="asasas" style={{ maxWidth: "100%" }} 
      />
      {zoomStyle && <div className="zoom-image" style={zoomStyle}></div>}
    </div>
  );
};

