import React from 'react'

import {
	StyleSheet,
	Text,
	// View,
	// TouchableHighlight
} from 'react-native'

const H1 = props => {
	console.log(props.children)
	return (
		<Text style={[styles.H1, props.style]}>
			{props.children}
		</Text>
	)
}

const H2 = props => {
	return (
		<Text style={[styles.H2, props.style]}>
			{props.children}
		</Text>
	)
}

const H3 = props => {
	return (
		<Text style={[styles.H3, props.style]}>
			{props.children}
		</Text>
	)
}

const P = props => {
	return (
		<Text style={[styles.P, props.style]}>
			{props.children}
		</Text>
	)
}

export {
	H1,
	H2,
	H3,
	P
}

const baseFontSize = window.BASE_FONT_SIZE || 18
const styles = StyleSheet.create({
	H1: {
		fontSize: 2 * baseFontSize
	},
	H2: {
		fontSize: 1.5 * baseFontSize
	},
	H3: {
		fontWeight: "bold"
	},
	P: {

	}
})
