import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_QUANTITY,
  DECREASE_BY_ONE,
  INCREASE_BY_ONE,
} from "./actionTypes.js";

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

export const increase_by_one = (cartItemId) => {
  return {
    type: INCREASE_BY_ONE,
    payload: {
      id: cartItemId,
    },
  };
};

export const decrease_by_one = (cartItemId) => {
  return {
    type: DECREASE_BY_ONE,
    payload: {
      id: cartItemId,
    },
  };
};
