import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { productsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: productReducer,
});

export default reducers;
