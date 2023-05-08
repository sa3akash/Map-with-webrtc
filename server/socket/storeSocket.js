
let io = null;
const setSocketInstance = (instance) => {
    io = instance;
}

let onlineUser = {};

const getOnlineUser = () => {
    return onlineUser;
}
const getIo = () => {
    return io;
}

// add user
const addOnlineUser = (socket,data) => {
    socket.join("log-user")
    onlineUser[socket.id]={
        name: data.name,
        coords: data.coords
    }
    //console.log(onlineUser)
    const addData = {
        socketId: socket.id,
        name: data.name,
        coords: data.coords,
    }
    io.to("log-user").emit("add-online-user", addData)
    io.to(socket.id).emit("online-user", convertOnlineUersToArray())
}
// convert object to array
const convertOnlineUersToArray = () => {
    let onlineUserArray = []
    Object.entries(onlineUser).forEach(([key,value])=>{
        onlineUserArray.push({
            socketId: key,
            name: value.name,
            coords: value.coords
        })
    })
    return onlineUserArray;
}


// remove user
const removeOnlineUser = (socketId) => {
    if(onlineUser[socketId]){
        delete onlineUser[socketId]
    }
    //console.log(onlineUser)
    io.to("log-user").emit("disconnect-user", {socketId})
}


module.exports = {
    setSocketInstance,
    addOnlineUser,
    removeOnlineUser,
    getOnlineUser,
    getIo
}