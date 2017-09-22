import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native';
import Ball from './Ball'
import initial_state from '../../initialState.json'

const ballDefinition = initial_state.remainingBalls
const findBall = no => ballDefinition.find( ball => ball.value === no)

const Balls = comments => (
	<View style={styles.Balls}>
		<View style={styles.BallsRow}>
			<Ball def={findBall(1)}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(2)}/>
			<Ball def={findBall(9)}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(10)}/>
			<Ball def={findBall(8)}/>
			<Ball def={findBall(3)}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(4)}/>
			<Ball def={findBall(14)}/>
			<Ball def={findBall(7)}/>
			<Ball def={findBall(11)}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(12)}/>
			<Ball def={findBall(6)}/>
			<Ball def={findBall(15)}/>
			<Ball def={findBall(13)}/>
			<Ball def={findBall(5)}/>
		</View>
	</View>
)

const styles = StyleSheet.create({
	Balls: {
		flex: 1,
		marginVertical:20
	},
  BallsRow: {
		flex: 1,
		flexDirection:'row',
    alignItems: 'center',
		justifyContent: 'center',
	},

});

export default Balls
