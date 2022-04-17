import  React,{useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Draw = createNativeStackNavigator();

import Login from '../screens/Login';
import Home from '../screens/Home';
import { useLogin } from '../context/LoginProvider';


const StackNavigator = () => {

return (
      <Stack.Navigator>

        <Stack.Screen name="login"  component={Login} />
        {/* <Stack.Screen name="home" component={Home} /> */}

      </Stack.Navigator>
)
}
const DrawerNavigator = () => {

return (
      <Stack.Navigator>

        <Draw.Screen name="home" component={Home} />

      </Stack.Navigator>
)
}


const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  console.log('logueado:',isLoggedIn);
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
export default MainNavigator;
// export default StackNavigator