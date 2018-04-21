import React, { Component } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';


export default class NetworkList extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount(){
    console.log('componentDidMount');

  //   promise(params)
  // .then(resp => { /* This callback is called is promise is resolved */ },
  //       cause => {/* This callback is called if primise is rejected */})
  // .catch(error => { /* This callback is called if an unmanaged error is thrown */ });

    let myRequest = new Request('https://facebook.github.io/react-native/movies.json', { method : 'GET' });

    // return
      fetch(myRequest)
        .then(response => { return response.json(); },
              error => { console.log(error); }
        )
        .then((responseJson) =>{
          this.setState({
            isLoading: false,
            dataSource: responseJson.movies
          })
        },
        (error) =>{
            console.log(error);
        })
        .catch(error => console.log(error))
        .catch(error => console.log(error));

  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
