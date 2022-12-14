import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Todo";
import FnCoin from "./coin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <FnCoin />
  </React.StrictMode>
);
