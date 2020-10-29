import { CartDispatcher } from "../constants/Dispatcher.js";

export const CartReducer = (state, action) => {
  switch (action.type) {
    case CartDispatcher.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { ...action.payload, date: new Date() }],
      };
    case CartDispatcher.REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (order) =>
              order.product.id !== action.payload.id &&
              order.date !== action.payload.date
          ),
        ],
      };
    default:
      return state;
  }
};
