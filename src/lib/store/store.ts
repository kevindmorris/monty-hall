import { configureStore } from "@reduxjs/toolkit";
import { statisticsSlice } from "../slices";

const store = configureStore({
  reducer: {
    statistics: statisticsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
