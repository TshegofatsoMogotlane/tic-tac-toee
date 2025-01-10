import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position:fixed;
    top:0;
    bottom: 0;
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    /* place-content:center; */
    background-color:rgba(0,0,0,0.5);
    ${(props)=>props.theme.media.mobile}{
        position:fixed;
        top:0;
        bottom: 0;
        height:80%;
        width:80%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    

`
export const ModalContainer = styled.div`
    min-width:400px;
    margin: 0;
    padding:40px 20px;
    background: white;
    border-radius:10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props)=>props.theme.colors.secondary};

    ${(props)=>props.theme.media.mobile}{
        display: flex;
        margin: 0;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 50%; /* optional, to prevent it from becoming too wide on large mobile screens */
        height: 40%;
    }

`
export const ModalHeader = styled.div`
    display:flex;
    justify-content:center;

    ${(props)=>props.theme.media.mobile}{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width:200px;
        /* margin: 2rem 2rem; */
    }
`

export const ModalBody = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin: 1rem;

    ${(props)=>props.theme.media.mobile}{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width:200px;
        /* margin: 2rem 2rem; */
    }
`
export const ModalFooter = styled.div`
    display:flex;
    /* flex-direction:column; */
    justify-content:center;
    ${(props)=>props.theme.media.mobile}{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width:200px;
        /* margin: 2rem 2rem; */
    }
`