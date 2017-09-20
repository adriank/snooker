import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native';
import Ball from './Ball'

const Balls = comments => (
	<View style={styles.Balls}>
		<View style={styles.BallsRow}>
			<Ball no="11"/>
			<Ball no="12"/>
			<Ball no="13"/>
			<Ball no="14"/>
			<Ball no="15"/>
		</View>
		<View style={styles.BallsRow}>
			<Ball no="7"/>
			<Ball no="8"/>
			<Ball no="9"/>
			<Ball no="10"/>
		</View>
		<View style={styles.BallsRow}>
			<Ball no="4"/>
			<Ball no="5"/>
			<Ball no="6"/>
		</View>
			<View style={styles.BallsRow}>
			<Ball no="2"/>
			<Ball no="3"/>
		</View>
		<View style={styles.BallsRow}>
			<Ball no="1"/>
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
