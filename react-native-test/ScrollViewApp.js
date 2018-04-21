import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

export default class ScrollViewApp extends Component {
  render(){
    return(
      <ScrollView>
        <Text style={{ fontSize: 96 }}> Scroll Me Plz </Text>
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Text style={{ fontSize: 96 }}> Scroll Me Plz </Text>
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
        <Image source={ require('./img/mario.jpg') } />
      </ScrollView>
    );
  }
}
