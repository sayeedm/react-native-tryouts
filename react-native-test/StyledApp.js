import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './StyleSheet';
import { StyleSheet } from 'react-native';


export default class StyledApp extends Component {
  render(){
    return(
      <View>
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigblue}>just bigblue</Text>
          <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
          <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        </View>
      );
  }
}
