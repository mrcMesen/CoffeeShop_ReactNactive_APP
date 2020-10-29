import React, { useState, useContext } from "react";

/**Context and Actions */
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext";
import { CartActions } from "../../actions/CartActions";

/**React Native Components */
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, TextInput } from "react-native";
import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

/**Own Components */
import { ManageCount } from "../../components/ManageCount";
import { Button } from "../../components/Button";
import { Price } from "../../components/Price";
import { currencyFormat } from "../../utils/currencyFormat";

/**
 * Screen to view products and add them to the cart
 */
export const Product = ({ route, navigation }) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const { dispatch } = useContext(CartContext);
  const { addProduct } = CartActions;
  const { price, image, description, name, id } = route.params;
  const [count, setCount] = useState(1);
  const [orderDetails, setOrderDetails] = useState("");

  const handleAddProduct = () => {
    dispatch(addProduct({ product: route.params, count, orderDetails }));
    navigation.popToTop();
    navigation.navigate("Cart");
  };

  return (
    <SafeAreaView style={styles.container} edges={["right", "bottom", "left"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                <Price price={price} />
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
              value={orderDetails}
              onChangeText={(text) => setOrderDetails(text)}
              placeholder='Notas Especiales (sin lechuga,sin tomate, etc)'
            />
            <View style={styles.actions}>
              <ManageCount
                count={count}
                increase={() => setCount((prevCount) => prevCount + 1)}
                decrease={() => setCount((prevCount) => prevCount - 1)}
              />
              <Button
                text={`Agregar \n${currencyFormat.format(count * price)}`}
                numberOfLines={2}
                style={{ paddingHorizontal: 30, paddingVertical: 0 }}
                action={handleAddProduct}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  });
