import React, { createContext, useReducer } from "react";

import { CartReducer } from "../reducer/CartReducer";

export const CartContext = createContext();

const initialState = {
  products: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        cart: state.products,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
