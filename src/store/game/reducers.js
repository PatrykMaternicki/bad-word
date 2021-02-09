import { default as TYPES } from './types';
import GameSets from '../../dictionaries/game_data.json'

const CLASSES_OPTIONS = {
  0: 'justify-content-between',
  1: 'justify-content-evenly',
  2: 'justify-content-around'
}

const setClassName = () => {
  let classes = 'd-flex mt-2 mb-2'
  let indexFlexOption = Math.floor(Math.random() * Object.keys(CLASSES_OPTIONS).length) + 0
  classes = `${classes} ${CLASSES_OPTIONS[indexFlexOption]}`
  return classes
}


const INIT_STATE = {
  played: false,
  nickName: '',
  pickedGameSet: null,
  clickedWords: [],
  gameSets: GameSets,
  chunks: [],
  wordsPerRow: 3,
  classes: [],
  results: []
};

const gameReducers = (state = INIT_STATE, action) =>
{
  switch(action.type) {
    case TYPES.GAME_PICK: {
      const gameStockCount = state.gameSets.length
      const indexGameSet = Math.floor(Math.random() * gameStockCount) + 0
      return {
        ...state, pickedGameSet: state.gameSets[indexGameSet]
      }
    }
    case TYPES.GAME_GENERATE_CHUNKS: {
      const chunks = state.pickedGameSet.all_words.makeChunk(state.wordsPerRow)
      return {
        ...state, chunks: chunks
      }
    }
    case TYPES.GAME_GENERATE_CLASSES: {
      const classes = state.chunks.map(() => setClassName(state.chunks.length))
      return {
        ...state, classes: classes
      }
    }
    case TYPES.GAME_SET_POINT: {
      return {
        ...state, results: [...state.results, action.item]
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