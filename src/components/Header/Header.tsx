import React from 'react'
import { Container } from './styled'
import { Logo } from './styled'
import SearchBar from '../SearchBar/SearchBar'


export default function Header() {
    return (
        <Container>
            <Logo src='/logo.svg'
                alt="OuveAe Logo"
            />
            <SearchBar />
            
            
            
        </Container>
    )
}
