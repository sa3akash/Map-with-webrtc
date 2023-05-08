import Messages from "./Messages";
import NavbarChatBox from "./NavbarChatBox";
import NewMessage from "./NewMessage";

const ChatBox = (props) => {
  return (
    <div className="chatbox_container">
        <NavbarChatBox {...props}/>
        <Messages {...props}/>
        <NewMessage {...props}/>
    </div>
  )
}

export default ChatBox;


