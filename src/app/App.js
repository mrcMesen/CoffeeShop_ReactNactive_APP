import { registerRootComponent } from "expo";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../context/ThemeContext";
import { ProductsProvider } from "../context/ProductsContext";
import { CartProvider } from "../context/CartContext";

import { Routing } from "./Routing";

/**
 * Entry point for APP
 */
function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ProductsProvider>
          <CartProvider>
            <Routing />
            <StatusBar style='auto' />
          </CartProvider>
        </ProductsProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
