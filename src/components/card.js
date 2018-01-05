import React from 'react'

const Card = ({onCardClick, active, value, matched}) => (
  <div className={`card${active ? ' active' : ''}${matched ? ' matched' : ''}`} onClick={onCardClick}>
    {(active || matched) && value}
  </div>
)

export default Card