import { ADD_TO_CART,REMOVE_FROM_CART,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST, CLEAR_WISHLIST, MOVE_TO_WISHLIST, MOVE_TO_CART } from "./shoeTypes";
 

  export const addToCart = (productId) => ({
    type: ADD_TO_CART,
    payload: productId,
  });
  
  export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product,
  });

  export const moveToWishlist = (productId)=>({
    type: MOVE_TO_WISHLIST,
    payload: productId
  })

  export const moveToCart = (productId)=>({
    type: MOVE_TO_CART,
    payload: productId,
  })
  
  export const addToWishlist = (productId) => ({
    type: ADD_TO_WISHLIST,
    payload: productId,
  });
  
  export const removeFromWishlist = (product) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: product,
  });
  