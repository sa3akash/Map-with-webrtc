const { getOnlineUser, getIo } = require("../storeSocket");



const onlineUsers = getOnlineUser()

const sendMessageHandler = (socket,data) => {
    const {id,socketId:receiverId,content} = data;

    if(onlineUsers[receiverId]){
        getIo().to(receiverId).emit("receive-message", {
            socketId: socket.id,
            content,
            id,
        })
    }
}


module.exports = sendMessageHandler;