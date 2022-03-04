import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from "firebase/compat/app"

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
    this.onSignUp = this.onSignUp.bind()
  }

  onSignUp(){
    const { email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder='email'
          onChangeText={(name) => this.setState({email})}/>
        <TextInput
          placeholder='password'
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}/>

      <Button>
        onPress={() => this.onSignUp()}
        title="Sign in"
      </Button>
      </View>
    )
  }
}

export default Login