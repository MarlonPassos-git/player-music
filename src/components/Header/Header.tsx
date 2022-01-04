import React from 'react'
import { Container } from './styled'
import { Logo } from './styled'
import SearchBar from '../SearchBar/SearchBar'
import Link from 'next/link'
import { FavoriteButton } from './styled'
import { FaHeart } from 'react-icons/fa'


export default function Header() {
    return (
        <Container>
            
            <Logo
                src='/logo.svg'
                alt="OuveAe Logo"
            />
                
                
            
            
            <SearchBar />
            <FavoriteButton >
                <FaHeart
                    size={24}
                    color="var(--strong_cyan)"
                />

            </FavoriteButton>
            
            
            
        </Container>
    )
}
