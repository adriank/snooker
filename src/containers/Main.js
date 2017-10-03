import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

import Balls from '../components/Balls'
import Undo from './Undo'

Text.defaultProps.allowFontScaling=false

const MainView = props => {
	const { state, actions } = props
	return (
		<View style={{ flex: 1}}>
			<View style={{ flex:1, backgroundColor: 'green', paddingTop: 20, paddingBottom:10 }}>
				<Text style={{ color: 'white', fontSize:30, textAlign: "center"}}>
					{state.present.getIn(["game", "currentPlayer", "name"])}'s turn
					</Text>
				<Text style={{ color: 'white', fontSize:20, textAlign: "center"}}>
					Score: {state.present.getIn(["game", "currentPlayer", "score"])}
					</Text>
			</View>
			<View style={{flex: 8, backgroundColor: '#0a6c03'}} >
				<View>
					<View style={{position: "absolute", right: 10, zIndex:100}}>
						<Undo/>
					</View>
					<Balls balls={state.present.get("balls")}
								 currentBall={state.present.getIn(["game", "currentBall", "value"])}
								 actions={actions}/>
				</View>
				<View style={{justifyContent: "center"}}>
					<TouchableHighlight style={[
																styles.button,
																styles.foul,
																{ paddingVertical: 10, borderRadius: 5 }
															]}
															onPress={actions.foul} >
						<Text style={styles.buttonText}>FOUL (-2 pts)</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[
																styles.button,
																styles.nextPlayer,
																{
																	marginTop: 20,
																	paddingVertical: 10,
																	borderRadius: 5
																}
															]}
															onPress={actions.nextPlayer} >
						<Text style={styles.buttonText}>NEXT PLAYER</Text>
					</TouchableHighlight>
				</View>
			</View>
			<View style={{flex:1, backgroundColor: 'cornsilk'}} >
				<TouchableHighlight
								style={[styles.button, styles.leadboard]}
								onPress={ (a) => true }
								underlayColor={"white"}>
					<View>
						<Text style={styles.buttonText}>Leaderboard</Text>
						<FontAwesome style={{textAlign: "center"}} name="chevron-down" size={30}></FontAwesome>
					</View>
				</TouchableHighlight>
			</View>
		</View>
	)
}

export default connect(state => ({
		state: state
	}),
	(dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(MainView);

const styles = StyleSheet.create({
	foul:{
		backgroundColor: "#E15554",
		width: 200,
		marginHorizontal: 100,
	},
	nextPlayer:{
		width: 200,
		marginHorizontal: 100,
		backgroundColor:"#4D9DE0"
	},
	buttonText:{
		color: "black",
		fontSize: 16,
		textAlign: "center"
	},
	button:{
		backgroundColor:"cornsilk",
	},
	leadboard: {
		padding: 10
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
