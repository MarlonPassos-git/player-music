import { memo, ReactNode, useEffect, useState } from "react"
import api from "../../services/user"
import { CategorySection } from "../CategorySection/CategorySection"
import { Container } from "./styled"
import { useSearchResult } from "../../context/SearchResult"

interface popularSoundsProps { 
    category: string,
    data: []
}

function MainComponent() {

    const [popularSounds, setPopularSounds] = useState<Array<popularSoundsProps>>([])

    //@ts-ignore
    const {searchResult, setSearchResult} = useSearchResult()
    
    useEffect(() => {   
        api.get('popularSounds').then(response => {
            
            
            setPopularSounds(response.data)
            
        })
    }, [])

    let whatShow: ReactNode 
    
    if (searchResult.hasOwnProperty('data')) {
        whatShow = <h1>asas</h1>
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




    return (
        <Container>
            { whatShow }
        </Container>
    )
}

export const Main = memo(MainComponent)