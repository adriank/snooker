import * as types from './types';

export function start() {
  return {
    type: types.START
  };
}

export function foul() {
  return {
    type: types.FOUL
  };
}

export function foulWithBall(id) {
  return {
		type: types.FOUL_WITH_BALL,
		payload: {
      id
    }
  };
}

export function nextPlayer() {
  return {
    type: types.NEXT_PLAYER
  };
}

export function nextBall() {
  return {
    type: types.NEXT_BALL
  };
}

export function scoreBall() {
  return {
    type: types.SCORE_BALL
  };
}
