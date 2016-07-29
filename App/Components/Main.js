import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';


var styles = StyleSheet.create({
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
    color: 'black',
  },
});


class Main extends React.Component {
  navigate(routeName) {
    this.props.navigator.push({
      name: 'Main'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Test the Router </Text>
      </View>
    );
  }
};

module.exports = Main;