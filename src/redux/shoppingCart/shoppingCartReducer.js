import { ADD_TO_CART, REMOVE_FROM_CART, SET_QUANTITY } from "./actionTypes.js";

const initialState = {
  cartItems: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { cartItems } = state;

  switch (type) {
    case ADD_TO_CART:
      const inCart = cartItems.find((cartItem) => {
        return cartItem.id === payload.id;
      });

      return {
        ...state,
        cartItems: inCart
          ? cartItems.map((cartItem) => {
              return cartItem.id === payload.id
                ? {
                    ...cartItem,
                    quantity: cartItem.remainingStock
                      ? cartItem.quantity + 1
                      : cartItem.quantity,
                    remainingStock:
                      cartItem.remainingStock && cartItem.remainingStock - 1,
                  }
                : cartItem;
            })
          : [
              ...cartItems,
              {
                ...payload,
                quantity: 1,
                remainingStock: payload.stock - 1,
              },
            ],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: cartItems.filter((cartItem) => cartItem.id !== payload.id),
      };

    case SET_QUANTITY:
      return {
        ...state,
        cartItems: cartItems.map((cartItem) =>
          cartItem.id === payload.id
            ? {
                ...cartItem,
                quantity:
                  payload.quantity <= cartItem.stock
                    ? payload.quantity
                    : cartItem.quantity,
                remainingStock:
                  payload.quantity <= cartItem.stock
                    ? cartItem.stock - payload.quantity
                    : cartItem.remainingStock,
              }
            : cartItem
        ),
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
