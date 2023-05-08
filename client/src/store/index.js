import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './Reducer/AuthSlice';
import { authApi } from './api/authApi';
import mapSlice from "./Reducer/mapSlice"
import messangerSlice from './Reducer/messangerSlice';
import videoRoomSlice from './Reducer/videoRoomSlice';
export const store = configureStore({
  reducer: {
    user: AuthSlice,
    map: mapSlice,
    messanger: messangerSlice,
    videoRoom: videoRoomSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: ["videoRoom/setLocalStream","videoRoom/setRemoteStream"],
      ignoredPaths: ["videoRoom.localStream","videoRoom.remoteStream"]
      
    }
  }).concat(authApi.middleware),
})