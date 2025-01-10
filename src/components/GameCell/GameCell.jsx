import React, { useContext } from 'react'
import { CellStyles } from './GameCell.styled'
import { GameContext } from '../../contexts/GameContext'
import { checkForWinner } from '../../utils/GameUtils'
import {ReactComponent as XIcon} from "../../assets/svgs/X.svg"
import {ReactComponent as OIcon} from "../../assets/svgs/O.svg"
import {ReactComponent as XOutline} from "../../assets/svgs/XOutline.svg"
import {ReactComponent as OOutline} from "../../assets/svgs/OOutline.svg"
import { ModalContext } from '../../contexts/ModalContext'
import RoundOverModal from '../modal/RoundOverModal/RoundOverModal'
import { SoundEffectContext } from '../../contexts/SoundEffectContect'

export default function GameCell({cellItem, index, isWinningCell}) {
  // console.log(isWinningCell)
  console.log(isWinningCell)
  const {updatedBoard, game, roundComplete} = useContext(GameContext)
  const { handleModal} =  useContext(ModalContext)
  const { hoverSfx, clickSfx, winSfx,completedSfx} = useContext(SoundEffectContext)

  const cellClickhandler = ()=>{
    clickSfx();
    updatedBoard(index);
    const result =  checkForWinner(game.board)
    if(result){
      roundComplete(result)
      if(result !== "draw"){
        winSfx()
      }else{
        completedSfx()
      }
      handleModal(<RoundOverModal/>)
    }
  }
  if(cellItem==="o"){
    return (
      <CellStyles isWinningCell={isWinningCell ?? false}><OIcon className="markedItem" /></CellStyles>
    )
  }else if(cellItem==="x"){
    return (
      <CellStyles isWinningCell={isWinningCell ?? false}><XIcon className="markedItem"/></CellStyles>
    )
  }
  return (
    <CellStyles onClick={cellClickhandler} onMouseEnter={()=>hoverSfx()}>
        {game.turn==="x"?<XOutline className="outline"/>:<OOutline className="outline"/>}
    </CellStyles>
  )
}
