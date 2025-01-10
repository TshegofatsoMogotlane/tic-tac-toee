import styled from "styled-components";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export const HeaderWrapper= styled.div`
    display:flex;
    justify-content:space-between;
    height:10vh;
    padding: 0 1.3rem;
    background-color:transparent;
    .logo{
        height:4rem;
        width:4rem;
        fill: ${(props)=>props.theme.colors.text}
    }
    ${(props)=>props.theme.media.mobile}{
        display: flex;
        justify-content:space-between;
        margin: 0;
        padding: 0;
    }
`

export const LightModeIcon = styled(MdOutlineLightMode)`
    color: ${(props)=>props.theme.colors.text};
    font-size:2rem;
    cursor:pointer;
`

export const DarkModeIcon =styled(MdDarkMode)`
    color: ${(props)=>props.theme.colors.text};
    font-size:2rem;
    cursor:pointer;
`
