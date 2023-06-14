import React from "react";
import { NavLink } from "react-router-dom";

export const Breadcrumb = ({ category, title }) => {
  const removeFirstWordAndLowercase = (text) => {
    const words = text.split(" "); // Divide el texto en un array de palabras
    words.shift(); // Elimina la primera palabra del array
    const remainingText = words.join(" "); // Une las palabras restantes en un solo texto
    const lowercasedText =
      remainingText.charAt(0).toLowerCase() + remainingText.slice(1); // Convierte la primera letra en minúscula

    return lowercasedText;
  };

  return (
    <div className="border_gray_dashed_own py-4 w-100">
      <h1 className="text-center font_gilda_display color_mate_blue mb-3">
        {title}
      </h1>
      <div className="d-flex justify-content-center ">
        <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item ">
              <NavLink
                className={
                  "text-decoration-none color_mate_blue font_quicksand"
                }
                to="/"
              >
                <b>Home:</b>
              </NavLink>
            </li>
            <li className="breadcrumb-item color_mate_blue font_quicksand">
              <NavLink
                className={"text-decoration-none color_mate_blue"}
                to={`/${removeFirstWordAndLowercase(category)}`}
              >
                <b>{category}</b>:
              </NavLink>
            </li>
            <li
              className="breadcrumb-item color_orange font_quicksand"
              aria-current="page"
            >
              <b>{title}</b>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};
//111212*2*1*221
//*212*1*2*22*1*1
