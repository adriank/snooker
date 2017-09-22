import React, { Component } from 'react'
import {
	StyleSheet,
	Image,
	Text,
	View
} from 'react-native'

const Ball = props => {
	const ball = props.def
	const bkg = {backgroundColor: ball.color}
	const striped = ball.suit === "striped"

	return (
		<View style={[
			styles.Ball,
			(striped ? {} : bkg),
			(ball.cleared ? styles.BallCleared : {}),
			(ball.current ? styles.current : {})
		]}>
			<View style={[
				styles.BallNo,
				(striped ? [styles.striped, bkg] : {})
			]}>
				<View style={(striped ? styles.BallNo : {})}>
					<Text style={styles.BallNoText}
								allowFontScaling={false}>
						{ball.value}
					</Text>
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
	BallCleared:{
		opacity:.5
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
		transform: [
			{scaleX: 1.2}, {scaleY:1.2}
		],
		borderColor: "black",
		borderWidth: 2,
		zIndex:100
	}
})

export default Ball
