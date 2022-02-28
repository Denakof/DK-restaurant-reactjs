import {
  SET_USER_TOKEN,
  REMOVE_USER_TOKEN,
  SET_USER_INFO,
} from "./LoginAction";

let initialState = {
  userInfo: {},
  userToken: "",
  isLogged: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
        isLogged: true,
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
     
      };
    case REMOVE_USER_TOKEN:
      return {
        userInfo: {},
        userToken: "",
        isLogged: false,
      };

    default:
      return state;
  }
}
