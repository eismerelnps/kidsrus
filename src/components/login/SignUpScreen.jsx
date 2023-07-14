import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../app/appContext";
import { types } from "../../types/types";
import { useForm } from "../../hooks/useForm";

import SimpleBackdrop from "../feedBack/SimpleBackDrop";

export const SignUpScreen = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const [formValues, handdleInputChange] = useForm({
    username: "",
    password: "",
    repassword: "",
    email: "",
    number: "",
  });

  const { username, password, repassword, email, number } = formValues;

  const url =
    "https://kidsrus-backend-node.onrender.com/api/v1/users/create-user";

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AppContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    //console.log(formValues);

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        role: "user",
        logged: false,
        username: username,
        password: password,
        email: email,
        number: number,
        cart: { count: 0, items: [] },
        wishList: { count: 0, items: [] },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setOpenDialog(false);
      })

      .then(() => {
        navigate("/signin", {
          replace: true,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container text-center">
      {openDialog && <SimpleBackdrop />}

      <h1 className="font_francois_one color_mate_blue">Sign Up</h1>

      <hr />
      <div className="d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12">
            <form className="m-2 font_quicksand" onSubmit={handleSignUp}>
              <input
                type="text"
                name="username"
                className="my-3 form-control "
                placeholder="Type your name"
                autoComplete="off"
                value={username}
                onChange={handdleInputChange}
              />
              <input
                required="true"
                type="email"
                name="email"
                className="my-3 form-control"
                placeholder="Type your email"
                autoComplete="off"
                value={email}
                onChange={handdleInputChange}
              />
              <input
                type="password"
                name="repassword"
                className="my-3 form-control"
                placeholder="Type your password"
                value={repassword}
                onChange={handdleInputChange}
              />
              <input
                type="password"
                name="password"
                className="my-3 form-control"
                placeholder="Repeat your password"
                value={password}
                onChange={handdleInputChange}
              />
              <input
                type="number"
                name="number"
                className="my-3 form-control"
                placeholder="Type your phone number"
                value={number}
                onChange={handdleInputChange}
              />
              <div className="bg_color_mate_blue p-1 flex-grow-1">
                <button
                  onClick={() => setOpenDialog(true)}
                  type="submit"
                  className="submit_btn border_white_dashed_own  rounded-0 btn text-light font_francois_one w-100  "
                >
                  Sign Up
                </button>
              </div>
            </form>

            <span className="color_light_blue text-decoration-none text-end">
              Already have an account
            </span>
            <br />

            <NavLink
              className="color_orange text-decoration-none text-end"
              to={"/signin"}
            >
              <span>Sign in</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
