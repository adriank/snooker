import React from 'react'

import {
	StyleSheet,
	Animated,
	Text,
	View,
	TouchableHighlight
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Head = props => {
	return (
		<View style={props.style}>
			{props.children}
		</View>
	)
}
const Content = props => {
	return (
		<View style={props.style}>
			{props.children}
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
	}

	toggleLeaderBoard() {
		const toValue = this.state.paneOpened ? 70 : 700
		Animated.timing(
      this.state.slideAnim,
      {
        toValue,
        duration: 1000,
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
													onPress={(a) => this.toggleLeaderBoard()}
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

export default Header = props => {
	return (
		<AnimatedPane>
			<Head>
				<Text style={styles.buttonText}>Leaderboard</Text>
				<FontAwesome style={{ textAlign: "center" }} name="chevron-down" size={30}></FontAwesome>
			</Head>
			<Content>
				<Text>aaa</Text>
			</Content>
		</AnimatedPane>
	)
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
		backgroundColor: "white",
		zIndex:100
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
