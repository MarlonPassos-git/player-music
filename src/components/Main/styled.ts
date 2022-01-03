import { progressiveClamp } from 'progressive-size/dist'
import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;

    padding: 0 var(--spacing-padding);
    


`

export const Title = styled.h1`
    font-size: ${progressiveClamp(24, 30)};
    line-height: ${progressiveClamp(30, 40)};
    
    font-weight: 500;
    text-align: center;
    
    color: var(--black);
    margin: 20px 0 24px;

`