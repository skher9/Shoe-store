import {BUY_SHOE, ADD_TO_CART,REMOVE_FROM_CART,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from "./shoeTypes";

export const buyShoe = (count) =>{
    return{
        type: BUY_SHOE,
        payload: count
    }
}  

  export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
  });
  
  export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product,
  });
  
  export const addToWishlist = (product) => ({
    type: ADD_TO_WISHLIST,
    payload: product,
  });
  
  export const removeFromWishlist = (product) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: product,
  });
   