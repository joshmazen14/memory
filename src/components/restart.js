import React from 'react'
import {connect} from 'react-redux'
import {restartGame} from '../actions'

const Restart = ({dispatch}) => (
  <div className='restart'>
    You win! Play again? <button onClick={() => dispatch(restartGame())}>Restart</button>
  </div>
)

export default connect()(Restart)