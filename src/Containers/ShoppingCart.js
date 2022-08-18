import React from "react";
import { CartItem, Totalitem, TotalPrice } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import {
  remove_form_cart,
  set_quantity,
} from "../redux/shoppingCart/actionCreators.js";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.shoppingCart.cartItems);
  const dispatch = useDispatch();

  const setQuantityHandler = (id, quantity) => {
    console.log("setQuantityHandler called");
    dispatch(set_quantity(id, quantity));
  };
  const removeFromCartHandler = (id) => {
    dispatch(remove_form_cart(id));
  };

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cartItems.map((cartItem) => {
          return (
            <CartItem
              key={`#${cartItem.id}`}
              cartItem={cartItem}
              setQuantityHandler={setQuantityHandler}
              removeFromCartHandler={removeFromCartHandler}
            />
          );
        })}
        <Totalitem cartItems={cartItems} />
      </div>
      <TotalPrice cartItems={cartItems} />
    </div>
  );
}

export default ShoppingCart;
