import React, { Component } from 'react';
import { Button, Alert } from 'react-native';

export default class ButtonApp extends Component {
  render(){
    return(

      <Button
        onPress={ () => Alert.alert('You tapped the button') }
        title="Tap Me !!"
      />

    );
  }
}
