import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import WelcomeBackground from "../AuthorisationBackground.js";
import Field from "../Field.js";
import Button from "../Button.js";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

export const ResetPassword = (props) => {
  const { control, handleSubmit } = useForm();

  const onSubmitPressed = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(
        data.username,
        data.cod,
        data.parola_noua
      );
      props.navigation.navigate("Login");
    } catch (e) {
      Alert.alert("Eroare", e.message);
    }
  };

  return (
    <WelcomeBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Schimba parola</Text>
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
            required: "Codul este obligatoriu",
          }}
        ></Field>
        <Field
          name="parola_noua"
          control={control}
          secureTextEntry
          placeholder="Parola noua"
          rules={{
            required: "Noua parola este obligatorie",
            minLength: {
              value: 8,
              message: "Parola trebuie sa contina minim 8 caractere",
            },
          }}
        ></Field>
        <Button
          textColor="white"
          backgrColor="#510927"
          label="Schimba parola"
          Press={handleSubmit(onSubmitPressed)}
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
