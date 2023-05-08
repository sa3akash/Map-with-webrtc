import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatBoxes: [],
  chatHistory:{},
};

export const messangerSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChatBox: (state, action) => {
      if(!state.chatBoxes.find(chat=>chat.socketId ===action.payload.socketId)){
        state.chatBoxes = [...state.chatBoxes,action.payload];
      }
    },
    removeChatBox: (state, action) => {
      state.chatBoxes = state.chatBoxes.filter(chat=>chat.socketId !==action.payload);
    },
    addMessageStore: (state, action) => {
      if(state.chatHistory[action.payload.socketId]){
        state.chatHistory[action.payload.socketId].push(action.payload)
      }else{
        state.chatHistory[action.payload.socketId] = [action.payload]
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addChatBox,removeChatBox,addMessageStore } = messangerSlice.actions;

export default messangerSlice.reducer;
