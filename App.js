import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import initial_state from './initialState.json'
import {start} from './src/reducers'

export default class App extends React.Component {
  render() {
		start(initial_state)
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
