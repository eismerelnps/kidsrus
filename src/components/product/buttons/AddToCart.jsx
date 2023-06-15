import React from "react";
import { useForm } from "../../../hooks/useForm";

export const AddToCart = () => {
  const [formValues, handdleInputChange, reset] = useForm({
    amount: 1,
  });

  const { amount } = formValues;

  const handdAddToCart = (e) => {
    e.preventDefault();
    console.log(`Added ${amount} products to cart`);
    reset();
  };

  return (
    <div className="d-flex align-items-center">
      <form className="border-0 rounded-0 mb-3">
        <div className="row align-items-center">
          <div className="col-3">
            <div className="border_gray_dashed_own">
              <input
                required
                type="number"
                name="amount"
                className="form-control form-light border-0 rounded-0 font_quicksand border-secondary"
                value={amount}
                autoComplete="off"
                onChange={handdleInputChange}
              />
            </div>
          </div>
          <div className="col-8 d-flex">
            <div className="bg_color_orange p-1 flex-grow-1">
              <button
                type="submit"
                className="submit_btn border_white_dashed_own rounded-0 btn text-light font_francois_one w-100"
                onClick={handdAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
