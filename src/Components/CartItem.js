import React, { useState, useEffect } from "react";

function CartItem({ cartItem, removeFromCartHandler, setQuantityHandler }) {
  //debugging
  const [quantity, setQuantity] = useState(cartItem.quantity);
  console.log("C.remainingStock", cartItem.remainingStock);
  console.log("C.quantity", cartItem.quantity);
  console.log("I.itemQuantity", quantity);

  const onChangeHandler = (e) => {
    console.log("e", e.target.value);
    setQuantity(parseInt(e.target.value));
    // e.target.value && setQuantityHandler(cartItem.id, e.target.value);
  };

  useEffect(() => {
    // quantity && setQuantity(cartItem.id, quantity);
  }, [quantity]);

  useEffect(() => {
    // setQuantity(cartItem.quantity);
  }, [cartItem.quantity]);

  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{cartItem.title}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <button
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
            onClick={() => {
              parseInt(quantity) && setQuantity((prev) => prev - 1);
            }}
            disabled={!parseInt(quantity)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 12H6"
              />
            </svg>
          </button>

          <div className="" style={{ width: "30px" }}>
            <input
              type="number"
              value={
                cartItem.quantity !== quantity ? cartItem.quantity : quantity
              }
              onChange={onChangeHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ width: "100%", border: "none" }}
              disabled={!cartItem.remainingStock}
            />
          </div>

          <button
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
            onClick={() => {
              cartItem.remainingStock && setQuantity((prev) => prev + 1);
            }}
            disabled={!cartItem.remainingStock}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button
            className="bg-red-400 p-1"
            onClick={() => {
              removeFromCartHandler(cartItem.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
