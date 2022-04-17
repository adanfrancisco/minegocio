import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { TextInput, View, Text, Button } from "react-native";
import axios from "axios";
import { styles } from "../Styles";
import { Alert } from "react-native";
import LoginProvider, { useLogin } from "../context/LoginProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const [_user, _setUser] = useState(null);
  const [_password, _setPassword] = useState(null);
  const [_key, _setKey] = useState(null);
  const { setIsLoggedIn, isLoggedIn, profile, setProfile } = useLogin();
  const [isChecked, setChecked] = useState(false);



  const getToken = async () => {
    await axios
      .post("http://siscod1.ddns.net:3005/api/login", {
        username: _user,
        password: _password,
        key: _key,
      })
      .then((res) => {
        console.log('hola',res);
        console.log("MITOKEN:", res.data.token);
        console.log(`username: ${_user},
                          password: ${_password},
                          key: ${_key},
                          TOKEN: ${res.data.token}`);
        setIsLoggedIn(true);
        setProfile({
          user: _user,
          password: _password,
          key: _key,
          token: res.data.token,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const _onPress = () => {
    if (_user && _password && _key) {
      getToken();
      // console.log(profile);
      // setProfile({
      //     user: _user,
      //     password: _password,
      //     key: _key
      //   })
      //   {
      //     "username":"adanfrei",
      //     "password":"123456",
      //     "key":"Q5WPH45J"
      // }

      
    } else {
      console.log("algo mal..");
      Alert.alert("Debes llenar todos los campos");
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Mi negocio</Text>
        <TextInput
          style={styles.input}
          onChangeText={_setUser}
          // value='adanfrei'
          value={_user}
          placeholder="USUARIO"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={_setPassword}
          // value='123456'
          value={_password}
          placeholder="PASSWORD"
          keyboardType="visible-password"
        />
        <TextInput
          style={styles.input}
          onChangeText={_setKey}
          // value='Q5WPH45J'
          value={_key}
          placeholder="NUMERO"
          // keyboardType='default'
          autoCapitalize="characters"
        />
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={styles.paragraph}>Recuerdame</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
        >
          <Text
            style={{
              ...styles.title,
              fontSize:30,
              color:'#fff'
            }}
            onPress={() => _onPress()}
          >Entrar</Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
