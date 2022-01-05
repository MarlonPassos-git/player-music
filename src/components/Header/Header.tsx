import React from 'react'
import { Container } from './styled'
import { Logo } from './styled'
import SearchBar from '../SearchBar/SearchBar'
import Link from 'next/link'
import { FavoriteButton } from './styled'
import { FaHeart } from 'react-icons/fa'
import { useSearchResult } from '../../context/SearchResult'


export default function Header() {

    //@ts-ignore
    const {isFavoritePage, setIsFavoritePage } = useSearchResult()


    function handleFavoriteButton () { 
        setIsFavoritePage(!isFavoritePage)
        console.log(isFavoritePage)
    }

    return (
        <Container>
            
            <Logo
                src='/logo.svg'
                alt="OuveAe Logo"
            />
                
                
            
            
            <SearchBar />
            <FavoriteButton
                onClick={handleFavoriteButton}
            >
                <FaHeart
                    size={24}
                    color="var(--strong_cyan)"
                />

            </FavoriteButton>
            
            
            
        </Container>
    )
}
