import React from "react";
import { Rating } from "../../rating/Rating";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Reviews = ({ title, reviews }) => {
  return (
    <div className="">
      {reviews.map((review) => (
        <div key={review.id} className="d-flex flex-column m-5">
          <div className="d-flex justify-content-start">
            <h5 className="color_mate_blue font_gilda_display pe-3">
              {reviews.length} review for {title}
            </h5>
          </div>

          <div className="border_gray_dashed_own row p-3">
            <div className="col-2">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="placeholder col-12 bg-dark h-50 rounded-circle text-white"
              />
            </div>

            <div className="col-10">
              <div className="d-flex">
                <h5 className="color_mate_blue font_gilda_display pe-3">
                  {review.id}
                </h5>
                <p className="color_mate_blue font_quicksand pe-3">
                  <b>{review.date}</b>
                </p>
              </div>

              <div className="d-flex justify-content-start">
                <Rating max={5} value={review.rating} />
              </div>
              <div className="d-flex justify-content-start">
                <p>{review.description}</p>
              </div>
              <div className="d-flex justify-content-start">
                <span>Rated {review.rating} out of 5 </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
