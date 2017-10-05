import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native';

const PlayerBalls = props => {
	const balls = props.balls
	return (
		<View>
		{props.playerBalls.map(ball => {
			const ballNo = ball.get("value")
			const ballDef = balls[ballNo -1]
			return <Text>{ballNo}</Text>
		})}
		{props.playerBalls.size === 0 ? <Text>Empty</Text> : null}
		</View>
	)
}

export default PlayerBalls
