// main entry point for application
import React from "react";
// import { createRoot } from 'react-dom/client';


// renders App component at root element of index.html
import ReactDOM from "react-dom";
import "./index.css";
// import "./media-queries.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
