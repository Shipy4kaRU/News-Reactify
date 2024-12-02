import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keywords: "",
};

const keywordsSlice = createSlice({
  name: "keywords",
  initialState,
  reducers: {
    setKeywordsState: (state, action) => {
      state.keywords = action.payload;
    },
  },
});

export const keywordsSliceActions = keywordsSlice.actions;
export default keywordsSlice.reducer;
