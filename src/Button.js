import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ backgrColor, label, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: backgrColor,
        borderRadius: 100,
        alignItems: "center",
        width: 250,
        paddingVertical: 5,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 22, fontWeight: "bold" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
