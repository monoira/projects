import { configureStore } from "@reduxjs/toolkit";
import { programReducer } from "./features/program/programSlice";

export const store = configureStore({
  reducer: {
    program: programReducer,
  },
});

// boilerplate. at the very bottom.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
