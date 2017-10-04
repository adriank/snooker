import React from 'react'

import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default class LeaderBoard extends React.Component {

	state = {
		leaderBoardStyle: styles.leaderBoard
	}

	constructor (){
		super()
	}

	toggleLeaderBoard() {
		const style = this.state.leaderBoardStyle === styles.leaderBoardExpanded
		? styles.leaderBoard
		: styles.leaderBoardExpanded
		this.setState({"leaderBoardStyle": style})
	}

	render() {
    return (
			<View style={this.state.leaderBoardStyle} >
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
			</View>
    )
  }
}
const styles = StyleSheet.create({
	leaderBoard: {
		position:"absolute",
		bottom:0,
		left:0,
		right:0,
		height:70
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
