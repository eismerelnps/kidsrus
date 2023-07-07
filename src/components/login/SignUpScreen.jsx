import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../app/appContext";
import { types } from "../../types/types";

export const SignUpScreen = () => {
  const navigate = useNavigate();
  const {user, dispatch } = useContext(AppContext);

  const handleSignUp = () => {
    const action = {
      type: types.login,
      payload: {
        ...user,
        name: "Eismer",
       // cart: { count: 0, items: [] },
        // wishList: { count: 0, items: [] },
      },
    };
    dispatch(action);

    const lastPath = localStorage.getItem("lastPath") || "/";

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container text-center">
      <h1>Sign Up</h1>
      <hr />
      <button
        className="btn bg_color_orange "
        onClick={handleSignUp}
      >
        Login
      </button>
    </div>
  );
};
