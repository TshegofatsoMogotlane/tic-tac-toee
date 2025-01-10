import React, { useContext } from 'react'
import { Container } from '../../styles/General.styled'
import { GameBoardStyle } from './Game.styled'
import GameCell from '../../components/GameCell/GameCell'
import { GameContext } from '../../contexts/GameContext'
import Player from '../../components/player/Player'

export const Game = () => {
  const {game}=useContext(GameContext)
  if (!game) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Player player= {game.player1} isPlayerActive={game.player1.choice === game.turn}/>
      <GameBoardStyle>
        {game.board.map((item, index)=>(
          <GameCell key={index} cellItem={item} index={index} isWinningCell={Array.isArray(game.winningCombo) && game.winningCombo.includes(index)}/>
        ))}
      </GameBoardStyle>
      <Player player= {game.player2} isPlayerActive={game.player2.choice === game.turn}/>
    </Container>
  )
}
