import {fromJS, List, Map} from 'immutable';

export const updateScore = (state) => {
	const currentPlayer = state.getIn(["game", "currentPlayer"])
	let score = currentPlayer.get("balls")
													 .reduce(
														 (r, x) => r + x.get("value"),
														 -currentPlayer.get("fouls")
														)
	return state.setIn(["game", "currentPlayer", "score"], score)
}

export const scoreBall = (state) => {
	const currentBall = state.getIn(["game", "currentBall"])
	const currentPlayer = state.getIn(["game", "currentPlayer"])
													 .update("balls", balls => balls.push(currentBall))
	return updateScore(nextBall(state).setIn(["game", "currentPlayer"], currentPlayer))
}

export const foulWithBall = (state, number) => {
	const balls = state.get("remainingBalls")
	const idx = balls.findIndex(x => x.get("value") === number)
	console.log(idx)
	if (idx === -1)
		return state
	const ball = balls.get(idx).update("value", x => -x)
	const newBalls = balls.delete(idx)
	const playerBalls = state.getIn(["game", "currentPlayer", "balls"])
													 .push(ball)
	const a = updateScore(state.setIn(["game", "currentPlayer", "balls"], playerBalls)
							.set("remainingBalls", newBalls))
	console.log(a.get("game"))
	return a
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
	return state.setIn(
		["game", "currentBall"],
		nextBall
	).set("remainingBalls", state.get("remainingBalls").shift())
}

export function start(state) {
	return nextBall(nextPlayer(state))
}
