import { CartDispatcher } from "../constants/Dispatcher.js";

export const CartActions = {
  addProduct: (newProduct) => ({
    type: CartDispatcher.ADD_PRODUCT,
    payload: newProduct,
  }),
  removeProduct: (productId) => ({
    type: CartDispatcher.REMOVE_PRODUCT,
    payload: productId,
  }),
};
