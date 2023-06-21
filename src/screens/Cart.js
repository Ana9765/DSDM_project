import React, { useEffect, useState, useContext } from "react";
import { View, Image, Text, Button, FlatList, StyleSheet } from "react-native";
import { CartContext } from "../CartContext";

export function Cart({ navigation }) {
  const { items, getWineCount, getOrderPrice } = useContext(CartContext);

  function Totals() {
    /* variabila initializata cu 0 */
    let [total, setTotal] = useState(0);

    /* Setam totalul */
    useEffect(() => {
      setTotal(getOrderPrice());
    });

    return (
      /* Afisam totalul comenzii */
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.mainTotal}>{total} lei</Text>
      </View>
    );
  }

  function renderItem({ item }) {
    /* Afisam vinurile din cos */
    return (
      <>
        <View style={styles.cartLine}>
          <Image style={styles.image} source={item.wine.image} />
          <Text style={styles.lineLeft}>
            {item.wine.name} x {item.qty}
          </Text>
          <Text style={styles.mainTotal}>{item.totalPrice} lei</Text>
        </View>
      </>
    );
  }

  return (
    <FlatList
      style={styles.wineList}
      contentContainerStyle={styles.wineListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.wine.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
  },
  image: {
    width: "25%",
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#F4FFFD",
    borderTopWidth: 2,
  },
  orderTotal: {
    fontWeight: "bold",
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "black",
    textAlign: "left",
  },
  lineRight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#510927",
    textAlign: "right",
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#510927",
    textAlign: "right",
  },
  wineList: {
    backgroundColor: "#D6A184",
  },
  wineListContainer: {
    backgroundColor: "#D6A184",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
