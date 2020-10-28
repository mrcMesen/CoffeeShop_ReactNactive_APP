import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ProductsContext } from "../../context/ProductsContext";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductList } from "../../components/ProductList";

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { allProducts, favProducts } = useContext(ProductsContext);
  const styles = useStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        {/* <View>
          <Text>Banner</Text>
        </View> */}
        <View style={styles.wrapperList}>
          <Text style={styles.title}>FAVORITES</Text>
          <ProductList data={favProducts} />
        </View>
        <View>
          <Text style={styles.title}>CAFE</Text>
          <ProductList data={allProducts} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const useStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000" },
    root: {
      flex: 1,
      padding: 20,
    },
    actions: {
      flexDirection: "row",
      width: 150,
      justifyContent: "space-around",
    },
    wrapperList: {
      minHeight: 50,
    },
    title: {
      fontSize: 18,
      fontWeight: "500",
      color: theme.palette.ligth,
    },
    buttonsWrapper: {
      marginTop: 16,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
