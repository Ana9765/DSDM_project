import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import WelcomeBackground from "../AuthorisationBackground.js";
import Field from "../Field.js";
import Button from "../Button.js";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

export const ForgottenPassword = (props) => {
  const { control, handleSubmit } = useForm();

  const onSendPressed = async (data) => {
    try {
      await Auth.forgotPassword(data.Username);
      props.navigation.navigate("ResetPassword");
    } catch (e) {
      Alert.alert("Eroare", e.message);
    }
  };

  return (
    <WelcomeBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Am uitat parola</Text>
      </View>
      <View style={styles.formContainer}>
        <Field
          name="Username"
          control={control}
          placeholder="Username"
          rules={{ required: "Username este obligatoriu" }}
        ></Field>
        <Button
          textColor="white"
          backgrColor="#510927"
          label="Trimite"
          Press={handleSubmit(onSendPressed)}
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
