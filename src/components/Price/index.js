import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { currencyFormat } from "../../utils/currencyFormat";
import { Text } from "react-native";

export const Price = ({ price, size = 14 }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Text style={{ color: theme.palette.ligth, fontSize: size }}>
      {currencyFormat.format(price)}
    </Text>
  );
};
