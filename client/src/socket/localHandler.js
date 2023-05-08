import {v4 as uuid} from "uuid"
import {store} from  "../store"
import { setInRoom, setLocalStream } from "../store/Reducer/videoRoomSlice";
import { createRoom, joinRoom } from "./socketWithServer";
import { getPeerId } from "./webrtcHandler";


export const createVideoRoom = () => {
    const roomId = uuid();
    createRoom({
        peerId: getPeerId(), //change letter on real peerid
        roomId
    })
    store.dispatch(setInRoom(roomId))
}


export const joinVideoRoom = (roomId) => {
    joinRoom({
        peerId: getPeerId(), //change letter on real peerid
        roomId
    })
    store.dispatch(setInRoom(roomId))
}



export const getLocalStream = async () => {
    try{
        const localStream = await navigator.mediaDevices.getUserMedia({audio:true,video:true})
        store.dispatch(setLocalStream(localStream))
        return true
    }catch(err){
        console.log(err)
        console.log("User not allowed to access media devices")
        return false
    }

    
}