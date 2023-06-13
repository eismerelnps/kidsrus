import React from "react";
import { getTopSellingProducts } from "../../../helpers/getTopSellingProducts";
import { Rating } from "../../rating/Rating";
import { Link } from "react-router-dom";

export const BestSellers = () => {
  const products = getTopSellingProducts(4);
  console.log(products);

  return (
    <div className="mb-5 " style={{ cursor: "pointer" }}>
      <h1 className="mb-4 font_francois_one color_mate_blue">BEST SELLERS</h1>
      <div className="font_francois_one">
        <ul className="border_gray_dashed_own list-group list-group-flush p-3">
          {products.map(({ id, rating, title, price, images, category }, i) => (
            <li key={i} className="">
              <div>
                <div className="col-4">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/${category}/${images[0].img1}`}
                    className="img mt-5 mb-5 circle"
                    alt="page_logo"
                  />
                </div>
                <div className="col-8">
                  <div className="d-flex flex-column">
                  <h5 className="card-title color_mate_blue font_gilda_display mb-2">
            <Link
              style={{cursor: "default"}}
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
          ))}
        </ul>
      </div>
    </div>
  );
};
