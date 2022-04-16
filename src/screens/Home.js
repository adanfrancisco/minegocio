import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useLogin } from '../context/LoginProvider';

export default function Home({ navigation }) {
  const {setIsLoggedIn, isLoggedIn, profile, setProfile } = useLogin();
  const _onPress = () => {
    setIsLoggedIn(false)
    navigation.navigate('login');

  }
  return (
    <View>
      <Text>Pagina de Inicio..</Text>
      <Text>{profile.user}</Text>
      <Text>{profile.password}</Text>
      <Text>{profile.key}</Text>
      <Text>{profile.token}</Text>



      <Button
        title="Salir"
        color={'red'}
        onPress={() =>  _onPress() } 
      >LoGout</Button>
    </View>
  )
} 