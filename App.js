import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WineList } from "./src/screens/WineList";
import { WineDetails } from "./src/screens/WineDetails.js";
import { Cart } from "./src/screens/Cart.js";
import { CartProvider } from "./src/CartContext.js";
import { CartIcon } from "./src/components/CartIcon.js";
import { Welcome } from "./src/screens/Welcome.js";
import { Login } from "./src/screens/Login.js";
import { Register } from "./src/screens/Register.js";
import { ConfirmRegistration } from "./src/screens/ConfirmRegistration.js";
import { ForgottenPassword } from "./src/screens/ForgottenPassword.js";
import { ResetPassword } from "./src/screens/ResetPassword.js";
import { Auth, Hub } from "aws-amplify";
import config from "./src/aws-exports";
import WinePrices from "./src/screens/WinePrices";

Auth.configure(config);
const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState(undefined);
  // luam datele user-ului, nu din cache
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  // pentru ca iesirea si intrarea in cont sa aiba loc imediat, fara refresh
  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event == "signIn" || data.payload.event == "signOut") {
        checkUser();
      }
    };
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* daca user-ul e autentificat, vede lista de vinuri*/}
          {user ? (
            <Stack.Group>
              <Stack.Screen
                name="Wines"
                component={WineList}
                options={({ navigation }) => ({
                  title: "Buna " + user.attributes.given_name,
                  headerRight: () => <CartIcon navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="WineDetails"
                component={WineDetails}
                options={({ navigation }) => ({
                  title: "Informatii",
                  headerRight: () => <CartIcon navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ title: "Produsele din cos" }}
              />
              <Stack.Screen
                name="WinePrices"
                component={WinePrices}
                options={{ title: "Pret vinuri" }}
              />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ConfirmRegistration"
                component={ConfirmRegistration}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgottenPassword"
                component={ForgottenPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  Container: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default App;
