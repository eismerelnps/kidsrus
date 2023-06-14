import React, { useState } from "react";
import { useForm } from "../../../../hooks/useForm";

export const AddToCart = () => {
  const { handdleInputChange, values } = useForm(1);

  const handdAddToCart = (e) => {
    console.log(`Added ${values} to cart`);
  };

  return (
    <div className="d-flex align-items-center">
      <div className="row">
        <div className="col-4 border_gray_dashed_own">
          <form className="join_us_form row" onSubmit={handdAddToCart}>
            <input
              type="number"
              name="amount"
              className="joinus_input text-light col-12 p-2 mb-3 font_gilda_display border-0"
              placeholder="Your Email Address *"
              autoComplete="off"
              onChange={handdleInputChange}
            />
          </form>
        </div>
        <div className="col-8">
          <div className="joinus-btn-container">
            <button
              className="joinus-btn bg-light col-12 text-center align-middle"
              type="submit"
            >
              <span className="color_dark_orange font_francois_one">
                SUBSCRIBE
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
