import React from "react";

import "./searchbar.css";

export const SearchBar = () => {
  return (
    <div className="mb-5 searchBar_container ">
      <form className="d-flex" role="search">
        <input
          className=" form-control border-0 me-2 font_quicksand"
          type="search"
          placeholder="Search products..."
          aria-label="Search"
        />
        <div className="fa-search-container p-1">
        <i className="fa-search fa-solid fa-magnifying-glass text-light p-2"></i>        </div>
        {/* <button className="btn btn-outline-success" type="submit">
        
    </button> */}
      </form>
    </div>
  );
};
