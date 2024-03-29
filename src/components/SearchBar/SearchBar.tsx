import  { useState, ChangeEvent } from 'react'
import { ImSearch } from 'react-icons/im'
import { Container, SearchButton, SearchClose, SearchInput } from './styled'
import { VscChromeClose, VscSearch } from 'react-icons/vsc'
import api from '../../services/user'
import { SearchResultContext, useSearchResult } from '../../context/SearchResult';


interface SearchResultProps { 
    searchResult: any,
    setSearchResult: Function
}


export default function SearchBar() {
    
    //@ts-ignore
    const {searchResult, setSearchResult, isFavoritePage, setIsFavoritePage} = useSearchResult()
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('')

    function handleSearchButton(event:any) { 

        event.preventDefault()
        

        if (!isOpen || value === '') { 
            setIsOpen(true)
            setSearchResult({})
            return
        }
        api.get(`searchImput/${value}`).then(response => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setSearchResult(response.data)
        })  

        setIsFavoritePage(false)
    }

    function handleSearchInput(event: ChangeEvent<HTMLInputElement>) { 

        const inputValue = event.target.value 
        setValue(inputValue)
    }

    function handleSearchClose() { 
       

        if (value === '') {
            setIsFavoritePage(false)
            setIsOpen(false)
        setSearchResult({})

            return
        }
        setValue('')
        
    }

    return (
        <Container
            onSubmit={handleSearchButton}
        >
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
