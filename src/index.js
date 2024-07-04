import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./output.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { NavbarProvider } from "./NavbarContext";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavbarProvider>
          <App />
        </NavbarProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
