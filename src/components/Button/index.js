import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

/**
 * Button Compoment
 *
 * @param {color} string Allow primary and secondary for color
 * @param {text} string Text for button
 * @param {action} function Callback to onPress Action
 * @param {numberOfLines} int Give the number of lines for text in the button
 */

export const Button = ({
  color = "primary",
  text,
  action,
  style,
  numberOfLines = 1,
}) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  return (
    <TouchableOpacity
      style={[
        styles.root,
        {
          backgroundColor:
            color === "secondary"
              ? theme.palette.secondary
              : theme.palette.primary,
        },
        style && style,
      ]}
      onPress={action}
    >
      <Text style={styles.buttonText} numberOfLines={numberOfLines}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const useStyles = (theme) =>
  StyleSheet.create({
    root: {
      height: 50,
      borderRadius: 12,
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      textAlign: "center",
      color: "#FFF",
      fontSize: 16,
    },
  });
