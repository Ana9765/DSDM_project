import React from "react";
import { View, ImageBackground } from "react-native";

const WelcomeBackground = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/welcome_images/WelcomeBackground.jpg")}
        style={{ height: "100%" }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
};

export default WelcomeBackground;
