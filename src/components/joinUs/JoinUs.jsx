import React from "react";

import './joinUs.css'

export const JoinUs = () => {
  return (
    <div className="bg_color_orange px-5 pb-2 pt-4 mb-5">
      <div className="card-body">
        <h2 className="card-title text-light font_gilda_display text-center">Join Our <br/> Newsletter</h2>
        <form className="row">
            <input
              type="email"
              name="emailAddress"
              className="joinus-input bg-color-orange col-12 mb-3"
              placeholder="Your Email Address"
              autoComplete="off"
              onChange={console.log('Email Address Changed')}
            />
            <div className="joinus-btn-container p-2">
            <button className="joinus-btn btn col-12" type="submit">
              Buscar...
            </button>
            </div>
          </form>
      </div>
    </div>
  );
};
