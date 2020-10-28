import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
// import { CartActions } from "../../actions/CartActions";
import { currencyFormat } from "../../utils/currencyFormat";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TextInput } from "react-native";
import { ManageCount } from "../../components/ManageCount";
import { Button } from "../../components/Button";

export const Product = ({ route }) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const { price, image, description, name, id } = route.params;
  const [count, setCount] = useState(1);
  const [orderDetails, setOrderDetails] = useState("");

  const handleAddProduct = () => {
    //
  };

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
