import React from "react";
import ReactDOM from "react-dom/client";
import Apps from "./App.js";
import "./index.css";
import {store} from "./redux/store.js"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>
    <Provider store={store}>
      <Apps />
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);
