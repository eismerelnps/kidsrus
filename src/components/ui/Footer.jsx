import React from "react";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mt-5 text-center">
              <img
                src={`${process.env.PUBLIC_URL}./assets/main/logo(1).png`}
                className="img mt-5 mb-5"
                alt="page_logo"
              />
            </div>

            <ul className="nav justify-content-center mb-5">
              <li className="nav-item font_francois_one">
                <a className="nav-link text-light" href={"as"}>
                  SHOP
                </a>
              </li>
              <li className="nav-item font_francois_one">
                <a className="nav-link text-light" href={"/"}>
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
                <a className="nav-link text-light" href={"/"}>
                  LOOKBOOK
                </a>
              </li>
              <li className="nav-item font_francois_one">
                <a className="nav-link text-light" href={"/"}>
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
          <div className="col-md-4">{/* Contenido del footer */}</div>
          <div className="col-md-4">{/* Contenido del footer */}</div>
        </div>
      </div>
    </footer>
  );
};
