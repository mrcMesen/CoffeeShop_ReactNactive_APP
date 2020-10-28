import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ProductsContext } from "../../context/ProductsContext";
// import { CartActions } from "../../actions/CartActions";
import { currencyFormat } from "../../utils/currencyFormat";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TextInput } from "react-native";
import { RoundButton } from "../../components/RoundButton";
import { Button } from "../../components/Button";

export const Product = ({ route }) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const { allProducts } = useContext(ProductsContext);
  const { productId } = route.params;
  const product = allProducts.filter((product) => product.id === productId);
  const { price, image, description, name } = product[0];
  const [count, setCount] = useState(1);
  const [orderDetails, setOrderDetails] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
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
        <TextInput
          style={styles.inputText}
          autoFocus={false}
          multiline
          numberOfLines={4}
          placeholder='Notas Especiales (sin lechuga,sin tomate, etc)'
        />
        <View style={styles.actions}>
          <View style={styles.actionsCount}>
            <RoundButton text='-' color='secondary' action={() => {}} />
            <Text style={styles.count}>{count}</Text>
            <RoundButton text='+' color='secondary' action={() => {}} />
          </View>
          <Button
            text='Agregar'
            style={{ paddingHorizontal: 30 }}
            action={() => {}}
          />
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
      alignItems: "center",
    },
    image: {
      height: "40%",
      width: "98%",
    },
    description: {
      width: "90%",
      paddingVertical: 10,
    },
    whiteText: { color: "#FFFFFF" },
    descriptionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    descriptionText: {
      marginTop: 4,
      fontSize: 12,
      fontStyle: "italic",
      fontWeight: "200",
    },
    inputText: {
      marginTop: 40,
      borderRadius: 12,
      height: 60,
      width: "100%",
      paddingHorizontal: 12,
      paddingVertical: 4,
      backgroundColor: "#FFF",
      textAlign: "center",
    },
    actions: {
      width: "95%",
      marginTop: 30,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    actionsCount: {
      flexDirection: "row",
      alignItems: "center",
    },
    count: {
      color: "#FFFFFF",
      fontSize: 24,
      marginHorizontal: 15,
    },
  });
