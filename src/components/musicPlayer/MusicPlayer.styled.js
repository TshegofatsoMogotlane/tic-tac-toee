import styled from "styled-components";
import { MdPlayArrow } from "react-icons/md";
import { MdPause } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";

export const PlayIcon = styled(MdPlayArrow)`
    color:${(props)=>props.theme.colors.secondary};
    font-size:3rem
`
export const PauseIcon = styled(MdPause)`
    color:${(props)=>props.theme.colors.secondary};
    font-size:3rem;
`
export const NextIcon = styled(MdSkipNext)`
    color:${(props)=>props.theme.colors.secondary};
    font-size:3rem;
`
export const MusicPlayerWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
