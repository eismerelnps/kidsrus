import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="bg_color_dark_yellow">
      <div className="wave-container">
      {/* <svg
  width="100%"
  height="100%"
  viewBox="0 0 1000 1000"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  overflow="auto"
  shapeRendering="auto"
  fill="#ffffff"
>
  <defs>
    <clipPath id="waveclip">
      <path
        d="M 0 2000 0 500 Q 17 463 34 500 t 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0  v1000 z"
      />
    </clipPath>
  </defs>
  <g clipPath="url(#waveclip)">
    <path d="M 0 2000 0 500 Q 17 463 34 500 t 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0  v1000 z" fill="#f7ab26" />
  </g>
</svg> */}

      </div>

      <div className="row">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="mt-5 text-center">
            <img
              src={`${process.env.PUBLIC_URL}.././assets/main/logo(1).png`}
              className="img mt-5 mb-5"
              alt="page_logo"
            />
          </div>

          <ul className="nav justify-content-center mb-5">
            <li className="nav-item font_francois_one">
              <a className="nav-link text-light" href={"/kidsrus"}>
                SHOP
              </a>
            </li>
            <li className="nav-item font_francois_one">
              <a className="nav-link text-light" href={"/kidsrus"}>
                SALE
              </a>
            </li>
            <li className="nav-item font_francois_one">
              <a className="nav-link text-light" href={"girls"}>
                GIRLS
              </a>
            </li>
            <li className="nav-item font_francois_one">
              <a className="nav-link text-light" href={"boys"}>
                BOYS
              </a>
            </li>
            <li className="nav-item font_francois_one">
              <a className="nav-link text-light" href={"/kidsrus"}>
                LOOKBOOK
              </a>
            </li>
            <li className="nav-item font_francois_one">
              <a className="nav-link text-light" href={"/kidsrus"}>
                CONTACTS
              </a>
            </li>
          </ul>

          <div className="text-center">
            <i className="fa-brands fa-facebook-f text-light p-2"></i>
            <i className="fa-brands fa-instagram text-light p-2"></i>
            <i className="fa-brands fa-twitter text-light p-2"></i>
          </div>

          <div className="text-center text-light">
            <div>
              <a
                className="nav-link d-inline font_quicksand"
                href={"privacy_policy"}
              >
                Privacy Policy
              </a>
              <p className="d-inline font_gilda_display">
                / This is a sample website - elnps 2023 / All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
