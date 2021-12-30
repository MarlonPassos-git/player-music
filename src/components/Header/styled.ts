import styled from 'styled-components'
import { progressiveClamp, Rem } from 'progressive-size'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: ${Rem(92)};
    padding: 0 var(--spacing-padding);


`

export const Logo = styled.img`
    height: ${Rem(44)};
`