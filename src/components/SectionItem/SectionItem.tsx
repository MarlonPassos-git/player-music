import { Container, Img, TitleMusic } from "./styled";
import { memo} from "react";


interface CategorySectionProps { 
        data: DataProps
}

interface DataProps { 
    id: string,
    link: string
    title?: string,
    name?: string,
    cover_big?: string,
    picture_big?: string,
    md5_image?: string
}

function SectionItemComponet({ data }: CategorySectionProps) { 
    

    function getPicture(data: DataProps) { 
        /* console.log() */
        let url = data?.cover_big || data?.picture_big

        if (!(data?.cover_big || data?.picture_big)) { 
            url = `https://e-cdns-images.dzcdn.net/images/cover/${ data.md5_image }/250x250-000000-80-0-0.jpg`
        }

        return url
    }

    

    return (
        <Container>
            <Img
                src={getPicture(data)}
                draggable={false}
            />
            <TitleMusic> 
                {data?.title || data?.name}
            </TitleMusic>
            
        </Container>
    )
}

export const SectionItem = memo(SectionItemComponet)