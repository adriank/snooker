import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native'

import Balls from './src/components/Balls'

//import initial_state from './initialState.json'
//import {start} from './src/reducers'

export default class App extends React.Component {
  render() {
		// start(initial_state)
    return (
      <View style={{ flex: 1}}>
        <View style={{ flexShrink:1, backgroundColor: 'powderblue' }}>
					<Text style={{ color: 'white', fontSize:30}}>Adrians turn2</Text>
					<Text style={{ color: 'white', fontSize:20}}>Score: 0</Text>
				</View>
        <View style={{flexGrow:1, backgroundColor: 'skyblue'}} >
					<View style={{height:350}}>
						<Balls/>
					</View>
				</View>
        <View style={{flexShrink:1, backgroundColor: 'steelblue'}} >
					<Button title="Next player" onPress={ (a) => console.log("aaa") } />
				</View>
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
