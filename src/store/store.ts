import { configureStore } from "@reduxjs/toolkit";
import keywordsRedecer from "./keywordsSlice";
import currentNewsReducer from "./currentNewsSlice";

const store = configureStore({
  reducer: {
    keywords: keywordsRedecer,
    currentNews: currentNewsReducer,
  },
});

export default store;
