import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext";
import { CartProduct } from "../../components/CartProduct";

import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";

export const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.root}>
          <Text style={[styles.whiteText, styles.title]}>Su orden</Text>
          {cart &&
            cart.map((order) => {
              const arr = [];
              for (let i = 0; i < order.count; i++) {
                arr.push(i);
              }
              return arr.map((id, index, arr) => (
                <View key={id}>
                  <CartProduct key={id} product={order.product} />
                  {index === arr.length - 1 && (
                    <>
                      <Text style={[styles.whiteText, styles.specialOrder]}>
                        Detalles
                      </Text>
                      <Text style={[styles.whiteText, styles.specialOrderText]}>
                        {order.orderDetails}
                      </Text>
                      <View style={styles.line} />
                    </>
                  )}
                </View>
              ));
            })}
        </View>
      </SafeAreaView>
    </ScrollView>
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
    specialOrder: { fontSize: 14, marginVertical: 6 },
    specialOrderText: { fontSize: 12 },
    line: {
      marginVertical: 10,
      width: "100%",
      height: 0.5,
      backgroundColor: "rgba(250,250,250,0.5)",
    },
  });
