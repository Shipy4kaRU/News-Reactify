import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNews: 0,
};

const currentNewsSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentNews: (state, action) => {
      state.currentNews = action.payload;
    },
  },
});

export const currentNewsSliceActions = currentNewsSlice.actions;
export default currentNewsSlice.reducer;
