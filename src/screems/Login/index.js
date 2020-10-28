import React from "react";

import { StyleSheet } from "react-native";
import { View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { LoginForm } from "../../components/LoginForm";

import background from "../../assets/image/loginBackground.jpg";
import logo from "../../assets/brand/logo.png";

export const Login = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <ImageBackground source={background} style={styles.imageBackground}>
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]}
          style={styles.gradient}
        />
        <Image source={logo} style={styles.logo} />
        <LoginForm login={() => navigation.navigate("Home")} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  gradient: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  logo: {
    height: 72,
    width: "100%",
    resizeMode: "contain",
  },
});
