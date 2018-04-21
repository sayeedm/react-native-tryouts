import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Info from './Info'


export default class PlatformApp extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Info />
      </View>
    )
  }
}

const styles = {
  container : {
    height: Platform.OS === 'android' ? 400 : 300,
    ...Platform.select({
      ios: { backgroundColor: 'red' },
      android: { backgroundColor: 'steelblue' }
    })
  }
}
