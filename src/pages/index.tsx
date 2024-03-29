import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import "the-new-css-reset/css/reset.css"
import { GlobalStyle } from '../styles/GlobalStyle'
import { Main } from '../components/Main/Main'
import { MusicPlayer } from '../components/MusicPlayer/MusicPlayer'

const Home: NextPage = () => {
  return (
    <>  
      <Header />
      <Main />
      <MusicPlayer />
      <GlobalStyle />
    </>
  )
}

export default Home
