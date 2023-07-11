import { nav } from "../../data/nav";
import { NavItem } from "./NavItem";
import logo from "../../assets/main/logo.png";
//import logo2 from "../../assets/logo.png";

import "./ui.css";
import { DrawerAppBar } from "../newArrivals/navbar/DrawerAppBar";
import { useContext, useState } from "react";
import { AppContext } from "../../app/appContext";
import { Avatar, Icon } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import AlertDialog from "../feedBack/AlertDialog";
import { getProductById } from "../../helpers/getProductById";

export const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { user } = useContext(AppContext);

  //console.log(user.wishList.items)
  const products = user.wishList.items.map((id) => (
    getProductById(id)
  ))
  

  return (
    <div className="mb-5">
     {openDialog &&  <AlertDialog title='products in wish' description={products} open= {openDialog} setOpen={setOpenDialog}/>}
      <div className="text-center">
        <img src={logo} className="img mb-5" alt="page_logo" />
      </div>
      <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
      <div className="d-flex justify-content-end">


      <i className="fa-regular fa-heart p-2 mx-1 color_mate_blue position-relative "  onClick={() => setOpenDialog(true)}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {user.wishList.count}
          <span className="visually-hidden">Products in wish-list</span>
        </span>
      </i>

      <i className="fa-solid fa-cart-shopping p-2 mx-1 color_mate_blue position-relative">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {user.cart.count}
          <span className="visually-hidden">Products in cart</span>
        </span>
      </i>

      <i className="fa-solid fa-magnifying-glass p-2 mx-1 color_mate_blue"></i>
      {/* <i class="fa-solid fa-user-tie p-2 mx-1 color_mate_blue"></i> */}
     
     
      </div>
      
      <ul className="nav justify-content-center mb-5 ">
        {nav.map(({ title, navTo }, index) => (
          <NavItem key={title} title={title} navTo={navTo} index={index} />
        ))}
      </ul>
    </div>
  );
};
