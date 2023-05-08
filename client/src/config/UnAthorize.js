import {store} from "../store"
import { logOut } from "../store/Reducer/AuthSlice"

export const UnAthurize = (error) => {
    if(error?.status === 401){
        store.dispatch(logOut())
        window.location.replace("/login");
    }
}