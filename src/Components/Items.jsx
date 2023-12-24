import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Items = (products) => {
  const storestate = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      <ul></ul>
    </div>
  );
};

export default Items;
