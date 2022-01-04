import React, { useEffect, useRef, useState } from 'react'
import { ArtistName, Container, Controls, CurrentTime, DurationTime, MusicName, Picture, PlayPauseButton, ProgressBar, Volume, WrapperMusicInfos } from './styled'
import SearchBar from '../SearchBar/SearchBar'
import { useSearchResult } from '../../context/SearchResult'
import { FaPlay, FaPause } from "react-icons/fa"
import { useFormatSeconds } from '../../hooks/useFormatSeconds'


export function MusicPlayer() {

    

    //@ts-ignore
    const { currentMusic, setCurrentMusic, favoriteMusics, setFavoriteMusics } = useSearchResult()
    const pictureURL = `https://e-cdns-images.dzcdn.net/images/cover/${currentMusic.md5_image}/250x250-000000-80-0-0.jpg`
    const audio = useRef<HTMLAudioElement>(null)
    const [paused, setPaused] = useState(false)
    const [time, setTime] = useState(0)
    //@ts-ignore
    const duration = +audio?.current?.duration
    
    useEffect(() => {
        audio.current?.play()
        setPaused(false)
        
    }, [currentMusic])

    const formatSeconds = useFormatSeconds

    function handlerPlayPauseButton() { 
        if (paused) { 
            audio.current?.play()
            setPaused(false)
        } else { 
            audio.current?.pause()
            setPaused(true)
        }
    }

    function handlerEndMusic() { 
        setPaused(true)
    }

    function handlerTimeUpdate() { 
        // @ts-ignore
        setTime(+audio?.current?.currentTime)
    }

    

    if (currentMusic.id === undefined) {
        return <Container>nada</Container>
    }

    return (
        <Container>
            
            <WrapperMusicInfos>
                <Picture src={pictureURL} />
                <MusicName>{currentMusic.title}</MusicName>
                <ArtistName>{currentMusic?.artist?.name}</ArtistName>
            </WrapperMusicInfos>
            <Controls>
                <audio
                    src={currentMusic.preview}
                    controls
                    ref={audio}
                    onEnded={handlerEndMusic}
                    onTimeUpdate={handlerTimeUpdate}
                
                />
                <PlayPauseButton
                    onClick={handlerPlayPauseButton}
                >
                    {(paused) ?  <FaPlay color="var(--white)" /> : <FaPause color="var(--white)"/>}
                </PlayPauseButton>
                <ProgressBar value={time} max={duration}>70 %</ProgressBar>
                <CurrentTime>{formatSeconds(time)}</CurrentTime>
                <DurationTime>{formatSeconds(duration)}</DurationTime>
                
            </Controls>
            <Volume></Volume>
            
        </Container>
    )
}
