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
        // const response = await fetch(
        //   `${API.BASE_API}${API.PRODUCTS}${API.GET_PRODUCTS}`,
        //   {
        //     method: "GET",
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );
        // const responseData = await response.json();
        // if (responseData.status === 200 && componentStillMount) {
        //     dispatch(setProducts(responseData.items));
        // }
        dispatch(
          setProducts([
            {
              image:
                "https://californiaavocado.com/wp-content/uploads/2020/07/California-Club-Sandwich.jpeg",
              updatedAt: 1602144539123,
              createdAt: 1602144539123,
              price: 1000,
              description:
                "Servido con el doble piso y cortado en cuatro partes",
              id: "bd8a09b7-114c-4e0d-a0df-113ef5652a07",
              name: "CLUB SANDWICH",
            },
            {
              image:
                "https://californiaavocado.com/wp-content/uploads/2020/07/California-Club-Sandwich.jpeg",
              updatedAt: 1602144539123,
              createdAt: 1602144539123,
              price: 1000,
              description:
                "Servido con el doble piso y cortado en cuatro partes",
              id: "09b7-114c-4e0d-a0df-113ef5652a07",
              name: "CLUB SANDWICH",
            },
            {
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.JPG",
              updatedAt: 1602061971832,
              createdAt: 1602061971832,
              price: 400,
              description: "Café 2 description",
              id: "5c79e8a1-a0dc-4dc1-87e4-79a04edd818c",
              name: "Café 2",
            },
            {
              description: "Café description",
              id: "9a702fef-ba91-4f52-ae7b-45b9222fe47c",
              price: "350",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.jpg",
              name: "Café",
              updatedAt: 1603005893177,
            },
          ])
        );
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
