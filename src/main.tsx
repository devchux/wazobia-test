import React from "react";
import { render } from "react-dom";
import App from "./App.tsx";
import "./assets/sass/index.scss";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
