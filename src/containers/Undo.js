import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import {
	StyleSheet,
	Text,
	TouchableHighlight
} from 'react-native'

let Undo = ({ canUndo, onUndo }) => (
	<TouchableHighlight onPress={onUndo} disabled={!canUndo}
											style={styles.undoButton}>
		<Text style={styles.buttonText}>Undo</Text>
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
		backgroundColor: "lightcoral",
		width: 200,
		marginHorizontal: 100,
	},
	buttonText:{
		// fontFamily:"FontAwesome",
		color: "black",
		fontSize: 16,
		textAlign: "center"
	},
})
