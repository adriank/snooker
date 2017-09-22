import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

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
      <View style={{ flex: 1}}>
        <View style={{ flex:1, backgroundColor: 'green' }}>
					<Text style={{ color: 'white', fontSize:30}}>Adrians turn2</Text>
					<Text style={{ color: 'white', fontSize:20}}>Score: 0</Text>
				</View>
        <View style={{flex:8, backgroundColor: '#0a6c03'}} >
					<View style={{height:330}}>
						<Balls/>
					</View>
					<TouchableHighlight style={[
																styles.button,
																styles.foul,
																{ paddingVertical: 10, borderRadius: 5 }
															]}
															onPress={(a) => console.log("foul")} >
						<Text style={styles.buttonText}>FOUL (-2 pts)</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[
																styles.button,
																styles.foul,
																{ paddingVertical: 10, borderRadius: 5 }
															]}
															onPress={(a) => console.log("next player")} >
						<Text style={styles.buttonText}>NEXT PLAYER</Text>
					</TouchableHighlight>
				</View>
        <View style={{flex:1, backgroundColor: 'cornsilk'}} >
					<TouchableHighlight
									style={[styles.button, styles.leadboard]}
									onPress={ (a) => console.log("aaa") } >
						<View>
							<Text style={styles.buttonText}>Leadboard</Text>
							<FontAwesome style={{textAlign: "center"}} name="chevron-down" size={30}></FontAwesome>
						</View>
					</TouchableHighlight>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	foul:{
		backgroundColor: "lightcoral",
		width: 200,
		// height: 50,
		// marginTop: 100,
		marginHorizontal: 100,
		// flexShrink: 1
	},
	buttonText:{
		// fontFamily:"FontAwesome",
		color: "black",
		fontSize: 16,
		textAlign: "center"
	},
	button:{
		backgroundColor:"cornsilk",
	},
	leadboard: {
		padding: 10
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
