import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const SignUpScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleSignUp = () => {
    const action = {
      type: types.login,
      payload: {
        name: "Eismer",
        cart: { count: 0, items: [] },
        wishList: { count: 0, items: [] },
        chipojo: 'enano',
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
