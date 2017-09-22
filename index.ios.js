import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native'
// import { Font } from 'expo';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Balls from './src/components/Balls'

//import initial_state from './initialState.json'
//import {start} from './src/reducers'

export default class App extends React.Component {
	state = {
    fontsLoaded: false,
  }

	// async componentDidMount() {
  //   await Font.loadAsync({
  //     'FontAwesome': require('./assets/fonts/fontawesome-webfont.ttf'),
	// 	});
	// 	this.props.fontsLoaded = true
	// }

	render() {
		// start(initial_state)
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex:1, backgroundColor: 'green' }}>
					<Text style={{ color: 'white', fontSize:30}}>Adrians turn2</Text>
					<Text style={{ color: 'white', fontSize:20}}>Score: 0</Text>
				</View>
        <View style={{flex:8, backgroundColor: '#0a6c03'}} >
					<View style={{height:330}}>
						<Balls/>
					</View>
					<TouchableHighlight
									style={styles.button}
									onPress={ (a) => console.log("aaa") } >
						<Text style={styles.buttonText}>FOUL (-2 pts)</Text>
					</TouchableHighlight>
				</View>
        <View style={{flex:1, backgroundColor: 'white'}} >
					<TouchableHighlight
									style={[styles.button, styles.leadboard]}
									onPress={ (a) => console.log("aaa") } >
						<View>
							<Text style={styles.buttonText}>Leadboard</Text>
							<FontAwesome>{Icons.chevronLeft}</FontAwesome>
						</View>
					</TouchableHighlight>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	buttonText:{
		// fontFamily:"FontAwesome",
		color: "black",
		fontSize: 16,
		textAlign: "center"
	},
	button:{
		backgroundColor:"white",
	},
	leadboard: {
		// padding: 25
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
