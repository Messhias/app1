/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class app1 extends Component {
  render() {

    const randomNumer = () => {
      alert(Math.floor(Math.random() * 10));
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Vamos ver se funciona agora essa merda
        </Text>
        <Button
          title="Gerar número randomico"
          onPress={randomNumer}
          />
      </View>
    );
  }
}

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
  Button: {
    backgroundColor: "blue"
  }
});

AppRegistry.registerComponent('app1', () => app1);
