import React from "react";

import "./joinUs.css";
import { useForm } from "../../../hooks/useForm";

export const JoinUs = () => {
  const [formValues, handdleInputChange] = useForm({});

  const { emailAddress } = formValues;

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribe sent for " + emailAddress);
  };

  return (
    <div className="bg_color_dark_orange px-4 pb-2 pt-4 mb-5">
      <div className="card-body p-1">
        <h4 className="text-light font_gilda_display text-center mt-2 mb-3 ">
          Join Our <br /> Newsletter
        </h4>
        <form className="join_us_form row" onSubmit={handleSubscribe}>
          <input
            type="email"
            name="emailAddress"
            className=" joinus_input text-light  col-12 p-2 mb-3 font_gilda_display"
            placeholder="Your Email Address *"
            value={emailAddress}
            autoComplete="off"
            onChange={handdleInputChange}
          />

          <div className="joinus-btn-container p-2">
            <button
              className="joinus-btn bg-light col-12 text-center"
              type="submit"
            >
              <span className="color_dark_orange font_francois_one">
                {" "}
                SUBSCRIBE
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
