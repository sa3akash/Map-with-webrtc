const { getOnlineUser, getIo } = require("../storeSocket");


let videoRooms = {}

let userRoomId = null

const handleVideoRoomCreate = (socket,data) => {
    const {peerId,roomId} = data;
    const onlineUser = getOnlineUser()
    userRoomId = roomId;
    // adding new room
    videoRooms[roomId]={
        participants:[
            {
                socketId: socket.id,
                peerId: peerId,
                name: onlineUser[socket.id]?.name
            }
        ]
    }
    // brodcast video rooms
    brodcastVideoRooms()
}


const brodcastVideoRooms = () => {

    let roomArray = []

    Object.entries(videoRooms).forEach(([key,value])=>{
        roomArray.push({
            id: key,
            participants: value.participants
        })
    })

    getIo().emit("video-rooms",roomArray)
}





const handleVideoRoomJoin = (socket,data) => {
    const {peerId,roomId} = data;
    videoRooms[roomId].participants.forEach(p=>{
        socket.to(p.socketId).emit("video-room-init",{
            newParticipantPeerId: peerId
        })
    })
    const onlineUser = getOnlineUser()
    videoRooms[roomId].participants = [
        ...videoRooms[roomId].participants,
        {
            socketId: socket.id,
            peerId: peerId,
            name: onlineUser[socket.id]?.name
        }
    ]
    brodcastVideoRooms()
}



const leaveRooom = (socket,data) => {
    const {roomId} = data;

    if(videoRooms[roomId]){
        videoRooms[roomId].participants = videoRooms[roomId].participants.filter(p=>p.socketId !== socket.id)
    }
    if(videoRooms[roomId].participants.length > 0){
        socket.to(videoRooms[roomId].participants[0].socketId).emit("video-call-cancel",{
            socketId: socket.id
        })
    }

    if(videoRooms[roomId].participants.length < 1){
        delete videoRooms[roomId]
    }
    brodcastVideoRooms()
}


// if user disconnected then this user leave in the room
const disconnectUserToRoom = (socket)=>{
    Object.entries(videoRooms).forEach(([key,value])=>{
        const participants = value.participants.find(u=>u.socketId === socket.id)

        if(participants) {
            leaveRooom(socket,{roomId:key})
        }
    })
}


module.exports = {
    handleVideoRoomCreate,
    disconnectUserToRoom,
    handleVideoRoomJoin,
    brodcastVideoRooms,
    leaveRooom
}