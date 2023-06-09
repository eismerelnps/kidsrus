import React from "react";

export const SearchBar = () => {
  return (
    <div className="mb-5">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search products..."
          aria-label="Search"
        />

        <i class="fa-light fa-magnifying-glass"></i>
        {/* <button className="btn btn-outline-success" type="submit">
        
    </button> */}
      </form>
    </div>
  );
};
