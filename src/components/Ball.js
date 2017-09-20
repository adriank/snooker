import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View
} from 'react-native';

const Ball = () => (
  <View style={styles.Ball}>
		<Text style={styles.BallNo}>{this.props.BallNo}</Text>
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

export default Ball
