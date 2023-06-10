import React from "react";

export const ProductCard = ({
  title,
  price,
  stockAmount,
  category,
  tags,
  description,
  information,
  rating,
  id,
  images,
  reviews,
}) => {
  const imagePath = `${process.env.PUBLIC_URL}./assets/${images[0]}`;

  return (
    <div className="col-6 col-xl-4 mt-1  ">
      <h1>ProductCard</h1>
      <div className="card">
        <div className="position-relative">
          <img src={imagePath} className="card-img-top" alt={title} />
          
             {price !== 0 && (
                 <div class="position-absolute top-0 end-0 p-3">
                    <h1 class="btn color_mate_blue font_francois_one"></h1>
                </div>
              )}
          
          <div class="position-absolute bottom-0 start-0 p-3">
            <div className="bg-light p-1 d-inline-block">
              {price !== 0 
              ? (
                <button class="discover-btn btn color_mate_blue font_francois_one">
                Add to cart compo
              </button>
              )
            :(
                <button class="discover-btn btn color_mate_blue font_francois_one">
               cart out stock
              </button>
            )
            }

             
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-subtitle">{category}</h5>
          <p className="card-title">{title}</p>
          {price !== 0 && (
            <p className="card-text">
              <span>{price}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
