import React, { useMemo, useState } from "react";
import { Reviews } from "./productScreen/Reviews";
import { AddInformation } from "./productScreen/AddInformation";
import { AddReview } from "./addReview/AddReview";
import { getProductByCategory } from "../../helpers/getProductByCategory";
import { ProductCard } from "./ProductCard";

import submark from "../../assets/main/home-8.png";

export const ProductScreenFooter = ({
  stockAmount,
  title,
  category,
  description,
  information,
  reviews,
}) => {
  const [visibleSection, setVisibleSection] = useState("one");

  const handleSetVisible = (section) => {
    if (visibleSection === section) {
      setVisibleSection(section); // Ocultar la sección si se hace clic nuevamente en el botón de la sección actualmente visible
    } else {
      setVisibleSection(section); // Mostrar la sección seleccionada
    }
  };

  
const products =  useMemo(() => getProductByCategory(category), [category]).slice(0, 4);

 

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="p-4">
          <div>
            <button
              type="button"
              className={`btn border-0 ${
                visibleSection === "one" ? "active" : ""
              }`}
              onClick={() => handleSetVisible("one")}
            >
              <h4 className="font_francois_one color_mate_blue">DESCRIPTION</h4>
            </button>
          </div>

          {visibleSection === "one" && (
            <img
              src={submark}
              className="img mb-5"
              alt="page_mark"
            />
          )}
        </div>

        {stockAmount > 0 && (
          <div className="p-4">
            <div>
              <button
                type="button"
                className={`btn border-0 ${
                  visibleSection === "two" ? "active" : ""
                }`}
                onClick={() => handleSetVisible("two")}
              >
                <h4 className="font_francois_one color_mate_blue">
                  ADDITIONAL INFORMATION
                </h4>
              </button>
            </div>

            {visibleSection === "two" && (
              <img
                src={submark}
                className="img mb-5"
                alt="page_mark"
              />
            )}
          </div>
        )}

        <div className="p-4">
          <div>
            <button
              type="button"
              className={`btn border-0 ${
                visibleSection === "three" ? "active" : ""
              }`}
              onClick={() => handleSetVisible("three")}
            >
              <h4 className="font_francois_one color_mate_blue">
                REVIEWS ({reviews.length})
              </h4>
            </button>
          </div>

          {visibleSection === "three" && (
            <img
              src={submark}
              className="img mb-5"
              alt="page_mark"
            />
          )}
        </div>
      </div>

      <div className="mb-5">
        {visibleSection === "one" && (
          <p className="text-start text-dark mb-3 font_quicksand">
            {description}
          </p>
        )}

        {visibleSection === "two" && (
          <AddInformation information={information} />
        )}

        {visibleSection === "three" && (
          <Reviews title={title} reviews={reviews} />
        )}
      </div>

      {stockAmount > 0 && <AddReview />}

      <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
        <h4 className="font_francois_one color_mate_blue">RELATED PRODUCTS</h4>
        <img
          src={submark}
          className="img"
          alt=""
        />
      </div>

      <div className="container p-5">
        <div className="row">

       
{
  products.map((product) => (
    <ProductCard  key={product.id} {...product} />
  ))
}
 </div>
        {/* <ProductList category={category} amount={4} size={"col-xl-3"} /> */}
      </div>
    </div>
  );
};
