import { ActionTypes } from "../constants/action-types";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setProduct = (product) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: product,
  };
};
