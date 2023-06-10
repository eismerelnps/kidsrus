import React from "react";

export const ProductCard = ({
  title,
  price,
  stockAmount,
  category,
  tags,
  description,
  information,
  rating,
  id,
  images,
  reviews,
}) => {
  const imagePath = `${process.env.PUBLIC_URL}./assets/${category}/${images[0].img1}`;

  return (
    <div className="col-6 col-xl-4 mt-1  ">
      <div className="card border-0 rounded-0">
        <div className="position-relative">
          <img
            src={imagePath}
            className="card-img-top border-0 rounded-0"
            alt={title}
          />

          {stockAmount === 0 && (
            <div className=" position-absolute top-0 end-0 p-1">
              <span className="bg-light rounded-5 btn color_mate_blue font_francois_one ">
                OUT OF STOCK
              </span>
            </div>
          )}
        </div>
        <div className="card-body text-center">
          <h5 className="card-subtitle color_orange">{category}</h5>
          <p className="card-title color_light_blue">{title}</p>
          {price !== 0 && (
            <p className="card-text color_mate_blue">
              <span>${price}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
