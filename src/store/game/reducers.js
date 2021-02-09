import { default as TYPES } from './types';
import GameSets from '../../dictionaries/game_data.json'

const INIT_STATE = {
  played: false,
  nickName: '',
  pickedGameSet: null,
  gameSets: GameSets
};

const gameReducers = (state = INIT_STATE, action) =>
{
  switch(action.type) {
    case TYPES.GAME_PICK: {
      const gameStockCount = state.gameSets.length
      const indexGameSet = Math.floor(Math.random() * gameStockCount) + 0
      return {
        ...state, pickedGameSet: GameSets[indexGameSet]
      }
    }
    case TYPES.GAME_SET_NICK_NAME: {
      return {
        ...state, nickName: action.item
      }
    }
    case TYPES.GAME_SET_STATE: {
      return {
        ...state, played: action.item
      }
    }
    default: 
      return state
  }
}

export default gameReducers