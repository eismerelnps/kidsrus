import React, { useState } from "react";

import "./imagegallery.css";
import { imageZoom } from "./imageZoom";

export const ImageGallery = ({ images, category }) => {




  
  const handleMouseEnter = () => {
    setZoomVisible(true);
    handleImageZoom();
  };

  const handleImageZoom = () => {
    imageZoom("myimage", "myresult");
  }

  const handleMouseLeave = () => {
    setZoomVisible(false);
  };

  const [zoomVisible, setZoomVisible] = useState(false);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // Verificar si hay imágenes
  if (!images || images.length === 0) {
    return <div>No image avaiable..</div>;
  }

  // Obtener la primera imagen como imagen grande
  const largeImage = `${process.env.PUBLIC_URL}/assets/${category}/${
    images[0]["img" + (selectedImageIndex + 1)]
  }`;

  // Obtener las imágenes restantes para la galería de miniaturas
  const thumbnailImages = Object.values(images[0]);

  return (
    <div>
      <div className=" img-zoom-container text-center">
        <img
          id="myimage"
          src={largeImage}
          alt="large grande"
          className="img-fluid"
          onClick={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div
          id="myresult"
          className={`img-zoom-result ${zoomVisible ? "d-block" : "d-none"}`}
        ></div>
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
                src={`${process.env.PUBLIC_URL}/assets/${category}/${image}`}
                alt={`Imagen ${index + 2}`}
                className="img-fluid"
                onClick={() => handleImageClick(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
