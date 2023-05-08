import {v4 as uuid} from "uuid"
import * as emitter from "./socketWithServer"
import { store } from "../store";
import { addMessageStore } from "../store/Reducer/messangerSlice";

export const loginUserSocket = (data) => {
  emitter.loginUser(data)
};



export const sendMessage =(socketId,content)=>{
  const message = {
    id: uuid(),
    socketId,
    content,
    myMessage: true
  }
  emitter.sendMessageSocket(message)
  store.dispatch(addMessageStore(message))
}


