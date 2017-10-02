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

import Balls from './Balls'

const MainView = props => {
	const { state, actions } = props
	return (
		<View style={{ flex: 1}}>
			<View style={{ flex:1, backgroundColor: 'green' }}>
				<Text style={{ color: 'white', fontSize:30, textAlign: "center"}}>{state.getIn(["game", "currentPlayer", "name"])}'s turn</Text>
				<Text style={{ color: 'white', fontSize:20, textAlign: "center"}}>Score: {state.getIn(["game", "currentPlayer", "score"])}</Text>
			</View>
			<View style={{flex:8, backgroundColor: '#0a6c03'}} >
				<View style={{height: 330}}>
					<Balls balls={state.get("balls")} actions={actions}/>
				</View>
				<View style={{marginTop: 50}}>
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
																styles.foul,
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
								onPress={ (a) => console.log("aaa") } >
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
		backgroundColor: "lightcoral",
		width: 200,
		// height: 50,
		// marginTop: 100,
		marginHorizontal: 100,
		// flexShrink: 1
	},
	buttonText:{
		// fontFamily:"FontAwesome",
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
