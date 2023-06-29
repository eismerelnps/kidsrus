import React, { useState } from "react";

import "./imagegallery.css";
import { imageZoom } from "./imageZoom";
import { toLowerCaseTwoFirst } from "../../../helpers/toLowerCaseTwoFirst";

export const ImageGallery = ({ images, category, stockAmount }) => {


  const [zoomStyle, setZoomStyle] = useState(null);

  const handleMouseEnter = () => {
    //setZoomVisible(true);
    handleImageZoom();
  };

  const handleImageZoom = () => {
    imageZoom("myimage", "myresult");
  };

  const handleMouseLeave = () => {
    setZoomVisible(false);
    setZoomStyle(null);
  };

  const [zoomVisible, setZoomVisible] = useState(true);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // Verificar si hay imágenes
  if (!images || images.length === 0) {
    return <div>No image avaiable..</div>;
  }

  // Obtener la primera imagen como imagen grande
  const largeImage = `../../assets/${toLowerCaseTwoFirst(category)}/${images[0]["img" + (selectedImageIndex + 1)]}`;

  // Obtener las imágenes restantes para la galería de miniaturas
  const thumbnailImages = Object.values(images[0]);

  return (
    <div>
      <div onMouseLeave={handleMouseLeave} className=" img-zoom-container text-center">
      <div className="card border-0 rounded-0">
        <div className="position-relative">
        <img
          id="myimage"
          src={largeImage}
          alt="large grande"
          className="img-fluid"
          onClick={handleMouseEnter}
          
        />
        {
          stockAmount === 0 && (
        
        <div className="position-absolute top-0 end-0 m-3">
                <span className="outOfStockBtn bg-light rounded-5 color_light_blue font_francois_one px-3 py-1">
                  OUT OF STOCK
                </span>
              </div>)}
        </div></div>
        {zoomVisible === true &&
        <div id="myresult" className={`img-zoom-result `}></div>}
      </div>

      <div className="row mt-1">
        {thumbnailImages.map((image, index) => (
          <div
            className={`col-3 ${
              selectedImageIndex === index ? "selected" : ""
            }`}
            key={index}
          >
            <div className="img-zoom-container">
              <img
                id={`myimage-${index}`}
                src={`../../assets/${toLowerCaseTwoFirst(category)}/${image}`}
                alt={`Imagen ${index + 2}`}
                className="img-fluid"
                onClick={() => handleImageClick(index)}
              />
              {zoomStyle && (
                <div className="zoom-image" style={zoomStyle}></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
