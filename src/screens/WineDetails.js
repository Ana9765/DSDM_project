import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Button,
  Dimensions,
} from "react-native";
import { getWine } from "../services/WineService.js";
import { CartContext } from "../CartContext.js";
import YoutubeIframe from "react-native-youtube-iframe";

// luam dimensiunile ecranului pentru videoplayer
const dimensionsScreen = Dimensions.get("screen");

export function WineDetails({ route }) {
  const { wineId } = route.params;
  const [wine, setWine] = useState({});
  const { addWineToCart } = useContext(CartContext);

  useEffect(() => {
    setWine(getWine(wineId));
  });

  /* Apelez functia care adauga produsul in cos */
  function onAddToCart() {
    addWineToCart(wine.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={wine.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.wineName}>{wine.name}</Text>
          <Text style={styles.winePrice}>{wine.price} lei</Text>
          <Text style={styles.wineDescription}>{wine.description}</Text>
          <Button title="Adauga in cos" onPress={onAddToCart} />
        </View>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginBottom: 20,
            fontWeight: "bold",
            color: "#510927",
          }}
        >
          Cum asociam vinul cu mancarea?
        </Text>
        <YoutubeIframe
          height={500}
          width={dimensionsScreen.width}
          play={false}
          videoId="A7yNO4wNMrA"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
  },
  infoContainer: {
    padding: 16,
    marginBottom: 20,
  },
  wineName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  winePrice: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  wineDescription: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});

export default WineDetails;
