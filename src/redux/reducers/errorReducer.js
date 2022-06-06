import { ErrorTypes } from "../constants/error-types";
const initialState = {
  error: null,
  isOpen: false,
};
export const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ErrorTypes.SET_ERROR:
      return {
        error: payload,
        isOpen: true,
      };
    case ErrorTypes.HIDE_ERROR:
      return {
        error: null,
        isOpen: false,
      };
    default:
      return state;
  }
};
