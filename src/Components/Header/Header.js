import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserInfo, LoginOut } from "../../Context/Login/LoginAction";
import "./Header.css";
export default function Header( ) {
    
  const loginInfo = useSelector((state) => state.userInfo);
  const isLogged = useSelector((state) => state.isLogged);
const dispatch=useDispatch()
useEffect(() => {
  dispatch(getUserInfo())
}, [])
const history = useHistory();

  return (
    <>
      <nav>
        <div class="topnav">
        {isLogged&& <a class="active" href="/home">
            Home
          </a>}
          {/* {isLogged&&<a href="/orders">Add order</a>} */}
          {isLogged&&<a href="/meals">Add meals</a>}
          {isLogged&&<a href="/meals/getmeals">Meals</a>}
          {/* {isLogged&&<a href="/cart">Cart</a>} */}
          {isLogged?<a href="/"> <button onClick={()=>dispatch(LoginOut())}>Logout</button></a>: <a href="/login/login"><button >Login</button></a>}
        </div>
      </nav>
    </>
  );
}
