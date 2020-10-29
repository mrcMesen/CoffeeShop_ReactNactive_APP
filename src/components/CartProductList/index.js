import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartActions } from "../../actions/CartActions";

import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { CartProduct } from "../../components/CartProduct";
import { Line } from "../../components/Line";

/**
 * Section Component to show a list of Product with component ProductCard
 *
 * @param {order} object Contains product, count and details
 * Inside Order comes a product that will be shown the number of times indicated by Count
 */
export const CartProductList = ({ order }) => {
  const arrayCount = [];
  const { dispatch } = useContext(CartContext);
  for (let i = 0; i < order.count; i++) {
    arrayCount.push(i);
  }
  return (
    <View style={styles.root}>
      {arrayCount.map((id, index, arr) => (
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
              <Line />
            </>
          )}
        </View>
      ))}
      <TouchableOpacity
        onPress={() => dispatch(CartActions.removeProduct(order))}
        style={styles.deleteButton}
      >
        <MaterialIcons
          name='cancel'
          size={16}
          // color='#ad2028'
          color='gray'
          // style={styles.deleteButton}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%",
  },
  deleteButton: {
    position: "absolute",
    top: 0,
    right: 5,
  },
  whiteText: {
    color: "#FFF",
  },
  title: {
    fontSize: 22,
  },
  specialOrder: {
    fontSize: 14,
    marginVertical: 6,
  },
  specialOrderText: {
    fontSize: 12,
  },
  orderDetails: {
    paddingHorizontal: 10,
  },
});
