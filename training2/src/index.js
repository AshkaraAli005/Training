import React from "react";
import ReactDOM from "react-dom/client";
import Apps from "./Apps.js";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Apps />
    </BrowserRouter>
  </React.StrictMode>
);
