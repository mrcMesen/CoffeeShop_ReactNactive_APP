import React from "react";
import { StyleSheet } from "react-native";
import { View, TextInput } from "react-native";
import { Button } from "../Button";

export const LoginForm = ({ login }) => {
  return (
    <View style={styles.root}>
      <TextInput style={styles.inputText} placeholder='Usuario' />
      <View style={styles.actions}>
        <Button text='Register' color='secondary' style={styles.right} />
        <Button text='Login' style={styles.left} action={login} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "80%",
  },
  inputText: {
    borderRadius: 12,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#FFF",
    textAlign: "center",
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  left: {
    flexGrow: 1,
    marginLeft: 8,
  },
  right: {
    flexGrow: 1,
    marginRight: 8,
  },
});
