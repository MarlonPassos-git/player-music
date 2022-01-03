import { progressiveClamp } from 'progressive-size/dist'
import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Number = styled.h1`
    font-size: ${progressiveClamp(100, 180)};
    line-height: ${progressiveClamp(121, 217)};
    text-align: center;
    color: var(--strong_cyan);
    font-weight: bold;

`

export const SubTitle = styled.h2`
    font-size: ${progressiveClamp(28, 64)};
    line-height: ${progressiveClamp(30, 70)};
    text-align: center;
    font-weight: bold;
    max-width: 640px;
    color: var(--strong_cyan);
    margin: 20px 0 24px;
`

export const Text = styled.p`
    font-size: ${progressiveClamp(18, 22)};
    line-height: ${progressiveClamp(22, 28)};
    max-width: 640px;
    text-align: center;
    color: var(--black);
    font-weight: 400



`