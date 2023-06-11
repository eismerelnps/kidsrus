import React from 'react'

export const Rating = ({ value }) => {
    const stars = [];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i class="fa-solid fa-star color_dark_orange"></i>);
  }

  if (hasHalfStar) {
    stars.push(<i class="fa-solid fa-star color_dark_orange"></i>);
  }

  while (stars.length < 5) {
    stars.push(<i class="fa-solid fa-star color_dark_orange"></i>);
  }

  return (
   <div>{stars}</div>
  )
}
