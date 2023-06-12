import { NavLink, useNavigate } from "react-router-dom";
import { navbar } from "../../../data/navbar";
import { CardCircle } from "../../categoryBox/CardCircle";
import { key } from "localforage";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm p-5 mb-5">
      <div className="navbar-collapse justify-content-center">
        <div className="navbar-nav row"></div>
        {
          navbar.map( ({id, title, navTo}) => (
            
            <CardCircle
            key={id}
            id={id}
            title={title}
            navTo={navTo}
            />
          ))
        }
      </div>
    </nav>
  );
};
