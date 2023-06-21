import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

export function WinePrices({ route }) {
  // Luam date dintr-un API
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(
      "https://ec.europa.eu/agrifood/api/wine/prices?beginDate=01/05/2023&endDate=30/05/2023"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }
    return (
      <View style={styles.container}>
        <Text>
          {response.map((value, index) => {
            return (
              <Text key={index} style={styles.contentText}>
                <Text style={{ fontWeight: "bold", color: "#510927" }}>
                  Tara de proveninenta:
                </Text>{" "}
                {value.memberStateName}
                {"\n"}
                <Text style={{ fontWeight: "bold", color: "#510927" }}>
                  Descriere:
                </Text>
                {value.description}
                {"\n"}
                De la {value.beginDate} pana la {value.endDate}
                {"\n"}a avut pretul de {value.price}
                {"\n"}
                {"\n"}
              </Text>
            );
          })}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.title}>
          Lista de preturi pentru diferite vinuri in luna Mai 2023
        </Text>
        <View style={styles.infoContainer}>{getContent()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  contentText: {
    fontSize: 18,
  },
  infoContainer: {
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default WinePrices;
