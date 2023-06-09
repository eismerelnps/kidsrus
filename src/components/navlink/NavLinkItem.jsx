import { NavLink } from "react-router-dom";

export const NavLinkItem = ({ path, title, amount }) => {
  return (
    <div className="row">
    <NavLink className="nav-item nav-link col-10" to={path}>
      {title}
    </NavLink>
    <p className="col-2">({amount})</p>
    </div>
  );
};
