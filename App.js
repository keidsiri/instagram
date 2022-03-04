import React from 'react';
import { StatusBar } from 'expo-status-bar';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import * as firebase from 'firebase';

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} option={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
