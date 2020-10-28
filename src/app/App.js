import { registerRootComponent } from "expo";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "../context/ThemeContext";
import { ProductsProvider } from "../context/ProductsContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Routing } from "./Routing";

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ProductsProvider>
          <Routing />
          <StatusBar style='auto' />
        </ProductsProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
