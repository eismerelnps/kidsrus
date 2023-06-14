import React from "react";
import { Rating } from "../../../rating/Rating";
import { useForm } from "../../../../hooks/useForm";


import './addReview.css'

export const AddReview = () => {
  const [formValues, handdleInputChange, reset = useForm({
    rating: 0,
    review: "",
    name: "",
    email: "",
  });

  const { review, name, email } = formValues;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log(`Review: ${review} from ${name} ${email}`);
    reset()
  };

  return (
    <div className="mb-5">
      <h5 className="font_gilda_display color_gray">Add review</h5>
      <div className="border_gray_dashed_own p-3 ">
        <div>
          <p className="font_quicksand color_gray">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div className="d-flex flex-column align-items-start mb-3">
          <b className="font_quicksand color_mate_blue ">Your Rating</b>
          <Rating max={5} value={0} />
          
        </div>
        <div className="mb-5 ">
          <form className=" border-0 rounded-0 mb-3" onSubmit={handleSubmitReview}>
            <textarea
             required
              name="review"
              className="border_gray_dashed_own p-2 w-100"
              placeholder="Your Review"
              value={review}
              onChange={handdleInputChange}
            />
            <div className="row justify-content-center text-center  mb-3 ">
              <div className="col-4 ">
                <label for="form_name" className="form-label color_mate_blue">
                  Name*
                </label>
                <div className="border_gray_dashed_own">
                  <input
                  required
                    id="form_name"
                    type="text"
                    name="name"
                    className="form-control form-light border-0 rounded-0 font_quicksand border-secondary "
                    value={name}
                    autoComplete="off"
                    onChange={handdleInputChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <label for="form_email" className="form-label color_mate_blue">
                  Email*
                </label>
                <div className="border_gray_dashed_own">
                  <input
                   required
                    id="form_email"
                    type="text"
                    name="email"
                    className="form-control form-light border-0 rounded-0 font_quicksand border-secondary"
                    value={email}
                    autoComplete="off"
                    onChange={handdleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="bg_color_orange p-1 d-inline-block">
          <button type="submit" className="submit_btn border_white_dashed_own rounded-0 btn text-light font_francois_one">SUBMIT</button>
          </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};
