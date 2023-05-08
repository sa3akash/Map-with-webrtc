import { useEffect, useRef } from "react"

// eslint-disable-next-line react/prop-types
const Video = ({stream,muted}) => {
  const videoRef = useRef()

  useEffect(()=>{
    const videoEliment = videoRef.current;
    videoEliment.srcObject = stream;

    videoEliment.onloadedmetadata = () => {
      videoEliment.play()
    }
  },[stream])
  return (
    <div className="map_page_v_rooms_video_container">
      <video width="98%" height="98%" ref={videoRef} muted={muted} autoPlay playsInline/>
    </div>
  )
}

export default Video