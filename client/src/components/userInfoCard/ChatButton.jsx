import { useDispatch } from "react-redux"
import { addChatBox } from "../../store/Reducer/messangerSlice"

// eslint-disable-next-line react/prop-types
const ChatButton = ({socketId,name}) => {

  const dispatch = useDispatch()

    const handleChatBox= () =>{
      dispatch(addChatBox({
        socketId,name
      }))
    }
    
  return (
   <img src="/chat-icon.svg" alt="chat" className="map_page_card_img" onClick={handleChatBox}/>
  )
}

export default ChatButton