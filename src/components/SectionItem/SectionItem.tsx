import { ArtistName, Container, Duration, FavoriteButton, Img, PlayButton, TitleMusic, WrapperControllers, WrapperImg } from "./styled";
import { memo} from "react";
import { FaPlay, FaHeart } from "react-icons/fa";
import { useFormatSeconds } from "../../hooks/useFormatSeconds";
import { useSearchResult } from "../../context/SearchResult";

interface CategorySectionProps { 
        data: DataProps
}

interface DataProps { 
    id: string,
    link: string
    title?: string,
    name?: string,
    cover_medium?: string,
    picture_medium?: string,
    md5_image?: string,
    preview?: string,
    duration?: string,
    artist?: {
        name: string,
        link: string,
    }
}

function SectionItemComponet({ data }: CategorySectionProps) {
    
    //@ts-ignore
    const { currentMusic, setCurrentMusic, favoriteMusics, setFavoriteMusics } = useSearchResult()
    //@ts-ignore
    const time = useFormatSeconds(+data.duration)
    const isMusic = (data?.preview !== undefined)
    
    

    function getPicture(data: DataProps) { 
        
        let url = data?.cover_medium || data?.picture_medium

        if (!(data?.cover_medium || data?.picture_medium)) { 
            url = `https://e-cdns-images.dzcdn.net/images/cover/${ data.md5_image }/250x250-000000-80-0-0.jpg`
        }

        return url
    }
    
    function handlerPlayButton() { 
        setCurrentMusic(data)
    }

    function handlerFavoriteButton() { 
        setFavoriteMusics([...favoriteMusics, data])
    }

    

    
    return (
        <Container
            onClick={() => { 
                        
                    }}
        >
            <WrapperImg>
                <Img
                    src={getPicture(data)}
                    draggable={false}
                    
                />{isMusic && (
                    <>
                        <WrapperControllers>
                            <PlayButton
                                onClick={handlerPlayButton}
                            >
                                <FaPlay />
                            </PlayButton>
                            <FavoriteButton
                                className="FavoriteButton"
                                onClick={handlerFavoriteButton}
                            >
                                <FaHeart />
                            </FavoriteButton>
                        </WrapperControllers>
                        <Duration>
                            { time }
                        </Duration>
                    </>
                )}
                
            </WrapperImg>
            
            <TitleMusic
                href={data.link}
                target="_blank"
            > 
                {data?.title || data?.name}
            </TitleMusic>
            {isMusic && (
                <ArtistName
                    href={data?.artist?.link}
                    target="_blank"
                >
                    {data?.artist?.name }
                </ArtistName>
            )}
            
        </Container>
    )
}

export const SectionItem = memo(SectionItemComponet)