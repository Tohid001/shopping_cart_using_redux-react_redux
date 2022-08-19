import React, { useState, useEffect } from "react";

function CartItem({ cartItem, removeFromCartHandler, setQuantityHandler }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(!(cartItem.quantity < cartItem.stock));
  }, [cartItem.quantity]);

  const onChangeHandler = (e) => {
    setShowModal(parseInt(e.target.value) > cartItem.stock);
    e.target.value
      ? parseInt(e.target.value) <= cartItem.stock
        ? setQuantityHandler(cartItem.id, parseInt(e.target.value))
        : setQuantityHandler(cartItem.id, cartItem.quantity)
      : setQuantityHandler(cartItem.id, 0);
  };

  return (
    <div className="flex justify-between border-b-2 mb-2 flex-wrap">
      <div className="text-lg py-2">
        <p>{cartItem.title}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <button
            className={`focus:outline-none ${
              cartItem.quantity === 0
                ? "bg-gray-500 hover:bg-gray-500"
                : "bg-purple-700 hover:bg-purple-800"
            }  text-white font-bold py-1 px-1 rounded-full inline-flex items-center`}
            onClick={() => {
              setQuantityHandler(cartItem.id, cartItem.quantity - 1);
            }}
            disabled={cartItem.quantity === 0}
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
              value={cartItem.quantity}
              onChange={onChangeHandler}
              className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
              style={{ width: "100%", border: "none" }}
            />
          </div>

          <button
            className={`focus:outline-none ${
              cartItem.stock == cartItem.quantity
                ? "bg-gray-500 hover:bg-gray-500"
                : "bg-purple-700 hover:bg-purple-800"
            }  text-white font-bold py-1 px-1 rounded-full inline-flex items-center`}
            onClick={() => {
              setQuantityHandler(cartItem.id, cartItem.quantity + 1);
            }}
            disabled={cartItem.stock <= cartItem.quantity}
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
      {showModal && (
        <div className="basis-full bg-orange-100">
          <span className=" text-xs text-orange-600 dark:text-yellow-500">
            You can not purchase more than{" "}
            <span className="font-bold">{cartItem.stock}</span> items of
            <span className="font-bold"> {cartItem.title}</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default CartItem;
