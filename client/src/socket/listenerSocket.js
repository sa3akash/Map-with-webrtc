import { store } from "../store"
import { logOut } from "../store/Reducer/AuthSlice";
import { addOnlineUser, removeDiconnetUsers, setOnineUsers } from "../store/Reducer/mapSlice"
import { addChatBox } from "../store/Reducer/messangerSlice";
import { addMessageStore } from "../store/Reducer/messangerSlice";
import { setRooms } from "../store/Reducer/videoRoomSlice";


export const userConnecton = (socketId) => {
    console.log(`successfully connected to ${socketId}`);
}




export const errorUserConnecton = () => {
    console.log("Your are not authenticated user.")
    store.dispatch(logOut())
    window.location.replace("/login");
}


// disconnect room
export const disconnectUserStore = (socketId) => {
    store.dispatch(removeDiconnetUsers(socketId))
}




export const onlineUserStore = (socketId,data) => {
    store.dispatch(setOnineUsers(
        data.map(user=>{
            if(user.socketId === socketId){
                user.mySelf = true;
            }
            return user;
        })
    ))
}

export const addOnlineUserStore = (socketId,data) => {
    if(socketId !== data.socketId){
        store.dispatch(addOnlineUser(data))
    }
}

// disconnect room
export const recevedMessage = (data) => {
    store.dispatch(addMessageStore({
        ...data,
        myMessage: false
    }))
    openChatBoxIfClosed(data.socketId)
}



const openChatBoxIfClosed = (socketId) => {
    const {chatBoxes} = store.getState().messanger;
    const {onlineUsers} = store.getState().map;
    
    const onlineUser = onlineUsers.find(u=>u.socketId ===socketId);

    if(!chatBoxes.find(chat=>chat.socketId ===socketId)){
        store.dispatch(addChatBox({
            name : onlineUser.name,
            socketId
        }))
    }
}


/// video rooms

export const videoRooms = (data) => {
    store.dispatch(setRooms(data))
}
