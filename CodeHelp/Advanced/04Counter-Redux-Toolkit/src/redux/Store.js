import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

export const Store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});

/* 🌟 IMP NOTES */
// configure store
// store contains slices inside reducers in the form of key, value pairs
