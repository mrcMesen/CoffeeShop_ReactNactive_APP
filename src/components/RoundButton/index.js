import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";

/**
 * Round Button
 *
 * @param {color} string Allow primary and secondary for color
 * @param {text} string Text for button
 * @param {action} function Callback to onPress Action
 */

export const RoundButton = ({ color = "primary", text, action, style }) => {
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
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const useStyles = (theme) =>
  StyleSheet.create({
    root: {
      height: 44,
      width: 44,
      borderRadius: 22,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      textAlign: "center",
      color: "#FFF",
      fontSize: 24,
    },
  });
