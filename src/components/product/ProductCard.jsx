import { useState } from "react";
import { FavCartSearch } from "../buttons/FavCartSearch";
import { useNavigate } from "react-router-dom";

import "../../app.css";
import { toLowerCaseTwoFirst } from "../../helpers/toLowerCaseTwoFirst";

const imagesSRC = require.context("../../assets");

export const ProductCard = ({
  basePath = "",
  size = "col-lg-3",
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
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  //const [wishListAmount, setWishListAmount] = useState(user.wishList.count);

  const handleOpenProductScreen = () => {
    //checks IF THE product card is hovered, so when it is on small screens users can make a first click and then be able to enter the product screen
    hovered ? navigate(`/product/${id}`) : setHovered(true);
  };

  const image = `${basePath}.${imagesSRC(
    `./${toLowerCaseTwoFirst(category)}/${images[0].img1}`
  )}`;

  const hoverImagePath = images[0].img2
    ? `${basePath}.${imagesSRC(
        `./${toLowerCaseTwoFirst(category)}/${images[0].img2}`
      )}`
    : image;

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
  // const handleSearch = () => {
  //   console.log("search");
  //   // Make needed actions to handle search
  // };

  return (
    <div
      className={`${size} col-6 col-sm-4  mt-1 mb-lg-5 mb-2 d-block-sm-none z-index-500`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {" "}
      <section
        style={{ cursor: "default" }}
        className=" color_light_blue text-decoration-none "
        onClick={handleOpenProductScreen}
      >
        <div className="card border-0 rounded-0">
          <div className="position-relative" onMouseLeave={handleMouseLeave}>
            {image ? (
              <img
                src={hovered ? hoverImagePath : image}
                className="card-img-top border-0 rounded-2 mb-2 animate__animated animate__fadeIn"
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

            {stockAmount === 0 && (
              <>
                <div className="position-absolute top-0 end-0 m-lg-1 m-1">
                  <p className="text-uppercase  text-wrap outOfStockBtn bg-light rounded-5 color_orange font_francois_one px-lg-3 px-1 fs-6">
                    OUT OF STOCK
                  </p>
                </div>
              </>
            )}
            {hovered && (
              <FavCartSearch
                stockAmount={stockAmount}
                handleAddToCart={handleAddToCart}
                handleAddToWishList={handleAddToWishList}
                handleSearch={handleOpenProductScreen}
              />
            )}
          </div>
          <div className="card-body text-center">
            <p className="card-subtitle color_orange mb-2 font_quicksand">
              <b>{category}</b>
            </p>

            <h4 className="fs-6 text-wrap card-title color_mate_blue font_gilda_display mb-2">
              {title}
            </h4>

            {stockAmount !== 0 && (
              <p className="card-text color_mate_blue font_francois_one">
                <span>${price.toFixed(2)}</span>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
