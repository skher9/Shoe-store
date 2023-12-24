import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyShoe } from "../redux/Shoes/shoeActions";

const ShoeContainer = () => {
  const storestate = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Shoes {storestate.numOfShoes}</h2>
      <button onClick={() => dispatch(buyShoe(storestate.numOfShoes + 1))}>
        BUY SHOE
      </button>
    </div>
  );
};

export default ShoeContainer;
