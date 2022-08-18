import { ADD_TO_CART, REMOVE_FROM_CART, SET_QUANTITY } from "./actionTypes.js";

export const add_to_cart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const remove_form_cart = (cartItemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: cartItemId,
    },
  };
};

export const set_quantity = (cartItemId, quantity) => {
  return {
    type: SET_QUANTITY,
    payload: {
      id: cartItemId,
      quantity,
    },
  };
};
