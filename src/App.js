import React from "react";
import { Header, Products, ShoppingCart } from "./Containers";

function App() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 gap-6">
        <Products />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
