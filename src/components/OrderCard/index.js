import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { Price } from "../../components/Price";
import { Line } from "../../components/Line";

/**
 * Compoment for render products in vertical list
 *
 * @param {object} order Whole order products and IDs
 */
export const OrderCard = ({ order }) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  console.log("orders", order);
  const { createdAt, state, items } = order;
  const formatdate = new Date(createdAt);

  useEffect(() => {}, []);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.whiteText}>
          Order created at {formatdate.toLocaleDateString()}
        </Text>
        <Text style={styles.whiteText}>State {state}</Text>
      </View>
      {items.map((product) => (
        <View style={styles.description}>
          <View style={styles.count}>
            <Text>{product.qty}</Text>
          </View>
          <Text style={[styles.whiteText, styles.productName]}>
            {product.name}
          </Text>
        </View>
      ))}
      <Line />
    </View>
  );
};

const useStyles = (theme) =>
  StyleSheet.create({
    root: {
      height: 100,
      width: "100%",
      padding: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    description: {
      flexDirection: "row",
      alignItems: "flex-end",
      marginVertical: 10,
      // paddingHorizontal: 10,
    },
    productName: {
      marginHorizontal: 10,
      fontSize: 24,
    },
    whiteText: {
      color: "#FFFFFF",
    },
    count: {
      marginTop: 10,
      padding: 5,
      height: 30,
      width: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(200,200,200,200.5)",
    },
  });
