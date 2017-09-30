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

	return (<View style={styles.Balls}>
		<View style={styles.BallsRow}>
			<Ball def={findBall(1)}
						onPress={foulWithBall}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(2)}
						onPress={foulWithBall}/>
			<Ball def={findBall(9)}
						onPress={foulWithBall}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(10)}
						onPress={foulWithBall}/>
			<Ball def={findBall(8)}
						onPress={foulWithBall}/>
			<Ball def={findBall(3)}
						onPress={foulWithBall}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(4)}
						onPress={foulWithBall}/>
			<Ball def={findBall(14)}
						onPress={foulWithBall}/>
			<Ball def={findBall(7)}
						onPress={foulWithBall}/>
			<Ball def={findBall(11)}
						onPress={foulWithBall}/>
		</View>
		<View style={styles.BallsRow}>
			<Ball def={findBall(12)}
						onPress={foulWithBall}/>
			<Ball def={findBall(6)}
						onPress={foulWithBall}/>
			<Ball def={findBall(15)}
						onPress={foulWithBall}/>
			<Ball def={findBall(13)}
						onPress={foulWithBall}/>
			<Ball def={findBall(5)}
						onPress={foulWithBall}/>
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
