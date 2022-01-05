import styled from 'styled-components'
import { progressiveClamp, Rem,  } from 'progressive-size'

export const Container = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;

    align-items: center;
    height: ${Rem(92)};
    padding: 0 var(--spacing-padding);
    border-top: 1px solid var(--black);
    position: fixed;
    background-color: var(--white);
    width: 100%;
    bottom: 0;
    z-index: 100;


    @media (max-width: 650px) {
        grid-template-columns: 1fr;
        height: ${Rem(176)};
    }
`

export const Picture = styled.img`
    height: ${Rem(56)};
    width: ${Rem(56)};
    grid-area: picture;
    margin-right: ${Rem(15)};

`
export const MusicName = styled.p`
    grid-area: musicName;
    align-self: end;
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
`

export const ArtistName = styled.p`
    grid-area: artistName;
    font-weight: 300;
    font-size: 16px;
    align-self: start;

`

export const WrapperMusicInfos = styled.div`
    display: grid;
    grid-template: 
        "picture musicName "
        "picture artistName "
        / ${Rem(71)} 1fr; 
    ;
`

export const Controls = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template:
        "playPause playPause playPause"
        "currentTime progressBar durationTime"
        /  1fr  minmax(100px, 300px) 1fr    
    ;
    

    audio {
        display: none;
    }
`

export const PlayPauseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${Rem(32)};
    width: ${Rem(32)};
    background-color: var(--strong_cyan);
    border-radius: 16px;
    cursor: pointer;
    grid-area: playPause;
`



export const ProgressBar = styled.progress`
    width: 100%;
    height: 10px;
    padding: 0 10px;
    grid-area: progressBar;

    &::-webkit-progress-value {
        background-color: var(--strong_cyan);
    }

    &::progress-bar {
        background-color: var(--red);
    }
`

export const CurrentTime = styled.span`
    grid-area: currentTime;
    justify-self: end;
`

export const DurationTime = styled(CurrentTime)`
    grid-area: durationTime;
    justify-self: start;    
`

export const Volume = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 550px) {
        justify-content: center;
    }
    
`

export const Button = styled(PlayPauseButton)`

`

export const VolumeBar = styled(ProgressBar)`
    width: 100px;

`