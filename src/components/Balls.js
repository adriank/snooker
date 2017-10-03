import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native';
import Ball from './Ball'

const Balls = props => {
	const findBall = no => props.balls.find( ball => ball.get("value") === no)
	const foulWithBall = props.actions.foulWithBall
	const scoreBall = props.actions.scoreBall
	const ballPressFN = (ballNo) => {
		return ballNo === props.currentBall
		? scoreBall() : foulWithBall()
	}
	console.log(props.balls)

	return (<View style={styles.Balls}>
		<View style={styles.BallsRow}>
			<Ball def={findBall(1)}
						onPressFn={ballPressFN}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(2)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(9)}
						onPressFn={ballPressFN}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(10)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(8)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(3)}
						onPressFn={ballPressFN}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(4)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(14)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(7)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(11)}
						onPressFn={ballPressFN}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(12)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(6)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(15)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(13)}
						onPressFn={ballPressFN}/>
			<Ball def={findBall(5)}
						onPressFn={ballPressFN}/>
		</View>
	</View>)
}

const styles = StyleSheet.create({
	Balls: {
		flex: 1,
		marginVertical: 20
	},
  BallsRow: {
		flex: 1,
		flexDirection:'row',
    alignItems: 'center',
		justifyContent: 'center',
	},

});

export default Balls
