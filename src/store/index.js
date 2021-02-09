import { combineReducers } from 'redux';
import GameReducer from './game';

const createReducer = () => combineReducers({
  game: GameReducer
})

export default createReducer;