import React from "react";
import { Header } from "./Containers";
import { Products } from "./Containers";

function App() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 gap-6">
        <Products />
      </div>
    </div>
  );
}

export default App;
