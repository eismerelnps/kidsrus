import React, { useState } from "react";
import { Favorite } from "../buttons/Favorite";
import { FavCartSearch } from "../buttons/FavCartSearch";
import { Link } from "react-router-dom";

export const ProductCard = ({
  size,
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
  const [hovered, setHovered] = useState(false);

  const imagePath = `${process.env.PUBLIC_URL}/assets/${category}/${images[0].img1}`;
  const hoverImagePath = images[0].img2
    ? `${process.env.PUBLIC_URL}/assets/${category}/${images[0].img2}`
    : imagePath;

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleAddToCart = () => {
    console.log("Add to cart");
    // Realizar acciones necesarias para agregar el artículo al carrito
  };

  return (
    <div
      className={`${size} col-6  mt-1 mb-5`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card border-0 rounded-0">
        <div className="position-relative">
          <img
            src={hovered ? hoverImagePath : imagePath}
            className="card-img-top border-0 rounded-0 mb-2 animate__animated animate__fadeIn"
            alt={title}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          />

          {stockAmount === 0 ? (
            <>
              <div className="position-absolute top-0 end-0 m-3">
                <span className="outOfStockBtn bg-light rounded-5 color_light_blue font_francois_one px-3 py-1">
                  OUT OF STOCK
                </span>
              </div>
              {hovered && <Favorite />}
            </>
          ) : hovered && stockAmount > 0 ? (
            <FavCartSearch />
          ) : null}
        </div>
        <div className="card-body text-center">
          <h5 className="card-subtitle color_orange mb-2 font_francois_one">
            {category}
          </h5>

          <h5 className="card-title color_mate_blue font_gilda_display mb-2">
            <Link
              style={{cursor: "default"}}
              className="color_light_blue text-decoration-none"
              to={`/product/${id}`}
            >
              {title}
            </Link>
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
