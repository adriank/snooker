import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'

const Header = props => {
	const player = props.player
	return (
		<View style={styles.header}>
			<Text style={[styles.text, { fontSize: 30 }]}>
				{player.get("name")}'s turn
			</Text>
			<Text style={styles.text}>
				Score: {player.get("score")}
				</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header:{
		flex: 1,
		backgroundColor: 'green',
		paddingTop: 22,
		paddingBottom: 10
	},
	text:{
		color: 'white',
		fontSize: 20,
		textAlign: "center"
	}
})

export default Header
