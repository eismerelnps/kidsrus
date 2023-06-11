import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../helpers/getProductById";
import { Rating } from "../rating/Rating";

export const ProductScreen = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const product = useMemo(() => getProductById(productId), [productId]);

  if (!product) {
    return <Navigate to="/" />;
  }

  const {
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
  } = product;

  const handleReturn = () => {
    navigate(-1);
  };

  const imagePath = `${process.env.PUBLIC_URL}.images[0].img1`;

  return (
    <div className="row mt-5 ">
      <h1>Product Screen</h1>
      <div className="col-4">
        <img src={imagePath} alt={title} className="img-thumbnail " />
      </div>

      <div className="col-8">
        <p className="card-text color_mate_blue font_francois_one">
          <span>${price.toFixed(2)}</span>
        </p>
        <Rating value={rating} />
        <p>{description}</p>
        <div className="d-flex justify-content-start">
          <i className="fa-regular fa-heart"></i>
          <p>Add to Wishlist</p>
        </div>
      </div>
    </div>
  );
};
