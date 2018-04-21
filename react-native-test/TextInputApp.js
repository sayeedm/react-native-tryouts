import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class TextInputApp extends Component {
  constructor(props){
    super(props);
    this.state = { text: ''};
  }

  render(){
    return(
      <View style={{padding: 10}}>
        <TextInput style={{height: 40}} placeholder="Enter text..." onChangeText={(text) => this.setState({text: text})} />

        <Text style={{padding: 10, fontSize: 42}}>
          { this.state.text.split(' ').map((word) => word && '🍕').join(' ') }
        </Text>
      </View>
    );

  }

}
