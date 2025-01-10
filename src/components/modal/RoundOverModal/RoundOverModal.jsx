import React, { useContext } from "react";
import { Subtitle, Title } from "../../../styles/General.styled";
import { ModalBody, ModalFooter, ModalHeader } from "../Modal.Styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SoundEffectContext } from "../../../contexts/SoundEffectContect";
import { useNavigate } from "react-router-dom";


const RoundOverModal = () => {
  const { resetBoard, game, restartGame} = useContext(GameContext)
  const { handleModal} = useContext(ModalContext)
  const { hoverSfx, clickSfx, completedSfx} = useContext(SoundEffectContext)
  const navigate =  useNavigate();
  return (
    <>
      <ModalHeader>
        <Title primary>{game.roundWinner ? `${game.roundWinner.name} Wins the game`:"Round Drawn"}</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched</Subtitle>
        <Subtitle primary>{game.player1.name} {game.player1.score}</Subtitle>
        <Subtitle primary>{game.player2.name} {game.player2.score}</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button color="#f9c811"  onClick={()=>{handleModal(); resetBoard();clickSfx()} } onMouseEnter={()=>hoverSfx()}>Continue</Button>
        <Button color="#8437f9" onClick={()=>{restartGame();handleModal();completedSfx(); navigate("/")}} onMouseEnter={()=>hoverSfx()}>Restart</Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
