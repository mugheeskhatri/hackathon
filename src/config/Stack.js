import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../screen/Home';
import Login from '../screen/Login';
import Profile from '../screen/Profile';
import SignUp from '../screen/Signup';
import Map from '../screen/Map';
const Stack = createStackNavigator();
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login2 from '../screen/LogIn2';
function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login2" component={Login2} />
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown:false}} name="Map" component={Map} />
      <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
      <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;