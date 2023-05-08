import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myLocation: {},
  onlineUsers: [],
  cardChosenOption: null,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMyLocation: (state, action) => {
      state.myLocation = action.payload;
    },
    setOnineUsers: (state,action) => {
      state.onlineUsers = action.payload;
    },
    addOnlineUser: (state,action) => {
      state.onlineUsers = [...state.onlineUsers,action.payload];
    },
    removeDiconnetUsers: (state,action) => {
      state.onlineUsers = state.onlineUsers.filter(user=>user.socketId !== action.payload)
    },
    setCardChosenOption: (state,action) => {
      state.cardChosenOption = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMySocketId, setMyLocation,setOnineUsers,addOnlineUser,removeDiconnetUsers,setCardChosenOption } = mapSlice.actions;

export default mapSlice.reducer;
