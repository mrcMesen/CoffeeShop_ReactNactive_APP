import React from "react";

import { CartProduct } from "../../components/CartProduct";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export const CartProductList = ({ order }) => {
  const arrayCount = [];
  for (let i = 0; i < order.count; i++) {
    arrayCount.push(i);
  }
  return arrayCount.map((id, index, arr) => (
    <View key={id}>
      <CartProduct product={order.product} />
      {index === arr.length - 1 && (
        <>
          {order.orderDetails !== "" && (
            <View style={styles.orderDetails}>
              <Text style={[styles.whiteText, styles.specialOrder]}>
                Detalles
              </Text>
              <Text style={[styles.whiteText, styles.specialOrderText]}>
                {order.orderDetails}
              </Text>
            </View>
          )}
          <View style={styles.line} />
        </>
      )}
    </View>
  ));
};

const styles = StyleSheet.create({
  whiteText: { color: "#FFF" },
  title: { fontSize: 22 },
  specialOrder: { fontSize: 14, marginVertical: 6 },
  specialOrderText: { fontSize: 12 },
  orderDetails: { paddingHorizontal: 10 },
  line: {
    marginVertical: 10,
    width: "100%",
    height: 0.5,
    backgroundColor: "rgba(250,250,250,0.5)",
  },
});
