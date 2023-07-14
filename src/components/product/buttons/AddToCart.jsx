import React, { useContext, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { AppContext } from "../../../app/appContext";
import { types } from "../../../types/types";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PrivateRoute } from "../../../routes/PrivateRoute";
import { SignInScreen } from "../../login/SignInScreen";
import AlertDialog from "../../feedBack/AlertDialog";
import { Button } from "@mui/material";
import AbstractDialog from "../../feedBack/AbstractDialog";

export const AddToCart = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const { productsId } = useParams();
  const navigate = useNavigate();

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
    if (!user.logged) {
      return setDialogOpen(true);
    }
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
      const updatedItems = [
        ...userCart.items,
        { id: productId, quantity: parseInt(amount) },
      ];

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
  const handleSignIn = () => {
    navigate("/signin", {
      replace: false,
    });
  };
   const buttons = [
    { text: "Keep me as guest", fun: () =>  setDialogOpen(false)},
    { text: "Sign In", fun: () => handleSignIn()},
  ];

  return (
    <div className="d-flex align-items-center">
      <AbstractDialog
        title={"You are not signed in"}
        description={
          "In order to add products to the shopping cart you must be signed in first, please, sign in and come back"
        }
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        dialogButtons={buttons}
      />
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
