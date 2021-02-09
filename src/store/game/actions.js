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

const setItem = (item) => ({
  type: TYPES.GAME_SET_ITEM, item
})

const removeItem = (item) => ({
  type: TYPES.GAME_REMOVE_ITEM, item
})

const generateChunks = () => ({
  type: TYPES.GAME_GENERATE_CHUNKS
})

const generateClasses = () => ({
  type: TYPES.GAME_GENERATE_CLASSES
})

const setPoint = (item) => ({
  type: TYPES.GAME_SET_POINT, item
})

export default {
  pickGame,
  setNickName,
  setStateGame,
  setItem,
  removeItem,
  generateChunks,
  generateClasses,
  setPoint
}