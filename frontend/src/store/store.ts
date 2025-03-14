import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from "./nodesSlice"; 
import storage from "redux-persist/lib/storage";
import { persistReducer,persistStore  } from "redux-persist";
import userReducer from "./userSlice";


const persistConfig = {
  key: "user",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    nodes: nodesReducer, // Add nodes slice to store
    user:persistedReducer
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
