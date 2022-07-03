import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface ChatState {
  value: string;
  status: "sent" | "recieved" | "none";
}

const initialState: ChatState = {
  value: "",
  status: "none",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
  },
});

export const { sendMessage } = chatSlice.actions;

export const selectChat = (state: RootState) => state.chat.value;

export default chatSlice.reducer;
