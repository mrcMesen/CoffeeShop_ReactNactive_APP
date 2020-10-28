import { ProductsDispatcher } from "../constants/Dispatcher.js";

export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case ProductsDispatcher.SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ProductsDispatcher.SET_FAVORITE:
      const existProduct = state.favProducts.find(
        (product) => product.id === action.payload
      );
      if (existProduct) {
        return {
          ...state,
          favProducts: state.favProducts.filter(
            (product) => product.id !== action.payload
          ),
        };
      }
      return {
        ...state,
        favProducts: [
          ...state.favProducts,
          state.allProducts.find((product) => product.id === action.payload),
        ],
      };

    default:
      return state;
  }
};
