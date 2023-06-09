import {  NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/', {
        replace: true
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      {/* <Link className="navbar-brand" to="/">
        Asociaciones
      </Link> */}

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            to="/babies"
          >
            For Babies
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/boys"
          >
            For Boys
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/girls"
          >
            For Girls
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/home"
          >
            For Home
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/play"
          >
            For Play
          </NavLink>

          
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">Eismer</span>

          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
