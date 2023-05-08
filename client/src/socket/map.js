import {store} from "../store"
import { setMyLocation } from "../store/Reducer/mapSlice"
// import { getFakeLocation } from "../config/FAKE_LOCATION"

// handle success
const onSuccess = (position) => {
    // console.log(position)
    store.dispatch(setMyLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    }))
}

// handle error
const onError = (error) => {
    console.log("User Blocked Access Location")
    console.log(error.message)
}
// handle options
const locationOptions = {
    enableHighAcuracy: true,
    timeout: 5000,
}


// get my location 
export const getMapLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, locationOptions)
    // development only
//    onSuccess(getFakeLocation())
}