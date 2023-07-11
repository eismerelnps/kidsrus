import React, { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../app/appContext";
import AlertDialog from "../feedBack/AlertDialog";
import SimpleBackdrop from "../feedBack/SimpleBackDrop";

export const SignInScreen = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const [formValues, handdleInputChange] = useForm({
    username: "",
    password: "",
    repassword: "",
    email: "",
    number: "",
  });

  const { username, password, repassword, email, number } = formValues;

  const url = "http://localhost:8787/api/v1/users/login";

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AppContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
      },
    })
      .then((response) => response.json())
      .then((data) => {
       // console.log(data.user);

            const action = {
              type: types.login,
              payload: {
                ...data.user,
              },
            };
            dispatch(action);

            const lastPath = localStorage.getItem("lastPath") || "/";
            navigate(lastPath, {
              replace: true,
            });

        setOpenDialog(false);
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
                placeholder="Type your username"
                autoComplete="off"
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
                type="password"
                name="password"
                className="my-3 form-control"
                placeholder="Repeat your password"
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
                  onClick={() => setOpenDialog(true)}
                  type="submit"
                  className="submit_btn border_white_dashed_own  rounded-0 btn text-light font_francois_one w-100  "
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
