const { removeOnlineUser } = require("../storeSocket")
const { disconnectUserToRoom } = require("./handleVideoRoom")


const socketDisconnect = (socket) =>{
    //console.log(`socket disconnected: ${socketId}`)
    removeOnlineUser(socket.id)
    disconnectUserToRoom(socket)
}



module.exports ={
    socketDisconnect
}