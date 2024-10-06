import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;

/* 🌟IMP RULES */
// create slice
// ---- name
// ---- initialState
// ---- reducers
// ------- functions to perform
// export function from actions of slice created (export it from action creator)
// export reducer from slice

// reducers contains functionality of functions inside it
