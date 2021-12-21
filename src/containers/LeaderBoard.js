import React from 'react'

import {
	StyleSheet,
	Animated,
	Text,
	View,
	TouchableHighlight
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { H1, H2, H3 } from '../components/Typography'
import PlayerBalls from '../components/PlayerBalls'

const TOGGLE_ANIMATION_DURATION = 1000

// Helper components for AnimatedPane
const Head = props => {
	return (
		<View style={props.style}>
			{props.children}
		</View>
	)
}

const Content = props => {
	return (
		<View style={ props.style }>
			{ props.children }
		</View>
	)
}

class AnimatedPane extends React.Component {
	state = {
		paneOpened: false,
		slideAnim: new Animated.Value(70)
	}

	constructor (){
		super()
		// this.toggleLeaderBoard()
	}

	toggleLeaderBoard() {
		const toValue = this.state.paneOpened ? 70 : 700
		Animated.timing(
      this.state.slideAnim,
      {
        toValue,
        duration: TOGGLE_ANIMATION_DURATION,
      }
		).start()
		this.setState({paneOpened: !this.state.paneOpened})
	}

	render() {
		const c = this.props.children
		if (c[0].type !== Head || c[1].type !== Content)
			throw Error("Pane should have exactly two children, <Head/> and <Children/>.")
		return (
			<Animated.View style={{
				...this.props.style,
				height: this.state.slideAnim
			}} >
				<TouchableHighlight style={[styles.button]}
														onPress={() => this.toggleLeaderBoard()}
														underlayColor={"white"}>
					<View>
						{this.props.children[0]}
					</View>
				</TouchableHighlight>
				<View style={{height:700, backgroundColor:"white"}}>
	        {this.props.children[1]}
				</View>
			</Animated.View>
    )
  }
}

export default leaderBoard = props => {
	const state = props.state.present
	const playerFouls = state.getIn(["game", "currentPlayer", "fouls"])
	return (
		<AnimatedPane>
			<Head>
				<Text style={styles.buttonText}>Leaderboard</Text>
				<FontAwesome style={{ textAlign: "center" }} name="chevron-down" size={30}></FontAwesome>
			</Head>
			<Content>
				<H3>Current Player ({state.getIn(["game", "currentPlayer", "name"])})</H3>
				<Text>Fouls: {playerFouls} (-{playerFouls * 2} points)</Text>
				<PlayerBalls balls={state.get("balls")} playerBalls={state.getIn(["game", "currentPlayer", "balls"])}/>
				{state.get("players").map(player => {
					const fouls = player.get("fouls")
					return (
						<View key={player.name}>
							<H3>{player.get("name")} score: {player.get("score")}</H3>
							<Text>Fouls: {fouls} (-{fouls * 2 } points)</Text>
							<PlayerBalls balls={state.get("balls")} playerBalls={player.get("balls")}/>
						</View>
					)
				})}
			</Content>
		</AnimatedPane>
	)
}

const styles = StyleSheet.create({
	leaderBoard: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 70,
		backgroundColor: "white"
	},
	leaderBoardExpanded: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 700,
		backgroundColor: "white",
		zIndex: 100
	},
	buttonText: {
		color: "black",
		fontSize: 16,
		textAlign: "center"
	},
	button: {
		backgroundColor: "cornsilk",
		padding: 10
	},
})
