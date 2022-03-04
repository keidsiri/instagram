import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

export class Register extends Component {
  constructor(props) {
    super(props);

    this,state = {
      email: '',
      password: '',
      name: ''
    }
    this.onSignUp = this.onSignUp.bind()
  }

  onSignUp(){

  }

  render() {
    return (
      <View>
        <TextInput
          placeholder='name'
          onChangeText={(name) => this.setState({name})}/>
        <TextInput
          placeholder='email'
          onChangeText={(name) => this.setState({email})}/>
        <TextInput
          placeholder='password'
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}/>

      <Button>
        onPress={() => this.onSignUp()}
        title="Sign up"
      </Button>
      </View>
    )
  }
}

export default Register