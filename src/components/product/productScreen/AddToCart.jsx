import React from "react";

export const AddToCart = () => {
  return (
    <div className="d-flex justify-content-start align-items-center p-2 color_light_blue ">
      <div className="border_gray_dashed_own">
        <div className="mb-5 searchBar_container ">
          <form className="d-flex" role="search">
            <input
              className=" form-control border-0 font_quicksand"
              type="search"
              placeholder="1"
              value={1}
              aria-label="Search"
            />
            <div className="fa-search-container p-1">
              <i className="fa-search fa-solid fa-magnifying-glass text-light p-2"></i>
            </div>
            {/* <button className="btn btn-outline-success" type="submit">
        
    </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};
