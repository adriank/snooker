import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native';
import Ball from './Ball'

const Balls = comments => (
  <View style={styles.Ball}>
		<Ball no="11"/>
		<Ball no="12"/>
		<Ball no="13"/>
		<Ball no="14"/>
		<Ball no="15"/>
	</View>
)

const styles = StyleSheet.create({
  Ball: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		height: 50,
		width: 50
	},
	BallNo:{
		fontSize:30
	}
});

export default Balls
