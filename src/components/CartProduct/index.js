import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { Price } from "../../components/Price";

/**
 * Compoment for render products in vertical list
 *
 * @param {object} product Whole product with price, image, description, name, id
 */
export const CartProduct = ({ product }) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const { price, image, description, name, id } = product;

  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.description}>
        <Text style={styles.whiteText}>{name}</Text>
        <Text style={styles.whiteText}>{description}</Text>
        <Price price={price} />
      </View>
    </View>
  );
};

const useStyles = (theme) =>
  StyleSheet.create({
    root: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 100,
      // padding: 20,
    },
    image: {
      height: 70,
      width: "25%",
    },
    description: {
      paddingHorizontal: 10,
      flexGrow: 1,
      maxWidth: "75%",
    },
    whiteText: { color: "#FFFFFF" },
    descriptionText: {
      marginTop: 4,
      fontSize: 12,
      fontStyle: "italic",
      fontWeight: "200",
    },
    actions: {
      width: "95%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
