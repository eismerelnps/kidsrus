import React from "react";
import { Rating } from "../../rating/Rating";
import { Link } from "react-router-dom";
import { useTopSellingProducts } from "./useTopSellingProducts";
import { toLowerCaseTwoFirst } from "../../../helpers/toLowerCaseTwoFirst";

export const BestSellers = () => {
  //Get a list of the most sold products, receive the amount you send by parameters
  const products = useTopSellingProducts(4);

  return (
    <div className="mb-5" style={{ cursor: "pointer" }}>
      <h1 className="mb-4 font_francois_one color_mate_blue">BEST SELLERS</h1>
      <div className="font_francois_one">
        <ul
          className="border_gray_dashed_own list-group list-group-flush p-3"
          style={{ listStyle: "none" }}
        >
          {products.length > 0 ? (
            products.map(
              ({ id, rating, title, price, images, category }, i) => (
                <li key={id} className="mb-3">
                    <div className="row ">
                    <div className="col-4 px-2 ">
                      <div
                        className="rounded-circle overflow-hidden "
                        style={{ width: "80px", height: "80px" }}
                      >
                        <img
                          src={`./assets/${toLowerCaseTwoFirst(category)}/${
                            images[0].img1
                          }`}
                          className="img-fluid"
                          alt="page_logo"
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="d-flex flex-column">
                        <h5 className="card-title color_mate_blue font_quicksand mb-2">
                          <Link
                            style={{ cursor: "default" }}
                            className="color_light_blue text-decoration-none"
                            to={`/product/${id}`}
                          >
                            {title}
                          </Link>
                        </h5>
                        <Rating max={5} value={rating} />
                        <p className="card-text color_mate_blue font_francois_one">
                          <span>${price.toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                    </div>
                   
                 
                </li>
              )
            )
          ) : (
            <p>No avaiable products.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
