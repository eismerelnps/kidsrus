import React from 'react'

export const AddToCart = (price) => {
  return (
    <div className="position-absolute bottom-0 start-0 p-3">
    <div className="bg-light p-1 d-inline-block">
      {price !== 0 ? (
        <button className="discover-btn btn color_mate_blue font_francois_one">
          Add to cart compo
        </button>
      ) : (
        <button className="discover-btn btn color_mate_blue font_francois_one">
          cart out stock
        </button>
      )}
    </div>
  </div>
  )
}
