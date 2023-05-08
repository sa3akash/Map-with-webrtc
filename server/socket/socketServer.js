const { socketDisconnect } = require("./handler/socketDisconnect");
const {loginHandler} = require("./handler/loginHandler");
const { setSocketInstance } = require("./storeSocket");
const verifyTokenSocket = require("../services/JWTSocket");
const socket = require("socket.io");
const sendMessageHandler = require("./handler/sendMessageHandler");
const { handleVideoRoomCreate, handleVideoRoomJoin, leaveRooom } = require("./handler/handleVideoRoom");


const connectServerToSocket = (server) => {
  const io = new socket.Server(server, {
    cors: {
      origin: "*",
      credentials: true,
      methods: ["GET", "POST"],
    },
  });
  io.use((socket, next) => {
    verifyTokenSocket(socket, next);
  });
  setSocketInstance(io)
  // connection
    io.on("connection", (socket) => {
    //console.log(`socket connected: ${socket.id}`);

    // register user 
    socket.on("login-user",(data)=>loginHandler(socket,data))
    socket.on("send-message",(data)=>sendMessageHandler(socket,data))
    socket.on("video-room-create",(data)=>handleVideoRoomCreate(socket,data))
    socket.on("video-room-join",(data)=>handleVideoRoomJoin(socket,data))
    socket.on("leave-room",(data)=>leaveRooom(socket,data))

    socket.on("disconnect", () => {
      socketDisconnect(socket);
    });
  });
};



module.exports = connectServerToSocket;
