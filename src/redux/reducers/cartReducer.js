import { ActionTypes } from "../constants/action-types";

const intialState = {
  cartList: [],
};

export const addToCartReducer = (state = intialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cartList: [...state.cartList, payload] };

    default:
      return state;
  }
};
