import styled from 'styled-components'
import { progressiveClamp } from 'progressive-size'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: ${progressiveClamp(84, 140)};
    padding: 0 var(--spacing-padding);


`

export const Logo = styled.img`
    height: ${progressiveClamp(30, 50)};
`