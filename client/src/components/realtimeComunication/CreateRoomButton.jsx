import { useSelector } from "react-redux";
import { createVideoRoom, getLocalStream } from "../../socket/localHandler";

const CreateRoomButton = () => {
  const { inRoom } = useSelector((state) => state.videoRoom);
  
  const createRoom = async () => {
    if (inRoom) {
      return alert("Your are already in room.");
    }
    const success = await getLocalStream();
    if (success) {
      createVideoRoom();
    } else {
      alert("Please access audio and video streams.");
    }
  };

  return (
    <img
      src="/call-icon.svg"
      alt="call"
      onClick={createRoom}
      className="map_page_v_rooms_join_button"
    />
  );
};

export default CreateRoomButton;
