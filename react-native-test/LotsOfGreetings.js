import React, { Component } from 'react';
import { View } from 'react-native';
import Greetings from './Greetings';

export default class LotsOfGreetings extends Component {
  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Greetings name="Tom" />
        <Greetings name="Dic" />
        <Greetings name="Harry" />
      </View>
    );
  }
}




  
