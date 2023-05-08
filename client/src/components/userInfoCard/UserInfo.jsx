import { useSelector } from "react-redux";
import { calculateDistanceBetweenTwo } from "../../utils/calculateBetween";
import ActionButton from "./ActionButton";
// eslint-disable-next-line react/prop-types
const UserInfo = ({name,location,socketId}) => {
    const { myLocation } = useSelector((state) => state.map);
   const distance = calculateDistanceBetweenTwo(myLocation,location).toFixed(2)
  return (
    <div className="map_page_card_container">
        <Label text={name} fontSize="16px"/>
        <Label text={distance+" km"} fontSize="14px"/>
        <ActionButton socketId={socketId} name={name}/>
    </div>
  )
}

export default UserInfo


// eslint-disable-next-line react/prop-types
const Label = ({text,fontSize}) => {
    return (
        <p style={{fontSize}} className="map_page_card_label">{text}</p>
    )
}