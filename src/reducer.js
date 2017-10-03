import initial_state from "../initialState.json"
import {fromJS} from 'immutable';
import undoable from 'redux-undo'
import {
	foul,
	nextPlayer,
	nextBall,
	scoreBall,
	foulWithBall,
	start
} from './reducers'

const INITIAL_STATE = start(fromJS(initial_state))

const reducer = function(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
		case 'START':
			return start(state)
		case 'FOUL':
			return foul(state)
		case 'FOUL_WITH_BALL':
			return foulWithBall(state, action.id)
		case 'NEXT_PLAYER':
			return nextPlayer(state)
		case 'NEXT_BALL':
			return nextBall(state)
		case 'SCORE_BALL':
			return scoreBall(state)
	}
  return state
}

const undoableTodos = undoable(reducer)

export default undoableTodos
