import { AppProps } from 'next/app'; 
import { SearchResultProvider } from '../context/SearchResult';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchResultProvider>
        <Component {...pageProps} />
      </SearchResultProvider>
      
    </>  
  )
  
}

export default MyApp
