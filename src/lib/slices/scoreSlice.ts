import { createSlice } from "@reduxjs/toolkit";

export interface State {
  wins: number;
  attempts: number;
}

const initialState: State = {
  wins: 0,
  attempts: 0
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    win: (state) => {
      state.wins += 1;
      state.attempts += 1;
    },
    lose: (state) => {
      state.attempts += 1;
    },
    reset: (state) => {
      state.wins = 0;
      state.attempts = 0;
    }
  }
});

export const { win, lose, reset } = scoreSlice.actions;

export default scoreSlice.reducer;
