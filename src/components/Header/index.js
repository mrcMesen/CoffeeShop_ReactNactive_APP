import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "../../context/ThemeContext";

/**React Native Components */
import { StyleSheet } from "react-native";
import { View, Image, TouchableOpacity } from "react-native";

/**Icons */
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

/**
 * Custom Header for Stack Navigation
 *
 * @param {navigation} object Special object for navigate in app
 * @param {showBackButton} boolean Show button back in the header
 * @param {goHome} boolean Use button back to go at Home Sreen
 */

export const Header = ({
  navigation,
  showBackButton = false,
  goHome = false,
}) => {
  const insets = useSafeAreaInsets();
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.header, { paddingTop: Math.max(insets.top, 16) }]}>
      {showBackButton && (
        <TouchableOpacity
          onPress={() =>
            goHome ? navigation.push("Home") : navigation.goBack()
          }
        >
          <Ionicons
            name='ios-arrow-back'
            size={36}
            color={theme.palette.primary}
          />
        </TouchableOpacity>
      )}
      <Image
        style={styles.logo}
        source={require("../../assets/brand/logo.png")}
      />
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <FontAwesome name='search' size={24} color={theme.palette.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <MaterialCommunityIcons
            name='cart'
            size={24}
            color={theme.palette.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
          <Ionicons
            name='md-pricetag'
            size={24}
            color={theme.palette.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <FontAwesome5
            name='user-alt'
            size={22}
            color={theme.palette.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  actions: {
    flexDirection: "row",
    width: 150,
    justifyContent: "space-around",
  },
  logo: {
    height: 50,
    width: 150,
    overflow: "hidden",
    resizeMode: "contain",
  },
  buttonsWrapper: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
