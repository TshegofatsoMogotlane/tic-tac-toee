import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from './Header.styled'
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const {theme, toggleTheme} =useContext(ThemeContext);
  const navigate =useNavigate();
  return (
    <HeaderWrapper>
      <h1 className="logo" onClick={()=>navigate("/")}>Logo</h1>
      <span onClick={()=>toggleTheme()}>{theme==="light"?<DarkModeIcon/>:<LightModeIcon/>}</span>
      
    </HeaderWrapper>
  )
}
