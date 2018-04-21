import React, { Component } from 'react';
import { Animated, View, Text } from 'react-native';

class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount(){
    Animated.timing(this.state.fadeAnim, { toValue: 1, duration: 10000}).start();
  }

  render(){
    let { fadeAnim } = this.state;
    return(
      <Animated.View style = {{ ...this.props.style, opacity: fadeAnim }}>
        { this.props.children }
      </Animated.View>
    );
  }
}

export default class AnimationApp extends Component {
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
      </View>
    );
  }
}
