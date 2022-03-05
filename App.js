import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';

import { View, Text} from 'react-native';

// import * as firebase from 'firebase';

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

const Stack = createStackNavigator();

import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded){
      return(
        <View style={{ flex: 1 , justifyContent: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} option={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default App