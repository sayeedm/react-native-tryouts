/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';


class LogoTitle extends React.Component {
  render() {
    return (

        <Image
          source={ require('./images/avatar.jpg') }
          style={{ width: 30, height: 30 }}
        />

    );
  }
}

class HomeScreen extends Component {

  /* header button onPress is not assigned somehow */
  /* TODO: need to fix */
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={ params.increaseCount } title="+1" color="#fff"
        />
      ),
      headerLeft: (
              <Button
                onPress={ () => navigation.navigate('MyModal') }
                title="Info"
                color="#fff"
              />
            ),
      headerStyle: {
        backgroundColor: '#deaadd',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  };

  state = {
    count: 0
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={ () => this.props.navigation.navigate('Details', {itemId: 86, otherParam: 'other params'}) }
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {

  static navigationOptions = ( { navigation } ) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Details',
    };
  };

  render() {

    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details Again .. "
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Button
          title = "Update Title"
          onPress = { () => this.props.navigation.setParams({ otherParam : "Updated !" }) }
        />

        <Button
          title="Go Back"
          onPress={ () => this.props.navigation.goBack() }
        />
      </View>
    );
  }
}

class ModalScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}


const MainStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details : {
    screen: DetailsScreen
  }
},
{
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
});

const RootStack = StackNavigator({
  Main: {
    screen: MainStack,
  },
  MyModal: {
    screen: ModalScreen,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
});

export default class StackNavigation extends Component {
  render(){
    return(
      <RootStack />
    );
  }
}
