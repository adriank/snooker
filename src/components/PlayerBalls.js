import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native';

const PlayerBall = props => {
	var ball = props.ball
	return (
		<View>
			<Text>{ball.value}</Text>
		</View>
	)
}

const PlayerBalls = props => {
	const balls = props.balls.toJS()
	return (
		<View>
			{props.playerBalls.map(ball => {
				const ballNo = ball.get("value")
				const ballDef = balls[Math.abs(ballNo) - 1]
				ballDef.value = ballNo
				return <PlayerBall ball={ ballDef }/>
			})}
			{props.playerBalls.size === 0 ? <Text>Empty</Text> : null}
		</View>
	)
}

export default PlayerBalls
