import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { currencyFormat } from "../../utils/currencyFormat";
import { Text } from "react-native";

export const Price = ({ price }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Text style={{ color: theme.palette.ligth }}>
      {currencyFormat.format(price)}
    </Text>
  );
};
