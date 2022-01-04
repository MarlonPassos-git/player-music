import { useEffect, useState } from "react";
import { useThrottle } from "../../hooks/useThrottle";
import api from "../../services/user";
import { SectionItem } from "../SectionItem/SectionItem";
import { Button, Contatainer, WrapperButton } from "./styled";

interface SearchResultProps { 
    searchResult: {
        data: [
            {
                id: string,
                link: string
                title?: string,
                name?: string,
                cover_big?: string,
                picture_big?: string,
                md5_image?: string,
                preview?: string,
                artist?: {
                    name: string,
                    link: string,
                }
            }
        ],
        next: string
    },

}

 

export function SearchResult({ searchResult }: SearchResultProps) { 



    const [data, setData] = useState(searchResult.data)
    const [nextResults, setNextResults] = useState(cleanNextResults(searchResult.next))
    useEffect(() => { 
        setData(searchResult.data)
        setNextResults(cleanNextResults(searchResult.next))
    }, [searchResult])
    
    


    function cleanNextResults(url: string) {
        const cleanUrl = url.replace('https://api.deezer.com/search?q=', '')

        return cleanUrl
    }

    function HandleNextResults(event: React.MouseEvent<HTMLElement>) { 

        // @ts-ignore
        const position = event.target.getBoundingClientRect().y
        console.log(position)

        api.get(`searchImput/${nextResults}`).then(response => {
        
            const dataApi = response.data.data
            const nextResults = response?.data?.next
            console.log(event.target)
            console.log(dataApi)
            

            if (nextResults !== undefined) { 
                setNextResults(cleanNextResults(nextResults))
                //@ts-ignore
                setData([...data, ...dataApi])
            }

            

            console.log(data)
        })
    }

    return (
        <Contatainer>
            { data.map((item, index) => { 
                return (
                    <SectionItem data={ item} key={Math.random()}></SectionItem>
                )
            })}
            
            <WrapperButton>
                <Button
                    onClick={(e)=>HandleNextResults(e)}
                >
                    Ver mais itens
                </Button>
            </WrapperButton>
            
        </Contatainer>
    )
}