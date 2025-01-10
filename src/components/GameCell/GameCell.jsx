import React, { useContext } from 'react'
import { CellStyles } from './GameCell.styled'
import { GameContext } from '../../contexts/GameContext'
import { checkForWinner } from '../../utils/GameUtils'

export default function GameCell({cellItem, index}) {
  const {updatedBoard, game} = useContext(GameContext)

  const cellClickhandler = ()=>{
    updatedBoard(index)
    checkForWinner(game.board)
  }
  return (
    <CellStyles onClick={cellClickhandler}>
        {cellItem}
    </CellStyles>
  )
}
