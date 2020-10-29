import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext";
import { CartActions } from "../../actions/CartActions";
import API from "../../constants/api.json";

/**React Native Components */
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";

/**Own Components */
import { CartProductList } from "../../components/CartProductList";
import { Price } from "../../components/Price";
import { Line } from "../../components/Line";
import { Button } from "../../components/Button";

/**
 * Screen to manage Cart and dispatch orders
 */
export const Cart = ({ navigartion }) => {
  const { cart, dispatch } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  const handleSendOrder = async () => {
    const body = {
      items: [
        ...cart.map((order) => ({
          id: order.product.id,
          qty: order.count,
        })),
      ],
      user: "Marco Mesen",
    };
    try {
      const response = await fetch(
        `${API.BASE_API}${API.ORDERS}${API.CREATE_ORDER}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const responseData = await response.json();
      if (responseData.status === 200) {
        dispatch(CartActions.emptyCart());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["right", "bottom", "left"]}>
      {cart.length > 0 ? (
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
            <Button
              text='Confirmar'
              action={handleSendOrder}
              textStyle={{ fontSize: 22 }}
            />
            <Button
              text='Descartar Orden'
              action={() => dispatch(CartActions.emptyCart())}
              color='secondary'
              style={{ marginTop: 10, height: 40 }}
              textStyle={{ fontSize: 16 }}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.emptyCart}>
          <Text style={[styles.whiteText, styles.total]}>Empty Cart</Text>
          <Button
            text='Añadir Productos'
            action={() => navigartion.navigate("Home")}
            textStyle={{ fontSize: 16 }}
            style={{ marginTop: 10 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const useStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
    },
    root: {
      flex: 1,
      padding: 20,
      justifyContent: "flex-start",
    },
    whiteText: {
      color: "#FFF",
    },
    title: {
      fontSize: 22,
    },
    total: {
      fontSize: 26,
    },
    wrapperTotal: {
      alignItems: "center",
      marginVertical: 20,
    },
    emptyCart: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
  });
