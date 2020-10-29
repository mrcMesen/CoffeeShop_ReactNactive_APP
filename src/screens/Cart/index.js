import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext";

/**React Native Components */
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";

/**Own Components */
import { CartProductList } from "../../components/CartProductList";
import { Price } from "../../components/Price";
import { Line } from "../../components/Line";

/**
 * Screen to manage Cart and dispatch orders
 */
export const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <SafeAreaView style={styles.container} edges={["right", "bottom", "left"]}>
      <ScrollView style={styles.container}>
        <View style={styles.root}>
          <Text style={[styles.whiteText, styles.title]}>Su orden</Text>
          <Line />
          {cart &&
            cart.map((order) => (
              <CartProductList key={order.date} order={order} />
            ))}
          <View style={styles.wrapperTotal}>
            <Text style={[styles.whiteText, styles.total]}>TOTAL</Text>
            <Price
              price={cart.reduce((accumulator, order) => {
                return accumulator + order.count * order.product.price;
              }, 0)}
              size={22}
            />
          </View>
          <Line />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const useStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000" },
    root: {
      flex: 1,
      padding: 20,
      justifyContent: "flex-start",
    },
    whiteText: { color: "#FFF" },
    title: { fontSize: 22 },
    total: { fontSize: 26 },
    wrapperTotal: { alignItems: "center" },
  });
