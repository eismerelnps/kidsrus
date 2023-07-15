import { SignInScreen } from "./SignInScreen";
import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../app/appContext";
import { Alert, CircularProgress } from "@mui/material";

export const SignInContainer = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const url = "https://kidsrus-backend-node.onrender.com/api/v1/users/login";
  //const localURL = "http://localhost:8787/api/v1/users/login";

  const [openDialog, setOpenDialog] = useState(false);

  const [backDropChildren, setBackDropChildren] = useState({
  
    children: <Alert severity="info"></Alert>,
  });
  const {  children } = backDropChildren;


  const [formValues, handdleInputChange] = useForm({
    username: "",
    password: "",
    repassword: "",
    email: "",
    number: "",
  });

  const { username, password } = formValues;


 
  const startFeedback = (e) => {
    setOpenDialog(true);
    setBackDropChildren({
      children: <CircularProgress color="inherit" />,
    });
  };

  const handleSignIn = (e) => {
    startFeedback();
    console.log('singin')
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
        // console.log(data);

        setBackDropChildren({
          children: <Alert severity="success">{data}</Alert>,
        });

        if (data.user) {
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
        }

        //setOpenDialog(false);
      })
      .catch((error) => {
        setBackDropChildren({
          children: <Alert severity="error">An error has occurred</Alert>,
        });
       // console.log("error:");
       // console.log(error);
      });
  };

  return (
    <SignInScreen
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      children={children}
      handleSignIn={handleSignIn}
      username={username}
      password={password}
      handdleInputChange={handdleInputChange}
      startFeedback={startFeedback}
    />
  );
};
