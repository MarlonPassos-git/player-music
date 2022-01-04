import { createContext, ReactNode, useState, useContext } from 'react'


export const SearchResultContext = createContext({} )

interface SearchResultProps { 
    children: ReactNode;
}

interface a { 
    searchResult: any,
    setSearchResult: Function
}


export const SearchResultProvider = ({ children }: SearchResultProps) => {

    const [searchResult, setSearchResult] = useState<Object>({})
    const [currentMusic, setCurrentMusic] = useState<Object>({})
    const [favoriteMusics, setFavoriteMusics] = useState<Array<Object>>([])

    return (
        <SearchResultContext.Provider
            value={{
                searchResult,
                setSearchResult,
                currentMusic,
                setCurrentMusic,
                favoriteMusics,
                setFavoriteMusics
            }}
        >
            {children}
        </SearchResultContext.Provider>
    )
}

export function useSearchResult() {
    const context = useContext(SearchResultContext);

    return context
}
