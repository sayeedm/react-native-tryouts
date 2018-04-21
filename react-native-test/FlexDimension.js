import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimension extends Component {

  render(){
    return(
      <View style={{flex : 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'steelblue'}} />
        <View style={{flex: 3, backgroundColor: 'skyblue'}} />
      </View>
    );
  }
}
