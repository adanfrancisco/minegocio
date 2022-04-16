import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, SafeAreaView } from "react-native";
import StackNavigator from "./src/routes/StackNavigator";
import LoginProvider from "./src/context/LoginProvider";
import NetInfo from '@react-native-community/netinfo';
import { Alert } from "react-native";

export default function App() {
  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    if(!state.isConnected)Alert.alert('Debes conectarte a una red para usar la aplicación');
    return;
  });
  
  return (
    <LoginProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}
