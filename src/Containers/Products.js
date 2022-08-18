import React from "react";
import Product from "../Components/Product";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart } from "../redux/shoppingCart/actionCreators.js";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const addToCardHandler = (product) => {
    dispatch(add_to_cart(product));
  };

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCardHandler={addToCardHandler}
        />
      ))}
    </div>
  );
}

export default Products;
