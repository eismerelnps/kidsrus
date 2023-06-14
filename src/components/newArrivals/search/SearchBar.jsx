import queryString from 'query-string';

import React from "react";
import "./searchbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../../../hooks/useForm';

export const SearchBar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);


  const [formValues, handdleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  // let filteredProducts =  useMemo( () => getProductByName(q), [q])




  const handdleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
   // reset();
  };

  return (
    <div className="mb-5 searchBar_container">
      <form className="d-flex border-0 rounded-0" onSubmit={handdleSubmit}>
        <input
         type="text"
         name="searchText"
          className="form-control form-light border-0 rounded-0 me-2 font_quicksand border-secondary"
          placeholder="Search products..."
          value={searchText}
          autoComplete="off"
              onChange={handdleInputChange}
        />
        
        <div className="fa-search-container p-1">
        <button  type="submit" className='btn border-0 p-0 m-0'>
          <i className="fa-search fa-solid fa-magnifying-glass text-light p-2"></i>
          </button>
        </div>
       

      
        {/* <button className="btn btn-outline-success" type="submit"></button> */}
      </form>
    </div>
  );
};
