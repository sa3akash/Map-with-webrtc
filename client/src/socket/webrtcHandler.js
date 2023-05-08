
import {Peer} from "peerjs"
import { store } from "../store";
import { setInRoom, setRemoteStream } from "../store/Reducer/videoRoomSlice";
import { leaveRoomSocket } from "./socketWithServer";


// eslint-disable-next-line no-unused-vars
let peerId;
let peer;

export const getPeerId = () => {
    return peerId
}

// conect with server 
export const connectWithPeerServer = () => {
    peer = new Peer(undefined,{
        host: "localhost",
        port: 9000,
        path: "/peer"
    });
    peer.on("open", (id)=>{
        peerId = id;
    })
    // call
    peer.on("call", async (call)=>{
        const localStream = store.getState().videoRoom.localStream;
        call.answer(localStream) // send stream to 
        call.on("stream",(remoteStream)=>{
            console.log("remote stream came receiver")
            //console.log(remoteStream)
            store.dispatch(setRemoteStream(remoteStream))
        })
    })
    
}


export const call = (data) => {
    const {newParticipantPeerId} = data;
    const localStream = store.getState().videoRoom.localStream;

    const peerCall = peer.call(newParticipantPeerId,localStream)
    peerCall.on("stream",(remoteStream)=>{
        console.log("remote stream came caller")
        //console.log(remoteStream)
        store.dispatch(setRemoteStream(remoteStream))
    })
}

export const leaveRoom = (roomId) => {

    leaveRoomSocket({roomId})

    store.dispatch(setInRoom(null))
    //store.dispatch(setLocalStream(null))

}

export const calcelVideoRoom = () => {
  
    for(let conn in peer.connections){
        peer.connections[conn].forEach(s => {
            console.log("closing connection")
            s.peerConnection.close()
            if(s.close) s.close()
        })
            
    }
    store.dispatch(setRemoteStream(null))
}