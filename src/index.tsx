import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store, PersistGate, persistor } from "./@store/store";
import "./index.css";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
