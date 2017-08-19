import initial_state from "../initialState.json"

import {fromJS, List, Map} from 'immutable';

const initialState = fromJS(initial_state)

export const foulWithBall = (state, number) => {
	const balls = state.get("remainingBalls")
	const idx = balls.findIndex(x => x.get("value") === number)
	const ball = balls.get(idx).update("value", x => -x)
	const newBalls = balls.delete(idx)
	const playerBalls = state.getIn(["game", "currentPlayer", "balls"]).push(ball)
	return state.setIn(["game", "currentPlayer", "balls"], playerBalls).set("remainingBalls", newBalls)
}

export const foul = (state) => {
	return state.updateIn(
		["game", "currentPlayer", "fouls"],
		x => x + 1
	)
}

export const nextPlayer = (state) => {
	const players = state.get("players")
	const firstPlayer = players.first()
	return state.setIn(
		["game", "currentPlayer"],
		firstPlayer
	).set("players", players.shift().push(firstPlayer))
}

export const nextBall = (state) => {
	const nextBall = state.get("remainingBalls").first()
	return state.setIn(
		["game", "currentBall"],
		nextBall
	).set("remainingBalls", state.get("remainingBalls").shift())
}

export function start(state) {
	return nextBall(nextPlayer(state))
}
