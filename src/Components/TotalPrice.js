import React from "react";

function TotalPrice({ cartItems }) {
  const totalPrice = cartItems.reduce((total, current) => {
    return current.quantity * current.price + total;
  }, 0);
  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-center items-center text-center">
        <div className="text-xl font-semibold">
          <p>Total Price</p>
          <p className="text-5xl">{totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default TotalPrice;
