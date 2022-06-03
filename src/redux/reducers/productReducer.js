import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FILTER_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SEARCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
