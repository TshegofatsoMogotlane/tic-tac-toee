import React from 'react'
import { AvatarWrapper, PlayerWrapper } from './Player.Styled'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Text } from '../../styles/General.styled'

const Player = ({player, isPlayerActive}) => {

  return (
    <PlayerWrapper > 
        <AvatarWrapper isPlayerActive={isPlayerActive ??false}>
          <Avatar  {...player.AvatarConfig}/>
        </AvatarWrapper>
        <Text >{player.name} ({player.choice.toUpperCase()})</Text>
        <Text size="4rem">{player.score}</Text>
    </PlayerWrapper>
  )
}

export default Player