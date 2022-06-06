import { ErrorTypes } from "../constants/error-types";

export const setError = (error) => {
  return {
    type: ErrorTypes.SET_ERROR,
    payload: error,
  };
};

export const hideError = (error) => {
  return {
    type: ErrorTypes.HIDE_ERROR,
    payload: error,
  };
};
