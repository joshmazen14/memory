import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showCard, hideCard, matchCards, increaseTurns} from '../actions'
import _ from 'lodash'
import Card from './card'

const CardHolder = ({onCardClick, activeCard, deck, matchedCards, tempCard}) => (
  <div className='card-holder'>
    {deck.map((value, idx) => 
      <Card
        key={idx}
        value={value}
        onCardClick={() => {
          onCardClick(value, idx)
        }}
        active={idx === activeCard.idx || idx === tempCard.idx}
        matched={matchedCards.indexOf(idx) > -1}
      />)}
    <div className='sticky-holder'>
        {activeCard.value && `Current guess: ${activeCard.value}`}
    </div>
  </div>
)

function mapStateToProps (state) {
  const {deck, matchedCards, activeCard, tempCard} = state.cards
  return {
    deck,
    activeCard,
    tempCard,
    matchedCards,
    turns: state.game.turns
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  const {activeCard, tempCard} = ownProps.cards
  return {
    onCardClick: (value, idx) => {
      if (_.isEmpty(activeCard) && tempCard.value === undefined) {
        dispatch(showCard(value, idx))
      } else if (idx !== activeCard.idx) {
        if (value !== activeCard.value) {
          dispatch(showCard(value, idx, true))
          setTimeout(() => {
            dispatch(hideCard())
          }, 500)
        } else {
          dispatch(matchCards([idx, activeCard.idx]))
        }
        dispatch(increaseTurns())
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardHolder)