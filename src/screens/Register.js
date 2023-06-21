import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import WelcomeBackground from "../AuthorisationBackground.js";
import Field from "../Field.js";
import Button from "../Button.js";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

export const Register = (props) => {
  const { control, handleSubmit, watch } = useForm();
  /* Retinem parola pentru verificarea ei */
  const password = watch("Parola");
  const email_regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onRegisterPressed = async (data) => {
    let username = data.Username;
    let password = data.Parola;
    let email = data.Email;
    let given_name = data.Prenume;
    let family_name = data.Nume;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          given_name,
          family_name,
        },
      });
      props.navigation.navigate("ConfirmRegistration", { username });
    } catch (e) {
      Alert.alert("Eroare", e.message);
    }
  };

  return (
    <WelcomeBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Creeaza cont nou</Text>
      </View>
      <View style={styles.formContainer}>
        <Field
          name="Email"
          control={control}
          placeholder="Email"
          rules={{
            required: "Email-ul este obligatoriu",
            pattern: {
              value: email_regex,
              message: "Email-ul nu este intr-un format valid",
            },
          }}
        ></Field>
        <Field
          name="Username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username este obligatoriu",
            minLength: {
              value: 3,
              message: "Username trebuie sa contina minim 3 caractere",
            },
            maxLength: {
              value: 30,
              message: "Username trebuie sa contina maxim 30 caractere",
            },
          }}
        ></Field>
        <Field
          name="Nume"
          control={control}
          placeholder="Nume"
          rules={{ required: "Numele este obligatoriu" }}
        ></Field>
        <Field
          name="Prenume"
          control={control}
          placeholder="Prenume"
          rules={{ required: "Prenumele este obligatoriu" }}
        ></Field>
        <Field
          name="Parola"
          control={control}
          placeholder="Parola"
          secureTextEntry
          rules={{
            required: "Parola este obligatorie",
            minLength: {
              value: 8,
              message: "Parola trebuie sa contina minim 8 caractere",
            },
          }}
        ></Field>
        <Field
          name="Confirma_parola"
          control={control}
          placeholder="Confirma parola"
          secureTextEntry
          rules={{
            validate: (value) =>
              value == password ? true : "Parola nu se potriveste",
          }}
        ></Field>

        <Button
          textColor="white"
          backgrColor="#510927"
          label="Creeaza cont"
          Press={handleSubmit(onRegisterPressed)}
        />
        <View style={styles.registerFooter}>
          <Text>Ai deja un cont? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.footerRight}>Intra in cont</Text>
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
    width: "97%",
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
