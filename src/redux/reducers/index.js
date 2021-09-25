import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducersX = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducersX;
