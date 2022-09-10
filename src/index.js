import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

function Main() {
  return (
    <div className="outerDiv">
      <h1 className="title">TicTacToe</h1>
      <BrowserRouter>
        <div className="main">
          <App />
        </div>
      </BrowserRouter>
    </div>
  );
}

let reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<Main />);
