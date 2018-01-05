let numberOfTurns = 0

export const createGame = (number) => {
  return {
    type: 'CREATE_GAME',
    numCards: number
  }
}

export const increaseTurns = () => {
  return {
    type: 'INCREASE_TURNS',
    turns: ++numberOfTurns
  }
}

export const showCard = (value, idx, temp) => {
  return {
    type: temp ? 'SHOW_TEMP_CARD' : 'SHOW_CARD',
    idx,
    value
  }
}

export const hideCard = () => {
  return {
    type: 'HIDE_CARD'
  }
}

export const matchCards = (indeces) => {
  return {
    type: 'MATCH_CARDS',
    indeces
  }
}

export const restartGame = () => {
  return {
    type: 'RESTART_GAME'
  }
}