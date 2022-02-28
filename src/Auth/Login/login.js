// import { useHistory } from "react-router-dom";
import { Snackbar, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import * as jose from "jose";
import cookie from "react-cookies";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, Login } from "../../Context/Login/LoginAction";
export default function LoginForm() {
  const history = useHistory();
  const [post, setPost] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    dispatch(Login(username, password));
    handleClick();
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [showSnackBar, setShowSnackBar] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const loginInfo = useSelector((state) => state.userInfo);
  const isLogged = useSelector((state) => state.isLogged);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    if (isLogged) {
      setShowSnackBar(true);
      setTimeout(() => {
        history.push("/home");
      }, 1000);
    } else {
      console.log(isLogged);
    }
  }, [isLogged]);

  return (
    <>
      <div className="signupbody">
        <Snackbar
          open={showSnackBar}
          autoHideDuration={6000}
          onClose={() => setShowSnackBar(false)}
        >
          <Alert
            onClose={() => setShowSnackBar(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            login succeeded!
          </Alert>
        </Snackbar>
        <div class="container1">
          <form onSubmit={handleSignupSubmit} id="signup">
            <div class="header">
              <h3>Login</h3>
            </div>
            <div class="sep"></div>
            <div class="inputs">
              <input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                type="text"
                name="Username"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <button
                type="submit"
                style={{ color: "white" }}
                class="btnSignup"
              >
                Login
              </button>
            </div>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Don’t have an account?{" "}
            <Link
              onClick={() => {
                history.push("/signup");
              }}
              variant="subtitle2"
            >
              Get started
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
}
