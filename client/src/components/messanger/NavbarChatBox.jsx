/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { removeChatBox } from "../../store/Reducer/messangerSlice";

const NavbarChatBox = ({chat}) => {
  return (
    <div className="chatbox_nav_bar_container">
        <ChatBoxLeval name={chat.name}/>
        <CloseButton socketId={chat.socketId}/>
    </div>
  )
}

export default NavbarChatBox;


const ChatBoxLeval=({name})=>{
    return(
        <p className="chatbox_nav_bar_label">{name}</p>
    )
}


const CloseButton =({socketId})=>{
    const dispatch = useDispatch()
    return(
        <div className="chatbox_close_icon_container">
            <img src="/close-icon.svg" alt="close" className="chatbox_close_icon_img" onClick={()=>dispatch(removeChatBox(socketId))}/>
        </div>
    )
}