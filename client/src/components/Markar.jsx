import { useDispatch } from "react-redux"
import {setCardChosenOption} from "../store/Reducer/mapSlice"

// eslint-disable-next-line react/prop-types
const Markar = ({name,mySelf,socketId,coords}) => {
  const dispatch = useDispatch()

  const handleChoseOption = () => {
    if(!mySelf){
      dispatch(setCardChosenOption({
        socketId,
        name,
        location: coords,
      }))
    }
  }
  return (
    <div className="map_page_marker_container" onClick={handleChoseOption}>
        <img src="/location-icon.svg" alt="location" className="map_page_marker_img"/>
        <span className="map_page_marker_text">{mySelf==undefined ? name : "Me"}</span>
    </div>
  )
}

export default Markar