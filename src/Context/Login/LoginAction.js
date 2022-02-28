
import axios from "axios";
import * as jose from "jose";
import cookie from "react-cookies";

export const SET_USER_TOKEN = "SET_USER_TOKEN";
export const REMOVE_USER_TOKEN = "REMOVE_USER_TOKEN";
export const GET_USER_TOKEN = "GET_USER_TOKEN";
export const SET_USER_INFO = "SET_USER_INFO";

export const setUserToken = (product) => {
    return {
        type: SET_USER_TOKEN,
        payload: product,
    };
};

export const setUserlogin = (product) => {
    return {
        type: SET_USER_INFO,
        payload: product,
    };
};

export const setUserLogout = () => {
    return {
        type: REMOVE_USER_TOKEN,

    };
};

export const getUserInfo = () => async (dispatch) => {
    const user = await cookie.load("user");

    if (user) {
        const userInfo = jose.decodeJwt(user);
        console.log(userInfo);
        
        dispatch(setUserlogin(userInfo))
        dispatch(setUserToken(user))
    }else
    console.log("no Coockie");
};

export const Login = (username, password) => async (dispatch) => {
    const baseURL = "http://localhost:3100";
    await axios
        .post(`${baseURL}/login/login`, {
            username: username,
            password: password,
        })
        .then((response) => {

            const user = jose.decodeJwt(response.data.token);

            cookie.save("user", response.data.token,{ maxAge: 3600 });
            dispatch(setUserToken(response.data.token))
            dispatch(setUserlogin(user))
            console.log(user)
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



export const LoginOut = () => (dispatch) => {
    cookie.remove("user")
    console.log("logout");
    dispatch(setUserLogout())
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!