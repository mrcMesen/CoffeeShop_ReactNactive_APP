import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

export const Button = ({ color = "primary", text, action, style }) => {
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
