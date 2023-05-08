import io from "socket.io-client";
import variables from "../config/Variable";
import { store } from "../store";
import { addOnlineUserStore, disconnectUserStore, errorUserConnecton, onlineUserStore, recevedMessage, userConnecton, videoRooms } from "./listenerSocket";
import { calcelVideoRoom, call } from "./webrtcHandler";

const { user } = store.getState().user;

const socket = new io(variables.serverUrl, {
  auth: { token: user?.token },
  transports: ["websocket"],
});

// listen all events
export const socketWithServer = () => {
   // connection socket user
   socket.on("connect", () => {
    userConnecton(socket.id)
  });
  // listener
  socket.on("online-user",(data)=>{
    onlineUserStore(socket.id,data)
  })

  socket.on("add-online-user",(data)=>{
    addOnlineUserStore(socket.id,data)
  })

  socket.on("receive-message",(data)=>{
    recevedMessage(data)
  })
  socket.on("video-rooms",(data)=>{
    videoRooms(data)
  })
  socket.on("video-room-init",(data)=>{
    call(data)
  })
  socket.on("video-call-cancel",(data)=>{
    calcelVideoRoom(data)
  })


  socket.on("disconnect-user",({socketId})=>{
    disconnectUserStore(socketId)
  })

  // connection socket any error
  socket.on('connect_error', () => {
    errorUserConnecton()
 })
};



// emit all events

export const loginUser = (data) => {
  socket.emit("login-user", data)
}

export const sendMessageSocket = (data) => {
  socket.emit("send-message", data)
}

export const createRoom = (data) => {
  socket.emit("video-room-create", data)
}

export const joinRoom = (data) => {
  socket.emit("video-room-join", data)
}
export const leaveRoomSocket = (data) => {
  socket.emit("leave-room", data)
}