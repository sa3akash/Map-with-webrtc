import {useSelector} from "react-redux"
import CreateRoomButton from "./CreateRoomButton";
import RoomJoinButton from "./RoomJoinButton";
import ParticipantsVideo from "./ParticipantsVideo";

const VideoRooms = () => {
  return (
    <div className="">
      <RoomList />
      <ParticipantsVideo/>
    </div>
  );
};

export default VideoRooms;

const RoomList = () => {
  const {rooms} = useSelector(state=>state.videoRoom)

  return (
    <div className="map_page_v_rooms_list">
      <CreateRoomButton />
      
      {rooms && rooms.map((r, i) => (
        <RoomJoinButton
          key={i}
          creatorName={r.participants[0].name}
          roomId={r.id}
          amountOfParticipants={r.participants.length}
        />
      ))}
    </div>
  );
};



// const DUMMY_ROOM = [
//   {
//     id: 1,
//     participants: [
//       {
//         peerId: 1,
//         socketId: 1,
//         name: "Shakil Ahmed",
//       },
//     ],
//   },
//   {
//     id: 2,
//     participants: [
//       {
//         peerId: 2,
//         socketId: 2,
//         name: "Avro Khan",
//       },
//     ],
//   },
// ];
