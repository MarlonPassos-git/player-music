import React, { useEffect, useRef, useState } from 'react'
import { ArtistName, Button, Container, Controls, CurrentTime, DurationTime, MusicName, Picture, PlayPauseButton, ProgressBar, Volume, VolumeBar, WrapperMusicInfos } from './styled'
import SearchBar from '../SearchBar/SearchBar'
import { useSearchResult } from '../../context/SearchResult'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown } from "react-icons/fa"
import { useFormatSeconds } from '../../hooks/useFormatSeconds'


export function MusicPlayer() {

    

    //@ts-ignore
    const { currentMusic, setCurrentMusic, favoriteMusics, setFavoriteMusics } = useSearchResult()
    const pictureURL = `https://e-cdns-images.dzcdn.net/images/cover/${currentMusic.md5_image}/250x250-000000-80-0-0.jpg`
    const audio = useRef<HTMLAudioElement>(null)
    const [paused, setPaused] = useState(false)
    const [time, setTime] = useState(0)
    const [volume, setVolume] = useState(1)
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

    function handlerVolumeDown() { 
        // @ts-ignore
        //audio.current?.volume = audio.current?.volume - 0.1
        console.log(audio.current.volume)

        // @ts-ignore
        audio.current.volume = Math.max(audio.current.volume - 0.1, 0)
        // @ts-ignore
        setVolume(audio.current.volume)
    }

    function handlerVolumeUp() {
        // @ts-ignore
        console.log(audio.current.volume)

        // @ts-ignore
        audio.current.volume = Math.min(audio.current.volume + 0.1, 1)
        // @ts-ignore
        setVolume(audio.current.volume)
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
            <Volume>
                <Button
                    onClick={handlerVolumeDown}
                >
                    <FaVolumeDown
                        color="var(--white)"
                    />
                </Button>
                <VolumeBar value={volume} max={1} />
                <Button>
                    <FaVolumeUp
                        onClick={handlerVolumeUp}
                        
                        color="var(--white)"
                    />
                </Button>
            </Volume>
            
        </Container>
    )
}
