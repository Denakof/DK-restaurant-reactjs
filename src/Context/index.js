import { createStore, applyMiddleware } from 'redux'
import Login from "./Login/LoginReducer";
import thunk from 'redux-thunk'

// Combine reducers isn't really necessary when you only have one reducer.
// But it's good to have it in case you have multiple reducers.
// And 99.99% of all Redux apps will have more than one reducer.
const store = () => {
  return createStore(Login, applyMiddleware(thunk))
};

export default store();