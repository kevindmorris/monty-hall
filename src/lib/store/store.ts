import { configureStore } from "@reduxjs/toolkit";
import { scoreSlice } from "../slices";

const store = configureStore({
  reducer: {
    score: scoreSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
