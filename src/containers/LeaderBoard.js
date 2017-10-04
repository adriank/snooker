import React from 'react'

import {
	StyleSheet,
	Animated,
	Text,
	View,
	TouchableHighlight
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default class LeaderBoard extends React.Component {

	state = {
		leaderBoardOpened: false,
		slideAnim: new Animated.Value(70)
	}

	constructor (){
		super()
	}

	toggleLeaderBoard() {
		const toValue = this.state.leaderBoardOpened ? 70 : 700
		Animated.timing(
      this.state.slideAnim,
      {
        toValue,
        duration: 1000,
      }
		).start()
		this.setState({leaderBoardOpened: !this.state.leaderBoardOpened})
	}

	render() {
    return (
			<Animated.View style={[
				this.state.leaderBoardStyle,
				{height: this.state.slideAnim}
			]} >
				<TouchableHighlight
								style={[styles.button]}
								onPress={ (a) => this.toggleLeaderBoard() }
								underlayColor={"white"}>
					<View>
						<Text style={styles.buttonText}>Leaderboard</Text>
						<FontAwesome style={{textAlign: "center"}} name="chevron-down" size={30}></FontAwesome>
					</View>
				</TouchableHighlight>
				<Text>aaa</Text>
			</Animated.View>
    )
  }
}
const styles = StyleSheet.create({
	leaderBoard: {
		position:"absolute",
		bottom:0,
		left:0,
		right:0,
		height:70,
		backgroundColor: "white"
	},
	leaderBoardExpanded: {
		position:"absolute",
		bottom:0,
		left:0,
		right:0,
		height:700,
		backgroundColor: "white"
	},
	buttonText:{
		color: "black",
		fontSize: 16,
		textAlign: "center"
	},
	button:{
		backgroundColor:"cornsilk",
		padding: 10
	},
})
