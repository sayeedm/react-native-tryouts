import * as React from 'react';
import { View, StyleSheet, Dimensions, Button, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';


const styles = StyleSheet.create({
    tab1: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#ff4081'
    },

    tab2: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#673ab7'
    },

    navContainer: {
       width: Dimensions.get('window').width,
       flexDirection: 'row'
    },

    tabContainer: {
        flex: 8
    },

    buttonContainer: {
        flex: 2
    },

    
    container: {
        flex: 1
    },

    buttonStyle: {
        flex: 1
    },

    tabBarStyle:{
        flex: 0,
        backgroundColor: 'white' 
    },

    indicator: {
        backgroundColor: 'black',
    },

    label: {
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '400',
        width: 120
    },

    tab: {
        flex: 0
    },


    
});


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};
  
  const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
  const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class TabComponent extends React.Component {
        
        tabIndex = 0;
        
        state = {
          index: 0,
          routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
          ],
        };

        data = {
            'first': 'Tab First',
            'second': 'Tab Second'
        };

        addTab = () => {
            this.tabIndex++;
            
            const routes = this.state.routes;
            const index = this.state.index;

            routes.push({ key: 'tab' + this.tabIndex, title: 'Tab ' + this.tabIndex});
            this.data['tab' + this.tabIndex] = 'Tab ' + this.tabIndex;

            this.setState({
                index: index,
                routes: routes,
            });        
        }
      
        _handleIndexChange = index => this.setState({ index });
      
        _renderHeader = props => {
            return(
                <View style={ styles.navContainer }>
                    
                    <View style={ styles.tabContainer }>
                        <TabBar 
                            {...props} 
                            scrollEnabled={ true }
                            indicatorStyle={ styles.indicator }
                            style={ styles.tabBarStyle }
                            tabStyle={ styles.tab }
                            labelStyle={ styles.label }
                        />
                    </View>

                    <View style={ styles.buttonContainer }>
                        <Button 
                            title="press" 
                            style={ styles.buttonStyle }
                            onPress={ this.addTab }></Button>
                    </View>

                </View> 
            );
        } 
      
        // _renderScene = SceneMap({
        //   first: FirstRoute,
        //   second: SecondRoute,
        // });

        _renderScene = ( { route } )  => {
            return (
                <View style={ styles.tab1 }>
                  <Text>{route.key} - {route.title}</Text>
                </View>
          );
        };
      
        render() {
          return (
            <TabViewAnimated
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}
            />
          );
        }
}