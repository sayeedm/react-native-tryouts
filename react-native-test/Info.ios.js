import React, { Component } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

export default class Info extends Component {
  render(){
    return(
      <Text style={styles.text}>{Platform.version}</Text>
    );
  }
}

const styles = {
  text :{
    color: 'grey',
    fontSize: 36
  }
};
