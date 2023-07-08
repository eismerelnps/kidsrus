import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { types } from "../../../types/types";
import { AppContext } from "../../../app/appContext";

export const AddToWishList = () => {
  const { productsId } = useParams();

  const { user, dispatch } = useContext(AppContext);

  const [userWishList, setUserWishList] = useState({
    count: user.wishList.count,
    items: user.wishList.items,
  });

  const handleAddToWishList = () => {

    if (userWishList.items.some((item) => item === productsId)) {
      //console.log(`Product with ID ${productsId} is already in the wishlist`);
      return;
    }

    const updatedCount = user.wishList.count + 1;
    const updatedItems = [...userWishList.items, productsId];

    setUserWishList({
      count: updatedCount,
      items: updatedItems,
    });

    const updatedUser = {
      ...user,
      wishList: {
        count: updatedCount,
        items: updatedItems,
      },
    };

    const addToWishListAction = {
      type: types.addToWishList,
      payload: updatedUser,
    };

    dispatch(addToWishListAction);
  };
  return (
    <div className="d-flex justify-content-start align-items-center p-2 color_light_blue ">
      <button className="btn" onClick={handleAddToWishList}>
        <i className="fa-regular fa-heart"></i>
        <span className="m-0 ms-2 align-self-start font_francois_one">
          Add to Wishlist
        </span>
      </button>
    </div>
  );
};
