import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {
	foul,
	nextPlayer,
	nextBall,
	foulWithBall,
	start
} from '../reducers';

import initial_state from '../../initialState.json'

const initialState = fromJS(initial_state)
const BALLS = initialState.get("remainingBalls")

const log = x => console.log(JSON.stringify(x, false, 2))

describe('game logic', () => {

	describe('balls', () => {

		it('ball other than curentBall was cleared', () => {
			const newState = nextPlayer(nextBall(initialState))
			const stateWithBallFoul = foulWithBall(newState, 11)

			expect(stateWithBallFoul.get("remainingBalls")
															.findIndex( x => x.get("value") === 11))
															.to.equal(-1)
			expect(stateWithBallFoul.getIn(["game", "currentPlayer", "balls"])
															.last().get("value"))
															.to.equal(-11)
		})

		it('sets currentBall to the next ball', () => {
			let state = fromJS({
				"game": {
					"currentBall": null
				},
				"remainingBalls": BALLS
			})

			let newState = nextBall(state)

			expect(newState.getIn(["game","currentBall"])).to.be.an("object")
			expect(newState.getIn(["remainingBalls", 0, "value"])).to.equal(2)

		})
	})

	describe('players', () => {

		it('sets first player in the game', () => {
			let state = fromJS({
				"game": {
					"currentPlayer": null
				},
				"players": [{
					"name": "A",
				},{
					"name": "B",
				},{
					"name": "C",
				}]
			})

			let newState = nextPlayer(state)

			expect(newState.getIn(["game","currentPlayer"])).to.be.an("object")
			expect(newState.get("players").first().get("name")).to.equal("B")
		})

		it('sets next player in the game', () => {
			const state = nextPlayer(initialState)

			let newState = nextPlayer(state)

			expect(newState.getIn(["game","currentPlayer"])).to.be.an("object")
			expect(newState.getIn(["game","currentPlayer", "name"])).to.equal("Cyprian")
			expect(newState.get("players").first().get("name")).to.equal("Ela")
			expect(newState.get("players").last().get("name")).to.equal("Pawilon")
		})

	})


	describe('foul', () => {

		it('adds foul to the current player', () => {
			let state = fromJS({
				"game": {
					"currentPlayer": {
						"name": "Pawilon",
						"score": 0,
						"balls": [],
						"fouls": 0,
						"bg_color": "#E637BF",
						"color": "#eeeeee"
					}
				}
			})

			let newState = foul(state)

			expect(state.getIn(["game","currentPlayer","fouls"])).to.equal(0)
			expect(newState.getIn(["game","currentPlayer","fouls"])).to.equal(1)

		})

	})

})

