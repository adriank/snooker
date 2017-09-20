import React, { Component } from 'react'
import {
	StyleSheet,
	Image,
	Text,
	View
} from 'react-native'
import initial_state from '../../initialState.json'

const ballDefinition = initial_state.remainingBalls
const findBall = no => ballDefinition.find( ball => ball.value === no)

const Ball = ball => {
	let definition = findBall(Number(ball.no))
	console.log(typeof ball.no)
  return (<View style={[styles.Ball, {backgroundColor: definition.color}]}>
		<Text style={styles.BallNo}>{ball.no}</Text>
  </View>)
}

const styles = StyleSheet.create({
  Ball: {
		alignItems: 'center',
		backgroundColor: '#ffffff',
		justifyContent: 'center',
		borderRadius: 60,
		margin: 5,
		height: 60,
		width: 60
	},
	BallNo:{
		textAlign: 'center',
		color: "#ffffff",
		// backgroundColor:"#333333",
		fontSize:25,
		// width:60,
		// borderRadius: 90
	}
});

export default Ball
