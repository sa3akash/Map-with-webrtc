import ChatBox from "./ChatBox"
import "./messanger.css";
import {useSelector} from "react-redux"

const Messanger = () => {
    const {chatBoxes} = useSelector(state=>state.messanger)
    
  return (
    <div className="messenger_container">
    {chatBoxes && chatBoxes.map((chat,i)=>(
        <ChatBox key={i} chat={chat}/>
    ))}
    </div>
  )
}

export default Messanger


// const DUMMT_ChatBox = [
//     {
//         name: "Shakil Ahmed",
//         socketId: 1651561561,
//         messages:[]
//     },
//     {
//         name: "Avro Ahmed",
//         socketId: 1425425525,
//         messages:[]
//     },
//     {
//         name: "Jhon Dow",
//         socketId: 74747474,
//         messages:[]
//     },
//     {
//         name: "Raju Akbor",
//         socketId: 1651561561,
//         messages:[]
//     },
//     // {
//     //     name: "Subroto Khan",
//     //     socketId: 225255555,
//     //     messages:[]
//     // },
// ]