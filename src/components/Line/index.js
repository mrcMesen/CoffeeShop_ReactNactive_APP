import React from "react";
import { View } from "react-native";

/**
 * Line for divide components as hr in web
 *
 */

export const Line = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        width: "100%",
        height: 0.5,
        backgroundColor: "rgba(250,250,250,0.5)",
      }}
    />
  );
};
