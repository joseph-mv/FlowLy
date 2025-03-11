import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from "./nodesSlice"; // Import slice

export const store = configureStore({
  reducer: {
    nodes: nodesReducer, // Add nodes slice to store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
