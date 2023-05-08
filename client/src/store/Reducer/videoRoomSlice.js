import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inRoom: null,
  rooms: [],
  localStream: null,
  remoteStream: null,
};

export const videoRoomSlice = createSlice({
  name: "videoRoom",
  initialState,
  reducers: {
    setInRoom: (state, action) => {
      state.inRoom = action.payload;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setLocalStream: (state, action) => {
      state.localStream = action.payload;
    },
    setRemoteStream: (state, action) => {
      state.remoteStream = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInRoom, setRooms,setLocalStream,setRemoteStream } = videoRoomSlice.actions;

export default videoRoomSlice.reducer;
