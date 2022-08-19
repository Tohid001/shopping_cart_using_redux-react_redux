import React from "react";
import { useSelector } from "react-redux";

function Product({ product, addToCardHandler }) {
  const correspondingCartItem = useSelector((state) =>
    state.shoppingCart.cartItems.find((cartItem) => cartItem.id === product.id)
  );

  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-between px-4 items-center">
        <div className="text-lg font-semibold">
          <p>{`${product.title} (${product.stock})`}</p>
          <p className="text-gray-400 text-base">{`Tk ${product.price}`}</p>
        </div>
        <div className="text-lg font-semibold">
          <button
            className={`focus:outline-none ${
              correspondingCartItem?.remainingStock === 0
                ? "bg-gray-500 hover:bg-gray-500"
                : "bg-purple-700 hover:bg-purple-800"
            }  text-white font-bold py-2 px-2 rounded-full inline-flex items-center`}
            onClick={() => {
              addToCardHandler(product);
            }}
            disabled={
              correspondingCartItem?.remainingStock === 0 ? true : false
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
