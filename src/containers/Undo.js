import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons';
import {
	StyleSheet,
	TouchableHighlight
} from 'react-native'

let Undo = ({ canUndo, onUndo }) => (
	<TouchableHighlight onPress={onUndo} disabled={!canUndo}
											style={ !canUndo && styles.disabledButton}>
		<FontAwesome style={styles.icon} name="undo" size={50}></FontAwesome>
	</TouchableHighlight>
)

const mapStateToProps = (state) => ({
  canUndo: state.past.length > 0
})

const mapDispatchToProps = ({
	onUndo: UndoActionCreators.undo
})

Undo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Undo)

export default Undo

const styles = StyleSheet.create({
	icon: {
		padding: 10,
		fontSize: 50,
		height: 70,
		textAlign: "center",
		color: "#ffffaa",
	},
	disabledButton:{
		opacity: .5
	}
})
