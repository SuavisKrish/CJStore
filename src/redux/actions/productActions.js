import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const showCart = () => {
  return {
    type: ActionTypes.SHOW_CART,
  };
};

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const showCartProducts = () => {
  return {
    type: ActionTypes.SHOW_PRODUCTS_IN_CART,
  };
};

export const hideCartProducts = () => {
  return {
    type: ActionTypes.HIDE_PRODUCTS_IN_CART,
  };
};

export const removeProductFromCart = (productId) => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (productId) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
