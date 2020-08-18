import React from "react";
import logo from "./logo.svg";
import "./App.css";
import osologo from "./static/img/OSOSIMS.jpg";

function App() {
  return (
    <div className="wrap">
      <div className="avatar">
        <img src={osologo} alt="ososims logo"></img>
      </div>
      <input type="text" placeholder="username" required></input>
      <div className="bar">
        <i></i>
      </div>
      <input type="password" placeholder="password" required></input>
      <a href="" className="forgot_link">
        forgot ?
      </a>
      <button onClick={}>Sign in</button>
    </div>
  );
}

export default App;
