import React, { Component } from 'react';
import  Main  from './App/Components/Main';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class TakeMeAnywhereReactNative extends Component {
  constructor() {
    super();
  }
  renderScene(route, navigator) {
    if (route.name === 'Main') {
      return <Main navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene.bind(this) } />
    );
  }
}

AppRegistry.registerComponent('TakeMeAnywhereReactNative', () => TakeMeAnywhereReactNative);
