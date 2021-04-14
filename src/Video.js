import Vimeo from "@u-wave/react-vimeo";
import {useCallback, useEffect, useRef, useState} from "react";
import ReactPlayer from 'react-player'
import './App.css';
import fscreen from 'fscreen';

const Video = ({match, location}) => {

    const [ id, setId] = useState(-1)
    const [ hide, setHide] = useState(true)
    const handleRef = useRef(null);
    const [play, setPlay] = useState(false)


    useEffect(()=>{
        if(window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage('change') // is working
        }
    },[id, play])

    const test = () => {
        console.log("test change") // web working
        if(window.ReactNativeWebView){
            window.ReactNativeWebView.postMessage('change') // but this not working
        }
    }

    useEffect(()=>{
        const vimeo = match.params?.id ?? 532522978
        setId(vimeo)
    },[match.params.id])




    return (
        <div scroll="no" style={ {  overflow: 'hidden' } }>
            {id !== -1 ? (
                // <Vimeo
                //     id={'video'}
                //     style={{
                //         width : '100%', height : '100%'
                //     }}
                //     onError={onError}
                //     video={id}
                //     autoplay={true}
                //     loop
                //     showByline={false}
                //     showTitle={false}
                //     controls={hide}
                //     color={'FF4C22'}
                //
                //     webkitallowfullscreen={true}
                //     showPortrait={false}
                // />
                <div
                    ref={handleRef}
                    className='player-wrapper'>

                    {/*<iframe frameBorder="0" width="100%" height="100%"*/}
                    {/*        className='react-player'*/}
                    {/*        allow={'autoplay; fullscreen; picture-in-picture'}*/}
                    {/*        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&speed=0&color=ff4c22&autoplay=1&loop=1`}*/}
                    {/*        webkitAllowFullScreen={true}*/}
                    {/*        mozAllowFullScreen={true}*/}
                    {/*        allowFullScreen={true}/>*/}
                    <ReactPlayer
                        className='react-player'
                        url={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&speed=0&color=ff4c22&autoplay=1&loop=1`}
                        controls={true}


                        config={ {
                            vimeo : {
                                playerOptions: {
                                    playsinline: 1,
                                    color : 'ff4c22',
                                    byline : 0,
                                    loop : 1,
                                    portrait : 0,
                                    autoplay : 1,
                                }
                            }
                        }}
                        width={'100%'}
                        height={'100%'}

                    />
                </div>
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
