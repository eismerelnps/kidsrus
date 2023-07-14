import React, { useMemo, useState } from "react";
import { Reviews } from "./productScreen/Reviews";
import { AddInformation } from "./productScreen/AddInformation";
import { AddReview } from "./addReview/AddReview";
import { getProductByCategory } from "../../helpers/getProductByCategory";
import { ProductCard } from "./ProductCard";

import submark from "../../assets/main/home-8.png";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  Description,
  Info,
  InfoOutlined,
  InfoRounded,
  ReviewsOutlined,
} from "@mui/icons-material";

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

  const products = useMemo(
    () => getProductByCategory(category),
    [category]
  ).slice(0, 4);
  const [value, setValue] = React.useState(0);

  return (
    <div className="mx-2 ">
     <Box sx={{ width: "100%", marginBottom: "1.5rem!important" }}>
  <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  >
    <BottomNavigationAction
      classes={{ root: "color_orange", selected: "color_orange" }}
      sx={{
        marginLeft: "0.5rem!important",
        marginRight: "0.5rem!important",
        fontSize: "calc(1.325rem + 1vw)!important", // Aumentar el tamaño del texto
        color: value === "one" ? "#" : "#29458bda",
      }}
      onClick={() => handleSetVisible("one")}
      icon={
        <Description
          sx={{ fontSize: "calc(1.325rem + 2vw)!important" }} // Aumentar el tamaño del icono
        />
      }
      label="DESCRIPTION"
    />

    <BottomNavigationAction
      classes={{ root: "color_orange", selected: "color_orange" }}
      sx={{
        marginLeft: "0.5rem!important",
        marginRight: "0.5rem!important",
        fontSize: "calc(1.325rem + 1vw)!important", // Aumentar el tamaño del texto
        color: value === "two" ? "green" : "#29458bda",
      }}
      onClick={() => handleSetVisible("two")}
      label="INFORMATION"
      icon={<Info sx={{ fontSize: "calc(1.325rem + 2vw)!important" }} />} // Aumentar el tamaño del icono
    />

    <BottomNavigationAction
      classes={{ root: "color_orange", selected: "color_orange" }}
      sx={{
        marginLeft: "0.5rem!important",
        marginRight: "0.5rem!important",
        fontSize: "3rem", // Aumentar el tamaño del texto
        fontFamily: "FrancoisOne-Regular",
        color: value === "two" ? "green" : "#29458bda",
      }}
      onClick={() => handleSetVisible("three")}
      label="REVIEWS"
      icon={<ReviewsOutlined sx={{ fontSize: "calc(1.325rem + 2vw)!important" }} />} // Aumentar el tamaño del icono
    />
  </BottomNavigation>
</Box>


      {/* <div className="col-12 col-lg-4">
    <div className="p-lg-4">
      <button
        type="button"
        className={`btn border-0 ${
          visibleSection === "one" ? "active" : ""
        }`}
        onClick={() => handleSetVisible("one")}
      >
        <h4 className="font_francois_one color_mate_blue">DESCRIPTION</h4>
      </button>
      {visibleSection === "one" && (
        <div className="d-flex justify-content-center">
          <img
            src={submark}
            className="img-fluid mb-lg-5"
            alt="page_mark"
          />
        </div>
      )}
    </div>
  </div>

  <div className="col-12 col-lg-4">
    <div className="p-lg-4">
      {stockAmount > 0 && (
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
      )}

      {visibleSection === "two" && (
        <div className="d-flex justify-content-center">
          <img
            src={submark}
            className="img-fluid mb-lg-5"
            alt="page_mark"
          />
        </div>
      )}
    </div>
  </div>

  <div className="col-12 col-lg-4">
    <div className="p-lg-4">
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

      <div className="d-flex justify-content-center">
        {visibleSection === "three" && (
          <img src={submark} className="img-fluid mb-lg-5" alt="page_mark" />
        )}
      </div>
    </div>
  </div>*/}

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
        <img src={submark} className="img" alt="sub-mark" />
      </div>

      <div className="container p-lg-5">
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {/* <ProductList category={category} amount={4} size={"col-xl-3"} /> */}
      </div>
    </div>
  );
};
