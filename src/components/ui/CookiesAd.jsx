import React from "react";

export const CookiesAd = () => {
  return (
    <div className="d-flex align-items-center justify-content-center p-1">
      <div className="d-inline ">
      <p className="font_gilda_display text-dark">
        This website uses cookies to improve your experience. We'll assume
        you're ok this, but you can opt-out if you wish.
      </p>
      
      </div>
      <button className="btn btn-dark text-light rounded-0">Accept</button>

    </div>
  );
};
