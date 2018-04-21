import React, { Component } from 'react';
import { View } from 'react-native';
import BlinkingTextView from './BlinkingTextView'


export default class BlinkingApp extends Component {
  render() {
    return(
      <View>
        <BlinkingTextView text='I love to blink' />
        <BlinkingTextView text='Yes blinking is so great' />
        <BlinkingTextView text='Why did they ever take this out of HTML' />
        <BlinkingTextView text='Look at me look at me look at me' />
      </View>
    );
  }
}
