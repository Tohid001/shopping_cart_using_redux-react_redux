import React from "react";
import { CartItem, Totalitem, TotalPrice } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease_by_one,
  increase_by_one,
  remove_form_cart,
  set_quantity,
} from "../redux/shoppingCart/actionCreators.js";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.shoppingCart.cartItems);
  const dispatch = useDispatch();
  const increaseHandler = (id) => {
    dispatch(increase_by_one(id));
  };
  const decreaseHandler = (id) => {
    dispatch(decrease_by_one(id));
  };
  const setQuantityHandler = (id, quantity) => {
    dispatch(set_quantity(id, quantity));
  };
  const removeFromCartHandler = (id) => {
    dispatch(remove_form_cart(id));
  };
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((cartItem) => {
        return (
          <CartItem
            key={"kbksdbc"}
            cartItem={cartItem}
            increaseHandler={increaseHandler}
            decreaseHandler={decreaseHandler}
            setQuantityHandler={setQuantityHandler}
            removeFromCartHandler={removeFromCartHandler}
          />
        );
      })}
    </div>
  );
}

export default ShoppingCart;
