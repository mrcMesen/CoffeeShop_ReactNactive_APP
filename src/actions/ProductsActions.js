import { ProductsDispatcher } from "../constants/Dispatcher.js";

export const ProductsActions = {
  setProducts: (allproducts) => ({
    type: ProductsDispatcher.SET_ALL_PRODUCTS,
    payload: allproducts,
  }),
  setFavorite: (productId) => ({
    type: ProductsDispatcher.SET_FAVORITE,
    payload: productId,
  }),
};
