import { memo, ReactNode, useEffect, useState } from "react"
import api from "../../services/user"
import { CategorySection } from "../CategorySection/CategorySection"
import { Container, Title } from "./styled"
import { useSearchResult } from "../../context/SearchResult"
import { SearchResult } from "../SearchResult/SearchResult"
import NotFound from "../NotFound/NotFound"
import FavoriteList from "../FavoriteList/FavoriteList"

interface popularSoundsProps { 
    category: string,
    data: []
}

export function Main() {

    const [popularSounds, setPopularSounds] = useState<Array<popularSoundsProps>>([])
    //@ts-ignore
    const { searchResult, setSearchResult, isFavoritePage, favoriteMusics } = useSearchResult()
    const [country , setCountry] = useState('')
    
    useEffect(() => {   
        api.get('popularSounds').then(response => {
            
            setPopularSounds(response.data)
        })

        api.get('infos').then(response => {
            setCountry(response.data.country)
        })
    }, [])

    let whatShow: ReactNode 

    if (isFavoritePage) { 
        
        whatShow = (<>
            <Title> Musicas Favoritas</Title>
            < FavoriteList data= { favoriteMusics } />
        </>) 
    } 
    else if (searchResult.total == 0) { 

        whatShow = <NotFound />
    }
    else if (searchResult.hasOwnProperty('data')) {
        
        whatShow = (<>
            <Title> Resultado da Pesquisa</Title>
            < SearchResult searchResult = { searchResult } />
        </>) 
    }
    else { 
        whatShow = <>
            <Title> Oque mais esta sendo ouvido no { country }</Title>
            {popularSounds.map((category, index) => { 
                    return (
                        <CategorySection
                            key={index}
                            category={category.category}
                            data={category.data}
                        />
                    )
                })}
            </>
    }

    

    return (
        <Container>
            { whatShow }
        </Container>
    )
}

/* export const Main = memo(MainComponent) */