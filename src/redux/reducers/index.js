import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { productsReducer } from "./productsReducer";
import { errorReducer } from "./errorReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: productReducer,
  error: errorReducer,
});

export default reducers;
