import { useSelector } from "react-redux";
import { getLocalStream, joinVideoRoom } from "../../socket/localHandler";

// eslint-disable-next-line react/prop-types
const RoomJoinButton = ({ creatorName, roomId, amountOfParticipants }) => {
  const { inRoom } = useSelector((state) => state.videoRoom);

  const handleJoinRoom = async () => {
    if (inRoom) {
      return alert("Your are already in room.");
    }
    if (amountOfParticipants > 1) {
      return alert("Room is full.");
    }
    const success = await getLocalStream();
    if (success) {
      joinVideoRoom(roomId);
    } else {
      alert("Please access audio and video streams.");
    }
  };

  return (
    <div onClick={handleJoinRoom} className="map_page_v_rooms_join_button">
      {creatorName && creatorName[0]}
    </div>
  );
};

export default RoomJoinButton;
