import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer,persistStore  } from "redux-persist";

import userReducer from "./userSlice";
import nodesReducer from "./nodesSlice"; 

const persistConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    nodes: nodesReducer, // Handles node-related state management
    user:persistedUserReducer // Manages user authentication state
  },
});

/** Redux Persistor to persist and rehydrate store */
export const persistor = persistStore(store);

/**  Extracts the entire state type from the store for type safety.*/
export type RootState = ReturnType<typeof store.getState>;

/** Defines the type for dispatching actions within the application.*/
export type AppDispatch = typeof store.dispatch;
