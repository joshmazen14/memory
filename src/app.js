import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import CardHolder from './components/cardholder'
import Generator from './components/generator'
import Turns from './components/turns'
import Restart from './components/restart'

class App extends Component {
  render () {
    const {game, cards} = this.props
    const {numCards, turns} = game
    return (
      <div className='container'>
        {numCards === undefined ?  <Generator /> : <Turns turns={turns} />}
        {numCards && <CardHolder cards={cards}/>}
        {cards.deck && isGameComplete(cards) && <Restart />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

function isGameComplete (cards) {
  return cards.matchedCards.length === cards.deck.length
}

export default connect(mapStateToProps)(App)