import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartContext } from "../CartContext";

export function CartIcon({ navigation }) {
  const { getWineCount } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Shopping Cart ({getWineCount()})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "#510927",
    height: 39,
    padding: 10,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
});
