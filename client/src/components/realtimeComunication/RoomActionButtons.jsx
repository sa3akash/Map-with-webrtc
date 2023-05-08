import { useState } from "react";
import { leaveRoom } from "../../socket/webrtcHandler";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const RoomActionButtons = ({roomId}) => {
  const [cameraOff, setCameraOff] = useState(false)
  const [muted, setMuted] = useState(false)

  const {localStream} = useSelector(state=>state.videoRoom)

  const handleLeaveRoom = () => {
    leaveRoom(roomId)
  };
  const handleMute = () => {
    setMuted(prev=>!prev)
    localStream.getAudioTracks()[0].enabled = !localStream.getAudioTracks()[0].enabled
  };
  const handleSwitchCamera = () => {
    setCameraOff(prev=>!prev)
    localStream.getVideoTracks()[0].enabled = !localStream.getVideoTracks()[0].enabled
  };

  return (
    <div className="m_page_v_rooms_video_buttons_container">
      <button
        className="m_page_v_rooms_video_button"
        onClick={handleSwitchCamera}
      >
        <img src={ cameraOff ? "/camera-off-icon.svg" : "/camera-icon.svg"} alt="camera" width={25} height={25} />
      </button>
      <button
        className="m_page_v_rooms_video_button"
        onClick={handleMute}
      >
        <img src={muted? "/mic-off-icon.svg":"/mic-icon.svg"} alt="mute" width={25} height={25} />
      </button>
      <button
        className="m_page_v_rooms_video_button"
        onClick={handleLeaveRoom}
      >
        <img src="/disconnect-icon.svg" alt="leave" width={25} height={25} />
      </button>
    </div>
  );
};

export default RoomActionButtons;
