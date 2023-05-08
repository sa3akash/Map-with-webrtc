/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import SingleMessage from "./SingleMessage"
import { useEffect, useRef } from "react";

const Messages = ({chat}) => {
  const {socketId} = chat;
    const messages = useSelector(state=>state.messanger.chatHistory[socketId])
    const scrolRef = useRef()

    const scrollToBottom =() => {
      scrolRef.current.scrollIntoView({behavior: "smooth"})
    }

    useEffect(scrollToBottom,[messages])
  return (
    <div className="chatbox_messages_container">
        {
          messages && messages.map((m,i)=>(
                <SingleMessage key={i} own={m.myMessage} content={m.content}/>
            ))
        }
        <div ref={scrolRef}/>
    </div>
  )
}

export default Messages



// const messag = [
//     {
//         id: 1,
//         myMessage: true,
//         content: "Hello, world."
//     },
//     {
//         id: 2,
//         myMessage: false,
//         content: "Hello,"
//     },
// ]