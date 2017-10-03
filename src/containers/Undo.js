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
											style={[
												styles.undoButton,
												!canUndo && styles.disabledButton
											]}>
		<FontAwesome style={styles.icon} name="undo" size={30}></FontAwesome>
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
	undoButton: {
		padding: 10,
		// width: 50,
	},
	icon: {
		textAlign: "center",
		color: "#ffffaa",
	},
	disabledButton:{
		opacity: .5
	}
})
