import React from 'react'
import Board from 'components/Board'
import Turn from 'components/Turn'

function Game() {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Board />
      <div style={{marginLeft: 50}}>
        <Turn player={1} />
        <Turn player={2} />
      </div>
    </div>
  )
}

export default Game
