import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App.tsx";
import { persistor, store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Provides the Redux store to the entire application */}
    <Provider store={store}>
      {/* Ensures the Redux state persists across page reloads */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
