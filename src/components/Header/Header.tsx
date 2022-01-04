import React from 'react'
import { Container } from './styled'
import { Logo } from './styled'
import SearchBar from '../SearchBar/SearchBar'
import Link from 'next/link'


export default function Header() {
    return (
        <Container>
            <Link href="/">
                <a>
                    <Logo
                        src='/logo.svg'
                        alt="OuveAe Logo"
                    />
                </a>
                
            </Link>
            
            <SearchBar />
            
            
            
        </Container>
    )
}
