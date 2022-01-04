import styled from 'styled-components'
import { Rem } from 'progressive-size'


export const Container = styled.form`

    display: flex;
    align-items: center;
    
   a
    min-width: ${Rem(44)};

    height: ${Rem(44)};

    border-radius: ${Rem(22)};
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
    margin: 0 20px 0 auto;
    grid-area: searchBar;

    @media (max-width: 550px) {
        justify-self: flex-end;
        
    }
    

`

export const SearchButton = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    height: ${Rem(44)};
    min-width: ${Rem(44)};

    transition: all 0.15s;
    
    &:hover {

        svg {
            transform: scale3d(1.1, 1.1, 1.1);
        }
    }
    
`

interface SearchInputProps {
    isOpen: boolean;
}

export const SearchInput = styled.input<SearchInputProps>`
    display: ${props => props.isOpen ? 'block' : 'none'};
    max-width: ${Rem(500)};

`

export const SearchClose = styled(SearchButton)<SearchInputProps>`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    margin-left: auto;
`