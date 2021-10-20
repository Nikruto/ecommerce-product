import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CardProvider } from "./context/cardContext";
import { LightboxProvider } from "./context/lightboxContext";

ReactDOM.render(
  <React.StrictMode>
    <CardProvider>
      <LightboxProvider>
        <App />
      </LightboxProvider>
    </CardProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
