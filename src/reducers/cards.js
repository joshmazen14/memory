import _ from 'lodash'
const initialState = {
  matchedCards: [],
  activeCard: {},
  tempCard: {}
}

const cards = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_GAME':
      return Object.assign({}, state, {
        deck: initializeDeck(action.numCards),
      })
    case 'SHOW_CARD':
      return Object.assign({}, state, {
        activeCard: {
          idx: action.idx,
          value: action.value
        }
      })
    case 'SHOW_TEMP_CARD':
      return Object.assign({}, state, {
        tempCard: {
          idx: action.idx,
          value: action.value
        }
      })
    case 'HIDE_CARD':
      return Object.assign({}, state, {
        activeCard: {},
        tempCard: {}
      })
    case 'MATCH_CARDS':
      return Object.assign({}, state, {
        matchedCards: state.matchedCards.concat(action.indeces),
        activeCard: {}
      })
    case 'RESTART_GAME':
      return Object.assign(initialState)
    default:
      return state
  }
}

function initializeDeck (numCards) {
  const initialStack = _.range(1, numCards + 1)
  return _.shuffle(initialStack.concat(initialStack.slice()))
}

export default cards