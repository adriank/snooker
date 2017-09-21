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
	let bkg = {backgroundColor: definition.color}
	let striped = definition.suit === "striped"

	return (
		<View style={[styles.Ball, (striped ? {} : bkg)]}>
			<View style={[
				styles.BallNo,
				(striped ? [styles.striped, bkg] : {})
			]}>
				<View style={(striped ? styles.BallNo : {})}>
					<Text style={styles.BallNoText}>{ball.no}</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  Ball: {
		alignItems: 'center',
		backgroundColor: 'white',
		justifyContent: 'center',
		borderRadius: 60,
		margin: 2,
		height: 60,
		width: 60,
		overflow: "hidden"
	},
	BallNo:{
		backgroundColor: "white",
		width: 25,
		height: 25,
		// marginLeft:7,
		// marginBottom:7,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20
	},
	BallNoText: {
		backgroundColor: "transparent",
		color: 'black',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	striped:{
		width:60,
		paddingVertical: 17,
		borderRadius:0
	},
	current: {
		borderWidth: 2
	}
})

export default Ball
