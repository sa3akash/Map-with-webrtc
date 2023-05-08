import { useSelector } from "react-redux"
import Video from "./Video"
import RoomActionButtons from "./RoomActionButtons"

const ParticipantsVideo = () => {
    const {inRoom, localStream,remoteStream} = useSelector(state=>state.videoRoom)
  return (
    <div className="map_page_v_rooms_videos_container">
        {
            inRoom && <RoomActionButtons roomId={inRoom}/>
        }
        {
            inRoom && localStream && <Video stream={localStream} muted/>
        }
        {
            inRoom && remoteStream && <Video stream={remoteStream}/>
        }
    </div>
  )
}

export default ParticipantsVideo;