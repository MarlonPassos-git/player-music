import { useEffect, useState } from "react"
import api from "../../services/user"
import { CategorySection } from "../CategorySection/CategorySection"
import { Container } from "./styled"

interface popularSoundsProps { 
    category: string,
    data: []
}

export function Main() { 

    const [popularSounds, setPopularSounds] = useState<Array<popularSoundsProps>>([])
    
    useEffect(() => {   
        api.get('popularSounds').then(response => {
            
            console.log(response.data)
            setPopularSounds(response.data)

        })
    }, [])


    return (
        <Container>
            {
                popularSounds.map((category, index) => { 
                    return (
                        <CategorySection
                            key={index}
                            category={category.category}
                            data={category.data}
                        />
                    )
                })
            }
        </Container>
    )
}