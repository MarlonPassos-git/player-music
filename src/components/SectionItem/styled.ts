import styled from "styled-components";
import { progressiveClamp } from "progressive-size";

export const Container = styled.div`
    
    max-width: ${progressiveClamp(140, 190)};
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const WrapperControllers = styled.ul`
    display: flex;
    gap: 10px;
    
    margin: 0 0 16px 15px;
    justify-self: start;
    align-self: end;
    z-index: 4;


`

export const WrapperImg = styled.div`
    display: grid;

    & > * {
        grid-column: 1 / -1;    
        grid-row: 1 / -1;
    }


    &:hover {

        .FavoriteButton {
            display: flex;
        }
    }

`

export const Img = styled.img`
    border-radius: 10px;
    height: ${progressiveClamp(140, 190)};
    aspect-ratio: 1 / 1;
    object-fit: contain;
    cursor: pointer;
    transition: 0.15s opacity;

    &:hover {
        box-shadow: rgba(25, 25, 34, 0.24) 0px 1px 6px;
        opacity: 0.8;

        
    }
    

`

export const PlayButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: var(--white);

    
    cursor: pointer;
    transition-duration: 0.15s;
    transition-property: opacity, transform;

    height: 36px;
    width: 36px;
    border-radius: 50%;

    &:hover {
        transform: scale3d(1.2, 1.2, 1.2);
    }

    
`


export const FavoriteButton = styled(PlayButton)`
    display: none;
`


export const TitleMusic = styled.a`
    text-align: center;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    text-align: center;
    max-height: 27px;
    overflow-x: hidden;
    cursor: pointer;


`