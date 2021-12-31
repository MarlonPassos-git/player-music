import styled from 'styled-components'
import { Rem } from 'progressive-size'


export const Container = styled.form`

    display: flex;
    align-items: center;
    

    height: ${Rem(44)};
    min-width: ${Rem(44)};

    border-radius: ${Rem(22)};
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);

     

`

export const SearchButton = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    height: ${Rem(44)};
    min-width: ${Rem(44)};
`

interface SearchInputProps {
    isOpen: boolean;
}

export const SearchInput = styled.input<SearchInputProps>`
    display: ${props => props.isOpen ? 'block' : 'none'};

`

export const SearchClose = styled(SearchButton)<SearchInputProps>`
    display: ${props => props.isOpen ? 'flex' : 'none'};
`