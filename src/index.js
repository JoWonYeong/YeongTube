import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import './index.css'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </BrowserRouter>
);
