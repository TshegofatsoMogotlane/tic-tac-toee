import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props)=>props.columnBased? "column": "row"};
    height: 80vh;
    width: 100vw;
    background-color:${(props)=>props.theme.colors.primary};
    padding:0 1rem;
    text-align:center;

    ${(props)=>props.theme.media.mobile}{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
        width: 92%;
        
    }
`

export const Title = styled.h1`
    color: ${(props)=> props.primary? props.theme.colors.primary : props.theme.colors.text};
    font-size: 6rem;
    font-family: "Brush Script MT", cursive;
    background-color:transparent;

    ${(props)=>props.theme.media.mobile}{
        font-size: 1rem;
    }
`
export const Subtitle = styled.h2`
    color: ${(props)=> props.primary? props.theme.colors.primary : props.theme.colors.text};
    font-size:24px;
    font-weight:200;
    background-color: transparent;
    font-family: "Brush Script MT", cursive;
    ${(props)=>props.theme.media.mobile}{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Text = styled.p`
    color: ${(props)=> props.primary? props.theme.colors.primary : props.theme.colors.text};
    font-size: 2rem;
    font-family: "Brush Script MT", cursive;
    background-color:transparent;
    ${(props)=>props.theme.media.mobile}{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`