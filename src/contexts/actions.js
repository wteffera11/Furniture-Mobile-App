import {
  ADD_TO_CART,
  GET_PRODUCT_BY_ID,
  REMOVE_PRODUCT_FROM_CART,
} from "./actions_type";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    productId,
  };
};

export const getAProduct = (productId) => {
  return {
    type: GET_PRODUCT_BY_ID,
    productId,
  };
};
