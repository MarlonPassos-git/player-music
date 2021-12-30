import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import "the-new-css-reset/css/reset.css"
import { GlobalStyle } from '../styles/GlobalStyle'

const Home: NextPage = () => {
  return (
    <>  
      <Header/>
      <GlobalStyle />
    </>
  )
}

export default Home
