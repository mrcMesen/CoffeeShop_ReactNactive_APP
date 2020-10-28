import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductsActions } from "../../actions/ProductsActions";
import { currencyFormat } from "../../utils/currencyFormat";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export const ProductCard = ({ product }) => {
  const { theme } = useContext(ThemeContext);
  const { favProducts, dispatch } = useContext(ProductsContext);
  const { setFavorite } = ProductsActions;
  const { price, image, description, name, id } = product.item;
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Product", { productId: id })}
    >
      <View style={styles.root}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <TouchableOpacity
            style={styles.favIcon}
            onPress={() => dispatch(setFavorite(id))}
          >
            {favProducts.find((prod) => prod.id === id) ? (
              <AntDesign name='heart' size={24} color={theme.palette.primary} />
            ) : (
              <AntDesign
                name='hearto'
                size={24}
                color={theme.palette.primary}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <View style={styles.descriptionHeader}>
            <Text style={[styles.whiteText]}>{name}</Text>
            <Text style={[styles.whiteText]}>
              {currencyFormat.format(price)}
            </Text>
          </View>
          <Text style={[styles.whiteText, styles.descriptionText]}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    padding: 10,
    height: 200,
    width: 300,
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#101110",
  },
  header: {
    height: "60%",
    width: "100%",
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  favIcon: {
    position: "absolute",
    top: 10,
    left: 12,
  },
  description: {
    paddingVertical: 10,
  },
  whiteText: { color: "#FFFFFF" },
  descriptionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionText: {
    marginTop: 2,
    fontSize: 11,
    fontStyle: "italic",
    fontWeight: "200",
  },
});
