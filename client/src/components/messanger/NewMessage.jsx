/* eslint-disable react/prop-types */
import { useState } from "react";
import { sendMessage } from "../../socket/emitterSocket";
import { useSelector } from "react-redux";

const NewMessage = ({ chat }) => {
  const [message, setMessage] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const { socketId } = chat;

  const handleKeyDown = (e) => {
    if (e.code === "Enter" && message.length > 0) {
      handleMessage();
      setMessage("");
    }
  };

  const { onlineUsers } = useSelector((state) => state.map);

  const handleMessage = () => {
    if (onlineUsers.find((user) => user.socketId === socketId)) {
      sendMessage(socketId, message);
    } else {
      setInputDisabled(true);
    }
  };

  return (
    <div className="chatbox_new_message_container">
      <input
        type="text"
        className="chatbox_new_message_input"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={inputDisabled}
      />
    </div>
  );
};

export default NewMessage;
