import { Container, FavoriteButton, Img, PlayButton, TitleMusic, WrapperControllers, WrapperImg } from "./styled";
import { memo} from "react";
import { FaPlay, FaHeart } from "react-icons/fa";

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
    md5_image?: string,
    preview?: string
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

    const isMusic = (data?.preview !== undefined)
    

    return (
        <Container>
            <WrapperImg>
                <Img
                    src={getPicture(data)}
                    draggable={false}
                    onClick={() => { 
                        console.log(isMusic)
                    }}
                />
                <WrapperControllers>
                    <PlayButton>
                        <FaPlay />
                    </PlayButton>
                    <FavoriteButton
                        className="FavoriteButton"
                    >
                        <FaHeart />
                    </FavoriteButton>
                </WrapperControllers>
            </WrapperImg>
            
            <TitleMusic
                href={data.link}
                target="_blank"
            > 
                {data?.title || data?.name}
            </TitleMusic>
            
        </Container>
    )
}

export const SectionItem = memo(SectionItemComponet)