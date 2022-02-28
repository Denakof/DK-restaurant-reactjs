import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../Context/Login/LoginAction";
export default function AddMeals() {
  const [post, setPost] = useState(null);
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [meal_description, setmeal_description] = useState("");
  const [meal_name, setmeal_name] = useState("");
  const Token = useSelector((state) => state.userToken);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    Addmeals();
  };
  function Addmeals() {

    let data=JSON.stringify({
      meal_description: meal_description,
      price: price,
      meal_name: meal_name,
      image: image,
    })
    console.log(data);
    var config = {
      method: "post",
      url: `http://localhost:3100/meals`,
      headers: {
        Authorization: `Bearer ${Token}`,
        Cookie:
          "SESSION_ID=s%3AQTUU3YEaevh8juEUoHFIW9cmeMh0ifVM.jn%2FWmmZgkECVVuVJfppQLD2wE4P3nTZrCXy84yQjAVI",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  // const Addmeals = () => {
  //   const baseURL = "http://localhost:3100";
  //   axios
  //     .post(`${baseURL}/meals`, {data
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         // Request made and server responded
  //         console.log(error.response.data);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         console.log(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log("Error", error.message);
  //       }
  //     });
  // };
  return (
    <>
      <div className="signupbody">
        <div class="container1">
          <form onSubmit={handleSignupSubmit} id="signup">
            <div class="header">
              <h3>Add Meal</h3>
            </div>
            <div class="sep2"></div>
            <div class="inputs">
              <input
                onChange={(e) => setimage(e.target.value)}
                placeholder="image"
                type="text"
                name="image"
                required
              />
              <input
                onChange={(e) => setmeal_description(e.target.value)}
                placeholder="meal_description"
                type="text"
                name="fullname"
                required
              />
              <input
                onChange={(e) => setprice(e.target.value)}
                placeholder="price"
                type="text"
                name="price"
                required
              />
              <input
                onChange={(e) => setmeal_name(e.target.value)}
                placeholder="meal_name"
                type="text"
                name="address"
                required
              />
              <button
                type="submit"
                style={{ color: "white" }}
                class="btnSignup"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
