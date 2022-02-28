import React, { useEffect } from "react";
import Home from "./Components/Home/Home.js";
import Login from "./Auth/Login/login.js";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Components/Header/Header.js";
import AddMeals from "./Components/Meals/AddMeal/AddMeal";
import GetMeals from "./Components/Meals/GetMeal/GetMeals";
import AddOrder from "./Orders/addOrder/AddOrder";
import Signup from "./Auth/Signup/Signup.js";
 import { Provider, useDispatch } from "react-redux";
import Store from "./Context/index.js";
 function App() {
 
  
  return (
    <Provider store={Store}>,
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login/login">
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/meals/getmeals">
            <GetMeals />
          </Route>
          <Route path="/meals">
            <AddMeals />
          </Route>
          <Route path="/orders">
            <AddOrder />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
