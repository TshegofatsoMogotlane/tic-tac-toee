import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from './Header.styled'
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/svgs/tic-tac-toe-game-svgrepo-com (1).svg"
import {Title} from "../../styles/General.styled"
import { SoundEffectContext } from '../../contexts/SoundEffectContect';


export default function Header() {
  const {theme, toggleTheme} =useContext(ThemeContext);
  const navigate =useNavigate();
  const {hoverSfx, clickSfx} = useContext(SoundEffectContext)
  return (
    <HeaderWrapper>
      <Title onClick={()=>{ clickSfx(); navigate("/") }} onMouseEnter={()=>hoverSfx()}><Logo className='logo'/></Title>
      <span onClick={()=>{clickSfx(); toggleTheme()}} onMouseEnter={()=>hoverSfx()}>{theme==="light"?<DarkModeIcon/>:<LightModeIcon/>}</span>
      
    </HeaderWrapper>
  )
}
