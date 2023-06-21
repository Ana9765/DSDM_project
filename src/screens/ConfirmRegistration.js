import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import WelcomeBackground from "../AuthorisationBackground.js";
import Field from "../Field.js";
import Button from "../Button.js";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

export const ConfirmRegistration = (props) => {
  const route = useRoute();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const username = watch("username");

  const onConfirmPressed = async (data) => {
    try {
      await Auth.confirmSignUp(data.username, data.cod);
      props.navigation.navigate("Login");
    } catch (e) {
      Alert.alert("Eroare", e.message);
    }
  };

  const onResendPressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Succes", "Codul a fost retrimis");
    } catch (e) {
      Alert.alert("Eroare", e.message);
    }
  };

  return (
    <WelcomeBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Activeaza email-ul</Text>
      </View>
      <View style={styles.formContainer}>
        <Field
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username este obligatoriu",
          }}
        ></Field>
        <Field
          name="cod"
          control={control}
          placeholder="Codul de confirmare"
          rules={{
            required: "Codul de confirmare este obligatoriu",
          }}
        ></Field>
        <Button
          textColor="white"
          backgrColor="#510927"
          label="Confirm"
          Press={handleSubmit(onConfirmPressed)}
        />
        <Button
          textColor="white"
          backgrColor="#D6A184"
          label="Retrimite codul"
          Press={onResendPressed}
        />
        <View style={styles.registerFooter}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.footerRight}>Inapoi la Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </WelcomeBackground>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    width: 400,
  },

  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 50,
  },

  formContainer: {
    backgroundColor: "white",
    height: 650,
    width: "96%",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    paddingTop: 30,
    alignItems: "center",
  },

  welcomeText: {
    fontSize: 40,
    color: "red",
    fontWeight: "bold",
  },
  subtext: {
    color: "grey",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 20,
  },
  footerContainer: {
    alignItems: "flex-end",
    width: "78%",
    paddingRight: 16,
    marginBottom: 200,
  },
  footerText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerRight: {
    color: "#c1121f",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerLeft: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
