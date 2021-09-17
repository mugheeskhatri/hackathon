import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screen/Home';
import Login from '../screen/Login';
import Profile from '../screen/Profile';
import SignUp from '../screen/Signup';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
