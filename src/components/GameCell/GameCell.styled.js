import styled from "styled-components";

export const CellStyles= styled.button`
    background-color:${(props)=>props.isWinningCell ?props.theme.colors.yellow : props.theme.colors.secondary};
    color:${(props)=>props.theme.colors.primary};
    border: none;
    font-size:3rem;
    width:10rem;
    height:10rem;
    border-radius:10px;
    box-shadow: 5px 10px ${(props)=>props.theme.colors.gray};
    cursor: pointer;

    .markedItem{
        width:3rem;
        height: 3rem;
        

        line{
            stroke:${(props)=>props.theme.colors.primary};
            stroke-width:${(props)=>props.theme.size.web.circle};
        }
        path{
            stroke:${(props)=>props.theme.colors.primary};
            stroke-width:${(props)=>props.theme.size.web.circle};

        }
    }
    .outline {
        color:${(props) => props.theme.colors.secondary};
        // stroke-width:0;
        path{
            stroke:${(props) => props.theme.colors.primary};
            stroke-width:0;
        } 
    }
    &:hover{
        .outline {
        path{
            // stroke:${(props) => props.theme.colors.primary};
            stroke-width:2;
        }
        }
        
    }
`