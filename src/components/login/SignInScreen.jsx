import { NavLink } from "react-router-dom";
import SimpleBackdrop from "../feedBack/SimpleBackDrop";

export const SignInScreen = ({
  openDialog,
  setOpenDialog,
  children,
  handleSignIn,
  username,
  password,
  handdleInputChange,
  startFeedback,
}) => {
  return (
    <div className="container text-center">
      <SimpleBackdrop open={openDialog} setOpen={setOpenDialog}>
        {" "}
        {children}{" "}
      </SimpleBackdrop>
      <h1 className="font_francois_one color_mate_blue">Sign Up</h1>

      <hr />
      <div className="d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12">
            <form className="m-2 font_quicksand" onSubmit={handleSignIn}>
              <input
               required
                type="text"
                name="username"
                className="my-3 form-control "
                placeholder="Type your username"
                autoComplete="on"
                value={username}
                onChange={handdleInputChange}
              />
              {/* <input
              required='true'
                type="email"
                name="email"
                className="my-3 form-control"
                placeholder="Type your email"
                autoComplete="off"
                value={email}
                onChange={handdleInputChange}
              /> */}

              <input
              required
                type="password"
                name="password"
                className="my-3 form-control"
                placeholder="Type your password"
                autoComplete="on"
                value={password}
                onChange={handdleInputChange}
              />
              {/* <input
                type="number"
                name="number"
                className="my-3 form-control"
                placeholder="Type your phone number"
                value={number}
                onChange={handdleInputChange}
              /> */}
              <div className="bg_color_mate_blue p-1 flex-grow-1">
                <button
                 
                  type="submit"
                  className="submit_btn border_white_dashed_own  rounded-0 btn text-light font_francois_one w-100  "
                >
                  Sign In
                </button>
              </div>
            </form>
            <NavLink
              className="color_light_blue text-decoration-none font_quicksand"
              to={"/"}
            >
              <span className="text-end">Keep as guess</span>
            </NavLink>
            <br />
            <NavLink
              className="color_light_blue text-decoration-none font_quicksand"
              to={"/signup"}
            >
              <span>Don't have an account</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
