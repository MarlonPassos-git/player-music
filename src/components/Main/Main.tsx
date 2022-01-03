import { memo, ReactNode, useEffect, useState } from "react"
import api from "../../services/user"
import { CategorySection } from "../CategorySection/CategorySection"
import { Container } from "./styled"
import { useSearchResult } from "../../context/SearchResult"
import { SearchResult } from "../SearchResult/SearchResult"
import NotFound from "../NotFound/NotFound"

interface popularSoundsProps { 
    category: string,
    data: []
}

export function Main() {

    const [popularSounds, setPopularSounds] = useState<Array<popularSoundsProps>>([])

    //@ts-ignore
    const {searchResult, setSearchResult} = useSearchResult()
    
    useEffect(() => {   
        api.get('popularSounds').then(response => {
            
            
            setPopularSounds(response.data)
            
        })
    }, [])

    let whatShow: ReactNode 
    
    if (searchResult.total == 0) { 

        whatShow = <NotFound />
    }
    else if (searchResult.hasOwnProperty('data')) {
        
        whatShow = <SearchResult searchResult={ searchResult }/>
    }
    else { 
        whatShow = popularSounds.map((category, index) => { 
                    return (
                        <CategorySection
                            key={index}
                            category={category.category}
                            data={category.data}
                        />
                    )
                })
    }

    console.log(searchResult)

    return (
        <Container>
            { whatShow }
        </Container>
    )
}

/* export const Main = memo(MainComponent) */