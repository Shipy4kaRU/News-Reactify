import { configureStore } from "@reduxjs/toolkit";
import keywordsRedecer from "./keywordsSlice";

const store = configureStore({
  reducer: {
    keywords: keywordsRedecer,
  },
});

export default store;
