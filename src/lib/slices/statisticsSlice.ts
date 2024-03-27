import { createSlice } from "@reduxjs/toolkit";

export interface State {
  attempts: number;
  wins: number;
  losses: number;
}

const initialState: State = {
  attempts: 0,
  wins: 0,
  losses: 0
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    win: (state) => {
      state.attempts += 1;
      state.wins += 1;
    },
    loss: (state) => {
      state.attempts += 1;
      state.losses += 1;
    },
    reset: (state) => {
      state.attempts = 0;
      state.wins = 0;
      state.losses = 0;
    }
  }
});

export const { win, loss, reset } = statisticsSlice.actions;

export default statisticsSlice.reducer;
