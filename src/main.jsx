import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ExpiryProvider } from "./context/ExpiryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ExpiryProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ExpiryProvider>
);
