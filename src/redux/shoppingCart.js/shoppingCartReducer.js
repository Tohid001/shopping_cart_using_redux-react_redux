import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_QUANTITY,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "./actionTypes.js";

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
                    quantity: cartItem.quantity + 1,
                    stock: cartItem.stock && cartItem.stock - 1,
                  }
                : cartItem;
            })
          : [
              ...cartItems,
              {
                ...payload,
                quantity: 1,
                stock: cartItem.stock && cartItem.stock - 1,
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
            ? { ...cartItem, quantity: payload.quantity }
            : cartItem
        ),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: cartItems.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem + 1 }
            : cartItem
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: cartItems.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem - 1 }
            : cartItem
        ),
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
