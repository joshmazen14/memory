import { combineReducers } from 'redux'
import game from './game'
import cards from './cards'

const MemoryApp = combineReducers({
  game,
  cards
})

export default MemoryApp