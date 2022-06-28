import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productReducer";
import { addToCartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: addToCartReducer,
});
export default rootReducer;
