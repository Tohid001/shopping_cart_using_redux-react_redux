import React, { useState, useEffect, useRef } from "react";

function CartItem({ cartItem, removeFromCartHandler, setQuantityHandler }) {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const onChangeHandler = (e) => {
    e.target.value
      ? parseInt(e.target.value) > cartItem.stock
        ? setQuantity(quantity)
        : setQuantity(parseInt(e.target.value))
      : setQuantity(0);
  };

  useEffect(() => {
    setQuantity(cartItem.quantity);
  }, [cartItem.quantity]);

  useEffect(() => {
    setQuantityHandler(cartItem.id, quantity);
  }, [quantity]);

  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{cartItem.title}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <button
            className={`focus:outline-none ${
              quantity === 0
                ? "bg-gray-500 hover:bg-gray-500"
                : "bg-purple-700 hover:bg-purple-800"
            }  text-white font-bold py-1 px-1 rounded-full inline-flex items-center`}
            onClick={() => {
              setQuantity((prev) => prev - 1);
            }}
            disabled={quantity === 0}
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

          <div className="" style={{ width: "50px", padding: "0px" }}>
            <input
              type="number"
              value={quantity}
              onChange={onChangeHandler}
              // ref={inputRef}
              className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
              style={{ width: "100%", border: "none" }}
            />
          </div>

          <button
            className={`focus:outline-none ${
              cartItem.stock == quantity
                ? "bg-gray-500 hover:bg-gray-500"
                : "bg-purple-700 hover:bg-purple-800"
            }  text-white font-bold py-1 px-1 rounded-full inline-flex items-center`}
            onClick={() => {
              cartItem.remainingStock && setQuantity((prev) => prev + 1);
            }}
            disabled={cartItem.stock <= quantity}
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
