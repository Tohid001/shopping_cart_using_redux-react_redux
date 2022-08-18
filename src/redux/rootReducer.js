import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer.js";

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
