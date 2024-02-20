import { combineReducers } from "redux";
import cartReducer from "./cart";
import authReducer from "./auth";
const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});
export default rootReducer;
