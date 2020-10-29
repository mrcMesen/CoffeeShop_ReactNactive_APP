import { CartDispatcher } from "../constants/Dispatcher.js";

export const CartActions = {
  addProduct: (newProduct) => ({
    type: CartDispatcher.ADD_PRODUCT,
    payload: newProduct,
  }),
  removeProduct: (order) => ({
    type: CartDispatcher.REMOVE_PRODUCT,
    payload: { id: order.product.id, date: order.date },
  }),
  emptyCart: () => ({
    type: CartDispatcher.EMPTY_CART,
  }),
};
