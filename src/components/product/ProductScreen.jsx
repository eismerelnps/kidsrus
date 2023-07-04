import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getProductById } from "../../helpers/getProductById";
import { Rating } from "../rating/Rating";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
import { AddToCart } from "./buttons/AddToCart";
import { ProductScreenFooter } from "./ProductScreenFooter";
import { ImageGallery } from "./ImageGallery ";
import { AddToWishList } from "./buttons/AddToWishList";
import { toLowerCaseTwoFirst } from "../../helpers/toLowerCaseTwoFirst";

const imageSRC = require.context("../../assets");

export const ProductScreen = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { productsId } = useParams();

  const product = getProductById(productsId);

  if (!product) {
    return <Navigate to="/" />;
  }

  const {
    title,
    price,
    newPrice,
    stockAmount,
    category,
    tags,
    description,
    information,
    rating,
    id,
    images,
    reviews,
  } = product;

  const largeImage = `${imageSRC(
    `./${toLowerCaseTwoFirst(category)}/${
      images[0]["img" + (selectedImageIndex + 1)]
    }`
  )}`;

  return (
    <>
      <Breadcrumb category={category} title={title} />
      <div className="container text-center">
        <div className="row mt-5 m-">
          <div className="col-4">
            <ImageGallery
              largeImage={largeImage}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
              images={images}
              stockAmount={stockAmount}
              category={category}
            />
          </div>

          <div className="col-8">
            {newPrice ? (
              <div className="d-flex">
                <p className="text-start card-text text-decoration-line-through color_light_gray font_francois_one">
                  <span>${price.toFixed(2)}</span>
                </p>
                <p className="text-start card-text  ms-2 color_mate_blue font_francois_one">
                  <span>${newPrice.toFixed(2)}</span>
                </p>
              </div>
            ) : (
              <p className="text-start card-text color_mate_blue font_francois_one">
                <span>${price.toFixed(2)}</span>
              </p>
            )}

            <div className="text-start mb-4">
              <Rating max={5} value={rating} />
            </div>

            <p className="text-start text-dark mb-3 font_quicksand">
              {description}
            </p>

            {stockAmount === 0 ? <AddToWishList /> : <AddToCart />}

            <div className="border_gray_dashed_own p-3 my-4">
              <ul className="list-group list-group-flush font_quicksand">
                <li
                  key="sku"
                  className="list-group-item text-start color_mate_blue "
                >
                  <div className="row">
                    <div className="col-4">
                      {" "}
                      <b>SKU:</b>
                    </div>
                    <div className="col-8">
                      <b className="w-100 text-end color_gray">{id}</b>
                    </div>
                  </div>
                </li>
                <li
                  key="category"
                  className="list-group-item text-start color_mate_blue "
                >
                  <div className="row">
                    <div className="col-4">
                      {" "}
                      <b>Category:</b>
                    </div>
                    <div className="col-8">
                      <b className="w-100 text-end color_gray">{category}</b>
                    </div>
                  </div>
                </li>
                <li
                  key="tags"
                  className="list-group-item text-start color_mate_blue "
                >
                  <div className="row">
                    <div className="col-4">
                      {" "}
                      <b>Tags:</b>
                    </div>
                    <div className="col-8">
                      {" "}
                      <b className="w-100 text-end color_gray font_quicksand">
                        {tags}
                      </b>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ProductScreenFooter
          stockAmount={stockAmount}
          title={title}
          category={category}
          description={description}
          information={information}
          reviews={reviews}
        />
      </div>
    </>
  );
};
