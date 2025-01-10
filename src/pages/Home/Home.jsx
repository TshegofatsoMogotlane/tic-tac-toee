import React, { useContext } from "react";
import { Container, Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SoundEffectContext } from "../../contexts/SoundEffectContect";

function Home() {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx, pianoSfx} = useContext(SoundEffectContext);
  return (
    <Container columnBased>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with Shebe Maburna</Subtitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate("/game-on");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
}

export default Home;
