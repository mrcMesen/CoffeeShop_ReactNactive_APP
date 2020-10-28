import React, { createContext, useReducer, useEffect } from "react";

import { ProductsReducer } from "../reducer/ProductsReducer";
import { ProductsActions } from "../actions/ProductsActions";
import API from "../constants/api.json";

export const ProductsContext = createContext();

const initialState = {
  allProducts: [],
  favProducts: [],
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  const { setProducts } = ProductsActions;

  useEffect(() => {
    let componentStillMount = true;
    const getData = async () => {
      try {
        const response = await fetch(
          `${API.BASE_API}${API.PRODUCTS}${API.GET_PRODUCTS}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        if (componentStillMount) {
          responseData.status === 200 &&
            dispatch(setProducts(responseData.items));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    return () => {
      componentStillMount = false;
    };
  }, [API]);

  return (
    <ProductsContext.Provider
      value={{
        allProducts: state.allProducts,
        favProducts: state.favProducts,
        dispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
