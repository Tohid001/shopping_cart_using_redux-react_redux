import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer.js";
import productsReducer from "./products/productsReducer.js";

const rootReducer = combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
