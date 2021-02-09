import { default as TYPES } from './types';

const pickGame = () => ({
  type: TYPES.GAME_PICK
});

const setNickName = (item) => ({
  type: TYPES.GAME_SET_NICK_NAME, item
})

const setStateGame = (item) => ({
  type: TYPES.GAME_SET_STATE , item
})

export default {
  pickGame,
  setNickName,
  setStateGame
}