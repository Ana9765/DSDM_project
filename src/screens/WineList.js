import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { getWines } from "../services/WineService";
import { Wine } from "../components/Wine";
import Button from "../Button.js";
import { Auth } from "aws-amplify";

export function WineList({ navigation }) {
  const signOut = () => {
    Auth.signOut();
  };

  function renderWine({ item: wine }) {
    return (
      <Wine
        {...wine}
        onPress={() => {
          navigation.navigate("WineDetails", { wineId: wine.id });
        }}
      />
    );
  }

  const [wines, setWines] = useState([]);

  useEffect(() => {
    setWines(getWines());
  });
  // pentru afisarea video-ului
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <View>
      <View style={styles.signOutContainer}>
        <Button
          textColor="white"
          backgrColor="#AA767C"
          label={"Iesi din cont"}
          Press={signOut}
        />
        <Button
          textColor="white"
          backgrColor="#D6A184"
          label={"Preturi"}
          Press={() => navigation.navigate("WinePrices")}
        />
      </View>
      <FlatList
        style={styles.wineList}
        contentContainerStyle={styles.wineListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={wines}
        renderItem={renderWine}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wineList: {
    backgroundColor: "#000000",
    marginBottom: 20,
  },
  wineListContainer: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  signOutContainer: {
    backgroundColor: "#510927",
    alignItems: "center",
  },
});
