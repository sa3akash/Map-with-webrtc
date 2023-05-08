const { addOnlineUser } = require("../storeSocket")
const { brodcastVideoRooms } = require("./handleVideoRoom")


exports.loginHandler = (socket,data)=>{
    addOnlineUser(socket,data)
    brodcastVideoRooms()
}