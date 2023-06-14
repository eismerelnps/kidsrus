import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../../helpers/getProductById";
import { Rating } from "../../rating/Rating";
import { Breadcrumb } from "../../breadcrumb/Breadcrumb";
import { AddToWishList } from "./AddToWishList";
import { AddToCart } from "./AddToCart";
import { ProductScreenFooter } from "./productScreenFooter/ProductScreenFooter";
import { ImageGallery } from "./imageGallery/ImageGallery ";

export const ProductScreen = () => {
  const navigate = useNavigate();
  const { productsId } = useParams();

  const product = getProductById(productsId);

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
    navigate(-1, { replace: true });
  };

  return (
    <div className="container text-center">
      <div className="justify-content-center">
        <h1 className="text-center">{title}</h1>
        <Breadcrumb />
      </div>

      <div className="row mt-5 m-">
        <div className="col-4">
          <ImageGallery images={images} category={category} />
        </div>

        <div className="col-8">
          <p className="text-start card-text">
            <span>${price.toFixed(2)}</span>
          </p>
          <div className="text-start mb-4">
            <Rating max={5} value={rating} />
          </div>

          <p className="text-start text-dark mb-3">{description}</p>

          {stockAmount === 0 ? <AddToWishList /> : <AddToCart />}

          <div className="p-3 my-4">
            <ul className="list-group list-group-flush">
              <li key="sku" className="list-group-item text-start">
                <b>SKU:</b>
                <b className="w-100 text-end">{id}</b>
              </li>
              <li key="category" className="list-group-item text-start">
                <b>Category:</b>
                <b className="w-100 text-end">{category}</b>
              </li>
              <li key="tags" className="list-group-item text-start">
                <b>Tags:</b>
                <b className="w-100 text-end">{tags}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col"></div>
      </div>
      <div className="col"></div>
      <div className="col"></div>

      <ProductScreenFooter
        title={title}
        category={category}
        description={description}
        information={information}
        reviews={reviews}
      />
    </div>
  );
};
