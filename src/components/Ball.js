import React, { Component } from 'react'
import {
	StyleSheet,
	Image,
	Text,
	View,
	TouchableHighlight,
	Platform
} from 'react-native'

const Ball = props => {
	const ball = props.def.toJS()
	const bkg = {backgroundColor: ball.color}
	const striped = ball.suit === "striped"

	return (
		<TouchableHighlight onPress={() => props.onPressFn(ball.value)}
												disabled={ball.cleared}
												style={[
													styles.Ball,
													(striped ? {} : bkg),
													(ball.cleared ? styles.BallCleared : {}),
													(ball.current ? styles.current : {})
		]}>
		<View>
			<View style={(Platform.OS === "android" && striped ? styles.androidFix:{})}/>
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
		</TouchableHighlight>
	)
}
const ballSize = 60
const styles = StyleSheet.create({
  Ball: {
		alignItems: 'center',
		backgroundColor: 'white',
		justifyContent: 'center',
		borderRadius: ballSize,
		margin: 2,
		height: ballSize,
		width: ballSize,
		overflow: "hidden"
	},
	BallCleared:{
		opacity:.5
	},
	BallNo:{
		backgroundColor: "white",
		width: 25,
		height: 25,
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
		width: ballSize,
		paddingVertical: 17,
		borderRadius: 0
	},
	current: {
		transform: [
			{scaleX: 1.2}, {scaleY: 1.2}
		],
		borderColor: "black",
		borderWidth: 2,
		zIndex:100
	},
	androidFix:{
		position: "absolute",
		top:-18.5,
		left:-5.5,
		width: ballSize + 11,
		height:ballSize + 11,
		borderWidth: 5,
		borderRadius:100,
		borderColor:"#0a6c03",
		backgroundColor:"transparent",
		zIndex:100
	}
})

export default Ball
