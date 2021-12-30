import  { useState, ChangeEvent } from 'react'
import { ImSearch } from 'react-icons/im'
import { Container, SearchButton, SearchClose, SearchInput } from './styled'
import { VscChromeClose, VscSearch } from 'react-icons/vsc'

export default function SearchBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('')

    function handleSearchButton() { 

        if (!isOpen) { 
            setIsOpen(true)
            return
        }
    }

    function handleSearchInput(event: ChangeEvent<HTMLInputElement>) { 
        const inputValue = event.target.value 

        setValue(inputValue)
    }

    function handleSearchClose() { 

        if (value === '') {
            setIsOpen(false)
            return
        }

        setValue('')

    }

    return (
        <Container>
            <SearchButton
                type="button"
                onClick={handleSearchButton}
            >
                <ImSearch
                    size={24}
                    color="var(--strong_cyan)"
                />
            </SearchButton>
            <SearchInput
                isOpen={isOpen}
                type="text"
                value={value}
                onChange={handleSearchInput}
            />
            <SearchClose
                isOpen={isOpen}
                type="button"
                onClick={handleSearchClose}
            >
                <VscChromeClose
                    
                    size={24}
                    color="var(--strong_cyan)"
                />
            </SearchClose>
        </Container>
    )
}
