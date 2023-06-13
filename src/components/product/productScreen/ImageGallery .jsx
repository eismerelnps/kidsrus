import React, { useState } from "react";

export const ImageGallery = ({ images, category }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
      };
      
  

  // Verificar si hay imágenes
  if (!images || images.length === 0) {
    return <div>No image avaiable..</div>;
  }

  // Obtener la primera imagen como imagen grande
  const largeImage = `${process.env.PUBLIC_URL}/assets/${category}/${images[0]['img' + (selectedImageIndex + 1)]}`;

  // Obtener las imágenes restantes para la galería de miniaturas
  const thumbnailImages = Object.values(images[0]);

  return (
    <div>
      <div className="text-center">
        <img src={largeImage} alt="large grande" className="img-fluid" />
      </div>

      <div className="row mt-1">
      {thumbnailImages.map((image, index) => (
  <div className={`col-3 ${selectedImageIndex === index ? 'selected' : ''}`} key={index}>
    <img
      src={`${process.env.PUBLIC_URL}/assets/${category}/${image}`}
      alt={`Imagen ${index + 2}`}
      className="img-fluid"
      onClick={() => handleImageClick(index)}
    />
  </div>
))}



      </div>
    </div>
  );
};
