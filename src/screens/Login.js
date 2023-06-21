import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import WelcomeBackground from "../AuthorisationBackground.js";
import Field from "../Field.js";
import Button from "../Button.js";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";

export const Login = (props) => {
  const [loading, setLoading] = useState(false);

  /* handleSubmit face validari pe input */
  const {
    control,
    handleSubmit,
    formState: { errors },
    data,
  } = useForm();

  const onForgottenPressed = () => {
    props.navigation.navigate("ForgottenPassword");
  };

  const onPressLoginButton = async (data) => {
    // daca am apasat deja pe login si avem pending request
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signIn(data.Username, data.Parola);
    } catch (e) {
      Alert.alert("Eroare", e.message);
    }
    // am terminat executia
    setLoading(false);
  };

  const onPressGoogleButton = async () => {
    try {
      await Auth.federatedSignIn({ provider: "Google" });
    } catch (e) {
      Alert.alert("Eroare", e.message);
    }
  };

  return (
    <WelcomeBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Bine ai revenit!</Text>
        <Text style={styles.subtext}>Logheaza-te in contul tau</Text>

        <Field
          name="Username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username este obligatoriu" }}
        ></Field>
        <Field
          name="Parola"
          placeholder="Parola"
          control={control}
          secureTextEntry
          rules={{
            required: "Parola este obligatorie",
            minLength: {
              value: 8,
              message: "Parola trebuie sa aiba cel putin 8 caractere",
            },
          }}
        ></Field>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText} onPress={onForgottenPressed}>
            Mi-am uitat parola
          </Text>
        </View>
        <Button
          textColor="white"
          backgrColor="#510927"
          label={loading ? "Loading..." : "Login"}
          Press={handleSubmit(onPressLoginButton)}
        />
        <Button
          textColor="#510927"
          backgrColor="#D6A184"
          label="Login cu Google"
          Press={onPressGoogleButton}
        />
        <View style={styles.registerFooter}>
          <Text>Nu ai cont? </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Register")}
          >
            <Text style={styles.footerRight}>Inregistreaza-te</Text>
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
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 50,
  },

  formContainer: {
    backgroundColor: "white",
    height: 650,
    width: "97%",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    paddingTop: 45,
    alignItems: "center",
  },

  welcomeText: {
    fontSize: 40,
    color: "#AA767C",
    fontWeight: "bold",
  },
  subtext: {
    color: "#510927",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 20,
  },
  footerContainer: {
    alignItems: "flex-end",
    width: "78%",
    paddingRight: 16,
    marginBottom: 145,
  },
  footerText: {
    color: "#c1121f",
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
