import React from 'react'
import {connect} from 'react-redux'
import {createGame} from '../actions'

let Generator = ({handleSubmit}) => {
  let num

  return (
    <div className='number-holder'>
      <span>How many pairs do you want to play with?</span>
      <input
        type='text'
        placeholder='Enter an integer here...'
        ref={node => {
          num = node
        }}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            handleSubmit(num)
          }
        }}
        />
      <button
        onClick={() => handleSubmit(num)}>Start!</button>
    </div>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    handleSubmit: num => {
      const {value} = num
      const coercedValue = Number(value)
      if (isNaN(coercedValue) === false && Math.floor(coercedValue) === coercedValue) {
        dispatch(createGame(coercedValue))
      }
    }
  }
}

Generator = connect(null, mapDispatchToProps)(Generator)

export default Generator