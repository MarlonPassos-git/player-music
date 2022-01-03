import styled from 'styled-components'
import { progressiveClamp, Rem } from 'progressive-size'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: ${Rem(92)};
    padding: 0 var(--spacing-padding);
    border-bottom: 1px solid var(--black);
    position: fixed;
    background-color: var(--white);
    width: 100%;
    top: 0;
    z-index: 100;


`

export const Logo = styled.img`
    height: ${Rem(44)};
`