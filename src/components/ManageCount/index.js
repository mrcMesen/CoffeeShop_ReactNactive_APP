import React from "react";
import { StyleSheet } from "react-native";

import { RoundButton } from "../../components/RoundButton";
import { View, Text } from "react-native";

/**
 * This component manage some count, in this case is used in the product view
 *
 * @param {count} int Current state of count
 * @param {increase} function Callback to increase count
 * @param {decrease} function Callback to decrease count
 */
export const ManageCount = ({ count, increase, decrease }) => {
  return (
    <View style={styles.actionsCount}>
      <RoundButton text='-' color='secondary' action={decrease} />
      <Text style={styles.count}>{count}</Text>
      <RoundButton text='+' color='secondary' action={increase} />
    </View>
  );
};

const styles = StyleSheet.create({
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
