import ChatButton from "./ChatButton"


// eslint-disable-next-line react/prop-types
const ActionButton = ({socketId,name}) => {
  return (
    <div className="map_page_card_buttons_container">
    <ChatButton socketId={socketId} name={name}/>
    </div>
  )
}

export default ActionButton