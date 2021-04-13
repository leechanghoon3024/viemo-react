import Vimeo from "@u-wave/react-vimeo";
import {useCallback, useEffect, useState} from "react";
import ReactPlayer from 'react-player'
import './App.css';

const Video = ({match, location}) => {
    console.log(match.params.id)
    console.log(location)
    const [ id, setId] = useState(-1)
    const [ hide, setHide] = useState(true)
    useEffect(()=>{
        window.addEventListener('resize', isHiding)
        document.addEventListener('webkitfullscreenchange', onFullScreen)
        document.addEventListener("fullscreenchange", onFullScreen);
        document.addEventListener("mozfullscreenchange", onFullScreen);
    },[])

    useEffect(()=>{
        const vimeo = match.params?.id ?? 532522978
        setId(vimeo)
    },[match.params.id])

    const isHiding = () => {
        setHide(window.innerWidth >= 520)
        console.log(window.innerWidth >= 520)
    }
    const onError = (e) =>{
        setId(-1)
        console.log("eeee", e)

    }


    const onFullScreen = (e) => {
        const isFullscreenNow = document.webkitFullscreenElement !== null
        console.log('full', isFullscreenNow)
        window.postMessage(isFullscreenNow ? 'true' : 'false')
    }

    return (
        <div scroll="no" style={ {  overflow: 'hidden', } }>
            {id !== -1 ? (
                <Vimeo
                    style={{
                        width : '100vw', height : '100vh'
                    }}
                    onError={onError}
                    video={id}
                    autoplay={true}
                    responsive
                    loop
                    showByline={false}
                    showTitle={false}
                    controls={hide}
                    color={'FF4C22'}

                    webkitallowfullscreen={true}
                    showPortrait={false}
                />
                // <div className='player-wrapper'>
                //
                //     <iframe frameBorder="0" width="100%" height="100%"
                //             className='react-player'
                //             allow={'autoplay; fullscreen; picture-in-picture'}
                //             src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&speed=0&color=ff4c22&autoplay=1&loop=1`}
                //             webkitAllowFullScreen={true}
                //             mozAllowFullScreen={true}
                //             allowFullScreen={true}/>
                // </div>
            )
            :
                (
                    <div style={{width : '100vw', height : '100vh', background : '#222'}}>
                    </div>
                )}

        </div>
    )
}
export default Video;
