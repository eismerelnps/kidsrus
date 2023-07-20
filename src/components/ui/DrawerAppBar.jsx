import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logo from "../../assets/main/logo.png";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { CategoryBox } from "../newArrivals/categoryBox/CategoryBox";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function DrawerAppBar(props) {
  const { handleLogOut, handleOpenProducts, user, nav } = props;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //drwer of the application
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        mr: 2,
        display: { sm: "none" },
        color: "#29458bda",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        KidsRus
      </Typography>
      <Divider />
      <List>
      {nav.map(({ id, title, navTo }) => (
        <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>

            // <Button key={id} sx={{ color: "#29458bda" }}>
            //   {title}
            // </Button>
          ))}

        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
      <CategoryBox />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  //all app bar mobile and desktop
  return (
    <Box sx={{ display: "flex", textAlign: "center" }}>
      <CssBaseline />
      <AppBar
        sx={{ background: "#fff", textAlign: "center" }}
        component="nav"
        // position={"static"}
        elevation={0}
      >
        <div className="bg_color_orange">
          <div className="px-5 text-center">
            <p className="text-light font_quicksand">
              20% off all kidswear + free shipping when you spend $60 or more
            </p>
          </div>
        </div>

        {/* <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          MUI
        </Typography>
         <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#29458bda' }}>
                {item}
              </Button>
            ))}
          </Box>   */}

        {/* DeskTop and mobile Toolbar */}
        
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexBasis: "33.33%" }}>
              {/* This MenuIcon desapear on sm devices */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" }, color: "#29458bda" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexBasis: "33.33%" }}>
            
                <Badge badgeContent={user.cart.count} color="primary">
                  <IconButton
                    sx={{ color: "#29458bda", marginLeft: "0.5rem" }}
                    onClick={() => handleOpenProducts({ type: "wishList" })}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </Badge>
                <Badge
                  badgeContent={user.wishList.count}
                  sx={{ color: red[500] }}
                >
                  <IconButton
                    sx={{ color: "#29458bda", marginLeft: "0.5rem" }}
                    onClick={() => handleOpenProducts({ type: "cart" })}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Badge>

                <IconButton sx={{ color: "#29458bda", marginLeft: "0.5rem" }}>
                  <SearchIcon />
                </IconButton>
             
            </Box>
            <Box sx={{ flexBasis: "33.33%", alignItems : 'stretch' }}>
             
                {user.logged ? (
                  <Tooltip title="Open settings">
                    <IconButton
                      sx={{ color: "#29458bda", marginLeft: "0.5rem", p: 0 }}
                      onClick={handleOpenUserMenu}
                    >
                      <AccountCircleIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <NavLink
                    className="color_orange text-decoration-none font_quicksand"
                    to={"/signin"}
                  >
                    Sign In
                  </NavLink>
                )}
              </Box>
            
          </Box>

          

       
        
 
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            textAlign: "center!important",
            bgcolor: "#fff",
          }}
        >
          {nav.map(({ id, title, navTo }) => (
            <Button key={id} sx={{ color: "#29458bda" }}>
              {title}
            </Button>
          ))}

           
        </Box> 
      </AppBar>

      {/* Content that doesnt stay static drawer */}

      <Box component="nav" sx={{ bgcolor: "#ff" }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3, color: "#000" }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
