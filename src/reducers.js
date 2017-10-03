import {fromJS, List, Map} from 'immutable';

export const updateScore = (state) => {
	const currentPlayer = state.getIn(["game", "currentPlayer"])
	let score = currentPlayer.get("balls")
													 .reduce(
														 (r, x) => r + x.get("value"),
														 -currentPlayer.get("fouls")*2
														)
	return state.setIn(["game", "currentPlayer", "score"], score)
}

export const scoreBall = (state) => {
	const currentBall = state.getIn(["game", "currentBall"])
	const currentPlayer = state.getIn(["game", "currentPlayer"])
														 .update("balls", balls => balls.push(currentBall))
	const balls = state.get("balls")
										 .setIn([currentBall.get("value") - 1, "cleared"], true)
										 .setIn([currentBall.get("value") - 1, "current"], false)
	return updateScore(nextBall(state.setIn(["game", "currentPlayer"], currentPlayer)
																		.set("balls", balls)))
}

export const foulWithBall = (state, number) => {
	const remainingBalls = state.get("remainingBalls")
	const idx = remainingBalls.findIndex(x => x.get("value") === number)
	if (idx === -1)
		return state
	const ball = remainingBalls.get(idx).update("value", x => -x)
	const newBalls = remainingBalls.delete(idx)
	const playerBalls = state.getIn(["game", "currentPlayer", "balls"])
													 .push(ball)
	const balls = state.get("balls").setIn([number - 1, "cleared"], true)
	return updateScore(state.setIn(["game", "currentPlayer", "balls"], playerBalls)
														 .set("remainingBalls", newBalls)
														 .set("balls", balls))
}

export const foul = (state) => {
	return updateScore(state.updateIn(
		["game", "currentPlayer", "fouls"],
		x => x + 1
	))
}

export const nextPlayer = (state) => {
	const players = state.get("players")
	const firstPlayer = players.first()
	const currentPlayer = state.getIn(["game", "currentPlayer"])
	let newState = state.setIn(
		["game", "currentPlayer"],
		firstPlayer
	).set("players", players.shift())
	if (currentPlayer){
		newState = newState.set("players", newState.get("players").push(currentPlayer))
	}
	return newState
}

export const nextBall = (state) => {
	const nextBall = state.get("remainingBalls").first()
	if(!nextBall) return state
	const nextBallValue = nextBall.get("value")
	return state.setIn(
		["game", "currentBall"],
		nextBall
	).set("remainingBalls", state.get("remainingBalls").shift())
	.setIn(["balls", nextBallValue > 0 ? nextBallValue - 1 : 0, "current"], true)
}

export function start(state) {
	return nextBall(nextPlayer(state))
}
