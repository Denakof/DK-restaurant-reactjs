import axios from "axios";
import * as React from "react";
import FoodCard from "./Card/FoodCard";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../../Context/Login/LoginAction";
export default function GetMeals() {
  const [meals, setmeals] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const loginInfo = useSelector((state) => state.userInfo);
  const isLogged = useSelector((state) => state.isLogged);
  const Token = useSelector((state) => state.userToken);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserInfo());
   }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  React.useEffect(() => {
    if (Token) {
      console.log(Token);
      getmeals(page,itemsPerPage);
    }
  }, [,Token,page]);

  function getmeals(page, itemsPerPage) {

//     var data = '';

var config = {
  method: 'get',
  url: `http://localhost:3100/meals/getmeals?page=${page}&itemsPerPage=${itemsPerPage}`,
  headers: { 
    'Authorization': `Bearer ${Token}`, 
    'Cookie': 'SESSION_ID=s%3AQTUU3YEaevh8juEUoHFIW9cmeMh0ifVM.jn%2FWmmZgkECVVuVJfppQLD2wE4P3nTZrCXy84yQjAVI'
  },
  data : ''
};
  
  axios(config)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        setmeals(res.data);
      })

      .catch((e) => {
        console.log(e);
      });
  }
  return (
    isLogged && (
      <>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" ,flexDirection:"row",flexWrap:"wrap",gap:"25px" }}
        >
          {meals.map((data, index) => {
            return <FoodCard data={data} key={index} />;
          })}
        </div>
        <Pagination  onChange={handleChangePage} count={10} />
      </>
    )
  );
}
