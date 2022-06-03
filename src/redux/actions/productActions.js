import { ActionTypes } from "../constants/action-types";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const searchProducts = (products) => {
  return {
    type: ActionTypes.SEARCH_PRODUCTS,
    payload: products,
  };
};

export const filterProducts = (category, filteredProducts) => {
  const filteredData = filteredProducts.filter(
    (product) => product.category === category
  );
  console.log("state.products", filteredData);
  return {
    type: ActionTypes.FILTER_PRODUCTS,
    payload: filteredData,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
