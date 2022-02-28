// import React from "react";
// import { useState, useEffect } from "react";
// import base64 from "base-64";
// import superagent from "superagent";
// import jwt from "jsonwebtoken";
// import cookie from "react-cookies";

// export const LoginContext = React.createContext();
// const API = "http://localhost:3100";

// export default function LoginProvider(props) {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [user, setUser] = useState({});
//   const [isUpdated, setIsUpdated] = useState(false);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const cookieToken = cookie.load("token");
//     JWToken(cookieToken);
//     setToken(cookieToken);
//     console.log(cookieToken);
//   }, []);
//   const login = async (username, password) => {
//     try {
//       let obj = {
//         username: username,
//         password: password,
//       };
//       const response = await superagent.post(`${API}/login/login`);
//       return JWToken(response.body.token);
//     } catch (error) {
//       alert("Invalid username or password");
//       return false;
//     }
//   };
//   const signup = async (
//     username,
//     password,
//     full_name,
//     mobile_no,
//     address,
//     email
//   ) => {
//     try {
//       let obj = {
//         username: username,
//         password: password,
//         full_name: full_name,
//         mobile_no: mobile_no,
//         address: address,
//         email: email,
//       };
//       console.log(obj);
//       const response = await superagent.post(`${API}/signup`, obj);
//       console.log(response.body);
//       JWToken(response.body.token);
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//   const JWToken = (token) => {
//     if (token) {
//       console.log("token: ", token);
//       const user = jwt.decode(token);
//       handleLogin(true, user);
//       cookie.save("token", token);
//       return true;
//     } else {
//       handleLogin(false, {});
//     }
//   };
//   const handleLogin = (loggedIn, user) => {
//     setLoggedIn(loggedIn);
//     setUser(user);
//     cookie.save("user", user);
//   };
//   const logout = () => {
//     handleLogin(false, {});
//     // cookie.remove('token');
//     cookie.remove("token", { path: "/" });
//     cookie.remove("user", { path: "/" });
//   };
//   const state = {
//     loggedIn,
//     signup,
//     login,
//     logout,
//     user,
//     token,
//     setIsUpdated,
//     isUpdated,
//   };
//   return (
//     <LoginContext.Provider value={state}>
//       {props.children}
//     </LoginContext.Provider>
//   );
// }

import React from 'react'

function loginContext() {
  return (
    <div>loginContext</div>
  )
}

export default loginContext