import React from "react";
import { Favorite } from "../buttons/Favorite";
import { FavCartSearch } from "../buttons/FavCartSearch";

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
    <div className="col-6 col-xl-4 mt-1 mb-5  ">
      <div className="card border-0 rounded-0">
        <div className="position-relative">
          <img
            src={imagePath}
            className="card-img-top border-0 rounded-0 mb-2"
            alt={title}
          />

          {stockAmount === 0 && (
            <>
              <div className=" position-absolute top-0 end-0 m-3">
                <span className="outOfStockBtn  bg-light rounded-5 color_light_blue font_francois_one px-3 py-1">
                  OUT OF STOCK
                </span>
              </div>
              {
                stockAmount === 0 
                &&(<Favorite id={id} /> )
              },
               {
                stockAmount > 0 
                &&(<FavCartSearch /> )
              }
            </>
          )}
        </div>
        <div className="card-body text-center">
          <h5 className="card-subtitle color_orange mb-2 font_francois_one">
            {category}
          </h5>
          <h5 className="card-title color_mate_blue font_gilda_display  mb-2">
            {title}
          </h5>
          {stockAmount !== 0 && (
            <p className="card-text color_mate_blue font_francois_one">
              <span>${price.toFixed(2)}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
