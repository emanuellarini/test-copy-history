import React from 'react'
import Typography from '@material-ui/core/Typography'
import AppBar from 'components/AppBar'
import Board from 'components/Board'
import Player from 'components/Player'
import Winner from 'components/WinnerAlert'
import Turn from 'components/Turn'
import StyledGame from './styled'

function Game() {
  return (
    <StyledGame>
      <AppBar />

      <div className="Container">
        <Board />
        <Typography
          variant="caption"
          color="textSecondary"
          align="center"
          component="p"
          className="Hint"
        >
          hint: you can pass the turn by <b>pressing Spacebar</b> after your
          move
        </Typography>
      </div>

      <Winner />
      <Turn />
    </StyledGame>
  )
}

export default Game
