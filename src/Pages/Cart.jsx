import React from "react";
import { useSelector } from "react-redux";

import React from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
