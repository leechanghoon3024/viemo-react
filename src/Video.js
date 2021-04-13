import Vimeo from "@u-wave/react-vimeo";
import {useCallback, useEffect, useState} from "react";


const Video = ({match, location}) => {
    console.log(match.params.id)
    console.log(location)
    const [ id, setId] = useState(-1)
    const [ hide, setHide] = useState(true)
    useEffect(()=>{
        window.addEventListener('resize', isHiding)
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
    console.log(id)
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
                    showPortrait={false}
                />
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
