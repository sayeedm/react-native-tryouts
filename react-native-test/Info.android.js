import React, { Component } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

export default class Info extends Component {
  render(){
    return(
      <Text style={styles.text}>{Platform.Version}</Text>
    );
  }
}

const styles = {
  text :{
    color: 'white',
    fontSize: 72
  }
};
