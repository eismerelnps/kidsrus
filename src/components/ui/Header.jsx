import { nav } from "../../data/nav";
import { NavItem } from "./NavItem";
//import { DrawerAppBar } from "../newArrivals/navbar/DrawerAppBar";
import { useContext, useState } from "react";
import { AppContext } from "../../app/appContext";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import AlertDialog from "../feedBack/AlertDialog";
import { getProductById } from "../../helpers/getProductById";
import { types } from "../../types/types";
import { NavLink, useNavigate } from "react-router-dom";
import AbstractDialog from "../feedBack/AbstractDialog";

import logo from "../../assets/main/logo.png";
//import logo2 from "../../assets/logo.png";

import "./ui.css";
import DrawerAppBar from "./DrawerAppBar";

export const Header = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AppContext);

  //console.log(user.wishList.items)
  const wishListProducts = user.wishList.items.map((id) => getProductById(id));
  const cartProducts = user.cart.items.map((product) =>
    getProductById(product.id)
  );

  const [wishList, setWishList] = useState(false);
  const [cart, setCart] = useState(false);

  const handleLogOut = () => {
    const action = {
      type: types.logout,
      payload: {
        cart: { count: 0, items: [] },
        wishList: { count: 0, items: [] },
      },
    };
    dispatch(action);

    navigate("/signin", {
      replace: true,
    });
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSignIn = () => {
    navigate("/signin", {
      replace: false,
    });
  };
  
  const buttons = [
    { text: "Keep me as guest", fun: () => setDialogOpen(false) },
    { text: "Sign In", fun: () => handleSignIn() },
  ];

  const handleOpenProducts = ({ type }) => {
    console.log(type);

    if (!user.logged) {
      return setDialogOpen(true);
    }
    type === "whishList" ? setWishList(true) : setCart(true);
  };
  return (
    <div className="mb-5">
      <AbstractDialog
        title={"You are not signed in"}
        description={
          "In order to add products to cart or Wish List you must be signed in first, please, sign in and come back"
        }
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        dialogButtons={buttons}
      />
      {wishList && (
        <AlertDialog
          title={"Wish List"}
          description={wishListProducts}
          open={wishList}
          setOpen={setWishList}
        />
      )}
      {cart && (
        <AlertDialog
          title={"Cart"}
          description={cartProducts}
          open={cart}
          setOpen={setCart}
        />
      )}

      
      <DrawerAppBar 
      handleLogOut={handleLogOut} 
      handleOpenProducts={handleOpenProducts}
      user={user}
      nav={nav}
      />
      <div className="d-flex justify-content-center">
        
        {/* <i
          className="fa-regular fa-heart p-2 mx-1 color_mate_blue position-relative "
          onClick={() => handleOpenProducts({ type: "wishList" })}
        >
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {user.wishList.count}
            <span className="visually-hidden">Products in wish-list</span>
          </span>
        </i>

        <i
          className="fa-solid fa-cart-shopping p-2 mx-1 color_mate_blue position-relative"
          onClick={() => handleOpenProducts({ type: "cart" })}
        >
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {user.cart.count}
            <span className="visually-hidden">Products in cart</span>
          </span>
        </i>

        <i className="fa-solid fa-magnifying-glass p-2 mx-1 color_mate_blue"></i> */}
        {/* <i class="fa-solid fa-user-tie p-2 mx-1 color_mate_blue"></i> */}
      </div>
     
    </div>
  );
};
