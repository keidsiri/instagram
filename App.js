import React from 'react';
import { StatusBar } from 'expo-status-bar';
import LandingScreen from './components/auth/Landing';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} option={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
