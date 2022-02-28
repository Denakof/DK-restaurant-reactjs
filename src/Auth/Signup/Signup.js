import axios from "axios";
import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import "./signup.css";
import MuiAlert from "@mui/material/Alert";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function Signup() {
  const history = useHistory();
  const [post, setPost] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //For The signup
  const [full_name, setfull_name] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [open, setOpen] = React.useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    Signup();
    handleClick();
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const Signup = () => {
    const baseURL = "http://localhost:3100";
    axios
      .post(`${baseURL}/signup`, {
        username: username,
        password: password,
        full_name: full_name,
        mobile_no: mobile_no,
        address: address,
        email: email,
      })
      .then((response) => {
        setPost(response.data);
        setShowSnackBar(true);
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };
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
            sx={{ width: "100%" }}>
            you have registered, welcome!
          </Alert>
        </Snackbar>
        <div class="container1">
          <form onSubmit={handleSignupSubmit} id="signup">
            <div class="header">
              <h3>Sign Up</h3>
              <p>Create an account</p>
            </div>
            <div class="inputs">
              <input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                type="text"
                name="Username"
                required
              />
              <input
                onChange={(e) => setfull_name(e.target.value)}
                placeholder="Fullname"
                type="text"
                name="fullname"
                required
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="e-mail"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <input
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                type="text"
                name="address"
                required
              />
              <input
                onChange={(e) => setmobile_no(e.target.value)}
                placeholder="Mobile_no"
                type="number"
                name="mobile_no"
                required
              />
              <button
                type="submit"
                style={{ color: "white" }}
                class="btnSignup">
                submit
              </button>
            </div>
          </form>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mt: 3 }}
          >
            Already have an account?{" "}
            <Link
              onClick={() => {
                history.push("/login/login")}}
              variant="subtitle2">
              Login
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
}
