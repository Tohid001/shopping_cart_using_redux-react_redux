import React from "react";

function Totalitem({ cartItems }) {
  const totalItems = cartItems.reduce((total, current) => {
    return current.quantity + total;
  }, 0);
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xl font-semibold">
        <p>Total Item</p>
        <p className="text-5xl">{totalItems}</p>
      </div>
    </div>
  );
}

export default Totalitem;
