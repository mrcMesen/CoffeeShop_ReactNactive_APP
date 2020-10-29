import React, { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import API from "../../constants/api.json";

/**React Native Components */
import { StyleSheet } from "react-native";
import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**Own Components */
import { OrderCard } from "../../components/OrderCard";

/**
 * Screen Profile, contains the list of orders for the user
 */

export const Profile = () => {
  const { allProducts } = useContext(ProductsContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let componentStillMount = true;
    const getData = async () => {
      try {
        const response = await fetch(
          `${API.BASE_API}${API.ORDERS}${API.GET_ORDERS}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        if (responseData.status === 200 && componentStillMount) {
          const filterUser = responseData.items.filter(
            (order) => order.user === "Marco Mesen"
          );
          setOrders(
            filterUser.map((order) => {
              const productsOrder = order.items;
              const newProducts = productsOrder.map((product) => {
                const productFinded = allProducts.filter(
                  (baseProduct) => baseProduct.id === product.id
                );
                return {
                  ...productFinded[0],
                  id: product.id,
                  qty: product.qty,
                };
              });
              return { ...order, items: newProducts };
            })
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    return () => {
      componentStillMount = false;
    };
  }, [allProducts]);

  return (
    <SafeAreaView style={styles.container} edges={["right", "bottom", "left"]}>
      <ScrollView style={styles.root}>
        <Text style={styles.title}>Orders List</Text>
        {orders &&
          orders.map((order) => <OrderCard key={order.id} order={order} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
  },
});
