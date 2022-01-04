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

    @media (max-width: 550px) {
        display: grid;
        grid-template: 
            "logo logo"
            "searchBar favoriteButton"
            / 1fr 44px;
        ;
        height: ${Rem(154)};
    }

`

export const Logo = styled.img`
    height: ${Rem(44)};
    grid-area: logo;
    margin-right: ${Rem(20)};

    @media (max-width: 550px) {
        justify-self: center;

    }
`

export const FavoriteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
    cursor: pointer;
    min-height: ${Rem(44)};
    min-width: ${Rem(44)};
    border-radius: 50%;
    transition: all 0.15s;
    grid-area: favoriteButton;
    
    &:hover {

        svg {
            transform: scale3d(1.1, 1.1, 1.1);
        }
    }

`