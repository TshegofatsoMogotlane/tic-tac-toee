import styled from "styled-components";

export const PlayerWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 4rem;
    ${(props)=>props.theme.media.mobile}{
        flex-direction: row;
        margin: 0.2rem;
    }
`
export const AvatarWrapper =  styled.div`
    div{
        display: flex;
        width: 8rem;
        height: 8rem;
        filter: ${(props) => props.isPlayerActive ? "" : "grayscale(90%)"};

    }
`