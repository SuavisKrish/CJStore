import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
  cartProductsReducer,
} from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: cartProductsReducer,
});
export default rootReducer;
