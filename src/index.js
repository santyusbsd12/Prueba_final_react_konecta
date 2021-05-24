import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./Contexto/Contexto";
import  'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";



ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
