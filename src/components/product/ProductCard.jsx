import React, { useState } from "react";
import { Favorite } from "../buttons/Favorite";
import { FavCartSearch } from "../buttons/FavCartSearch";
import { Link } from "react-router-dom";

import "../../app.css";
import { toLowerCaseTwoFirst } from "../../helpers/toLowerCaseTwoFirst";

export const ProductCard = ({
  size = 'col-xl-3',
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

  const joinCategory = toLowerCaseTwoFirst(category);

  const imagePath = `./assets/${joinCategory}/${images[0].img1}`;
  const hoverImagePath = images[0].img2
    ? `../../assets/${joinCategory}/${images[0].img2}`
    : imagePath;

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleAddToCart = () => {
    console.log("Add to cart");
    // make needed actions in order to adding to cart
  };
  const handleAddToWishList = () => {
    console.log("Add to wishlist");
    // Make needed actions to add to wishlist
  };
  const handleSearch = () => {
    console.log("search");
    // Make needed actions to handle search
  };

  return (
    <div
      className={`${size} col-6  mt-1 mb-5`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {" "}
      <Link
        style={{ cursor: "default" }}
        className="color_light_blue text-decoration-none "
        to={`/product/${id}`}
      >
        <div className="card border-0 rounded-0">
          <div className="position-relative" onMouseLeave={handleMouseLeave}>
            {imagePath ? (
              <img
                src={hovered ? hoverImagePath : imagePath}
                className="card-img-top border-0 rounded-0 mb-2 animate__animated animate__fadeIn"
                alt={title}
                onMouseEnter={handleMouseEnter}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <>
                <div class="card" aria-hidden="true">
                  <img src={"k"} class="card-img-top " alt="..." />
                  <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                      <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                      <span class="placeholder col-7"></span>
                      <span class="placeholder col-4"></span>
                      <span class="placeholder col-4"></span>
                      <span class="placeholder col-6"></span>
                      <span class="placeholder col-8"></span>
                    </p>
                    <a class="btn btn-primary disabled placeholder col-6"></a>
                  </div>
                </div>
              </>
            )}

            {stockAmount === 0 ? (
              <>
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="outOfStockBtn bg-light rounded-5 color_light_blue font_francois_one px-3 py-1">
                    OUT OF STOCK
                  </span>
                </div>
                {hovered && (
                  <Favorite handleAddToWishList={handleAddToWishList} />
                )}
              </>
            ) : hovered && stockAmount > 0 ? (
              <FavCartSearch
                handleAddToCart={handleAddToCart}
                handleAddToWishList={handleAddToWishList}
                handleSearch={handleSearch}
              />
            ) : null}
          </div>
          <div className="card-body text-center">
            <p className="card-subtitle color_orange mb-2 font_quicksand">
              <b>{category}</b>
            </p>

            <h4 className="card-title color_mate_blue font_gilda_display mb-2">
              {title}
            </h4>
            {stockAmount !== 0 && (
              <p className="card-text color_mate_blue font_francois_one">
                <span>${price.toFixed(2)}</span>
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
