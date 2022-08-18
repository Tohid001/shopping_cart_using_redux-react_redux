import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  SET_QUANTITY,
} from "./actionTypes.js";

const initialState = [];

const shoppingCartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      break;
    case REMOVE_FROM_CART:
      break;
    case INCREASE_QUANTITY:
      break;
    case DECREASE_QUANTITY:
      break;
    case SET_QUANTITY:
      break;

    default:
      return state;
  }
};

export default shoppingCartReducer;
