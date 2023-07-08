import React, { useContext, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { AppContext } from "../../../app/appContext";
import { types } from "../../../types/types";
import { useParams } from "react-router-dom";

export const AddToCart = () => {
  const { productsId } = useParams();

  const { user, dispatch } = useContext(AppContext);

  const [formValues, handleInputChange, reset] = useForm({
    amount: 1,
  });
  const { amount } = formValues;

  const [userCart, setUserCart] = useState({
    count: user.cart.count,
    items: user.cart.items,
  });

  const handleAddToCart = (amount) => {
    const productId = productsId;
  
    const existingItem = userCart.items.find((item) => item.id === productId);
  
    if (existingItem) {
      const updatedItems = userCart.items.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + parseInt(amount) }
          : item
      );
  
      const updatedCount = userCart.count + parseInt(amount);
  
      setUserCart({
        count: updatedCount,
        items: updatedItems,
      });
  
      const updatedUser = {
        ...user,
        cart: {
          count: updatedCount,
          items: updatedItems,
        },
      };
  
      const addToCartAction = {
        type: types.addToCart,
        payload: updatedUser,
      };
  
      dispatch(addToCartAction);
  
      reset();
      //console.log(`Added ${amount} products to cart`);
    } else {
      const updatedCount = parseInt(user.cart.count, 10) + parseInt(amount);
      const updatedItems = [...userCart.items, { id: productId, quantity: parseInt(amount) }];
  
      setUserCart({
        count: updatedCount,
        items: updatedItems,
      });
  
      const updatedUser = {
        ...user,
        cart: {
          count: updatedCount,
          items: updatedItems,
        },
      };
  
      const addToCartAction = {
        type: types.addToCart,
        payload: updatedUser,
      };
  
      dispatch(addToCartAction);
  
      reset();
      //console.log(`Added ${amount} products to cart`);
    }
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
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-8 d-flex">
            <div className="bg_color_orange p-1 flex-grow-1">
              <button
                type="button"
                className="submit_btn border_white_dashed_own rounded-0 btn text-light font_francois_one w-100"
                onClick={() => handleAddToCart(amount)}
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
