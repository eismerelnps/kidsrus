import React, { useMemo } from "react";
import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../helpers/getProductById";
import { Rating } from "../rating/Rating";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";

export const ProductScreen = () => {
  const navigate = useNavigate();
  const { productsId } = useParams();
  
  const params = useParams();
  console.log(params)

  const product = useMemo(() => getProductById(productsId), [productsId]);

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

  console.log(reviews.length);
  reviews.map((review) => console.log(review.id));

  const handleReturn = () => {
    navigate(-1);
  };

  const imagePath = `${process.env.PUBLIC_URL}./assets/${category}/${images[0].img1}`;

  return (
    <div className="container text-center">
      <div className=" justify-content-center ">
        <h1 className=" text-center color_mate_blue">{title}</h1>
        <Breadcrumb />
      </div>

      <div className="row mt-5 ">
        <div className="col-4">
          <img
            src={imagePath}
            className="card-img-top border-0 rounded-0 mb-2"
            alt={title}
          />
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

          <div className="border_gray_dashed_own p-4 my-4">
            <ul className="list-group list-group-flush">
              <li key={'sku'} className="list-group-item">
                {" "}
                <b>SKU: </b>
                {id}
              </li>
              <li key={'category'} className="list-group-item">
                <b>Category: </b>
                {category}
              </li>
              <li key={'tags'} className="list-group-item">
                <b>Tags: </b>
                {tags}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
        <h4 className="font_francois_one color_mate_blue">DESCRIPTION</h4>
        <img
          src={`${process.env.PUBLIC_URL}./assets/main/home-8.png`}
          className="img"
          alt=""
        />
        <p>{description}</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
        <h4 className="font_francois_one color_mate_blue">REVIEWS</h4>
        <img
          src={`${process.env.PUBLIC_URL}./assets/main/home-8.png`}
          className="img"
          alt=""
        />
        {reviews.map((review) => (
          <div key={review.id} className="d-flex">
            <p className="justify-content-start">
              {reviews.length} review for {title}
            </p>
            <div className="border_gray_dashed_own row">
              <div className="col-2">
              <span className="placeholder col-12 bg-dark h-50"></span>
              </div>
              <div className="col-10">
                {" "}
                <h4>{review.id}</h4>
                <h4>{review.date}</h4>
                <Rating value={review.rating} />
                <p>{review.description}</p>
                <span>Rated {review.rating} out of 5 </span>
              </div>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};
