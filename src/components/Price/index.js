import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { currencyFormat } from "../../utils/currencyFormat";
import { Text } from "react-native";

/**
 * Price Component Show any price in the same way in all app
 *
 * @param {price} int Prices to show
 * @param {size} int Size can modificate the default size for component
 */
export const Price = ({ price, size = 14 }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Text style={{ color: theme.palette.ligth, fontSize: size }}>
      {currencyFormat.format(price)}
    </Text>
  );
};
