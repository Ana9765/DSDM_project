import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import WelcomeBackground from "../AuthorisationBackground.js";
import Button from "../Button";

export const Welcome = (props) => {
  return (
    <WelcomeBackground>
      <View style={styles.Container}>
        <Image
          style={styles.image}
          source={require("../../assets/welcome_images/WelcomeIcon.jpg")}
        />
        <Text style={styles.text}>Bine a-ti venit!</Text>
        <Button
          backgrColor="white"
          textColor="black"
          label="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Button
          backgrColor="#D6A184"
          textColor="black"
          label="Register"
          Press={() => props.navigation.navigate("Register")}
        />
      </View>
    </WelcomeBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 45,
    marginVertical: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    aspectRatio: 1,
    borderRadius: 500,
  },
  text: {
    color: "white",
    fontSize: 45,
    marginBottom: 50,
    marginTop: 50,
  },
});
