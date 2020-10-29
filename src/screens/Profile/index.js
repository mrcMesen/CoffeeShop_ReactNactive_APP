import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ProductsContext } from "../../context/ProductsContext";
import API from "../../constants/api.json";

/**React Native Components */
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**Own Components */
import { OrderCard } from "../../components/OrderCard";

/**
 * Screen Profile, contains the list of orders for the user
 */
// const responseData = {
//   items: [
//     {
//       createdAt: 1573528877065,
//       user: "Gabriel Rodriguez",
//       id: "33f80f46-402d-4389-8de6-a333eb09d75c",
//       items: [
//         {
//           id: "63dc592c-c1b7-4c7c-b85f-7bb64a0e63c5",
//           qty: 1,
//         },
//       ],
//       updatedAt: 1573528877065,
//       state: "pending",
//     },
//     {
//       createdAt: 1573528886090,
//       user: "Danny Chaves",
//       id: "876da453-204f-40a5-b0b2-936a51a74aec",
//       items: [
//         {
//           id: "63dc592c-c1b7-4c7c-b85f-7bb64a0e63c5",
//           qty: 3,
//         },
//       ],
//       updatedAt: 1573529451298,
//       state: "complete",
//     },
//   ],
//   status: 200,
// };

export const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { allProducts } = useContext(ProductsContext);
  const styles = useStyles(theme);
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
        // console.log(responseData);
        if (responseData.status === 200 && componentStillMount) {
          const filterUser = responseData.items.filter(
            (order) => order.user === "Danny Chaves"
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
              console.log("order", order);
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
        {orders && orders.map((order) => <OrderCard order={order} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

const useStyles = (theme) =>
  StyleSheet.create({
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
