import React, { useState } from "react";

export const RatingSubmit = ({ max, onRatingChange }) => {
  const [rate, setRate] = useState(0);

  const handleChange = (value) => {
    setRate(value);

    onRatingChange(value);
  };

  const stars = [];

  for (let i = 0; i < Math.floor(max); i++) {
    const starClassName =
      i < rate
        ? "fa-solid fa-star color_orange"
        : "fa-solid fa-star color_light_gray";
    const starKey = `star-${i}`;

    stars.push(
      <i
        key={starKey}
        name="rating"
        className={starClassName}
        onClick={() => handleChange(i + 1)}
      ></i>
    );
  }

  return <div>{stars}</div>;
};
