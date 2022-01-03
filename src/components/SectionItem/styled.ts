import styled from "styled-components";
import { progressiveClamp } from "progressive-size";

export const Container = styled.div`
    
    max-width: ${progressiveClamp(140, 190)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

export const Img = styled.img`
    border-radius: 10px;
    height: ${progressiveClamp(140, 190)};
    aspect-ratio: 1 / 1;
    object-fit: contain;

`
export const TitleMusic = styled.p`
    text-align: center;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    text-align: center;
    max-height: 27px;
    overflow-x: hidden;
    displa


`