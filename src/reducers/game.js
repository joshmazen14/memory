const game = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_GAME':
      return Object.assign({}, state, {
        numCards: action.numCards,
        turns: 0
      })
    case 'INCREASE_TURNS':
      return Object.assign({}, state, {
        turns: action.turns
      })
    case 'RESTART_GAME':
      return {}
    default:
      return state
  }
}

export default game