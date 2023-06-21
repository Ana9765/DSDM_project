import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Controller } from "react-hook-form";

const Field = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
  /* only props here */
  return (
    <Controller
      control={control}
      name={name}
      /* Reguli pentru validare */
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.textField,
              { borderColor: error ? "#c1121f" : "#ccc5b9" },
            ]}
          >
            <TextInput
              /*{...props}  onl.y this and the last 2*/
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              placeholderTextColor="white"
            ></TextInput>
          </View>
          {/* Afisam erori pentru validarea field-urilor */}
          {error && (
            <Text
              style={{
                color: "#c1121f",
                alignSelf: "stretch",
                marginHorizontal: 45,
              }}
            >
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textField: {
    borderRadius: 100,
    borderWidth: 1,
    color: "#c1121f",
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#ccc5b9",
    marginVertical: 5,
    padding: 10,
  },
});

export default Field;
