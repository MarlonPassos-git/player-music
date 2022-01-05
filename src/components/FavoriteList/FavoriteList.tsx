import React from 'react'
import { SectionItem } from '../SectionItem/SectionItem'
import { Contatainer } from './styled'

interface FavoriteListProps { 
    
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
        
    

}

export default function FavoriteList({ data }: FavoriteListProps) {


    console.log(data)
    return (
        <Contatainer>
            { data.map((music) => <SectionItem key={music.id} data={music}/> ) }
        </Contatainer>
    )
}
